"use client";

import { useEffect, useRef, useState } from "react";
import { BlurredSectionBg } from "@/components/BlurredSectionBg";
import { ScrollZoomImage } from "@/components/ui/ScrollZoomImage";

export default function Synopsis() {
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
    <section ref={ref} id="synopsis" className="section-padding relative overflow-hidden">
      {/* Blurred parallax background */}
      <BlurredSectionBg
        imageUrl="/images/food-service.jpg"
        blur={2.5}
        opacity={50}
        overlayClass="bg-base-dark/50"
      />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <ScrollZoomImage
              src="/images/title.png"
              alt="I Am Hungry In Philadelphia — documentary poster collage"
              className="w-full h-auto block"
            />
          </div>

          {/* Text */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`} style={{ transitionDelay: "200ms" }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-source-sans)" }}>
              The birthplace of the country. <span className="text-accent">The poorest big city.</span>
            </h2>

            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Philadelphia needs little introduction — the birthplace of the country, home of <span className="text-white font-semibold">Rocky</span>, cheesesteaks, some of the finest restaurants in the country, and the biggest city park in the world.
              </p>
              <p>
                The film begins with the familiar, a quick look at the things everyone knows, but then shakes things up with a raw, uncompromising view of the country&apos;s poorest big city.
              </p>
              <p>
                We introduce the problem through interviews with <span className="text-white font-semibold">local and federal officials</span>, <span className="text-white font-semibold">professors</span>, <span className="text-white font-semibold">medical professionals</span>, <span className="text-white font-semibold">advocates</span>, people working on the streets toward a solution, and finally, <span className="text-accent font-semibold">first-person accounts</span> of what it is like to live not knowing where your next meal will come from.
              </p>
            </div>

            <a href="#proposal" className="read-more mt-8">
              Read the Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
