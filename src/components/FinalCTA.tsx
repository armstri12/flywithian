"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-32 lg:py-40 bg-background overflow-hidden">
      {/* Aggressive geometric backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-accent skew-x-[-12deg] translate-x-1/3" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <AnimatedSection>
              <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase leading-[0.85]">
                STOP
                <br />
                <span className="text-black">WAITING.</span>
                <br />
                START
                <br />
                <span className="text-black">FLYING.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-8 text-lg sm:text-xl max-w-lg leading-relaxed text-foreground/80">
                The free Fly With Ian guide has everything you need to go from
                &ldquo;I&apos;ve always wanted to&rdquo; to &ldquo;I just booked
                my first lesson.&rdquo; No fluff. No upsell. Just the truth
                about learning to fly.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-10">
                <form className="flex flex-col sm:flex-row gap-0 max-w-lg">
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    className="flex-1 bg-black/80 border border-border text-foreground px-6 py-5 text-sm tracking-[0.15em] uppercase font-mono placeholder:text-muted focus:outline-none focus:border-foreground transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-black text-accent px-8 py-5 font-black text-sm tracking-[0.2em] uppercase border border-accent hover:bg-accent hover:text-black transition-all duration-300"
                  >
                    SEND IT &rarr;
                  </motion.button>
                </form>
                <p className="mt-4 text-xs text-muted/60 tracking-wide">
                  Free PDF guide delivered instantly. No spam. Unsubscribe
                  anytime.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <AnimatedSection delay={0.4}>
              <div className="relative">
                <div className="bg-black border border-border p-10 rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                  <div className="text-accent text-xs tracking-[0.4em] uppercase font-mono mb-6">
                    INSIDE THE GUIDE
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Real cost breakdown (no BS)",
                      "Medical certificate walkthrough",
                      "Flight school selection checklist",
                      "Week-by-week training timeline",
                      "Fear management toolkit",
                      "First solo preparation guide",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground/80 text-sm"
                      >
                        <span className="text-accent mt-0.5">■</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="text-2xl font-black text-accent">FREE</div>
                    <div className="text-xs text-muted tracking-[0.2em] font-mono mt-1">
                      NO CREDIT CARD REQUIRED
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/30 -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
