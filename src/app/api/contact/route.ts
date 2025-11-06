import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getClientIP(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0] || 
         request.headers.get('x-real-ip') || 
         'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3; // Max 3 submissions per 15 minutes

  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  
  if (record.count >= maxRequests) {
    return true;
  }
  
  record.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, honeypot, formStartTime } = await request.json();

    // Rate limiting check
    const clientIP = getClientIP(request);
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait before submitting again.' },
        { status: 429 }
      );
    }

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Honeypot check
    if (honeypot) {
      console.log('Spam detected via honeypot:', { ip: clientIP, honeypot });
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // Time-based check (form should take at least 3 seconds to fill)
    if (formStartTime && (Date.now() - formStartTime < 3000)) {
      console.log('Spam detected - too fast:', { ip: clientIP, timeTaken: Date.now() - formStartTime });
      return NextResponse.json(
        { error: 'Form submitted too quickly' },
        { status: 400 }
      );
    }

    // Content validation
    const suspiciousPatterns = [
      /(.)\1{10,}/, // Repeated characters
      /[A-Z]{20,}/, // Too many consecutive capitals
      /(http|https):\/\/[^\s]+/gi, // Multiple URLs
    ];

    const textToCheck = `${name} ${message} ${subject}`;
    const urlMatches = textToCheck.match(/(http|https):\/\/[^\s]+/gi);
    
    if (urlMatches && urlMatches.length > 1) {
      console.log('Spam detected - multiple URLs:', { ip: clientIP, urls: urlMatches.length });
      return NextResponse.json(
        { error: 'Multiple links not allowed' },
        { status: 400 }
      );
    }

    for (const pattern of suspiciousPatterns.slice(0, 2)) { // Skip URL check as handled above
      if (pattern.test(textToCheck)) {
        console.log('Spam detected - suspicious pattern:', { ip: clientIP, pattern: pattern.toString() });
        return NextResponse.json(
          { error: 'Suspicious content detected' },
          { status: 400 }
        );
      }
    }

    const result = await resend.emails.send({
      from: 'Rolling Slow Media <onboarding@resend.dev>',
      to: 'rollinslowsocial@gmail.com',
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small><strong>IP:</strong> ${clientIP}</small></p>
        <p><small><strong>Submitted:</strong> ${new Date().toISOString()}</small></p>
      `,
    });

    if (result.error) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
