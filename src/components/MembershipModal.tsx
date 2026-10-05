"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Sparkles, Check, Shield, Cpu, ArrowRight } from "lucide-react";

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MembershipModal({ isOpen, onClose }: MembershipModalProps) {
  const [selectedTier, setSelectedTier] = useState<"Resident" | "Observer" | "Patron">("Resident");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [discipline, setDiscipline] = useState("Architecture & Spatial");
  const [city, setCity] = useState("Tokyo");
  const [portfolio, setPortfolio] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0c0c0c] border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors z-20"
          aria-label="Close membership modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="max-w-xl mb-8">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-2">
                Membership Protocol • Season 04
              </span>
              <h2 className="text-3xl sm:text-4xl font-brand-serif italic text-white mb-2">
                Join The CultureHaus Collective
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                CultureHaus is an uncompromising assembly of artists, architects, sonic pioneers, and patrons.
                Select your path and generate your resident pass.
              </p>
            </div>

            {/* Tier Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                {
                  id: "Observer",
                  label: "Observer",
                  tag: "Open Access",
                  desc: "Digital dispatches, public drop RSVPs, and editorial library access.",
                },
                {
                  id: "Resident",
                  label: "Resident Creator",
                  tag: "Curated Admission",
                  desc: "Full 24/7 sanctuary keys, production equipment, exhibition grants.",
                },
                {
                  id: "Patron",
                  label: "Fellow Patron",
                  tag: "Private Salon",
                  desc: "Curatorial board seat, limited monograph archives, private salons.",
                },
              ].map((tier) => {
                const isSelected = selectedTier === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(tier.id as "Resident" | "Observer" | "Patron")}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "bg-white text-black border-white shadow-lg"
                        : "bg-white/[0.03] border-white/10 text-neutral-300 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs uppercase font-bold tracking-wider">{tier.label}</span>
                      <span
                        className={`text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded ${
                          isSelected ? "bg-black text-white" : "bg-white/10 text-neutral-300"
                        }`}
                      >
                        {tier.tag}
                      </span>
                    </div>
                    <p className={`text-[11px] leading-relaxed mt-1 ${isSelected ? "text-neutral-800" : "text-neutral-400"}`}>
                      {tier.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Split Form & Live Pass Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form */}
              <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                      Your Name / Moniker *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kenzo Sterling"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. kenzo@haus.space"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                      Creative Discipline
                    </label>
                    <select
                      value={discipline}
                      onChange={(e) => setDiscipline(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-white/15 text-white text-sm focus:outline-none focus:border-white transition-colors"
                    >
                      <option>Architecture & Spatial</option>
                      <option>Sound & Modular Synthesis</option>
                      <option>Haute Fashion & Textiles</option>
                      <option>Fine Art & Sculpture</option>
                      <option>Philosophy & Critical Theory</option>
                      <option>Creative Technology / AI</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                      Primary City Chapter
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-white/15 text-white text-sm focus:outline-none focus:border-white transition-colors"
                    >
                      <option>Thane (Pokharan Rd 2 HQ)</option>
                      <option>Mumbai (Ballard Estate / Kala Ghoda)</option>
                      <option>New Delhi (Lodhi)</option>
                      <option>Bengaluru (Indiranagar)</option>
                      <option>Tokyo (Shibuya)</option>
                      <option>Berlin (Kreuzberg)</option>
                      <option>London (Shoreditch)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                    Portfolio / Soundcloud / Instagram / Website
                  </label>
                  <input
                    type="url"
                    placeholder="https://"
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Explicit Opt-in Checkbox */}
                <label className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 w-3.5 h-3.5 rounded bg-black border-white/30 text-white focus:ring-0 accent-white shrink-0"
                  />
                  <span className="text-[11px] text-neutral-300 leading-tight">
                    I opt in to receive fellowship invitations, event dispatches, and updates from <strong>A N ENTERTAINMENT PRIVATE LIMITED</strong>.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full mt-2 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-white text-black hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Submit Membership Dossier</span>
                </button>
              </form>

              {/* Live Interactive Black Titanium Pass Rendering */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono mb-3 block">
                  Live Holographic Pass Preview
                </span>

                <div className="w-full max-w-sm rounded-2xl p-6 bg-gradient-to-br from-[#1c1c1c] via-[#090909] to-[#000000] border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden group select-none aspect-[1.58/1] flex flex-col justify-between">
                  {/* Subtle Sheen reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                  {/* Top card bar */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/30 bg-black">
                        <Image
                          src="/images/logo.jpg"
                          alt="CultureHaus"
                          width={24}
                          height={24}
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs tracking-tight text-white flex items-baseline">
                        <span className="font-brand-serif italic font-medium pr-0.5">culture</span>
                        <span className="font-brand-sans font-bold">haus</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-neutral-400 font-mono">
                      <Cpu className="w-3.5 h-3.5 text-neutral-300" />
                      <span>{selectedTier.toUpperCase()} PASS</span>
                    </div>
                  </div>

                  {/* Holographic Chip */}
                  <div className="relative z-10 my-1">
                    <div className="w-10 h-7 rounded bg-gradient-to-tr from-neutral-400 via-neutral-200 to-neutral-500 border border-neutral-300 flex items-center justify-center opacity-85 shadow-inner">
                      <div className="w-6 h-4 border border-black/30 rounded-sm" />
                    </div>
                  </div>

                  {/* Cardholder Details */}
                  <div className="relative z-10 pt-2 border-t border-white/10 flex justify-between items-end">
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-neutral-400 font-mono">
                        MEMBER
                      </div>
                      <div className="text-sm font-bold uppercase tracking-wider text-white font-brand-sans">
                        {name.trim() ? name : "ANONYMOUS FELLOW"}
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono">
                        {discipline} • {city}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[8px] uppercase tracking-widest text-neutral-500 font-mono">
                        ID NUMBER
                      </div>
                      <div className="text-[11px] font-mono text-neutral-300">
                        CH-{selectedTier.slice(0, 3).toUpperCase()}-2026
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center text-[10px] text-neutral-500 max-w-xs font-mono">
                  Where Culture Lives • Certified cryptographic membership token
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Submission Completed Screen */
          <div className="text-center py-10 max-w-lg mx-auto">
            <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6 text-white">
              <Check className="w-10 h-10 text-white" />
            </div>

            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-2">
              Dossier Transmitted
            </span>

            <h3 className="text-3xl font-brand-serif italic text-white mb-3">
              Welcome to the Threshold, {name}.
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-8">
              Your application for <strong className="text-white">{selectedTier} Membership</strong> ({discipline}, {city}) has been archived for the Curatorial Council. A private invitation link and access briefing has been sent to <strong className="text-white">{email}</strong>.
            </p>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-white text-black hover:bg-neutral-200 transition-all"
            >
              Enter The CultureHaus
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
