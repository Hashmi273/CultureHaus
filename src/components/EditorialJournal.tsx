"use client";

import React, { useState } from "react";
import { BookOpen, ArrowUpRight, X, Clock, User } from "lucide-react";

interface Article {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  author: string;
  date: string;
  fullContent: string[];
}

const ARTICLES: Article[] = [
  {
    id: "art-1",
    tag: "AESTHETICS & SONICS",
    title: "The Architecture of Low Frequencies: Why Modern Sanctuaries Need Sub-Bass",
    excerpt:
      "Investigating how deep resonant frequencies activate spatial consciousness, transforming cold concrete structures into visceral cathedrals of collective contemplation.",
    readTime: "7 MIN READ",
    author: "Klaus M. Weber",
    date: "SEP 28, 2026",
    fullContent: [
      "In the middle of the twentieth century, architecture and acoustic engineering parted ways. Buildings became visual trophies designed for the 2D lens of photography, whilst sound was relegated to an afterthought—damped by cheap acoustic foam or ignored entirely.",
      "At CultureHaus, we observe architecture through the diaphragm. When low frequencies below 40Hz resonate through monolithic basalt and reinforced concrete, the human nervous system ceases to analyze; it simply feels.",
      "Our newest sanctuary in Tokyo was calibrated before a single painting was mounted. The walls themselves form a tuned horn, ensuring that collective silence carries as much physical presence as sound itself.",
    ],
  },
  {
    id: "art-2",
    tag: "HAUTE SUBCULTURE",
    title: "Liquid Silk, Raw Iron: The Material Language of Collective Identity",
    excerpt:
      "A deep examination of why modern subcultures gravitate toward high-tactile, contradictory materials in an increasingly ephemeral, weightless digital landscape.",
    readTime: "5 MIN READ",
    author: "Aria Thorne",
    date: "SEP 19, 2026",
    fullContent: [
      "When everything can be synthesized, rendered in 4K, or generated with a single prompt in seconds, tactile friction becomes the ultimate luxury.",
      "The CultureHaus visual language—black liquid silk folds meeting sharp geometric typography—is not accidental. It is an intentional juxtaposition between absolute fluidity and uncompromising discipline.",
      "To wear or touch something that required weeks of human hands and bespoke loom calibration is an act of quiet rebellion against disposability.",
    ],
  },
  {
    id: "art-3",
    tag: "PHILOSOPHY & CODE",
    title: "Beyond The Feed: Reclaiming Slow Culture in an Accelerating World",
    excerpt:
      "Why the world's most inventive creators are withdrawing from public social timelines into closed, salon-based guilds and private cultural archives.",
    readTime: "6 MIN READ",
    author: "Zane Deshmukh",
    date: "AUG 30, 2026",
    fullContent: [
      "The public internet was built for broadcast; culture is born in whispers and intense communion. When every thought is optimized for algorithmic engagement, thought itself becomes homogenized.",
      "The resurgence of the salon—intimate, unrecorded physical gatherings with strict no-phone rituals—is not nostalgic luddism. It is high-efficiency mental preservation.",
      "By deliberately slowing the rate of consumption and elevating the depth of discourse, we preserve the sparks of genuine originality that define our era.",
    ],
  },
];

export default function EditorialJournal() {
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);

  return (
    <section id="journal" className="py-28 bg-[#080808] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-white/40" />
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
                The CultureHaus Journal
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-brand-serif italic text-white">
              Critical Essays & Cultural Dispatches
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 max-w-xs font-mono">
            Unfiltered discourse on avant-garde architecture, sound philosophy, and tactile craft.
          </p>
        </div>

        {/* Editorial Layout: Large Feature + Side Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Feature Article */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#0d0d0d] p-8 sm:p-12 flex flex-col justify-between hover:border-white/30 transition-all group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white text-black">
                  {ARTICLES[0].tag}
                </span>
                <span className="text-xs font-mono text-neutral-400">{ARTICLES[0].readTime}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-brand-serif italic text-white group-hover:text-neutral-200 transition-colors leading-tight mb-6">
                {ARTICLES[0].title}
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                {ARTICLES[0].excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="text-xs text-neutral-400 font-mono">
                By <span className="text-white">{ARTICLES[0].author}</span> • {ARTICLES[0].date}
              </div>
              <button
                onClick={() => setReadingArticle(ARTICLES[0])}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:text-neutral-300 font-semibold group/btn"
              >
                <span>Read Dispatch</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Secondary Articles Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {ARTICLES.slice(1).map((article) => (
              <div
                key={article.id}
                className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-8 hover:border-white/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                      {article.tag}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">{article.readTime}</span>
                  </div>

                  <h4 className="text-xl font-brand-serif italic text-white group-hover:text-neutral-200 transition-colors leading-snug mb-3">
                    {article.title}
                  </h4>

                  <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-mono">{article.author}</span>
                  <button
                    onClick={() => setReadingArticle(article)}
                    className="flex items-center gap-1.5 uppercase tracking-widest text-white hover:text-neutral-300 font-semibold text-[11px]"
                  >
                    <span>Read</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0e0e0e] border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <button
              onClick={() => setReadingArticle(null)}
              className="sticky top-0 float-right p-2 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 z-20"
              aria-label="Close reader"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="clear-both pt-2">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-2">
                {readingArticle.tag} • {readingArticle.date}
              </span>
              <h3 className="text-2xl sm:text-3xl font-brand-serif italic text-white mb-4 leading-snug">
                {readingArticle.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-neutral-400 font-mono mb-8 pb-4 border-b border-white/10">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> {readingArticle.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {readingArticle.readTime}
                </span>
              </div>

              <div className="space-y-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {readingArticle.fullContent.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-white text-black hover:bg-neutral-200 transition-colors"
                >
                  Finished Reading
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
