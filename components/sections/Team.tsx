"use client";

import { useEffect, useRef, useState } from "react";
import { BorderBeam } from "border-beam";

export default function Team() {
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

  const members = [
    { name: "Kaloni Davis", role: "Director", img: "/images/director-kaloni-v2.png", portraitClass: "", bio: "Most recent documentary A Hope That Lights The Way (2023), produced in part by the city of Philadelphia, spotlights the culture surrounding the epidemic of gun violence in the city's Black community. A graduate of Philadelphia's Creative and Performing Arts High School and the film program at Temple University, a Top 25 film program as of 2023." },
    { name: "David J. Greenberg", role: "Writer", img: "/images/writer-greenberg-v2.png", portraitClass: "", bio: "Philadelphia native, writer, and producer. Professor of screenwriting at Drexel University and University of the Arts. Has written over sixty screenplays for features, shorts, and documentaries including Bonnie & Clyde: Lovers on the Run (2012). His book Screenwriting For Micro Budget Films (Taylor & Francis, 2021) has been ranked in the Top 25 of book authority.org's greatest screenwriting books of all time." },
    { name: "Harry Hayman", role: "Producer", img: "/images/producer-hayman-v2.png", portraitClass: "team-portrait--harry", bio: "A longtime veteran of the food and beverage industry in Philadelphia and around the country who has seen the crisis firsthand as a volunteer and facilitator for a number of advocacy groups in the city. A committed vegetarian and activist who has come to embrace the power of film as an instrument for social change." },
  ];

  return (
    <section ref={ref} id="team" className="team-section section-padding">
      <div className="team-section-glow" aria-hidden="true" />

      <div className="container-wide relative z-10">
        <div className="team-heading mb-14 lg:mb-16">
          <div>
            <span className="sub-title">The Team</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-source-sans)" }}>
              The people behind the <span className="text-accent">film</span>
            </h2>
          </div>

          <p className="team-heading-copy">
            Three Philadelphia storytellers bringing lived experience, cinematic craft, and a shared commitment to social change.
          </p>
        </div>

        <div className="team-grid">
          {members.map((member, i) => (
            <BorderBeam
              key={i}
              size="md"
              colorVariant="sunset"
              theme="dark"
              duration={3 + i * 0.5}
              strength={0.6}
              style={{ height: "100%" }}
            >
              <article
                className={`team-card transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + i * 200}ms` }}
              >
                <div className="team-card-meta">
                  <span className="team-member-number">0{i + 1}</span>
                  <span className="team-role">{member.role}</span>
                </div>

                <div className="team-portrait-stage">
                  <div className="team-portrait-halo" aria-hidden="true" />
                  <div className="team-portrait-frame" aria-hidden="true" />
                  <img src={member.img} alt={member.name} className={`team-portrait ${member.portraitClass ?? ""}`} />
                </div>

                <div className="team-card-copy">
                  <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-source-sans)" }}>
                    {member.name}
                  </h3>
                  <div className="team-card-rule" aria-hidden="true">
                    <span />
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">{member.bio}</p>
                </div>
              </article>
            </BorderBeam>
          ))}
        </div>
      </div>
    </section>
  );
}
