"use client";

import React, { useState } from "react";
import { Compass, Sparkles, Flame, ShieldCheck, ArrowRight, Layers } from "lucide-react";

export default function PhilosophySection() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "culture-driven",
      title: "Culture Driven",
      subtitle: "Authenticity & Heritage",
      icon: Compass,
      quote: "Culture is not an algorithm. It is lived, breathed, and carved by hands unafraid of silence.",
      description:
        "CultureHaus rejects ephemeral digital noise in favor of lasting cultural gravitas. We archive subcultures, elevate underground sonic movements, and construct sanctuaries where physical design and avant-garde thinking collide.",
      deliverables: [
        "Bi-annual Physical Monograph & Art Books",
        "Analog Sound Archives & Master Recordings",
        "Subculture Architectural Residencies",
      ],
    },
    {
      id: "community-focused",
      title: "Community Focused",
      subtitle: "Patronage & Intimacy",
      icon: Sparkles,
      quote: "True brilliance requires an echo chamber of rigor, constructive tension, and deep camaraderie.",
      description:
        "We are a decentralized brotherhood and sisterhood of architects, musicians, visual artists, and thinkers. Membership is not bought—it is earned through creative integrity and commitment to collective elevation.",
      deliverables: [
        "Invitation-only Monthly Salons in 6 Capitals",
        "Peer Critique Circles & Mentorship Exchanges",
        "Global Haus Pass Reciprocal Club Access",
      ],
    },
    {
      id: "creativity-unleashed",
      title: "Creativity Unleashed",
      subtitle: "Zero Compromise",
      icon: Flame,
      quote: "When commercial constraints dissolve, the purest form of human imagination emerges.",
      description:
        "We fund, exhibit, and preserve works deemed too radical for conventional galleries or corporate brands. CultureHaus provides creative autonomy backed by direct patron micro-grants and production facilities.",
      deliverables: [
        "Unrestricted Creative Production Grants",
        "Immersive Audiovisual Spatial Exhibitions",
        "Limited-Run Archival Physical Drops",
      ],
    },
  ];

  return (
    <section id="philosophy" className="py-28 bg-[#090909] relative border-t border-b border-white/[0.08]">
      {/* Background Matrix Grain */}
      <div className="absolute inset-0 bg-dot-grid-fine opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-white/40" />
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
              The CultureHaus Manifesto
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-brand-serif italic text-white leading-tight">
            We build monuments for the ideas that refuse to conform.
          </h2>
          <p className="mt-6 text-neutral-400 text-base sm:text-lg leading-relaxed font-light">
            Founded on the principle that genuine cultural revolutions originate in intimate circles,
            <span className="text-white font-medium"> CultureHaus™</span> stands as an enduring sanctuary
            for the world’s most relentless creative visionaries.
          </p>
        </div>

        {/* Interactive Pillar Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activeTab === idx;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? "bg-white/[0.08] border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl ${
                          isSelected ? "bg-white text-black" : "bg-white/5 text-neutral-400"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold uppercase tracking-wider text-white">
                          {pillar.title}
                        </h3>
                        <span className="text-xs text-neutral-400 tracking-wider">
                          {pillar.subtitle}
                        </span>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-white translate-x-1" : "text-neutral-400"
                      }`}
                    />
                  </div>
                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-white/10 text-xs text-neutral-300 font-light leading-relaxed">
                      {pillar.quote}
                    </div>
                  )}
                </button>
              );
            })}

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10 text-center">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="block text-2xl font-black text-white font-brand-sans">12</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400">Sanctuaries</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="block text-2xl font-black text-white font-brand-sans">140+</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400">Exhibitions</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="block text-2xl font-black text-white font-brand-sans">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400">Independent</span>
              </div>
            </div>
          </div>

          {/* Active Pillar Showcase Panel */}
          <div className="lg:col-span-7 bg-[#0f0f0f] border border-white/15 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 text-white/[0.03] select-none pointer-events-none">
              <Layers className="w-56 h-56" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-white mb-6">
                <span>Core Pillar 0{activeTab + 1}</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-brand-serif italic text-white mb-4">
                &ldquo;{pillars[activeTab].quote}&rdquo;
              </h4>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
                {pillars[activeTab].description}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                  Key Directives & Output:
                </span>
                {pillars[activeTab].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-neutral-200">
                    <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
