"use client";

import AnimatedSection from "./AnimatedSection";

const painPoints = [
  {
    number: "01",
    title: "TOO EXPENSIVE",
    description:
      "You've priced it out a dozen times. The numbers always feel out of reach. But you've never seen what it actually costs when you break it down.",
  },
  {
    number: "02",
    title: "TOO LATE",
    description:
      "You tell yourself the window has closed. That learning to fly is a young person's game. It isn't. The average student pilot is 36.",
  },
  {
    number: "03",
    title: "TOO RISKY",
    description:
      "The fear isn't irrational — it's uninformed. Modern flight training is methodical, structured, and safer than your daily commute.",
  },
  {
    number: "04",
    title: "NO TIME",
    description:
      "Between work, family, and life — when? The answer: the same time you spend scrolling, wondering 'what if.' Two hours a week is enough.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-32 bg-surface">
      {/* Diagonal accent stripe */}
      <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
      <div className="absolute -top-20 right-0 w-64 h-64 bg-accent/5 rotate-45" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-xs tracking-[0.4em] uppercase font-mono">
              SOUND FAMILIAR?
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] max-w-4xl">
            THE LIES
            <br />
            <span className="text-muted">YOU KEEP</span>
            <br />
            TELLING
            <br />
            <span className="text-accent">YOURSELF</span>
          </h2>
        </AnimatedSection>

        <div className="mt-20 grid md:grid-cols-2 gap-0 border border-border">
          {painPoints.map((point, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={`p-8 lg:p-12 border-border ${
                  i < 2 ? "border-b" : ""
                } ${i % 2 === 0 ? "md:border-r" : ""} group hover:bg-accent/5 transition-colors duration-500`}
              >
                <div className="flex items-start gap-6">
                  <span className="text-accent font-mono text-sm mt-1">
                    {point.number}
                  </span>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-black tracking-[0.1em] uppercase mb-4 group-hover:text-accent transition-colors">
                      &ldquo;{point.title}&rdquo;
                    </h3>
                    <p className="text-muted leading-relaxed text-sm lg:text-base">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-16 border-l-4 border-accent pl-8 max-w-2xl">
            <p className="text-xl sm:text-2xl font-black text-foreground leading-snug">
              Every excuse has an expiration date.
              <br />
              <span className="text-muted">Yours expired a long time ago.</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
