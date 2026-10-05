import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, Eye, Building2, MapPin, Mail, UserCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | A N ENTERTAINMENT PRIVATE LIMITED (CultureHaus™)",
  description:
    "Official privacy policy and data governance practices of A N ENTERTAINMENT PRIVATE LIMITED in compliance with India's DPDP Act.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] relative flex flex-col justify-between selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full relative z-10">
        {/* Breadcrumb / Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-white/40" />
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
            Privacy Governance & Data Protection
          </span>
        </div>

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-5xl font-brand-serif italic text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono">
            EFFECTIVE DATE: OCTOBER 2026 • COMPLIANT WITH DIGITAL PERSONAL DATA PROTECTION ACT (INDIA)
          </p>
        </div>

        {/* Corporate Notice Card */}
        <div className="p-6 rounded-2xl bg-[#0c0c0c] border border-white/15 mb-12 space-y-3">
          <div className="flex items-center gap-2.5 text-white text-sm font-semibold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-white" />
            <span>Data Fiduciary Entity Details</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
            This Privacy Policy sets forth how{" "}
            <strong className="text-white font-medium">A N ENTERTAINMENT PRIVATE LIMITED</strong>,
            located at{" "}
            <span className="text-white font-mono">
              9, 905,84, Kalpvruksha CHS, Pokharan Road Number 2, Kalpavruksha Apartment In Gate, Thane West, Thane, Thane, Maharashtra, 400610
            </span>,
            collects, secures, uses, and safeguards the personal data you entrust to us across the CultureHaus™ platform and physical sanctuaries.
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-10 text-sm text-neutral-300 font-light leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-brand-sans flex items-center gap-2">
              <span className="text-neutral-500 font-mono text-sm">01.</span>
              Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide when applying for membership, reserving exhibition passes, or contacting our concierge desk:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-400">
              <li>
                <strong className="text-white font-medium">Identification Data:</strong> Full name, artistic moniker, creative discipline, and city of residence.
              </li>
              <li>
                <strong className="text-white font-medium">Contact Credentials:</strong> Official email address, phone/WhatsApp number for digital gate pass verification.
              </li>
              <li>
                <strong className="text-white font-medium">Portfolio & Artist Details:</strong> Website URLs, creative portfolios, and artistic statements submitted for residency consideration.
              </li>
              <li>
                <strong className="text-white font-medium">Technical Log Information:</strong> Browser type, approximate geographical region, and session timestamps used solely for platform stability and abuse prevention.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-brand-sans flex items-center gap-2">
              <span className="text-neutral-500 font-mono text-sm">02.</span>
              Explicit Opt-In & Purpose of Processing
            </h2>
            <p>
              Under India&apos;s Digital Personal Data Protection Act (DPDP Act, 2023), we process your personal data strictly on the basis of your freely given, specific, informed, and unambiguous consent:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-400">
              <li>
                <strong className="text-white font-medium">Pass Issuance:</strong> To generate unique cryptographic event passes and admit registered patrons to Indian exhibition spaces.
              </li>
              <li>
                <strong className="text-white font-medium">Opt-In Communications:</strong> Only when you affirmatively check the opt-in boxes on our forms, we use your contact details to deliver invitations to private drops, monographs, and cultural salons.
              </li>
              <li>
                <strong className="text-white font-medium">Curatorial Evaluation:</strong> To review resident fellow applications for our ateliers and grant programs.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-brand-sans flex items-center gap-2">
              <span className="text-neutral-500 font-mono text-sm">03.</span>
              Opt-Out Rights & Withdrawal of Consent
            </h2>
            <p>
              You maintain unencumbered authority over your data. You may withdraw your consent or opt-out of all non-essential communications at any moment without penalty:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
              <p className="text-white font-medium">How to exercise your Opt-Out rights:</p>
              <ul className="list-disc list-inside space-y-1 text-neutral-300">
                <li>Click the direct &ldquo;Unsubscribe&rdquo; button provided at the footer of any email dispatch.</li>
                <li>Reply &ldquo;STOP&rdquo; to any automated SMS or WhatsApp notice received from our concierge.</li>
                <li>Email your opt-out request directly to our grievance desk: <span className="text-white font-mono">privacy@culturehaus.in</span>.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-brand-sans flex items-center gap-2">
              <span className="text-neutral-500 font-mono text-sm">04.</span>
              Data Protection & Information Security
            </h2>
            <p>
              A N ENTERTAINMENT PRIVATE LIMITED implements industry-standard technical and organizational security controls, including SSL/TLS encryption in transit, strict role-based access limits, and isolated databases. We do not sell, rent, or trade your personal data to any third-party marketing brokers under any circumstances.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-brand-sans flex items-center gap-2">
              <span className="text-neutral-500 font-mono text-sm">05.</span>
              Your Legal Rights (DPDP Act)
            </h2>
            <p>As a data principal, you possess statutory rights including:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-400">
              <li>The right to access a summary of your personal data processed by us.</li>
              <li>The right to correction, completion, and updating of inaccurate data.</li>
              <li>The right to erasure of personal data that is no longer necessary for the purpose it was collected.</li>
              <li>The right of grievance redressal with our designated officer.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-brand-sans flex items-center gap-2">
              <span className="text-neutral-500 font-mono text-sm">06.</span>
              Grievance Redressal Officer
            </h2>
            <p className="text-xs text-neutral-400">
              In accordance with the Information Technology Act and the DPDP Act, the name and contact details of our Grievance Officer are set forth below:
            </p>
            <div className="p-5 rounded-2xl bg-[#090909] border border-white/10 text-xs font-mono space-y-2 text-neutral-300">
              <div>DESIGNATION: Grievance & Data Protection Officer</div>
              <div>COMPANY: A N ENTERTAINMENT PRIVATE LIMITED</div>
              <div>
                OFFICE: 9, 905,84, Kalpvruksha CHS, Pokharan Road Number 2, Kalpavruksha Apartment In Gate, Thane West, Thane, Thane, Maharashtra, 400610
              </div>
              <div>EMAIL: grievance@culturehaus.in / privacy@culturehaus.in</div>
              <div>HOURS: Monday to Friday, 10:00 AM – 06:00 PM IST</div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
