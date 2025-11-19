import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple rate limiting for sponsor form (less aggressive)
const sponsorRateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getClientIP(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0] || 
         request.headers.get('x-real-ip') || 
         'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes (less restrictive)
  const maxRequests = 5; // Max 5 submissions per 10 minutes (more lenient)

  const record = sponsorRateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    sponsorRateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
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
    const { companyName, contactName, email, phone, message } = await request.json();

    // Rate limiting check (more lenient for sponsors)
    const clientIP = getClientIP(request);
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait before submitting again.' },
        { status: 429 }
      );
    }

    // Basic validation only
    if (!companyName || !contactName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: 'Rolling Slow Media <onboarding@resend.dev>',
      to: 'rollinslowsocial@gmail.com',
      replyTo: email,
      subject: `Sponsorship Inquiry from ${companyName}`,
      html: `
        <h2>New Sponsorship Inquiry</h2>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small><strong>IP:</strong> ${clientIP}</small></p>
        <p><small><strong>Submitted:</strong> ${new Date().toISOString()}</small></p>
        <p><small><strong>Form Type:</strong> Sponsorship Inquiry</small></p>
      `,
    });

    if (result.error) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Sponsorship inquiry sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Sponsor form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}