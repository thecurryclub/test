"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return (
    <div className="fixed bottom-3 left-0 right-0 md:hidden">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-full shadow-soft bg-ink text-white flex justify-between items-center px-4 py-2">
          <span className="text-sm">Ready in ≤ 5 minutes</span>
          <div className="flex gap-2">
            <Link className="bg-brand text-white rounded-full px-3 py-1.5 text-sm" href="/products">Shop</Link>
            <Link className="bg-white text-ink rounded-full px-3 py-1.5 text-sm" href="/subscribe">Culture Box</Link>
          </div>
        </div>
      </div>
    </div>
  );
}