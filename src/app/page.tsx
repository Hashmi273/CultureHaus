"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import EventsSection from "@/components/EventsSection";
import EditorialJournal from "@/components/EditorialJournal";
import SpacesSection from "@/components/SpacesSection";
import MembershipModal from "@/components/MembershipModal";
import SoundscapePlayer from "@/components/SoundscapePlayer";
import Footer from "@/components/Footer";

export default function Home() {
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  const scrollToEvents = () => {
    const el = document.getElementById("events");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#EDEDED] relative selection:bg-white selection:text-black">
      {/* Audio Ambient Generator */}
      <SoundscapePlayer isPlaying={isAudioPlaying} />

      {/* Top Navbar */}
      <Navbar
        onOpenMembership={() => setMembershipModalOpen(true)}
        isAudioPlaying={isAudioPlaying}
        toggleAudio={toggleAudio}
      />

      {/* Hero Section with Exact Brand Identity from Reference Images */}
      <Hero
        onOpenMembership={() => setMembershipModalOpen(true)}
        onExploreEvents={scrollToEvents}
      />

      {/* The 3 Core Pillars & Manifesto (Culture Driven, Community Focused, Creativity Unleashed) */}
      <PhilosophySection />

      {/* Upcoming Exhibitions, Sound Sessions & Digital Passes */}
      <EventsSection />

      {/* The CultureHaus Journal: Critical Essays & Dispatches */}
      <EditorialJournal />

      {/* Physical Sanctuaries across Tokyo, Berlin, NYC, London */}
      <SpacesSection />

      {/* Footer */}
      <Footer onOpenMembership={() => setMembershipModalOpen(true)} />

      {/* Membership Dossier & Titanium Pass Modal */}
      <MembershipModal
        isOpen={membershipModalOpen}
        onClose={() => setMembershipModalOpen(false)}
      />
    </main>
  );
}
