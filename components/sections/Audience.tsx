"use client";

import { useEffect, useRef, useState } from "react";

export default function Audience() {
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

  const audiences = [
    { number: "01", label: "Policy and Practice", title: "Professional Audiences", desc: "Researchers, educators, healthcare professionals, policymakers, and frontline service providers working across food access and public health." },
    { number: "02", label: "Civic and Community", title: "Socially Engaged Audiences", desc: "Viewers with an established interest in social impact, community development, advocacy, and public-interest storytelling." },
    { number: "03", label: "Public Awareness", title: "General Audiences", desc: "Viewers with limited exposure to food insecurity, for whom the film can provide context, empathy, and a meaningful point of entry." },
  ];

  return (
    <section ref={ref} id="audience" className="audience-section section-padding">
      <div className="container-wide relative z-10">
        <div className="audience-layout">
          <div className={`audience-intro transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="sub-title">Audience</span>
            <p className="audience-overline">Audience Profile</p>
            <h2 className="audience-title" style={{ fontFamily: "var(--font-source-sans)" }}>
              A documentary with broad civic and <span>cultural relevance.</span>
            </h2>

            <p className="audience-intro-copy">
              The film is positioned to engage professionals working directly with food insecurity, socially engaged viewers, and audiences encountering the issue for the first time.
            </p>

            <div className="audience-outcome">
              <span>Audience Objective</span>
              <strong>Expand understanding and encourage informed engagement.</strong>
            </div>
          </div>

          <div className="audience-list">
            {audiences.map((item, i) => (
              <article
                key={item.number}
                className={`audience-card transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="audience-card-number">{item.number}</div>
                <div className="audience-card-content">
                  <p className="audience-card-label">{item.label}</p>
                  <h3 style={{ fontFamily: "var(--font-source-sans)" }}>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <span className="audience-card-mark" aria-hidden="true">↗</span>
              </article>
            ))}

            <div className={`audience-reach-note transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "700ms" }}>
              <span>Shared subject</span>
              <div aria-hidden="true" />
              <strong>Multiple audience pathways</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
