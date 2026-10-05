"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Send, MapPin, Mail, Phone, ShieldCheck } from "lucide-react";

export default function Footer({ onOpenMembership }: { onOpenMembership?: () => void }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [optIn, setOptIn] = useState(true);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#030303] text-white pt-24 pb-16 border-t border-white/10 relative overflow-hidden">
      {/* Background Dot Texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          {/* Brand Info & Corporate Entity */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-black">
                <Image
                  src="/images/logo.jpg"
                  alt="CultureHaus"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl tracking-tight text-white flex items-baseline">
                  <span className="font-brand-serif italic font-medium pr-1 text-3xl">culture</span>
                  <span className="font-brand-sans font-black tracking-tight text-2xl">haus</span>
                  <span className="text-[10px] ml-1 text-neutral-400">™</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase mt-0.5">
                  Where Culture Lives.
                </span>
              </div>
            </Link>

            <p className="text-sm text-neutral-400 leading-relaxed font-light max-w-md mb-6">
              A private and public cultural ecosystem honoring avant-garde art, acoustic architecture, and curated exhibitions. Managed & operated by <strong className="text-white font-medium">A N ENTERTAINMENT PRIVATE LIMITED</strong>.
            </p>

            {/* Official Registered Office Address Box */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
              <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-300 uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
                <span className="font-semibold text-white">Registered Office Address:</span>
              </div>
              <p className="text-xs text-neutral-300 font-mono leading-relaxed">
                9, 905,84, Kalpvruksha CHS, Pokharan Road Number 2, Kalpavruksha Apartment In Gate, Thane West, Thane, Thane, Maharashtra, 400610
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-widest text-neutral-300 font-mono">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Culture Driven</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Community Focused</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Creativity Unleashed</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 col-span-1">
            <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-mono block mb-5">
              Exploration
            </span>
            <ul className="space-y-3 text-xs uppercase tracking-wider text-neutral-300">
              <li>
                <Link href="/#philosophy" className="hover:text-white transition-colors">Manifesto</Link>
              </li>
              <li>
                <Link href="/#events" className="hover:text-white transition-colors">Exhibitions (India)</Link>
              </li>
              <li>
                <Link href="/#journal" className="hover:text-white transition-colors">The Journal</Link>
              </li>
              <li>
                <Link href="/#spaces" className="hover:text-white transition-colors">Sanctuaries</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors text-white font-semibold">
                  Contact Us
                </Link>
              </li>
              {onOpenMembership && (
                <li>
                  <button onClick={onOpenMembership} className="hover:text-white transition-colors text-left uppercase">
                    Apply for Membership
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="lg:col-span-2 col-span-1">
            <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-mono block mb-5">
              Legal & Trust
            </span>
            <ul className="space-y-3 text-xs uppercase tracking-wider text-neutral-300">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Terms & Conditions</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Contact With Opt-In</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </Link>
              </li>
              <li className="pt-2 text-[11px] font-mono text-neutral-500 normal-case">
                Jurisdiction: Thane & Mumbai, Maharashtra
              </li>
            </ul>
          </div>

          {/* Newsletter Dispatch with Opt-In */}
          <div className="lg:col-span-3">
            <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-mono block mb-2">
              Cultural Dispatches & Drops
            </span>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed font-light">
              Receive confidential exhibition invites, artist residency updates, and physical catalog announcements across India.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter official email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 rounded-full bg-white/5 border border-white/20 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                <label className="flex items-start gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={optIn}
                    onChange={(e) => setOptIn(e.target.checked)}
                    className="mt-0.5 w-3.5 h-3.5 rounded bg-black border-white/30 text-white focus:ring-0 accent-white shrink-0"
                  />
                  <span className="text-[10px] text-neutral-400 leading-tight">
                    I opt in to receive updates from A N ENTERTAINMENT PRIVATE LIMITED.
                  </span>
                </label>
              </form>
            ) : (
              <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/20 text-xs text-neutral-200 flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subscription archived for {email}.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Banner Typography */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 font-mono text-center sm:text-left">
            <span className="font-bold text-white tracking-wider">
              COPYRIGHT: © 2026 A N ENTERTAINMENT PRIVATE LIMITED
            </span>
            <span className="hidden sm:inline">•</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
