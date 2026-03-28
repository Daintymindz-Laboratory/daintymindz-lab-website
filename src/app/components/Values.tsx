"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const values = [
  {
    title: "Intellectual Energy",
    description:
      "We bring relentless curiosity and mental agility to every challenge. Our team thrives on exploring new frontiers of knowledge.",
    color: "amber",
    icon: "⚡",
  },
  {
    title: "Precision",
    description:
      "Every detail matters. We approach our work with meticulous care, ensuring accuracy and excellence in everything we deliver.",
    color: "graphite",
    icon: "◈",
  },
  {
    title: "Innovation",
    description:
      "We don't follow paths — we create them. Bold, original thinking is at the heart of our approach to solving complex problems.",
    color: "amber",
    icon: "✦",
  },
  {
    title: "Scientific Rigor",
    description:
      "Our methods are grounded in evidence-based practice, analytical depth, and systematic thinking that stands up to scrutiny.",
    color: "graphite",
    icon: "◎",
  },
  {
    title: "Forward Momentum",
    description:
      "We are always moving forward — anticipating trends, seizing opportunities, and driving continuous improvement in all we do.",
    color: "amber",
    icon: "→",
  },
  {
    title: "Value Creation",
    description:
      "Everything we do is measured by the tangible impact it creates — for our clients, our communities, and the world at large.",
    color: "graphite",
    icon: "◆",
  },
];

export default function Values() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      id="values"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-amber/[0.03] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber/[0.05] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-amber/[0.07] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-20">
          <div
            className={`flex items-center justify-center gap-4 mb-6 ${
              inView ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber/30" />
            <div className="geo-diamond" />
            <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
              Our Values
            </span>
            <div className="geo-diamond" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber/30" />
          </div>

          <h2
            className={`font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground ${
              inView ? "animate-fade-up delay-200" : "opacity-0"
            }`}
          >
            The Principles That{" "}
            <span className="text-amber-gradient">Define Us</span>
          </h2>

          <p
            className={`mt-6 font-body text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed ${
              inView ? "animate-fade-up delay-300" : "opacity-0"
            }`}
          >
            Our core values are not just ideals — they are the operating system
            that drives every decision, every project, and every relationship.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`group relative ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${400 + i * 100}ms` }}
            >
              <div className="relative p-8 h-full border border-foreground/5 rounded-sm overflow-hidden card-hover">
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] ${
                    value.color === "amber"
                      ? "bg-gradient-to-r from-amber to-amber-light"
                      : "bg-gradient-to-r from-graphite-light to-graphite"
                  }`}
                />

                {/* Hover background */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    value.color === "amber"
                      ? "bg-gradient-to-br from-amber/[0.05] to-transparent"
                      : "bg-gradient-to-br from-graphite/20 to-transparent"
                  }`}
                />

                <div className="relative z-10">
                  <span className="text-3xl mb-4 block">{value.icon}</span>

                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-amber transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="font-body text-sm leading-relaxed text-foreground/50">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
