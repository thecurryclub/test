"use client";
import { useEffect, useRef, useState } from "react";

export default function BadgesMarquee() {
  const base = [
    "Gundry‑aware",
    "Lectin‑smart prep",
    "Chef‑crafted",
    "Clean label",
    "Global flavors",
    "Plant‑forward options",
    "Olive & avocado oils",
    "No artificial colors/flavors",
    "Pressure‑cooked legumes",
    "Ready in minutes",
    "3‑step cooking",
    "Ambient‑stable"
  ];

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [dup, setDup] = useState(2);

  useEffect(() => {
    const measure = () => {
      if (!viewportRef.current || !trackRef.current) return;
      const vw = viewportRef.current.offsetWidth;
      const tw = trackRef.current.scrollWidth;
      // ensure content is wider than viewport; add +1 buffer to avoid gaps
      const needed = tw > 0 ? Math.max(2, Math.ceil(vw / tw) + 1) : 2;
      setDup(needed);
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, []);

  const items = Array.from({ length: dup }).flatMap(() => base);

  return (
    <section className="tf-marquee">
      <div ref={viewportRef} className="tf-marquee__viewport">
        <ul ref={trackRef} className="tf-marquee__track tf-marquee__track--a">
          {items.map((t, i) => (
            <li key={`a-${i}`} className="tf-marquee__item">{t}</li>
          ))}
        </ul>
        <ul aria-hidden="true" className="tf-marquee__track tf-marquee__track--b">
          {items.map((t, i) => (
            <li key={`b-${i}`} className="tf-marquee__item">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
