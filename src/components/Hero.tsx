"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-[-12deg] translate-x-20" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-surface" />
        <div className="absolute top-20 left-10 w-32 h-32 border border-border rotate-45 opacity-20" />
        <div className="absolute bottom-40 right-20 w-48 h-48 border border-accent/20 rotate-12" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-foreground"
              style={{ left: `${(i + 1) * 12.5}%` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          {/* Main content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-px bg-accent" />
                <span className="text-accent text-xs tracking-[0.4em] uppercase font-mono">
                  Twenty years in the making
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tight uppercase"
            >
              <span className="block">IT&apos;S</span>
              <span className="block text-accent">YOUR</span>
              <span className="block">TURN</span>
              <span className="block text-muted text-3xl sm:text-4xl lg:text-5xl mt-4 tracking-[0.1em]">
                TO FLY
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 text-lg sm:text-xl text-muted max-w-xl leading-relaxed"
            >
              You&apos;ve spent decades watching planes cross the sky, telling
              yourself &ldquo;someday.&rdquo; I did too. After 20+ years of
              waiting, I finally took the controls. Here&apos;s how you can too.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#cta"
                className="group inline-flex items-center gap-3 bg-accent text-black px-8 py-5 font-black text-sm tracking-[0.2em] uppercase skew-x-[-6deg] hover:skew-x-0 transition-all duration-300 hover:bg-white"
              >
                <span className="skew-x-[6deg] group-hover:skew-x-0 transition-transform">
                  DOWNLOAD FREE GUIDE
                </span>
                <span className="skew-x-[6deg] group-hover:skew-x-0 group-hover:translate-x-1 transition-all">
                  &rarr;
                </span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-5 font-black text-sm tracking-[0.2em] uppercase skew-x-[-6deg] hover:skew-x-0 hover:border-accent transition-all duration-300"
              >
                <span className="skew-x-[6deg] group-hover:skew-x-0 transition-transform">
                  MY STORY
                </span>
              </a>
            </motion.div>
          </div>

          {/* Side stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:col-span-4 flex lg:flex-col gap-8 lg:gap-12 lg:border-l lg:border-border lg:pl-8"
          >
            {[
              { number: "20+", label: "YEARS OF WAITING" },
              { number: "1", label: "DECISION CHANGED EVERYTHING" },
              { number: "∞", label: "EXCUSES SILENCED" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-black text-accent">
                  {stat.number}
                </div>
                <div className="text-xs text-muted tracking-[0.2em] mt-1 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-6 flex items-center gap-4"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-16 bg-accent"
          />
          <span className="text-muted text-xs tracking-[0.3em] uppercase font-mono">
            SCROLL
          </span>
        </motion.div>
      </div>
    </section>
  );
}
