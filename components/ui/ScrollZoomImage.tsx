"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type ScrollZoomImageProps = {
  src: string;
  alt: string;
  className?: string;
  viewportClassName?: string;
  crop?: string;
  zoomAmount?: number;
};

type ZoomStyle = CSSProperties & {
  "--scroll-zoom-crop": string;
};

export function ScrollZoomImage({
  src,
  alt,
  className = "",
  viewportClassName = "",
  crop = "0px",
  zoomAmount = 0.16,
}: ScrollZoomImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateZoom = () => {
      frame = 0;

      if (reducedMotion.matches) {
        image.style.setProperty("--scroll-image-zoom", "1");
        return;
      }

      const rect = image.getBoundingClientRect();
      const travel = window.innerHeight + rect.height;
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / travel));
      image.style.setProperty("--scroll-image-zoom", String(1 + progress * zoomAmount));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateZoom);
    };

    updateZoom();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [zoomAmount]);

  return (
    <div
      className={`scroll-zoom-viewport ${viewportClassName}`}
      style={{ "--scroll-zoom-crop": crop } as ZoomStyle}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`scroll-zoom-image ${className}`}
      />
    </div>
  );
}
