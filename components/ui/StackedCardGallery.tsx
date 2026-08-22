"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export type StackedGalleryPhoto = {
  img: string;
  alt: string;
  label: string;
};

type StackedCardGalleryProps = {
  photos: StackedGalleryPhoto[];
};

export function StackedCardGallery({ photos }: StackedCardGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const count = photos.length;

  const previous = () => setActiveIndex((current) => (current - 1 + count) % count);
  const next = () => setActiveIndex((current) => (current + 1) % count);

  const slotFor = (index: number) => {
    const forward = (index - activeIndex + count) % count;
    return forward > count / 2 ? forward - count : forward;
  };

  return (
    <div
      className="stacked-gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label="Behind the scenes production photos"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") previous();
        if (event.key === "ArrowRight") next();
      }}
    >
      <div className="stacked-gallery-stage">
        {photos.map((photo, index) => {
          const slot = slotFor(index);
          const active = slot === 0;
          const distance = Math.abs(slot);

          return (
            <motion.button
              type="button"
              key={photo.img}
              className={`stacked-gallery-card ${active ? "is-active" : ""}`}
              style={{ zIndex: 20 - distance }}
              animate={{
                x: `${slot * 43}%`,
                y: distance * 16,
                rotate: slot * 7,
                scale: 1 - distance * 0.065,
                opacity: 1 - distance * 0.08,
              }}
              transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 26 }}
              drag={active && !reduceMotion ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.32}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70 || info.velocity.x < -450) next();
                if (info.offset.x > 70 || info.velocity.x > 450) previous();
              }}
              onClick={() => setActiveIndex(index)}
              aria-label={`${photo.label}, photo ${index + 1} of ${count}${active ? ", current photo" : ""}`}
              aria-current={active ? "true" : undefined}
            >
              <img src={photo.img} alt={photo.alt} draggable={false} />
              <span className="stacked-gallery-shade" aria-hidden="true" />
              <span className="stacked-gallery-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="stacked-gallery-label">{photo.label}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="stacked-gallery-controls">
        <button type="button" onClick={previous} aria-label="Show previous behind the scenes photo">←</button>
        <p aria-live="polite">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          {photos[activeIndex]?.label}
        </p>
        <button type="button" onClick={next} aria-label="Show next behind the scenes photo">→</button>
      </div>
      <p className="stacked-gallery-instruction">Drag the front card or use the arrows</p>
    </div>
  );
}
