"use client";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent flex items-center justify-center skew-x-[-6deg]">
                <span className="text-black font-black text-lg skew-x-[6deg]">
                  F
                </span>
              </div>
              <span className="text-foreground font-black text-sm tracking-[0.3em] uppercase">
                FLY WITH IAN
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Sharing the unfiltered journey of learning to fly after 20+ years
              of waiting. Built for dreamers who are ready to stop dreaming.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="font-black text-xs tracking-[0.3em] uppercase text-foreground mb-6">
              NAVIGATE
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#problem", label: "Why Now" },
                { href: "#solution", label: "The Guide" },
                { href: "#process", label: "The Process" },
                { href: "#about", label: "About Ian" },
                { href: "#cta", label: "Get The Guide" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted text-sm hover:text-accent transition-colors tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <h4 className="font-black text-xs tracking-[0.3em] uppercase text-foreground mb-6">
              CONNECT
            </h4>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Follow along as I document every lesson, every mistake, and every
              breakthrough on the road to earning my wings.
            </p>
            <div className="flex gap-4">
              {["YT", "IG", "TW", "TK"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 border border-border flex items-center justify-center text-muted text-xs font-mono hover:border-accent hover:text-accent transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs tracking-wide">
            &copy; {new Date().getFullYear()} FLY WITH IAN. ALL RIGHTS
            RESERVED.
          </p>
          <p className="text-muted/40 text-xs tracking-wide font-mono">
            BUILT WITH GRIT AND AVGAS
          </p>
        </div>
      </div>
    </footer>
  );
}
