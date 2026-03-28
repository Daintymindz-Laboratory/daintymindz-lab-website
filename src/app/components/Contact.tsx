"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="section-depth-soft absolute inset-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber/[0.04] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          {/* Section label */}
          <div
            className={`flex items-center justify-center gap-4 mb-8 ${
              inView ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber/30" />
            <div className="geo-diamond" />
            <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
              Get In Touch
            </span>
            <div className="geo-diamond" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber/30" />
          </div>

          <h2
            className={`font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] text-foreground ${
              inView ? "animate-fade-up delay-200" : "opacity-0"
            }`}
          >
            Ready to Build
            <br />
            <span className="text-amber-gradient">Something Bold?</span>
          </h2>

          <p
            className={`mt-8 font-body text-lg text-foreground/60 max-w-xl mx-auto leading-relaxed ${
              inView ? "animate-fade-up delay-300" : "opacity-0"
            }`}
          >
            Whether you have a challenge to solve, an idea to explore, or a
            vision to realise — we&apos;re ready to listen. Let&apos;s create
            something extraordinary together.
          </p>

          {/* CTA */}
          <div
            className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 ${
              inView ? "animate-fade-up delay-400" : "opacity-0"
            }`}
          >
            <a
              href="mailto:hello@daintymindz.com"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-amber text-graphite-deep font-display font-bold text-base tracking-widest rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(213,156,16,0.3)] animate-pulse-glow"
            >
              <span className="relative z-10">START A CONVERSATION</span>
              <svg
                className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <div className="absolute inset-0 bg-amber-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </div>

          {/* Contact details */}
          <div
            className={`mt-16 grid sm:grid-cols-3 gap-8 ${
              inView ? "animate-fade-up delay-500" : "opacity-0"
            }`}
          >
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-amber/20 rounded-sm">
                <svg
                  className="w-5 h-5 text-amber"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h4 className="font-display font-bold text-sm tracking-wider text-foreground mb-1">
                EMAIL
              </h4>
              <p className="font-body text-sm text-foreground/50">
                hello@daintymindz.com
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-amber/20 rounded-sm">
                <svg
                  className="w-5 h-5 text-amber"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h4 className="font-display font-bold text-sm tracking-wider text-foreground mb-1">
                LOCATION
              </h4>
              <p className="font-body text-sm text-foreground/50">
                United Kingdom
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-amber/20 rounded-sm">
                <svg
                  className="w-5 h-5 text-amber"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-display font-bold text-sm tracking-wider text-foreground mb-1">
                HOURS
              </h4>
              <p className="font-body text-sm text-foreground/50">
                Mon – Fri, 9am – 6pm GMT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
