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
          ariaLabel="Animated gold aurora background for Potential Creative Collaborators section"
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="sub-title">Potential Creative Collaborators</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-source-sans)" }}>
            The filmmakers are exploring <span className="text-accent">potential Philadelphia collaborators</span>.
          </h2>
        </div>

        <p className={`text-center mt-12 text-sm text-text-muted max-w-2xl mx-auto transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "400ms" }}>
          The filmmakers are exploring potential Philadelphia collaborators.
        </p>
      </div>
    </section>
  );
}
