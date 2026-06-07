import { useEffect, useState } from "react";
import logo from "@/assets/logo.asset.json";

const NAV = [
  { href: "#about", label: "შესახებ" },
  { href: "#services", label: "სერვისები" },
  { href: "#trainings", label: "ტრენინგები" },
  { href: "#projects", label: "პროექტები" },
  { href: "#certifications", label: "სერტიფიკატები" },
  { href: "#recognition", label: "აღიარება" },
  { href: "#contact", label: "კონტაქტი" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/85 border-b border-line shadow-[0_1px_0_rgba(15,23,42,0.04)]"
          : "bg-white/0"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="LN logo" className="h-9 w-9 md:h-10 md:w-10 object-contain" />
          <span className="hidden sm:block font-extrabold tracking-tight text-sm md:text-base text-ink">
            ნანა ლობჯანიძე
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-ink-soft hover:text-ink transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-bold transition"
          style={{ background: "var(--mint)", color: "var(--navy-deep)" }}
        >
          დაჯავშნე კონსულტაცია
        </a>
        <button
          aria-label="Menu"
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-line text-ink"
          onClick={() => setOpen((o) => !o)}
        >
          <span>≡</span>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-line bg-white/95 backdrop-blur-xl">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-ink hover:text-mint"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-navy-deep px-5 py-3 font-bold text-white"
            >
              დაჯავშნე კონსულტაცია
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
