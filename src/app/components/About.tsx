"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-graphite-deep/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-16 ${
            inView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="geo-diamond" />
          <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
            About Us
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Big statement */}
          <div
            className={`${inView ? "animate-slide-left" : "opacity-0"}`}
          >
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              Pioneering the
              <br />
              <span className="text-amber-gradient">Future of</span>
              <br />
              Innovation
            </h2>
            <div className="mt-8 w-24 h-1 bg-amber" />
          </div>

          {/* Right: Description */}
          <div
            className={`space-y-6 ${
              inView ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <p className="font-body text-lg leading-relaxed text-foreground/70">
              DAINTYMINDZ LTD is a forward-thinking innovation laboratory
              dedicated to transforming ideas into impactful solutions. We operate
              at the intersection of intellectual rigor and creative boldness,
              building technologies and strategies that drive meaningful progress.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground/70">
              Our approach combines scientific precision with visionary thinking.
              Every project we undertake is grounded in deep research, analytical
              excellence, and an unwavering commitment to quality — ensuring our
              work doesn&apos;t just meet expectations, but redefines them.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground/70">
              From concept to execution, we bring together multidisciplinary
              expertise to solve complex challenges. Our team thrives on curiosity,
              collaboration, and the relentless pursuit of innovation that creates
              lasting value for our clients and communities.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 ${
            inView ? "animate-fade-up delay-400" : "opacity-0"
          }`}
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "20+", label: "Team Experts" },
            { number: "10+", label: "Industries Served" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 border border-foreground/5 rounded-sm hover:border-amber/20 transition-colors duration-500"
              style={{ animationDelay: `${400 + i * 150}ms` }}
            >
              <div className="font-display font-extrabold text-4xl lg:text-5xl text-amber">
                {stat.number}
              </div>
              <div className="mt-2 font-body text-sm text-foreground/50 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
