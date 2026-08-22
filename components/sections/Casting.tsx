"use client"

import { useEffect, useRef, useState } from "react";
import AuroraBackground from "@/components/aurora-background";

export default function Casting() {
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

  const talent = [
    { name: "Will Smith", role: "Potential Narrator", note: "Oscar and Grammy award-winning international superstar with personal connections to Philadelphia", img: "/images/cast-1.png" },
    { name: "DJ Jazzy Jeff", role: "Potential Score / Single", note: "Musical partner of Will Smith, Philadelphia native", img: "/images/cast-2-enhanced.png", enhanced: true },
    { name: "Black Thought", role: "Potential Score / Single", note: "Of The Roots, acclaimed Philadelphia musician", img: "/images/cast-3.png" },
    { name: "James Poser", role: "Potential Score", note: "Of The Roots, acclaimed Philadelphia musician", img: "/images/cast-4.png" },
  ];

  return (
    <section ref={ref} id="casting" className="section-padding relative overflow-hidden">
      {/* Aurora background using site gold/amber color scheme - rendered as background layer */}
      <div className="absolute inset-0 -z-10">
        <AuroraBackground
          gradientColors={[
            "var(--aurora-color1, rgba(232, 163, 23, 0.15))",
            "var(--aurora-color2, rgba(244, 185, 66, 0.1))",
          ]}
          pulseDuration={12}
          starCount={40}
          ariaLabel="Animated gold aurora background for Casting Ideas section"
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="sub-title">Casting Ideas</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-source-sans)" }}>
            The second most purchased genre at the American Film Market is the <span className="text-accent">socially aware documentary</span>
          </h2>
        </div>

        {/* Actor cards with photo above name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {talent.map((person, i) => (
            <div
              key={i}
              className={`dark-card overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + i * 100}ms`, border: "2px solid var(--color-accent)" }}
            >
              {/* Actor photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={person.img}
                  alt={person.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    person.enhanced
                      ? "object-top origin-top -translate-y-2 scale-[1.06] hover:scale-[1.09]"
                      : "hover:scale-105"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-dark via-transparent to-transparent" />
              </div>

              {/* Name and details below photo */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: "var(--font-source-sans)" }}>
                  {person.name}
                </h3>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                  {person.role}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  {person.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center mt-12 text-sm text-text-muted max-w-2xl mx-auto transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "600ms" }}>
          The team has personal and professional connections to these artists, who could narrate, score, and possibly provide an attention-getting single.
        </p>
      </div>
    </section>
  );
}
