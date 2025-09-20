"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}
function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return;
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { if (!getCookie("tf_cookie_consent")) setVisible(true); }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 right-4 z-[60] max-w-sm rounded-2xl border border-slate-200 bg-white/95 p-4 text-sm text-slate-800 shadow-xl backdrop-blur" role="dialog" aria-live="polite">
      <p className="pr-2">
        We use cookies to improve your experience and analyze traffic.{" "}
        <Link href="/privacy" className="text-brand underline underline-offset-2">Learn more</Link>.
      </p>
      <div className="mt-3 flex items-center gap-2">
        <button onClick={() => { setCookie("tf_cookie_consent", "accepted"); setVisible(false); }} className="rounded-full bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">Accept</button>
        <button onClick={() => { setCookie("tf_cookie_consent", "declined"); setVisible(false); }} className="rounded-full bg-white px-4 py-2 text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50">No thanks</button>
      </div>
    </div>
  );
}
