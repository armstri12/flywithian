"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    icon: "◆",
    title: "REAL COSTS, NO SURPRISES",
    description:
      "A transparent breakdown of every dollar — from your discovery flight to your checkride. No hidden fees, no sugarcoating.",
  },
  {
    icon: "■",
    title: "STEP-BY-STEP ROADMAP",
    description:
      "The exact path from zero experience to pilot certificate. Medical, ground school, flight hours, checkride — demystified.",
  },
  {
    icon: "▲",
    title: "FEAR MANAGEMENT",
    description:
      "Honest talk about what scares new students and how to handle it. Not 'don't be scared' — actual tools that work.",
  },
  {
    icon: "●",
    title: "TIME-REALISTIC PLANNING",
    description:
      "Built for people with full lives. How to train around work, family, and weather without burning out or going broke.",
  },
  {
    icon: "◇",
    title: "SCHOOL SELECTION GUIDE",
    description:
      "What to look for in a flight school, what red flags to avoid, and the questions nobody tells you to ask.",
  },
  {
    icon: "▬",
    title: "COMMUNITY ACCESS",
    description:
      "Connect with others who started late and flew anyway. Because this journey is better when you're not doing it alone.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="relative py-32 bg-background">
      <div className="absolute top-0 left-0 w-1/4 h-full bg-surface-light opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left column - sticky header */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-px bg-accent" />
                  <span className="text-accent text-xs tracking-[0.4em] uppercase font-mono">
                    THE FREE GUIDE
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.9]">
                  EVERYTHING
                  <br />
                  <span className="text-accent">I WISH</span>
                  <br />
                  SOMEONE
                  <br />
                  <span className="text-muted">TOLD ME</span>
                </h2>
                <p className="mt-8 text-muted leading-relaxed max-w-md">
                  I built the resource I desperately needed when I was standing
                  where you are right now — full of questions, short on answers,
                  and running out of excuses.
                </p>
                <div className="mt-8">
                  <a
                    href="#cta"
                    className="group inline-flex items-center gap-3 bg-accent text-black px-8 py-5 font-black text-sm tracking-[0.2em] uppercase skew-x-[-6deg] hover:skew-x-0 transition-all duration-300 hover:bg-white"
                  >
                    <span className="skew-x-[6deg] group-hover:skew-x-0 transition-transform">
                      GET IT FREE
                    </span>
                    <span className="skew-x-[6deg] group-hover:skew-x-0 group-hover:translate-x-1 transition-all">
                      &rarr;
                    </span>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right column - benefits grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-0">
              {benefits.map((benefit, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`p-6 lg:p-8 border border-border group hover:bg-surface transition-colors duration-300 ${
                      i % 2 === 0 ? "sm:-mr-px" : ""
                    } -mt-px`}
                  >
                    <span className="text-accent text-2xl">{benefit.icon}</span>
                    <h3 className="mt-4 text-sm font-black tracking-[0.15em] uppercase group-hover:text-accent transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-muted text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
