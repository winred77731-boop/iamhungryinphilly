"use client";

import { useEffect, useRef, useState } from "react";
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
            A Philadelphia Story With <span className="text-accent">National Relevance</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`} style={{ transitionDelay: "200ms" }}>
            <div className="space-y-4 text-text-muted leading-relaxed mb-8">
              <p>
                &ldquo;I&apos;m Hungry In Philadelphia&rdquo; seeks to not only answer this question but provide possible solutions through interviews with <span className="text-white font-semibold">academics, politicians, doctors, food insecurity activists</span>, and a cross-section of citizens.
              </p>
              <p>
                Employing a <span className="text-accent font-semibold">gritty cinematic style</span> that captures the feel of the city and using a mix of voice-over narration and on-camera interviews, the documentary will get to the heart of the issue through testimonials and footage showing the magnitude of the problem.
              </p>
            </div>

            {/* Production status */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium uppercase tracking-wider" style={{ fontFamily: "var(--font-source-sans)" }}>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                We Are In Post Production
              </span>
            </div>

            <RadialGlowLink href="#team" showArrow>Meet the Team</RadialGlowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
