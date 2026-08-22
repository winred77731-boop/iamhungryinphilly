"use client";

import { useEffect, useRef, useState } from "react";
import { BorderBeam } from "border-beam";
import { RadialGlowLink } from "@/components/ui/RadialGlowLink";

export default function Proposal() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const budgetItems = [
    { item: "Equipment Rental", pct: 20 },
    { item: "Crew", pct: 25 },
    { item: "Post Production", pct: 20 },
    { item: "Festival Strategy", pct: 10 },
    { item: "Marketing & PR", pct: 15 },
    { item: "Contingency", pct: 10 },
  ];

  return (
    <section ref={ref} id="proposal" className="proposal-section section-padding">
      <svg className="proposal-pen-flourish" viewBox="0 0 1440 820" preserveAspectRatio="none" aria-hidden="true">
        <path
          className="proposal-pen-flourish__stroke"
          d="M-142 650C88 474 302 344 528 357C746 370 850 519 1018 574C1198 633 1382 556 1582 366"
        />
        <path
          className="proposal-pen-flourish__lift"
          d="M822 292C984 258 1142 294 1278 386"
        />
      </svg>
      <div className="container-wide relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="sub-title">The Proposal</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-source-sans)" }}>
            A <span className="text-accent">$50,000</span> documentary with Oscar-qualifying ambitions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: description with check list — Agenko pattern */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`} style={{ transitionDelay: "200ms" }}>
            <div className="space-y-4 text-text-muted leading-relaxed mb-8">
              <p>
                &ldquo;I&apos;m Hungry In Philadelphia&rdquo; seeks to not only answer this question but provide possible solutions through interviews with <span className="text-white font-semibold">academics, politicians, doctors, food insecurity activists</span>, and a cross-section of citizens.
              </p>
              <p>
                Employing a <span className="text-accent font-semibold">gritty cinematic style</span> that captures the feel of the city and using a mix of voice-over narration and on-camera interviews, the documentary will get to the heart of the issue through testimonials and footage showing the magnitude of the problem.
              </p>
            </div>

            {/* Check list — Agenko pattern */}
            <ul className="check-list mb-8">
              <li>
                <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Production began winter 2024, continuing through spring
              </li>
              <li>
                <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Post-production completed for Oscar-qualifying festival submission
              </li>
              <li>
                <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Team meeting since November 2023, project coming together quickly
              </li>
            </ul>

            <RadialGlowLink href="#team" showArrow>Meet the Team</RadialGlowLink>
          </div>

          {/* Right: budget card — dark card pattern */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`} style={{ transitionDelay: "300ms" }}>
            <BorderBeam
              size="md"
              colorVariant="sunset"
              theme="dark"
              duration={3.5}
              strength={0.7}
            >
            <div className="dark-card p-8">
              <h3 className="text-lg font-semibold text-accent mb-6 uppercase tracking-wider" style={{ fontFamily: "var(--font-source-sans)" }}>
                Budget Allocation
              </h3>
              <div className="space-y-5">
                {budgetItems.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-muted">{item.item}</span>
                      <span className="text-white font-medium">{item.pct}%</span>
                    </div>
                    <div className="h-2 bg-border-dark rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-1000"
                        style={{ width: visible ? `${item.pct}%` : "0%", transitionDelay: `${400 + i * 100}ms` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border-dark">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-semibold text-white uppercase tracking-wider">Total Budget</span>
                  <span className="text-4xl font-bold text-accent" style={{ fontFamily: "var(--font-source-sans)" }}>$50,000</span>
                </div>
              </div>
            </div>
            </BorderBeam>
          </div>
        </div>
      </div>
    </section>
  );
}
