"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Research & Development",
    description:
      "Deep-dive research programs that explore emerging technologies and translate scientific discoveries into practical, market-ready solutions.",
    tags: ["AI/ML", "Data Science", "Biotech"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Digital Transformation",
    description:
      "End-to-end digital strategy and implementation that modernises operations, enhances customer experiences, and drives competitive advantage.",
    tags: ["Cloud", "Automation", "UX Design"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Strategic Consulting",
    description:
      "Data-driven strategic guidance that helps organisations navigate complexity, identify opportunities, and make decisions with confidence.",
    tags: ["Analytics", "Growth", "Market Entry"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Training & Development",
    description:
      "Bespoke training programmes designed to build capacity, foster critical thinking, and equip teams with the skills needed for sustained success.",
    tags: ["Workshops", "Leadership", "Tech Skills"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Product Innovation",
    description:
      "From ideation to launch, we craft innovative products that solve real problems, combining design thinking with technical excellence.",
    tags: ["Prototyping", "MVP", "Scaling"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Quality Assurance",
    description:
      "Rigorous testing and validation frameworks that ensure every deliverable meets the highest standards of reliability, security, and performance.",
    tags: ["Testing", "Security", "Compliance"],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-graphite-deep/80 via-background to-graphite-deep/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div
          className={`flex items-center gap-4 mb-6 ${
            inView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="geo-diamond" />
          <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
            What We Do
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber/30 to-transparent" />
        </div>

        <div
          className={`max-w-3xl mb-20 ${
            inView ? "animate-fade-up delay-200" : "opacity-0"
          }`}
        >
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
            Solutions Built on{" "}
            <span className="text-amber-gradient">Scientific Rigor</span>
          </h2>
          <p className="mt-6 font-body text-lg text-foreground/60 leading-relaxed">
            We offer a comprehensive suite of services designed to accelerate
            innovation, optimize operations, and create lasting impact.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative p-8 border border-foreground/5 bg-graphite-deep/30 rounded-sm card-hover ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />

              <div className="relative z-10">
                <div className="text-amber/70 group-hover:text-amber transition-colors duration-300 mb-6">
                  {service.icon}
                </div>

                <h3 className="font-display font-bold text-xl text-foreground group-hover:text-amber transition-colors duration-300 mb-3">
                  {service.title}
                </h3>

                <p className="font-body text-sm leading-relaxed text-foreground/50 mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-body font-semibold tracking-wider uppercase border border-amber/15 text-amber/50 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
