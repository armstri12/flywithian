"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-surface overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-[-12deg] translate-x-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Image / visual block */}
          <div className="lg:col-span-5">
            <AnimatedSection>
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 0 }}
                  className="aspect-[3/4] bg-background border border-border rotate-[-2deg] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="text-[120px] lg:text-[160px] font-black text-accent/10 leading-none">
                      IAN
                    </div>
                    <div className="mt-4 text-center">
                      <div className="w-20 h-px bg-accent mx-auto mb-4" />
                      <p className="text-muted text-xs tracking-[0.3em] uppercase font-mono">
                        STUDENT PILOT
                      </p>
                      <p className="text-muted text-xs tracking-[0.3em] uppercase font-mono mt-1">
                        PERPETUAL DREAMER
                      </p>
                      <p className="text-muted text-xs tracking-[0.3em] uppercase font-mono mt-1">
                        FINALLY DOING IT
                      </p>
                    </div>
                  </div>
                </motion.div>
                {/* Offset decorative block */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 -z-10" />
              </div>
            </AnimatedSection>
          </div>

          {/* Text content */}
          <div className="lg:col-span-7">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-accent" />
                <span className="text-accent text-xs tracking-[0.4em] uppercase font-mono">
                  ABOUT IAN
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.9]">
                I&apos;M NOT
                <br />
                <span className="text-accent">AN EXPERT.</span>
                <br />
                <span className="text-muted">I&apos;M YOU,</span>
                <br />
                SIX MONTHS
                <br />
                AHEAD.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-10 space-y-6 text-muted leading-relaxed max-w-lg">
                <p>
                  I&apos;m not a 10,000-hour ATP pilot writing from the left
                  seat of a 737. I&apos;m a regular person who spent over twenty
                  years dreaming about flying and doing absolutely nothing about
                  it.
                </p>
                <p>
                  Too expensive. Too scary. Too late. I had every excuse
                  memorized and on repeat. Then one day, I ran out of &ldquo;next
                  years&rdquo; and booked a discovery flight.
                </p>
                <p>
                  That first hour in the air broke something open. Not just the
                  dream — the wall I&apos;d built around it. Now I&apos;m
                  documenting everything: the costs, the fears, the failures,
                  the first solo, all of it.
                </p>
                <p className="text-foreground font-bold">
                  Because someone standing where I stood needs to hear it from
                  someone who gets it — not from someone who was born into
                  aviation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-12 grid grid-cols-3 gap-0 border border-border">
                {[
                  { value: "20+", label: "YEARS DREAMING" },
                  { value: "1", label: "DISCOVERY FLIGHT" },
                  { value: "0", label: "REGRETS" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`p-6 text-center ${
                      i < 2 ? "border-r border-border" : ""
                    }`}
                  >
                    <div className="text-2xl lg:text-3xl font-black text-accent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted tracking-[0.15em] mt-2 font-mono">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
