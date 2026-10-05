"use client";

import React, { useState } from "react";
import { Calendar, MapPin, Ticket, Clock, CheckCircle2, X } from "lucide-react";

export interface EventItem {
  id: string;
  title: string;
  category: "Exhibition" | "Sound" | "Fashion" | "Salon";
  date: string;
  time: string;
  location: string;
  city: string;
  curator: string;
  capacity: string;
  status: "Open" | "Few Seats" | "Invite Only";
  description: string;
  pincode: string;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: "evt-01",
    title: "Black Mono: Architectural Geometry & Sound Resonances",
    category: "Exhibition",
    date: "OCTOBER 18, 2026",
    time: "19:00 - 23:00 IST",
    location: "CultureHaus Pavilion, Pokharan Road No. 2, Thane West",
    city: "Thane, Maharashtra",
    pincode: "400610",
    curator: "A N ENTERTAINMENT Curatorial Lab & Studio Monochrome",
    capacity: "80 Guests",
    status: "Few Seats",
    description:
      "A subterranean multi-sensory exhibition dissecting monolithic dark Brutalism through custom modular analog synthesizers and tactile stone sculptures.",
  },
  {
    id: "evt-02",
    title: "Nocturne IV: Spatial Audio & Minimalist Soundscapes",
    category: "Sound",
    date: "NOVEMBER 06, 2026",
    time: "20:30 - 02:00 IST",
    location: "Ballard Estate Heritage Vault, Fort",
    city: "Mumbai, Maharashtra",
    pincode: "400001",
    curator: "A N Entertainment Sonic Division",
    capacity: "120 Guests",
    status: "Open",
    description:
      "4-point immersive surround frequency tests, binaural field recordings from coastal industrial docks, and live vinyl master pressing session.",
  },
  {
    id: "evt-03",
    title: "The Silk Armor: Haute Couture Capsule Drop 004",
    category: "Fashion",
    date: "NOVEMBER 21, 2026",
    time: "18:30 - 22:00 IST",
    location: "CultureHaus Atelier, Kalpvruksha Complex, Pokharan Road 2",
    city: "Thane West, Maharashtra",
    pincode: "400610",
    curator: "CultureHaus Fashion Guild",
    capacity: "60 Guests",
    status: "Invite Only",
    description:
      "Unveiling the Autumn/Winter capsule: heavyweight hand-spun mulberry silk, raw structured gabardine outerwear, and bespoke oxidized silver hardware.",
  },
  {
    id: "evt-04",
    title: "The Dialectics of Culture: Underground Philosophy Salon",
    category: "Salon",
    date: "DECEMBER 02, 2026",
    time: "17:00 - 20:30 IST",
    location: "Kala Ghoda Cultural Precinct, K. Dubash Marg",
    city: "Mumbai, Maharashtra",
    pincode: "400023",
    curator: "Dr. Kabir Roy & Fellow Residents",
    capacity: "45 Guests",
    status: "Open",
    description:
      "An intimate salon on cultural archiving in the age of generative synthetic media. Accompanied by rare ceremonial single-estate Assam tea pairings.",
  },
  {
    id: "evt-05",
    title: "Vedic Futurism: Digital Heritage & Sacred Geometries",
    category: "Exhibition",
    date: "DECEMBER 14, 2026",
    time: "18:00 - 22:00 IST",
    location: "Bikaner House Cultural Wing, Pandara Road",
    city: "New Delhi, Delhi",
    pincode: "110011",
    curator: "CultureHaus North Chapter",
    capacity: "100 Guests",
    status: "Open",
    description:
      "Exploring ancient Vedic proportions translated into generative algorithmic projections, spatial obsidian sculptures, and sound frequencies.",
  },
  {
    id: "evt-06",
    title: "Pulse & Modular: South Sonic Laboratory",
    category: "Sound",
    date: "DECEMBER 28, 2026",
    time: "19:00 - 23:30 IST",
    location: "Indiranagar Experimental Arts Arena",
    city: "Bengaluru, Karnataka",
    pincode: "560038",
    curator: "A N ENTERTAINMENT Tech Division",
    capacity: "90 Guests",
    status: "Open",
    description:
      "Patch cords, Buchla synthesizers, and live generative visual code projected onto acoustic concrete walls.",
  },
];

export default function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [rsvpEvent, setRsvpEvent] = useState<EventItem | null>(null);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [optIn, setOptIn] = useState(true);

  const filteredEvents =
    selectedCategory === "All"
      ? EVENTS_DATA
      : EVENTS_DATA.filter((e) => e.category === selectedCategory);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail) return;
    setRsvpSuccess(true);
  };

  const closeRsvpModal = () => {
    setRsvpEvent(null);
    setRsvpSuccess(false);
    setUserName("");
    setUserEmail("");
  };

  return (
    <section id="events" className="py-28 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-white/40" />
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
                India Curated Calendar
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-brand-serif italic text-white">
              Upcoming Exhibitions & Cultural Drops (India)
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {["All", "Exhibition", "Sound", "Fashion", "Salon"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all font-medium ${
                  selectedCategory === cat
                    ? "bg-white text-black font-bold"
                    : "bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="group rounded-2xl border border-white/10 bg-[#0d0d0d] hover:border-white/30 transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            >
              <div className="p-6 sm:p-8">
                {/* Status & Category */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-white/10 text-white">
                    {evt.category}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-wider font-semibold ${
                      evt.status === "Open"
                        ? "text-emerald-400"
                        : evt.status === "Few Seats"
                        ? "text-amber-400"
                        : "text-purple-400"
                    }`}
                  >
                    ● {evt.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors leading-snug mb-4">
                  {evt.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                  {evt.description}
                </p>

                {/* Metadata */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-neutral-300 font-mono">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-white font-medium">{evt.location}</span>
                      <span className="text-neutral-400 text-[11px]">{evt.city} - {evt.pincode}, India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-4 sm:p-6 bg-white/[0.02] border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">
                  Cap: <strong className="text-white">{evt.capacity}</strong>
                </span>
                <button
                  onClick={() => setRsvpEvent(evt)}
                  className="px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold bg-white text-black hover:bg-neutral-200 transition-all flex items-center gap-2"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Reserve Pass</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RSVP Modal */}
      {rsvpEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#0e0e0e] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={closeRsvpModal}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
              aria-label="Close RSVP modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!rsvpSuccess ? (
              <>
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-1">
                    Pass Reservation • A N ENTERTAINMENT PVT LTD
                  </span>
                  <h3 className="text-xl sm:text-2xl font-brand-serif italic text-white">
                    {rsvpEvent.title}
                  </h3>
                  <div className="mt-2 text-xs text-neutral-400 flex flex-col gap-1">
                    <span>{rsvpEvent.date} • {rsvpEvent.time}</span>
                    <span className="text-white font-medium">{rsvpEvent.location}, {rsvpEvent.city} ({rsvpEvent.pincode})</span>
                  </div>
                </div>

                <form onSubmit={handleRsvpSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2">
                      Full Name / Moniker *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@domain.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Explicit Opt-in Checkbox */}
                  <label className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={optIn}
                      onChange={(e) => setOptIn(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded bg-black border-white/30 text-white focus:ring-0 accent-white shrink-0"
                    />
                    <span className="text-[11px] text-neutral-300 leading-relaxed font-light">
                      <strong className="text-white font-semibold">Consent & Opt-In:</strong> I agree to receive event passes, scheduling notices, and cultural dispatches from <strong>A N ENTERTAINMENT PRIVATE LIMITED (CultureHaus™)</strong> via Email, WhatsApp, and SMS.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-white text-black hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Confirm & Generate India Event Pass</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4 text-white">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-brand-serif italic text-white mb-2">
                  Pass Confirmed
                </h4>
                <p className="text-xs text-neutral-300 mb-6 font-light">
                  Pass registered for <strong className="text-white">{userName}</strong>. An official confirmation pass has been dispatched to <strong className="text-white">{userEmail}</strong>.
                </p>

                {/* Digital Ticket Preview */}
                <div className="p-5 rounded-2xl bg-black border border-white/25 text-left mb-6 font-mono text-xs relative overflow-hidden">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
                    <span className="text-white font-bold tracking-widest">CULTUREHAUS™ PASS (INDIA)</span>
                    <span className="text-[10px] text-neutral-400">ENTRY #CH-IN-{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>
                  <div className="space-y-1.5 text-neutral-300">
                    <div>GUEST: <span className="text-white">{userName.toUpperCase()}</span></div>
                    <div>EVENT: <span className="text-white">{rsvpEvent.title}</span></div>
                    <div>VENUE: <span className="text-neutral-300">{rsvpEvent.location}</span></div>
                    <div>CITY: <span className="text-white">{rsvpEvent.city} ({rsvpEvent.pincode})</span></div>
                    <div>DATE & TIME: <span className="text-white">{rsvpEvent.date} • {rsvpEvent.time}</span></div>
                    <div>ORGANIZER: <span className="text-neutral-400">A N ENTERTAINMENT PVT LTD</span></div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-[10px] text-neutral-500">
                    <span>SECURITY: VERIFIED</span>
                    <span className="text-emerald-400 font-bold">● CONFIRMED PASS</span>
                  </div>
                </div>

                <button
                  onClick={closeRsvpModal}
                  className="px-6 py-2.5 rounded-full text-xs uppercase tracking-widest bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Close & Continue Browsing
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
