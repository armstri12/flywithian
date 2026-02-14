"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "I spent 15 years saying 'next year.' Ian's guide made me realize the only thing between me and a cockpit was a phone call to a flight school.",
    name: "MARCUS T.",
    detail: "STARTED AT 42 — PRIVATE PILOT AT 43",
    accent: true,
  },
  {
    quote:
      "The cost breakdown alone was worth it. I'd been overestimating by thousands. Turns out I could've started years ago.",
    name: "SARAH K.",
    detail: "STUDENT PILOT — 28 HOURS LOGGED",
    accent: false,
  },
  {
    quote:
      "I was terrified of small planes. The fear management section was the most honest, useful thing I've ever read about flying.",
    name: "DAVID R.",
    detail: "FORMER NERVOUS FLYER — NOW SOLO CERTIFIED",
    accent: false,
  },
  {
    quote:
      "As a single mom with a 9-to-5, I thought flight training was impossible. The time-planning section proved me wrong.",
    name: "JEN M.",
    detail: "PPL CHECKRIDE SCHEDULED — MARCH 2026",
    accent: true,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-xs tracking-[0.4em] uppercase font-mono">
              PROOF IT WORKS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] max-w-4xl">
            THEY WAITED
            <br />
            <span className="text-muted">TOO.</span>
            <br />
            <span className="text-accent">THEN THEY FLEW.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-20 grid md:grid-cols-2 gap-0">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`p-8 lg:p-12 border border-border -mt-px ${
                  i % 2 === 0 ? "md:-mr-px" : ""
                } ${
                  testimonial.accent ? "bg-surface" : "bg-background"
                } group hover:bg-accent/5 transition-colors duration-500`}
              >
                <div className="text-accent text-4xl font-black leading-none mb-6">
                  &ldquo;
                </div>
                <blockquote className="text-foreground text-lg lg:text-xl leading-relaxed font-medium">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="font-black text-sm tracking-[0.2em]">
                    {testimonial.name}
                  </div>
                  <div className="text-muted text-xs tracking-[0.15em] mt-1 font-mono">
                    {testimonial.detail}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
