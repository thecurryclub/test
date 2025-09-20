"use client";
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";

type MenuLink = { label: string; href: { pathname: string; query?: { [key: string]: string; }; }; };
type MenuSection = { heading: string; links: MenuLink[]; };
type NavItem =
  | { type: "link"; label: string; href: { pathname: string; query?: { [key: string]: string; }; }; }
  | { type: "dropdown"; label: string; sections: MenuSection[] };

const NAV: NavItem[] = [
  {
    type: "dropdown",
    label: "Shop",
    sections: [
      {
        heading: "By Collection",
        links: [
          { label: "Indian Classics", href: { pathname: "/products", query: { collection: "indian-classics" } } },
          { label: "Global Favorites", href: { pathname: "/products", query: { collection: "global-favorites" } } },
          { label: "New Arrivals", href: { pathname: "/products", query: { collection: "new-arrivals" } } },
          { label: "Bundles & Kits", href: { pathname: "/products", query: { collection: "bundles-kits" } } }
        ]
      },
      {
        heading: "Dietary Protocols",
        links: [
          { label: "Gundry Protocol", href: { pathname: "/products", query: { protocol: "gundry-protocol" } } },
          { label: "Gluten‑Free", href: { pathname: "/products", query: { protocol: "gluten-free" } } },
          { label: "Dairy‑Free", href: { pathname: "/products", query: { protocol: "dairy-free" } } },
          { label: "Low FODMAP", href: { pathname: "/products", query: { protocol: "fodmap-friendly" } } }
        ]
      },
      {
        heading: "Meal Type",
        links: [
          { label: "Ready‑to‑Heat", href: { pathname: "/products", query: { meal: "ready-to-heat" } } },
          { label: "Sauces", href: { pathname: "/products", query: { meal: "sauce" } } },
          { label: "Bases", href: { pathname: "/products", query: { meal: "base" } } },
          { label: "Snacks", href: { pathname: "/products", query: { meal: "snack" } } }
        ]
      }
    ]
  },
  {
    type: "dropdown",
    label: "Learn",
    sections: [
      {
        heading: "Science",
        links: [
          { label: "Our Science", href: { pathname: "/science" } },
          { label: "Gut Health 101", href: { pathname: "/gut-health" } },
          { label: "Our Standards", href: { pathname: "/standards-ingredients" } }
        ]
      },
      {
        heading: "How It Works",
        links: [
          { label: "3‑Step Cooking", href: { pathname: "/how-it-works" } },
          { label: "Recipes & Pairings", href: { pathname: "/recipes" } },
          { label: "Storage & Shelf Life", href: { pathname: "/how-it-works", query: { hash: "storage" } } }
        ]
      },
      {
        heading: "Community",
        links: [
          { label: "Reviews", href: { pathname: "/reviews" } },
          { label: "Culture Boxes", href: { pathname: "/subscribe" } },
          { label: "Blog", href: { pathname: "/blog" } }
        ]
      }
    ]
  },
  { type: "link", label: "About", href: { pathname: "/about" } },
  { type: "link", label: "Contact", href: { pathname: "/contact" } }
];

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const OPEN_DELAY = 90;
const CLOSE_DELAY = 220;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setActive(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setActive(null); setMobileOpen(false); }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const clearTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  };
  const scheduleOpen = (idx: number) => { clearTimers(); openTimer.current = window.setTimeout(() => setActive(idx), OPEN_DELAY); };
  const scheduleClose = () => { clearTimers(); closeTimer.current = window.setTimeout(() => setActive(null), CLOSE_DELAY); };

  return (
    <div ref={navRef} className="sticky top-0 z-50">
      <div className={classNames("backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90", scrolled ? "shadow-sm" : "shadow-none")}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href={{ pathname: "/" }} className="flex items-center gap-2"><img src="/TruFlavors-Web.png" alt="Tru Flavors" className="h-10 w-auto" /></Link>
            </div>

            <nav className="hidden md:flex items-center gap-2">
              {NAV.map((item, idx) => (
                <div key={idx} className="relative"
                  onMouseEnter={() => item.type === "dropdown" && scheduleOpen(idx)}
                  onMouseLeave={() => item.type === "dropdown" && scheduleClose()}>
                  {item.type === "link" ? (
                    <Link href={item.href} className="px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-orange-700 hover:bg-orange-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className={classNames("group inline-flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium",
                          active === idx ? "text-orange-700 bg-orange-50" : "text-gray-700 hover:text-orange-700 hover:bg-orange-50")}
                        aria-expanded={active === idx} aria-haspopup="true"
                        onClick={() => setActive(active === idx ? null : idx)} onFocus={() => scheduleOpen(idx)}>
                        {item.label}
                        <svg viewBox="0 0 20 20" aria-hidden="true" className={classNames("h-4 w-4 transition-transform duration-150", active === idx ? "rotate-180" : "rotate-0")}>
                          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.185l3.71-2.955a.75.75 0 1 1 .94 1.17l-4.2 3.35a.75.75 0 0 1-.94 0l-4.2-3.35a.75.75 0 0 1-.08-1.19z" />
                        </svg>
                      </button>

                      <div role="menu" aria-label={`${item.label} menu`}
                        className={classNames("absolute left-1/2 -translate-x-1/2 mt-2 w-[720px] max-w-[90vw]", active === idx ? "block" : "hidden")}
                        onMouseEnter={() => scheduleOpen(idx)} onMouseLeave={scheduleClose}>
                        <div className="rounded-2xl border border-gray-200 bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
                          <div className="grid grid-cols-3 gap-6 p-6">
                            {item.sections.map((sec, i) => (
                              <div key={i}>
                                <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">{sec.heading}</p>
                                <ul className="space-y-1">
                                  {sec.links.map((l, j) => (
                                    <li key={j}>
                                      <Link href={l.href} className="block rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                                        onClick={() => setActive(null)}>
                                        {l.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-orange-50 to-orange-100/60 px-6 py-3">
                            <div className="text-sm text-orange-900/90">
                              <span className="font-semibold">New:</span> Culture Boxes — a surprise global tasting each month ✈️
                            </div>
                            <Link className="text-sm font-medium text-orange-800 hover:text-orange-900 underline underline-offset-4" href={{ pathname: "/subscribe" }} onClick={() => setActive(null)}>
                              Explore
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <Link href={{ pathname: "/search" }} className="px-3 py-2 text-sm text-gray-600 hover:text-orange-700">Search</Link>
              <Link href={{ pathname: "/account" }} className="px-3 py-2 text-sm text-gray-600 hover:text-orange-700">Account</Link>
              <Link href={{ pathname: "/cart" }} className="px-3 py-2 text-sm text-gray-600 hover:text-orange-700">Cart</Link>
            </div>

            <button className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-gray-700 hover:bg-gray-100" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div className={classNames("fixed inset-0 z-50 md:hidden transition", mobileOpen ? "visible" : "invisible")} aria-hidden={!mobileOpen}>
        <div className={classNames("absolute inset-0 bg-black/30 transition-opacity", mobileOpen ? "opacity-100" : "opacity-0")} onClick={() => setMobileOpen(false)} />
        <div className={classNames("absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl transition-transform duration-200", mobileOpen ? "translate-x-0" : "translate-x-full")} role="dialog" aria-modal="true">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <span className="text-base font-semibold">Menu</span>
            <button className="rounded-lg p-2 hover:bg-gray-100" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="px-4 py-4 space-y-2 overflow-y-auto">
            {NAV.map((item, idx) => (
              <div key={idx}>
                {item.type === "link" ? (
                  <Link href={item.href} className="block rounded-xl px-3 py-3 text-base text-gray-800 hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <MobileDisclosure label={item.label}>
                    <div className="grid grid-cols-1 gap-4">
                      {item.sections.map((sec, i) => (
                        <div key={i}>
                          <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">{sec.heading}</p>
                          <ul className="space-y-1">
                            {sec.links.map((l, j) => (
                              <li key={j}>
                                <Link href={l.href} className="block rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </MobileDisclosure>
                )}
              </div>
            ))}
            <Link href={{ pathname: "/subscribe" }} className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-orange-600 px-3 py-3 text-white font-medium hover:bg-orange-700" onClick={() => setMobileOpen(false)}>
              Subscribe & Save
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDisclosure({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl">
      <button className="flex w-full items-center justify-between px-3 py-3 text-base font-medium text-gray-800"
        onClick={() => setOpen(!open)} aria-expanded={open}>
        {label}
        <svg viewBox="0 0 20 20" className={classNames("h-5 w-5 transition-transform", open ? "rotate-180" : "rotate-0")}>
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.185l3.71-2.955a.75.75 0 1 1 .94 1.17l-4.2 3.35a.75.75 0 0 1-.94 0l-4.2-3.35a.75.75 0 0 1-.08-1.19z" />
        </svg>
      </button>
      <div className={classNames("overflow-hidden transition-all", open ? "max-h-[2000px] p-3" : "max-h-0")}>{children}</div>
    </div>
  );
}
