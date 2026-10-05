"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenMembership?: () => void;
  isAudioPlaying?: boolean;
  toggleAudio?: () => void;
}

export default function Navbar({
  onOpenMembership,
  isAudioPlaying = false,
  toggleAudio,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#070707]/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 bg-black flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/images/logo.jpg"
              alt="CultureHaus Logo"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl tracking-tight text-white flex items-baseline">
              <span className="font-brand-serif italic font-medium pr-1 text-2xl">culture</span>
              <span className="font-brand-sans font-black tracking-tighter text-xl">haus</span>
              <span className="text-[9px] font-sans ml-0.5 text-neutral-400">®</span>
            </span>
            <span className="text-[9px] tracking-[0.22em] text-neutral-400 uppercase font-sans mt-0.5">
              Where Culture Lives
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.16em] text-neutral-300 font-medium">
          <Link href="/#philosophy" className="hover:text-white transition-colors">
            Manifesto
          </Link>
          <Link href="/#events" className="hover:text-white transition-colors">
            Exhibitions (India)
          </Link>
          <Link href="/#journal" className="hover:text-white transition-colors">
            The Journal
          </Link>
          <Link href="/#spaces" className="hover:text-white transition-colors">
            Sanctuaries
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors text-white font-semibold flex items-center gap-1">
            <span>Contact</span>
          </Link>
          <Link href="/terms" className="hover:text-neutral-400 text-neutral-500 transition-colors text-[11px]">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-neutral-400 text-neutral-500 transition-colors text-[11px]">
            Privacy
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Ambient Soundscape Toggle */}
          {toggleAudio && (
            <button
              onClick={toggleAudio}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs uppercase tracking-wider border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-all bg-white/[0.03]"
              title={isAudioPlaying ? "Mute ambient gallery soundscape" : "Play ambient gallery soundscape"}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
                  <span className="text-[10px] text-white">Audio: On</span>
                  <span className="flex gap-0.5 items-end h-2.5">
                    <span className="w-0.5 h-2 bg-white animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-0.5 h-3 bg-white animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-0.5 h-1.5 bg-white animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-[10px] text-neutral-400">Audio: Off</span>
                </>
              )}
            </button>
          )}

          {/* Apply / Join CTA Button */}
          {onOpenMembership ? (
            <button
              onClick={onOpenMembership}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold bg-white text-black hover:bg-neutral-200 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group"
            >
              <Sparkles className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
              <span>Join The Haus</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          ) : (
            <Link
              href="/#membership"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold bg-white text-black hover:bg-neutral-200 transition-all group"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join The Haus</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          {toggleAudio && (
            <button
              onClick={toggleAudio}
              className="p-2 text-neutral-300 hover:text-white"
              aria-label="Toggle audio"
            >
              {isAudioPlaying ? <Volume2 className="w-5 h-5 text-white" /> : <VolumeX className="w-5 h-5 text-neutral-400" />}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-200 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0a0a0a] px-6 py-8 flex flex-col gap-5 text-sm uppercase tracking-widest animate-fadeIn">
          <Link
            href="/#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-300 hover:text-white py-1"
          >
            Manifesto
          </Link>
          <Link
            href="/#events"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-300 hover:text-white py-1"
          >
            Exhibitions (India)
          </Link>
          <Link
            href="/#journal"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-300 hover:text-white py-1"
          >
            The Journal
          </Link>
          <Link
            href="/#spaces"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-300 hover:text-white py-1"
          >
            Sanctuaries
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-bold py-1 flex items-center justify-between"
          >
            <span>Contact Us (Opt-In)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/terms"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-400 hover:text-white py-1 text-xs"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/privacy"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-400 hover:text-white py-1 text-xs"
          >
            Privacy Policy
          </Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            {onOpenMembership ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMembership();
                }}
                className="w-full py-3 rounded-full text-xs uppercase tracking-widest font-bold bg-white text-black text-center"
              >
                Join The Haus
              </button>
            ) : (
              <Link
                href="/#membership"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full text-xs uppercase tracking-widest font-bold bg-white text-black text-center"
              >
                Join The Haus
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
