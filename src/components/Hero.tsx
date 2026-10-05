"use client";

import React from "react";
import Image from "next/image";
import { Globe, Sparkles, Heart, ArrowDown, Calendar, Users, Eye } from "lucide-react";

interface HeroProps {
  onOpenMembership: () => void;
  onExploreEvents: () => void;
}

export default function Hero({ onOpenMembership, onExploreEvents }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      {/* Background Ambience: Silk waves & glow */}
      <div className="absolute inset-0 bg-silk-sheen pointer-events-none" />

      {/* Dot Matrix Halftone Panels replicating reference artwork */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Giant Monogram Typographic Framing: 'C' and 'h' as in reference image */}
      <div className="absolute -left-6 sm:left-4 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="font-brand-serif italic font-light text-[140px] sm:text-[220px] md:text-[320px] lg:text-[420px] leading-none text-white/[0.04] transition-all hover:text-white/[0.07] block drop-shadow-2xl">
          C
        </span>
      </div>

      <div className="absolute -right-6 sm:right-4 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="font-brand-sans font-black text-[140px] sm:text-[220px] md:text-[320px] lg:text-[420px] leading-none text-white/[0.04] transition-all hover:text-white/[0.07] block drop-shadow-2xl">
          h
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Curated Season Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-300 font-medium">
            Season IV : Global Cultural Residency Active
          </span>
        </div>

        {/* The Exact Brand Centerpiece Identity */}
        <div className="relative my-4 select-none group">
          <div className="absolute -inset-8 bg-radial from-white/10 to-transparent blur-2xl opacity-60 pointer-events-none" />
          
          <div className="flex flex-col items-center justify-center">
            {/* "culture" in refined serif italic */}
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[130px] font-brand-serif italic font-normal tracking-tight text-white text-glow leading-none">
              culture
            </h1>
            
            {/* "haus" in heavy sans-serif with TM */}
            <div className="flex items-baseline -mt-3 sm:-mt-5 md:-mt-8">
              <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[130px] font-brand-sans font-black tracking-tighter text-white leading-none">
                haus
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl text-neutral-400 font-sans font-light ml-1 sm:ml-2">
                ™
              </span>
            </div>
          </div>

          {/* Underline separator */}
          <div className="w-24 sm:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-4 sm:mt-6 mb-3 sm:mb-4" />

          {/* "Where Culture Lives." Subtitle */}
          <p className="text-lg sm:text-2xl md:text-3xl tracking-wide font-light text-neutral-200">
            Where Culture Lives.
          </p>
        </div>

        {/* Reference Artwork Three Pillars Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-3xl mt-10 mb-12">
          {/* Pillar 1 */}
          <div className="group flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.05] transition-all">
            <div className="p-2 rounded-lg bg-white/5 text-neutral-300 group-hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                Culture Driven
              </span>
              <span className="block text-[10px] text-neutral-400 uppercase tracking-widest">
                Avant-Garde & Legacy
              </span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="group flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.05] transition-all">
            <div className="p-2 rounded-lg bg-white/5 text-neutral-300 group-hover:text-white transition-colors">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                Community Focused
              </span>
              <span className="block text-[10px] text-neutral-400 uppercase tracking-widest">
                Global Creator Network
              </span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="group flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.05] transition-all">
            <div className="p-2 rounded-lg bg-white/5 text-neutral-300 group-hover:text-white transition-colors">
              <Heart className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                Creativity Unleashed
              </span>
              <span className="block text-[10px] text-neutral-400 uppercase tracking-widest">
                Pure Boundary Push
              </span>
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreEvents}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold bg-white text-black hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center justify-center gap-3"
          >
            <Calendar className="w-4 h-4" />
            <span>Explore Curated Events</span>
          </button>

          <button
            onClick={onOpenMembership}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold border border-white/20 hover:border-white/60 bg-white/[0.03] hover:bg-white/[0.08] text-white transition-all flex items-center justify-center gap-3"
          >
            <Users className="w-4 h-4" />
            <span>Apply For Membership</span>
          </button>
        </div>

        {/* Reference Banner Live Visual Preview Card */}
        <div className="w-full max-w-4xl mt-16 rounded-2xl overflow-hidden border border-white/15 bg-black/80 relative shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
          <div className="relative w-full h-[180px] sm:h-[260px] md:h-[320px]">
            <Image
              src="/images/banner.jpg"
              alt="CultureHaus Banner Artwork"
              fill
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              priority
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
          </div>
          
          <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-[#0c0c0c]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-neutral-300 font-medium">
                Official Visual Identity & Sanctuary Banner
              </span>
            </div>
            <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" /> 48.2k Monthly Visitors
              </span>
              <span>Thane • Mumbai • New Delhi • Bengaluru</span>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a
          href="#philosophy"
          className="mt-14 flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Read The Manifesto</span>
          <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
