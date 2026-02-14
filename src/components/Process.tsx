"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "DOWNLOAD THE GUIDE",
    description:
      "Get the free Fly With Ian starter guide. It covers costs, timelines, medical requirements, and what to expect on day one.",
    detail: "5-MINUTE READ",
  },
  {
    number: "02",
    title: "BOOK A DISCOVERY FLIGHT",
    description:
      "Your first time in a small aircraft with an instructor. You'll actually fly the plane. Usually costs $150-250. The guide tells you exactly how to find one near you.",
    detail: "$150-250",
  },
  {
    number: "03",
    title: "START GROUND SCHOOL",
    description:
      "Learn the theory at your own pace — online, evenings, weekends. Modern courses make this approachable, not overwhelming.",
    detail: "YOUR PACE",
  },
  {
    number: "04",
    title: "FLY — FOR REAL",
    description:
      "Regular flight lessons with a certified instructor. Build hours, build skill, build confidence. The sky stops being a dream and starts being your reality.",
    detail: "40-70 HOURS",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 bg-surface">
      <div className="absolute top-0 left-0 w-full h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-xs tracking-[0.4em] uppercase font-mono">
              THE PROCESS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] max-w-3xl">
            FROM
            <br />
            <span className="text-muted">DREAMER</span>
            <br />
            TO <span className="text-accent">PILOT</span>
          </h2>
        </AnimatedSection>

        <div className="mt-20 relative">
          {/* Vertical line connector */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative grid lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-14 border-b border-border hover:bg-accent/5 transition-colors duration-500 px-4 lg:px-8"
                >
                  {/* Step number */}
                  <div className="lg:col-span-1 flex items-start">
                    <div className="relative z-10 w-14 h-14 bg-background border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                      <span className="font-mono text-sm text-accent group-hover:text-black transition-colors">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7">
                    <h3 className="text-2xl lg:text-3xl font-black tracking-[0.05em] uppercase group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-muted leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>

                  {/* Detail badge */}
                  <div className="lg:col-span-4 flex items-center lg:justify-end">
                    <div className="bg-surface-light border border-border px-6 py-3 skew-x-[-6deg] group-hover:border-accent transition-colors">
                      <span className="skew-x-[6deg] block font-mono text-xs tracking-[0.3em] text-accent">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
