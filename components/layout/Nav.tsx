"use client";

import { useState } from "react";
import { SpotlightNavLinks } from "@/components/ui/SpotlightNavLinks";

export default function Nav({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#top" },
    { label: "The Film", href: "#synopsis" },
    { label: "The Issue", href: "#stats" },
    { label: "Proposal", href: "#proposal" },
    { label: "Team", href: "#team" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-base-dark/95 backdrop-blur-md border-b border-border-dark"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-source-sans)" }}>
            I Am Hungry
          </span>
          <span className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-source-sans)" }}>
            In Philly
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:block">
          <SpotlightNavLinks items={links} />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500 bg-base-dark/95 backdrop-blur-md"
        style={{ maxHeight: open ? "500px" : "0px" }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-text-muted hover:text-accent transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
