"use client";

import { useEffect, useRef, useState } from "react";
import { BorderBeam } from "border-beam";
import { ScrollZoomImage } from "@/components/ui/ScrollZoomImage";

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "6th", label: "Largest City", desc: "Philadelphia is the sixth biggest city in the country" },
    { number: "#1", label: "Poorest of Top 10", desc: "The poorest major metropolitan area out of the top ten" },
    { number: "↑", label: "Rising Insecurity", desc: "Rates have gone down nationwide — except in Philadelphia" },
  ];

  return (
    <section ref={ref} id="stats" className="relative min-h-screen overflow-hidden">
      <div className="section-padding">
          <div className="container-wide relative z-10">
            {/* Section header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-source-sans)" }}>
                Food insecurity is going down everywhere <span className="text-accent border-b-2 border-accent pb-0.5">except</span> Philadelphia.
              </h2>
            </div>

            {/* Two-column: image left, stats right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Featured image */}
              <div
                className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              >
                <ScrollZoomImage
                  src="/images/hungry-child.png"
                  alt="A child holding a cardboard sign reading HunGRY — food insecurity in Philadelphia"
                  crop="3% 6% 3% 3%"
                  className="w-full h-auto block"
                />
              </div>

              {/* Stats cards with BorderBeam effect */}
              <div
                className={`grid grid-cols-1 gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: "200ms" }}
              >
                {stats.map((stat, i) => (
                  <BorderBeam
                    key={i}
                    size="md"
                    colorVariant="sunset"
                    theme="dark"
                    duration={3 + i * 0.5}
                    strength={0.7}
                  >
                    <div
                      className={`dark-card p-8 flex items-center gap-6 transition-all duration-700 ${
                        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${300 + i * 150}ms` }}
                    >
                      <div className="flex-shrink-0 text-5xl md:text-6xl font-bold text-accent" style={{ fontFamily: "var(--font-source-sans)" }}>
                        {stat.number}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
                        <p className="text-sm text-text-muted leading-relaxed">{stat.desc}</p>
                      </div>
                    </div>
                  </BorderBeam>
                ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
