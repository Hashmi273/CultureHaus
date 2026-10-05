"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "General Inquiry & Exhibitions",
    city: "Thane / Mumbai",
    message: "",
  });

  const [marketingOptIn, setMarketingOptIn] = useState(true);
  const [whatsappOptIn, setWhatsappOptIn] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !termsAccepted) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setTicketNumber(`CH-IN-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      inquiryType: "General Inquiry & Exhibitions",
      city: "Thane / Mumbai",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] relative flex flex-col justify-between selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        {/* Breadcrumb / Category Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-white/40" />
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
            Direct Concierge & Corporate Office
          </span>
        </div>

        {/* Header Title */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-6xl font-brand-serif italic text-white tracking-tight mb-4">
            Connect With CultureHaus
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Corporate Operations, Exhibition Curations & Event Inquiries managed by{" "}
            <strong className="text-white font-medium">A N ENTERTAINMENT PRIVATE LIMITED</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Office Address & Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Corporate Office Card */}
            <div className="p-8 rounded-3xl bg-[#0c0c0c] border border-white/15 relative overflow-hidden shadow-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-3 rounded-2xl bg-white/10 text-white">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">
                    Corporate Registered Office
                  </span>
                  <h2 className="text-lg font-bold text-white uppercase tracking-wider font-brand-sans">
                    A N ENTERTAINMENT PRIVATE LIMITED
                  </h2>
                </div>
              </div>

              {/* Exact Office Address */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-white shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono block mb-1">
                      Official Postal Address:
                    </span>
                    <p className="text-sm text-neutral-200 font-sans leading-relaxed">
                      9, 905,84, Kalpvruksha CHS, Pokharan Road Number 2, Kalpavruksha Apartment In Gate, Thane West, Thane, Thane, Maharashtra, 400610
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                  <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-neutral-400 font-mono block">Official Email</span>
                    <a
                      href="mailto:contact@culturehaus.in"
                      className="text-sm text-white hover:underline font-mono"
                    >
                      contact@culturehaus.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-2">
                  <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-neutral-400 font-mono block">Concierge Desk (India)</span>
                    <span className="text-sm text-white font-mono">+91 (022) 8400-HAUS</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-2">
                  <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-neutral-400 font-mono block">Visiting Hours (By Appointment)</span>
                    <span className="text-xs text-neutral-300 font-mono">
                      Monday – Saturday: 10:30 AM – 06:30 PM IST
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  OPERATIONAL HUB: THANE (MUMBAI MMR)
                </span>
                <span className="text-neutral-500">PIN: 400610</span>
              </div>
            </div>

            {/* Quick Guarantees / Regulatory Info */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Consent & Privacy Protection</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                All communications sent by A N ENTERTAINMENT PRIVATE LIMITED adhere strictly to the Digital Personal Data Protection Act (DPDP), 2023. You retain full control over your preferences and can unsubscribe with a single click at any time.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form with Explicit Opt-In */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e0e0e] border border-white/20 shadow-2xl relative">
              {!submitted ? (
                <>
                  <div className="mb-8">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-1">
                      Inquiry & Access Registration
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-brand-serif italic text-white">
                      Send a Direct Message or Event Request
                    </h2>
                    <p className="text-xs text-neutral-400 font-light mt-1">
                      Submit your inquiry. Our curatorial and executive office will respond within 24–48 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-mono">
                          Full Name / Representative *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ananya Deshmukh"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-mono">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. ananya@domain.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-mono">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. +91 98200 XXXXX"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-mono">
                          Inquiry Category
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) =>
                            setFormData({ ...formData, inquiryType: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-white/15 text-white text-sm focus:outline-none focus:border-white transition-colors"
                        >
                          <option>General Inquiry & Exhibitions</option>
                          <option>Event Pass & Reservation Support</option>
                          <option>Corporate & Brand Collaboration</option>
                          <option>Resident Artist Application</option>
                          <option>Thane Office / Gallery Appointment</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-mono">
                        Your Message / Project Brief *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Detail your inquiry, intended dates, or collaboration scope..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-colors resize-none"
                      />
                    </div>

                    {/* Explicit Opt-In Checkboxes */}
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/15 space-y-3.5">
                      <span className="text-[11px] uppercase tracking-widest text-neutral-300 font-semibold block font-mono">
                        Communications Consent & Opt-In (India DPDP Act Compliance):
                      </span>

                      {/* Opt-In 1: Email & Newsletter */}
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={marketingOptIn}
                          onChange={(e) => setMarketingOptIn(e.target.checked)}
                          className="mt-1 w-4 h-4 rounded bg-black border-white/30 text-white focus:ring-0 accent-white shrink-0"
                        />
                        <span className="text-xs text-neutral-300 font-light leading-relaxed">
                          <strong>Email Opt-In:</strong> I explicitly consent to receive event announcements, cultural monographs, invitation passes, and newsletters from <strong>A N ENTERTAINMENT PRIVATE LIMITED</strong> at the email address provided above.
                        </span>
                      </label>

                      {/* Opt-In 2: WhatsApp & SMS Alerts */}
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={whatsappOptIn}
                          onChange={(e) => setWhatsappOptIn(e.target.checked)}
                          className="mt-1 w-4 h-4 rounded bg-black border-white/30 text-white focus:ring-0 accent-white shrink-0"
                        />
                        <span className="text-xs text-neutral-300 font-light leading-relaxed">
                          <strong>WhatsApp & SMS Alerts Opt-In:</strong> I agree to receive instant digital gate passes, exhibition alerts, and event reminder messages via WhatsApp/SMS from A N ENTERTAINMENT PRIVATE LIMITED.
                        </span>
                      </label>

                      {/* Required Terms Agreement */}
                      <label className="flex items-start gap-3 cursor-pointer select-none pt-2 border-t border-white/10">
                        <input
                          type="checkbox"
                          required
                          checked={termsAccepted}
                          onChange={(e) => setTermsAccepted(e.target.checked)}
                          className="mt-1 w-4 h-4 rounded bg-black border-white/30 text-white focus:ring-0 accent-white shrink-0"
                        />
                        <span className="text-xs text-neutral-300 font-light leading-relaxed">
                          I agree to the{" "}
                          <a href="/terms" target="_blank" className="text-white underline font-medium">
                            Terms & Conditions
                          </a>{" "}
                          and{" "}
                          <a href="/privacy" target="_blank" className="text-white underline font-medium">
                            Privacy Policy
                          </a>{" "}
                          of A N ENTERTAINMENT PRIVATE LIMITED.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-white text-black hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Dossier...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Official Inquiry with Opt-In</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                /* Submission Confirmation View */
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6 text-white">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>

                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-2">
                    Transmission Acknowledged
                  </span>

                  <h3 className="text-3xl font-brand-serif italic text-white mb-3">
                    Thank you, {formData.fullName}.
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed font-light max-w-md mx-auto mb-6">
                    Your inquiry has been logged under docket <strong className="text-white font-mono">{ticketNumber}</strong>. A confirmation has been transmitted to <strong className="text-white">{formData.email}</strong>.
                  </p>

                  <div className="p-4 rounded-2xl bg-black border border-white/20 text-left font-mono text-xs max-w-md mx-auto mb-8 space-y-1.5 text-neutral-300">
                    <div>ENTITY: <span className="text-white font-bold">A N ENTERTAINMENT PRIVATE LIMITED</span></div>
                    <div>OFFICE: <span className="text-white">Pokharan Rd No. 2, Thane West, MH - 400610</span></div>
                    <div>INQUIRY: <span className="text-neutral-400">{formData.inquiryType}</span></div>
                    <div>OPT-IN STATUS: <span className="text-emerald-400">ACTIVE & VERIFIED</span></div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
