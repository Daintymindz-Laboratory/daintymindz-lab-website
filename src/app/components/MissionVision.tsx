"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

export default function MissionVision() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);

  return (
    <section
      id="mission"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber/[0.02] to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-16 ${
            inView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="geo-diamond" />
          <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
            Purpose & Direction
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Mission */}
          <div
            className={`relative p-10 lg:p-16 border border-foreground/5 ${
              inView ? "animate-slide-left" : "opacity-0"
            }`}
          >
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-12 h-12">
              <div className="absolute top-0 left-0 w-full h-px bg-amber" />
              <div className="absolute top-0 left-0 h-full w-px bg-amber" />
            </div>

            <div className="mb-8 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center bg-amber/10 rounded-sm">
                <svg
                  className="w-7 h-7 text-amber"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="font-display font-extrabold text-sm tracking-[0.3em] uppercase text-foreground/40">
                Our Mission
              </h3>
            </div>

            <h2 className="font-display font-bold text-3xl lg:text-4xl leading-tight text-foreground mb-6">
              Empowering Progress Through{" "}
              <span className="text-amber-gradient">Intelligent Innovation</span>
            </h2>

            <p className="font-body text-base leading-relaxed text-foreground/60">
              Our mission is to harness the power of intellectual energy and
              scientific precision to develop solutions that drive meaningful
              progress. We are committed to delivering excellence through rigorous
              research, innovative thinking, and a deep understanding of the
              challenges our clients face. Every endeavour reflects our dedication
              to creating value that endures.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <div className="w-8 h-px bg-amber" />
              <span className="font-body text-xs tracking-[0.2em] uppercase text-amber/60">
                Drive · Excel · Deliver
              </span>
            </div>
          </div>

          {/* Vision */}
          <div
            className={`relative p-10 lg:p-16 border border-foreground/5 bg-graphite-deep/30 ${
              inView ? "animate-slide-right" : "opacity-0"
            }`}
          >
            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-full h-px bg-amber" />
              <div className="absolute bottom-0 right-0 h-full w-px bg-amber" />
            </div>

            <div className="mb-8 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center bg-amber/10 rounded-sm">
                <svg
                  className="w-7 h-7 text-amber"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display font-extrabold text-sm tracking-[0.3em] uppercase text-foreground/40">
                Our Vision
              </h3>
            </div>

            <h2 className="font-display font-bold text-3xl lg:text-4xl leading-tight text-foreground mb-6">
              Shaping a World Powered by{" "}
              <span className="text-amber-gradient">Bold Ideas</span>
            </h2>

            <p className="font-body text-base leading-relaxed text-foreground/60">
              We envision a future where innovation is not just a catalyst for
              growth, but a foundation for sustainable transformation. DAINTYMINDZ
              LAB aspires to be a global beacon of intellectual leadership —
              pioneering breakthroughs that redefine industries, uplift communities,
              and inspire the next generation of thinkers and creators to dream
              without boundaries.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <div className="w-8 h-px bg-amber" />
              <span className="font-body text-xs tracking-[0.2em] uppercase text-amber/60">
                Envision · Pioneer · Transform
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
