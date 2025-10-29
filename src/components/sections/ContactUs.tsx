"use client";

import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError("");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setSubmitted(true);
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset the success message after 5 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 bg-slate-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-4 text-center text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                    Get in Touch
                </h2>
                <p className="text-gray-400 text-center mb-12">
                    Have questions? We'd love to hear from you.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-red-500 text-xl">📧</span>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <a
                                            href="mailto:contact@rollingsmedia.com"
                                            className="text-white hover:text-red-400 transition-colors"
                                        >
                                            contact@rollingsmedia.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-red-500 text-xl">📱</span>
                                    <div>
                                        <p className="text-gray-400 text-sm">Phone</p>
                                        <a
                                            href="tel:+1234567890"
                                            className="text-white hover:text-red-400 transition-colors"
                                        >
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.youtube.com/@RollingSlowMedia/videos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                                    title="YouTube"
                                >
                                    <img src="/icons/youtube.svg" alt="YouTube" className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.instagram.com/rollingslowmedia/#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                                    title="Instagram"
                                >
                                    <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@rollinslowmedia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                                    title="TikTok"
                                >
                                    <img src="/icons/tiktok.svg" alt="TikTok" className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://wa.me/?text=Rolling%20Slow%20Media"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                                    title="WhatsApp"
                                >
                                    <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-8 rounded-lg border border-slate-600">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-semibold mb-2"
                                >
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="sponsorship">Sponsorship Inquiry</option>
                                    <option value="collaboration">Collaboration</option>
                                    <option value="press">Press Inquiry</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? "Sending..." : "Send Message"}
                            </button>

                            {error && (
                                <div className="p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-400 text-sm">
                                    ✗ {error}
                                </div>
                            )}

                            {submitted && (
                                <div className="p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400 text-sm">
                                    ✓ Thank you! Your message has been sent successfully. We&apos;ll
                                    get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-slate-700 text-center text-gray-400">
                    <p>
                        &copy; 2025 Rolling Slow Media. All rights reserved. | Powered by
                        Next.js
                    </p>
                </div>
            </div>
        </section>
    );
}
