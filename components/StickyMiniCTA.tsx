"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyMiniCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setVisible(progress > 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-3 z-[60] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border bg-white/90 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="flex flex-wrap items-center justify-between gap-3 p-3">
          <p className="text-sm text-gray-700">Hungry now? Heat, add protein, and plate in minutes.</p>
          <div className="flex items-center gap-2">
            <Link href="/products" className="rounded-full bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">Shop now</Link>
            <Link href="/how-it-works" className="rounded-full border border-orange-200 bg-white px-4 py-2 text-orange-700 hover:bg-orange-50">How it works</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
