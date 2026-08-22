"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Synopsis from "@/components/sections/Synopsis";
import Proposal from "@/components/sections/Proposal";
import DocumentaryComparisons from "@/components/sections/DocumentaryComparisons";
import Audience from "@/components/sections/Audience";
import Casting from "@/components/sections/Casting";
import Team from "@/components/sections/Team";
import Gallery from "@/components/sections/Gallery";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import { RiverLightBackdrop } from "@/components/RiverLightBackdrop";
import SectionTransition from "@/components/SectionTransition";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Nav scrolled={scrolled} />
      <main id="main-content">
        <div className="river-light-sequence">
          <RiverLightBackdrop />
          <div className="relative z-10">
            <Hero />
            <Stats />
          </div>
        </div>
        <SectionTransition variant="documentary" />
        <Synopsis />
        <SectionTransition variant="spotlight" />
        <Proposal />
        <SectionTransition variant="documentary" />
        <DocumentaryComparisons />
        <SectionTransition variant="spotlight" />
        <Audience />
        <SectionTransition variant="aurora" />
        <Casting />
        <SectionTransition variant="smoke" />
        <Team />
        <SectionTransition variant="gallery" />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
