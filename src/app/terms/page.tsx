import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, FileText, Building2, MapPin, Scale, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | A N ENTERTAINMENT PRIVATE LIMITED (CultureHaus™)",
  description:
    "Official terms of service and conditions for CultureHaus platform, exhibitions, and digital passes by A N ENTERTAINMENT PRIVATE LIMITED.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] relative flex flex-col justify-between selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full relative z-10">
        {/* Breadcrumb / Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-white/40" />
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
            Legal & Governance
          </span>
        </div>

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-5xl font-brand-serif italic text-white tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono">
            LAST REVISED: OCTOBER 2026 • OPERATED BY A N ENTERTAINMENT PRIVATE LIMITED
          </p>
        </div>

        {/* Corporate Notice Card */}
        <div className="p-6 rounded-2xl bg-[#0c0c0c] border border-white/15 mb-12 space-y-3">
          <div className="flex items-center gap-2.5 text-white text-sm font-semibold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-white" />
            <span>Company Identification & Registered Office</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
            These Terms & Conditions constitute a legally binding agreement between you and{" "}
            <strong className="text-white font-medium">A N ENTERTAINMENT PRIVATE LIMITED</strong>,
            having its registered office at{" "}
            <span className="text-white font-mono">
              9, 905,84, Kalpvruksha CHS, Pokharan Road Number 2, Kalpavruksha Apartment In Gate, Thane West, Thane, Thane, Maharashtra, 400610
            </span>.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-neutral-300 font-light leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-brand-sans flex items-center gap-2">
              <span className="text-neutral-500 font-mono text-sm">01.</span>
              Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the CultureHaus™ platform (including all associated websites, subdomains, digital passes, and RSVP systems) or by attending any exhibition or event organized by A N ENTERTAINMENT PRIVATE LIMITED, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
            <p>
              If you do not agree to these terms, you must refrain from accessing the platform, registering for digital event passes, or attending our physical spaces.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-brand-sans flex items-center gap-2">
              <span className="text-neutral-500 font-mono text-sm">02.</span>
              Exhibition Passes, RSVPs & Entry Regulations
            </h2>
            <p>
              All CultureHaus event passes, whether complimentary or patron-funded, are issued strictly in accordance with venue safety limits and curatorial discretion:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-400">
              <li>
                <strong className="text-white font-medium">Non-Transferability:</strong> All entry passes are strictly personal and linked to the moniker and identity provided at registration. Resale or unauthorized bartering of passes is strictly prohibited.
              </li>
              <li>
                <strong className="text-white font-medium">Right of Admission Reserved:</strong> A N ENTERTAINMENT PRIVATE LIMITED and its appointed venue partners reserve the absolute right to refuse admission or request any visitor to vacate the premises for behavior contrary to community guidelines.
              </li>
              <li>
                <strong className="text-white font-medium">Physical Sanctuary Etiquette:</strong> Certain designated listening sanctuaries and exhibition chambers operate under strict silence or zero-phone policies to preserve the artistic immersion of attendees.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-brand-sans flex items-center gap-2">
              <span className="text-neutral-500 font-mono text-sm">03.</span>
              Intellectual Property & Copyright
            </h2>
            <p>
              The entirety of the CultureHaus™ trademarks, logotypes, sound compositions, editorial essays, visual identity banners, and architectural documentation are the exclusive intellectual property of{" "}
              <strong className="text-white">A N ENTERTAINMENT PRIVATE LIMITED</strong> and its collaborating resident creators.
            </p>
            <p>
              No material, sound recording, or visual reproduction may be duplicated, broadcast, published, or commercially exploited without the express prior written consent of A N ENTERTAINMENT PRIVATE LIMITED.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-brand-sans flex items-center gap-2">
              <span className="text-neutral-500 font-mono text-sm">04.</span>
              Communication Opt-In & Marketing Notices
            </h2>
            <p>
              When registering for passes or submitting inquiries through our contact forms, you have the option to opt-in to marketing communications. In compliance with applicable telecom and data regulations in India:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-400">
              <li>
                You may withdraw your marketing consent at any time by clicking the unsubscribe link present in our email dispatches or by writing to{" "}
                <span className="text-white font-mono">contact@culturehaus.in</span>.
              </li>
              <li>
                Essential transactional notices (e.g. entry pass confirmations, schedule revisions due to unforeseen logistical emergencies) will continue to be delivered for confirmed bookings.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-brand-sans flex items-center gap-2">
              <span className="text-neutral-500 font-mono text-sm">05.</span>
              Limitation of Liability & Force Majeure
            </h2>
            <p>
              To the fullest extent permissible by applicable law in India, A N ENTERTAINMENT PRIVATE LIMITED shall not be held liable for any indirect, incidental, or consequential damages resulting from platform access, temporary unavailability of events, or changes in exhibition scheduling caused by weather, civic directives, or circumstances beyond reasonable control.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-brand-sans flex items-center gap-2">
              <span className="text-neutral-500 font-mono text-sm">06.</span>
              Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with the substantive laws of India. Any legal dispute, grievance, or claim arising under or related to these terms shall be subject to the exclusive jurisdiction of the competent courts located in{" "}
              <strong className="text-white">Thane / Mumbai, Maharashtra, India</strong>.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-brand-sans flex items-center gap-2">
              <span className="text-neutral-500 font-mono text-sm">07.</span>
              Official Legal Notices & Contact
            </h2>
            <div className="p-5 rounded-2xl bg-[#090909] border border-white/10 text-xs font-mono space-y-2 text-neutral-300">
              <div>COMPANY: A N ENTERTAINMENT PRIVATE LIMITED</div>
              <div>ATTN: Legal & Compliance Department</div>
              <div>
                OFFICE: 9, 905,84, Kalpvruksha CHS, Pokharan Road Number 2, Kalpavruksha Apartment In Gate, Thane West, Thane, Thane, Maharashtra, 400610
              </div>
              <div>EMAIL: legal@culturehaus.in / contact@culturehaus.in</div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
