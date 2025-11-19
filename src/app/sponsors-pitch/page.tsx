"use client";

import { useState } from "react";
import Link from "next/link";

export default function SponsorsPitch() {
    const [formData, setFormData] = useState({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
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
            const response = await fetch("/api/sponsor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    companyName: formData.companyName,
                    contactName: formData.contactName,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setSubmitted(true);
            setFormData({ companyName: "", contactName: "", email: "", phone: "", message: "" });

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
        <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white min-h-screen">
            {/* Header */}
            <header className="bg-slate-900 border-b border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <Link href="/" className="text-3xl font-bold hover:opacity-80 transition-opacity inline-block" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                        Rolling Slow <span style={{ color: '#e35e9f' }}>MEDIA</span>
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4 bg-slate-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                        Partner With Us
                    </h1>
                    <p className="text-xl text-gray-300 mb-4">
                        Sponsorship Opportunity for Rolling Slow Media
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Introduction */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                            Why This Event is Special
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-slate-700 p-8 rounded-lg border border-slate-600">
                                <div className="text-4xl mb-4">👥</div>
                                <h3 className="text-2xl font-bold mb-3">High-Footfall Audience</h3>
                                <p className="text-gray-300">
                                    Regent's Park welcomes thousands of tourists and locals every weekend — giving your brand access to a high-footfall, diverse audience.
                                </p>
                            </div>
                            <div className="bg-slate-700 p-8 rounded-lg border border-slate-600">
                                <div className="text-4xl mb-4">📱</div>
                                <h3 className="text-2xl font-bold mb-3">Digital Exposure</h3>
                                <p className="text-gray-300">
                                    Every event is professionally filmed and documented for YouTube, Instagram, and TikTok — adding ongoing digital exposure to your sponsorship.
                                </p>
                            </div>
                            <div className="bg-slate-700 p-8 rounded-lg border border-slate-600">
                                <div className="text-4xl mb-4">🏎️</div>
                                <h3 className="text-2xl font-bold mb-3">Premium Community</h3>
                                <p className="text-gray-300">
                                    We attract a loyal community of car enthusiasts, including owners of classic cars, supercars, and modern classics.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* What's Included */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                            What Sponsorship Includes
                        </h2>
                        <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-lg border border-red-500/30">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="text-green-400 text-2xl flex-shrink-0">✓</span>
                                    <span className="text-lg">QR code on every branded coffee cup linking directly to our sponsors page, driving engagement and brand awareness</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-green-400 text-2xl flex-shrink-0">✓</span>
                                    <span className="text-lg">Product placement in goodie bags (detailing products, discount cards, etc.)</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-green-400 text-2xl flex-shrink-0">✓</span>
                                    <span className="text-lg">Social media shout-outs and visibility in our event content throughout the year</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Product Showcase */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                            Your Brand Visibility
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Coffee Cup Placeholder */}
                            <div className="bg-slate-700 rounded-lg overflow-hidden border border-slate-600">
                                <div className="aspect-square bg-slate-600 flex items-center justify-center relative">
                                    <img 
                                        src="/images/coffee-cup-example.jpg" 
                                        alt="Coffee Cup with QR Code" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">Branded Coffee Cups</h3>
                                    <p className="text-gray-300">
                                        QR code on every coffee cup linking directly to our sponsors page, driving engagement and brand awareness.
                                    </p>
                                </div>
                            </div>

                            {/* Tote Bag Placeholder */}
                            <div className="bg-slate-700 rounded-lg overflow-hidden border border-slate-600">
                                <div className="aspect-square bg-slate-600 flex items-center justify-center relative">
                                    <img 
                                        src="/images/tote-bag-example.jpg" 
                                        alt="Tote Bag with Logo" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">Branded Tote Bags</h3>
                                    <p className="text-gray-300">
                                        Your branding on premium tote bags included in goodie bags at every event.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                            Interested? Let's Connect
                        </h2>
                        <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-8 rounded-lg border border-slate-600 max-w-2xl mx-auto">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="companyName"
                                        className="block text-sm font-semibold mb-2"
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="contactName"
                                        className="block text-sm font-semibold mb-2"
                                    >
                                        Contact Name
                                    </label>
                                    <input
                                        type="text"
                                        id="contactName"
                                        name="contactName"
                                        value={formData.contactName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
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
                                            htmlFor="phone"
                                            className="block text-sm font-semibold mb-2"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                            placeholder="Your phone number"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold mb-2"
                                    >
                                        Additional Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                        placeholder="Tell us about your interest or any questions you have..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? "Sending..." : "Send Sponsorship Inquiry"}
                                </button>

                                {error && (
                                    <div className="p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-400 text-sm">
                                        ✗ {error}
                                    </div>
                                )}

                                {submitted && (
                                    <div className="p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400 text-sm">
                                        ✓ Thank you! We&apos;ll be in touch soon to discuss this exciting opportunity.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* CTA Back to Sponsors */}
                    <div className="text-center">
                        <Link
                            href="/#sponsors"
                            className="inline-block px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors"
                        >
                            Back to Sponsors
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
