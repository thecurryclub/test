// components/HashScroller.tsx
"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function HashScroller({ param = "hash" }: { param?: string }) {
  const sp = useSearchParams();

  useEffect(() => {
    const hash = sp.get(param);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("ring-2", "ring-brand");
    const t = setTimeout(() => el.classList.remove("ring-2", "ring-brand"), 1600);
    return () => clearTimeout(t);
  }, [sp, param]);

  return null;
}
