"use client";

import { useEffect, useRef, useState } from "react";
import { BlurredSectionBg } from "@/components/BlurredSectionBg";

export default function DocumentaryComparisons() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const films = [
    { title: "Dive! The Film", year: "2010", desc: "An award-winning film that illustrates the amount of food waste in this country by following a group of dumpster divers.", img: "/images/doc-ref-1.png", tag: "Food Waste" },
    { title: "A Place At The Table", year: "2012", desc: "Specifically addresses the issue of food insecurity and features a single mother from Philadelphia. Produced by Participant Media, whose documentary won the Oscar for best feature-length documentary in 2009.", img: "/images/doc-ref-2.png", tag: "Food Insecurity" },
    { title: "Hunger In America", year: "2014", desc: "An Emmy award-winning documentary.", img: "/images/doc-ref-3.png", tag: "Emmy Winner" },
    { title: "Hungry To Learn", year: "2019", desc: "Focuses on hunger among college students forced to choose between paying tuition and eating. Played at South By Southwest and other important festivals.", img: "/images/doc-ref-4.png", tag: "SXSW" },
  ];

  return (
    <section ref={ref} id="comparisons" className="section-padding relative overflow-hidden">
      {/* Blurred film strip background */}
      <BlurredSectionBg
        imageUrl="/images/film-strip-bg.jpg"
        blur={2.5}
        opacity={40}
        overlayClass="bg-base-dark/60"
      />

      <div className="container-wide relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-source-sans)" }}>
            Films that paved the way
          </h2>
        </div>

        {/* Film synopsis video from original site */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            <video
              src="/videos/film-synopsis.mov"
              controls
              preload="metadata"
              controlsList="nodownload"
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* Poster row — static grid, no carousel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {films.map((film, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="relative rounded-lg overflow-hidden mb-4 bg-white p-2">
                <img
                  src={film.img}
                  alt={film.title}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-base-dark bg-accent px-2 py-0.5 rounded-full">
                    {film.tag}
                  </span>
                  <span className="text-xs text-text-muted">{film.year}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: "var(--font-source-sans)" }}>
                  {film.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {film.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
