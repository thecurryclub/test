"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const linkBase =
    "transition-colors hover:text-brand hover:underline underline-offset-4 decoration-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="container-max mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Tru Flavors home">
          <img src="/logo.png" alt="Tru Flavors logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-[15px] font-medium text-slate-900 md:flex">
          {/* Shop dropdown */}
          <div className="relative group">
            <button className={`${linkBase} flex items-center gap-1`}>
              <span className={isActive("/products") || isActive("/gift-cards") || isActive("/special-offers") ? "underline decoration-2 underline-offset-4 text-brand" : ""}>Shop</span>
              <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            </button>
            <div className="invisible absolute left-0 top-full mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <Link href="/products" className="block rounded-lg px-3 py-2 hover:bg-slate-50">Products</Link>
              <Link href="/gift-cards" className="block rounded-lg px-3 py-2 hover:bg-slate-50">Gift Cards</Link>
              <Link href="/special-offers" className="block rounded-lg px-3 py-2 hover:bg-slate-50">Special Offers</Link>
            </div>
          </div>

          {/* Subscribe CTA */}
          <Link href="/subscribe" className="rounded-full bg-orange-600 px-4 py-2 font-semibold text-white hover:bg-orange-700">
            Subscribe
          </Link>

          {/* Recipes */}
          <Link href="/recipes" className={`${linkBase} ${isActive("/recipes") ? "underline decoration-2 underline-offset-4 text-brand" : ""}`}>Recipes</Link>

          {/* Learn dropdown */}
          <div className="relative group">
            <button className={`${linkBase} flex items-center gap-1`}>
              <span className={isActive("/science") || isActive("/gut-health") || isActive("/ingredients") || isActive("/protocols") ? "underline decoration-2 underline-offset-4 text-brand" : ""}>Learn</span>
              <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            </button>
            <div className="invisible absolute left-0 top-full mt-2 w-64 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <Link href="/standards-ingredients" className="block rounded-lg px-3 py-2 hover:bg-slate-50">Our Science</Link>
              <Link href="/gut-health" className="block rounded-lg px-3 py-2 hover:bg-slate-50">Gut Health 101</Link>
              <Link href="/standards-ingredients" className="block rounded-lg px-3 py-2 hover:bg-slate-50">Ingredients We Choose</Link>
              <Link href="/protocols" className="block rounded-lg px-3 py-2 hover:bg-slate-50">Dietary Protocols</Link>
            </div>
          </div>

          {/* Partners dropdown */}
          <div className="relative group">
            <button className={`${linkBase} flex items-center gap-1`}>
              <span className={isActive("/wholesale") || isActive("/private-label") || isActive("/co-development") ? "underline decoration-2 underline-offset-4 text-brand" : ""}>Partners</span>
              <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            </button>
            <div className="invisible absolute left-0 top-full mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <Link href="/wholesale" className="block rounded-lg px-3 py-2 hover:bg-slate-50">Wholesale &amp; Foodservice</Link>
              <Link href="/private-label" className="block rounded-lg px-3 py-2 hover:bg-slate-50">Private Label</Link>
              <Link href="/co-development" className="block rounded-lg px-3 py-2 hover:bg-slate-50">Co-Development</Link>
            </div>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-3 text-slate-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-gray-100 bg-white/95 backdrop-blur md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-4 text-base font-medium text-slate-900">
            <Link href="/subscribe" className="mb-3 inline-flex w-max rounded-full bg-orange-600 px-4 py-2 font-semibold text-white hover:bg-orange-700">Subscribe</Link>

            <details className="py-2" open>
              <summary className="cursor-pointer select-none py-2">Shop</summary>
              <div className="ml-3 grid">
                <Link href="/products" className="py-1">Products</Link>
                <Link href="/gift-cards" className="py-1">Gift Cards</Link>
                <Link href="/special-offers" className="py-1">Special Offers</Link>
              </div>
            </details>

            <Link href="/recipes" className="block py-2">Recipes</Link>

            <details className="py-2">
              <summary className="cursor-pointer select-none py-2">Learn</summary>
              <div className="ml-3 grid">
                <Link href="/standards-ingredients" className="py-1">Our Science</Link>
                <Link href="/gut-health" className="py-1">Gut Health 101</Link>
                <Link href="/standards-ingredients" className="py-1">Ingredients We Choose</Link>
                <Link href="/protocols" className="py-1">Dietary Protocols</Link>
              </div>
            </details>

            <details className="py-2">
              <summary className="cursor-pointer select-none py-2">Partners</summary>
              <div className="ml-3 grid">
                <Link href="/wholesale" className="py-1">Wholesale &amp; Foodservice</Link>
                <Link href="/private-label" className="py-1">Private Label</Link>
                <Link href="/co-development" className="py-1">Co-Development</Link>
              </div>
            </details>
          </nav>
        </div>
      )}
    </header>
  );
}
