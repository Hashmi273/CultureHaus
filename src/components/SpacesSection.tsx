"use client";

import React, { useState } from "react";
import { Building2, Disc, Sliders, MapPin, Check, ArrowRight } from "lucide-react";

interface Sanctuary {
  id: string;
  city: string;
  name: string;
  type: string;
  squareMeters: string;
  focus: string;
  features: string[];
  description: string;
}

const SANCTUARIES: Sanctuary[] = [
  {
    id: "thane",
    city: "Thane (MMR)",
    name: "The Kalpvruksha Art Pavilion",
    type: "HQ & Cultural Exhibition Hub",
    squareMeters: "950 sqm",
    focus: "A N ENTERTAINMENT PRIVATE LIMITED cultural flagship, analog audio archives, and bespoke fashion tailoring ateliers.",
    features: [
      "Pokharan Road No. 2, Kalpvruksha Complex, Thane West, MH - 400610",
      "Custom multi-channel spatial acoustic listening chamber",
      "Physical monograph library & private salon galleries",
      "Dedicated resident creator berths & darkroom suites",
    ],
    description:
      "The primary operational sanctuary and registered headquarters in Thane, Maharashtra. Serving as the nerve center for India exhibitions, avant-garde installations, and creative residency fellowships.",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    name: "Ballard Estate Vault",
    type: "Heritage Sound & Visual Lab",
    squareMeters: "780 sqm",
    focus: "Subterranean basalt stone spatial acoustics, vinyl disc pressing, and heritage colonial architecture.",
    features: [
      "Custom 24-channel ambisonic spatial audio rig",
      "Serge & Buchla modular synthesizer laboratory",
      "Acoustic stone dampening walls & vinyl mastering suite",
      "Strict zero-device meditation & listening salon",
    ],
    description:
      "Situated in the historic stone arches of Ballard Estate, Fort. Dedicated to sonic purism and analog sound recording experiments.",
  },
  {
    id: "delhi",
    city: "New Delhi",
    name: "Lodhi Cultural Atrium",
    type: "Vedic Proportions & Digital Media",
    squareMeters: "890 sqm",
    focus: "Generative algorithmic projections, sacred geometries, and large-format architectural sculptures.",
    features: [
      "10-meter vaulted ceiling projection hall",
      "Monolithic black obsidian sculpture garden",
      "Archival art book reading room & tea sanctuary",
      "Curatorial residency fellows accommodation",
    ],
    description:
      "A contemporary sanctuary nestled near the heritage gardens of New Delhi, blending timeless Indian design geometry with modern visual media.",
  },
  {
    id: "blr",
    city: "Bengaluru",
    name: "Indiranagar Modular Lab",
    type: "Creative Technology & Synthesizers",
    squareMeters: "640 sqm",
    focus: "Hardware modular synthesis, generative visual code, and experimental electronic sound design.",
    features: [
      "Largest public modular wall patch collection in South India",
      "Quadraphonic live monitoring suites",
      "Letterpress print & zine publication station",
      "Private audition salon and listening bar",
    ],
    description:
      "A high-frequency laboratory designed for electronic musicians, software artists, and avant-garde sound engineers.",
  },
];

export default function SpacesSection() {
  const [selectedSanctuary, setSelectedSanctuary] = useState(SANCTUARIES[0]);

  return (
    <section id="spaces" className="py-28 bg-[#060606] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-white/40" />
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
                Physical Sanctuaries
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-brand-serif italic text-white">
              The Indian Sanctuaries & Sanctorums
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 max-w-xs font-mono">
            Sacred physical environments operated by A N ENTERTAINMENT PRIVATE LIMITED.
          </p>
        </div>

        {/* City Tab Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {SANCTUARIES.map((sanctuary) => {
            const isSelected = selectedSanctuary.id === sanctuary.id;
            return (
              <button
                key={sanctuary.id}
                onClick={() => setSelectedSanctuary(sanctuary)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? "bg-white text-black border-white shadow-[0_5px_25px_rgba(255,255,255,0.15)] font-bold"
                    : "bg-white/[0.03] text-neutral-300 border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase tracking-widest font-mono">
                    {sanctuary.city}
                  </span>
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? "text-black" : "text-neutral-500"}`} />
                </div>
                <div className="text-sm font-semibold truncate">{sanctuary.name}</div>
              </button>
            );
          })}
        </div>

        {/* Sanctuary Details Display Card */}
        <div className="rounded-3xl border border-white/15 bg-[#0e0e0e] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Details Content */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-white/10 text-white">
                  {selectedSanctuary.type}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  Surface: {selectedSanctuary.squareMeters}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-brand-serif italic text-white mb-4">
                {selectedSanctuary.name}
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                {selectedSanctuary.description}
              </p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 mb-8">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                  Curatorial Focus:
                </span>
                <p className="text-xs text-neutral-200">{selectedSanctuary.focus}</p>
              </div>

              {/* Feature Amenities */}
              <div className="space-y-2.5">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-1 font-mono">
                  Sanctuary Specifications & Amenities:
                </span>
                {selectedSanctuary.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
                    <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Graphic Spec Column */}
            <div className="lg:col-span-5 bg-black border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full min-h-[320px]">
              <div>
                <div className="flex justify-between items-center text-xs text-neutral-400 font-mono pb-4 border-b border-white/10 mb-6">
                  <span>RESIDENCY ACCESS</span>
                  <span className="text-emerald-400">OPERATIONAL IN INDIA</span>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-mono">
                      Operating Entity
                    </span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      A N ENTERTAINMENT PRIVATE LIMITED
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-mono">
                      Registered Location
                    </span>
                    <span className="text-xs text-neutral-300 font-mono leading-relaxed">
                      9, 905,84, Kalpvruksha CHS, Pokharan Road 2, Thane West - 400610
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-mono">
                      Pass Protocol
                    </span>
                    <span className="text-xs text-white">
                      Compliant with India DPDP Act & Advance Digital Pass Reservation
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-neutral-400 font-mono">Office / Sanctuary Walkthrough</span>
                <a href="/contact" className="text-white flex items-center gap-1 font-semibold hover:underline">
                  Inquire With Opt-In <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
