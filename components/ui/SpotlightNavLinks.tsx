"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";

export type SpotlightNavItem = { label: string; href: string };

export function SpotlightNavLinks({ items }: { items: SpotlightNavItem[] }) {
  const navRef = useRef<HTMLDivElement>(null);
  const spotlightX = useRef(0);
  const ambienceX = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const getItemCenter = (index: number) => {
    const nav = navRef.current;
    const item = nav?.querySelector<HTMLElement>(`[data-index="${index}"]`);
    if (!nav || !item) return null;
    const navRect = nav.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    return itemRect.left - navRect.left + itemRect.width / 2;
  };

  const setVariable = (name: string, value: number) => {
    navRef.current?.style.setProperty(name, `${value}px`);
  };

  const springTo = (
    valueRef: React.MutableRefObject<number>,
    target: number,
    variable: "--spotlight-x" | "--ambience-x"
  ) => {
    if (shouldReduceMotion) {
      valueRef.current = target;
      setVariable(variable, target);
      return;
    }
    animate(valueRef.current, target, {
      type: "spring",
      stiffness: 210,
      damping: 22,
      onUpdate: (value) => {
        valueRef.current = value;
        setVariable(variable, value);
      },
    });
  };

  useEffect(() => {
    const center = getItemCenter(activeIndex);
    if (center === null) return;
    springTo(ambienceX, center, "--ambience-x");
    if (!isHovering) springTo(spotlightX, center, "--spotlight-x");
  }, [activeIndex, isHovering, shouldReduceMotion]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const nav = navRef.current;
    if (!nav) return;
    const x = event.clientX - nav.getBoundingClientRect().left;
    spotlightX.current = x;
    setVariable("--spotlight-x", x);
  };

  const returnSpotlightToActive = () => {
    setIsHovering(false);
    const center = getItemCenter(activeIndex);
    if (center !== null) springTo(spotlightX, center, "--spotlight-x");
  };

  return (
    <div
      ref={navRef}
      onPointerEnter={() => setIsHovering(true)}
      onPointerMove={handlePointerMove}
      onPointerLeave={returnSpotlightToActive}
      className="relative h-11 overflow-hidden rounded-full border border-white/10 bg-[#121315]/82 shadow-[0_12px_35px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-55"}`}
        style={{ background: "radial-gradient(125px circle at var(--spotlight-x) 100%, rgba(232,163,23,0.25) 0%, rgba(232,163,23,0.09) 34%, transparent 68%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[2px] w-full"
        style={{ background: "radial-gradient(68px circle at var(--ambience-x) 0%, rgba(244,185,66,1) 0%, rgba(232,163,23,0.5) 46%, transparent 100%)" }}
      />
      <ul className="relative z-10 flex h-full items-center px-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex h-full items-center">
            <a
              href={item.href}
              data-index={index}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/65 ${activeIndex === index ? "text-white" : "text-text-muted hover:text-accent-light"}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
