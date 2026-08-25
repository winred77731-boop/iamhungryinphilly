"use client";

import { useEffect, useRef } from "react";
import { RadialGlowLink } from "@/components/ui/RadialGlowLink";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const layers = Array.from(section.querySelectorAll<HTMLElement>("[data-hero-parallax]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateParallax = () => {
      frame = 0;

      if (reducedMotion.matches) {
        layers.forEach((layer) => {
          layer.style.setProperty("--hero-parallax-offset", "0px");
          layer.style.setProperty("--hero-parallax-opacity", "1");
        });
        scrollHintRef.current?.style.setProperty("--hero-hint-offset", "0px");
        scrollHintRef.current?.style.setProperty("--hero-hint-opacity", "1");
        return;
      }

      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));

      layers.forEach((layer) => {
        const distance = Number(layer.dataset.heroParallax || 0);
        layer.style.setProperty("--hero-parallax-offset", `${progress * distance}px`);
        layer.style.setProperty("--hero-parallax-opacity", String(1 - progress * 0.72));
      });

      scrollHintRef.current?.style.setProperty("--hero-hint-offset", `${progress * 32}px`);
      scrollHintRef.current?.style.setProperty("--hero-hint-opacity", String(1 - progress));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[100svh] w-full flex items-center"
    >
      {/* Hero content — Agenko style: sub-title pill + big heading */}
      <div className="hero-parallax-stage container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="hero-parallax-layer hero-parallax-layer--title" data-hero-parallax="40">
            <h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s", fontFamily: "var(--font-source-sans)" }}
            >
              I Am Hungry<br />
              <span className="text-accent">In Philadelphia</span>
            </h1>
          </div>

          <div className="hero-parallax-layer hero-parallax-layer--intro" data-hero-parallax="110">
            <p
              className="text-lg md:text-xl text-white/80 mb-4 max-w-xl opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              The Many Faces of Food Insecurity — exploring hunger in one of America's largest cities.
            </p>
          </div>

          <div className="hero-parallax-layer hero-parallax-layer--credits" data-hero-parallax="180">
            <p
              className="text-base md:text-lg text-white/70 mb-10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              Produced by Harry Hayman · Directed by Kaloni Davis · Story by David J. Greenberg
            </p>
          </div>

          <div className="hero-parallax-layer hero-parallax-layer--actions" data-hero-parallax="250">
            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <RadialGlowLink href="#synopsis" showArrow>Explore the Film</RadialGlowLink>
              <RadialGlowLink href="#proposal">The Proposal</RadialGlowLink>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div ref={scrollHintRef} className="hero-scroll-hint absolute bottom-8 left-1/2 z-10">
        <div className="w-px h-12 bg-white/20 animate-scroll-hint" />
      </div>
    </section>
  );
}
