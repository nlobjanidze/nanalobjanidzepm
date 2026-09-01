import { useEffect, useState } from "react";
import logo from "@/assets/nana-logo.svg";

type Item = { href: string; label: string };
type NavEntry = { label: string; href?: string; items?: Item[] };

const NAV: NavEntry[] = [
  { label: "შესახებ", href: "#about" },
  {
    label: "სერვისები",
    href: "#services",
    items: [
      { href: "#svc-delivery", label: "პროექტების მართვა" },
      { href: "#svc-ops", label: "პროცესების გაუმჯობესება" },
      { href: "#svc-mentoring", label: "მენტორინგი & ლიდერობა" },
      { href: "#svc-grants", label: "გრანტების მართვა" },
    ],
  },
  {
    label: "ტრენინგები",
    href: "#trainings",
    items: [
      { href: "#tr-short", label: "მოკლე ფორმატის ტრენინგები" },
      { href: "#tr-deep", label: "სიღრმისეული ტრენინგები" },
      { href: "#tr-thematic", label: "სპეციალიზებული თემატური ტრენინგები" },
      { href: "#tr-corporate", label: "კორპორატიული ტრენინგები" },
    ],
  },
  {
    label: "გამოცდილება",
    href: "#experience",
    items: [
      { href: "#experience", label: "პროფესიული გამოცდილება" },
      { href: "#projects", label: "პროექტები" },
      { href: "#leadership", label: "ლიდერობა" },
      { href: "#engagement", label: "სპიკერობა & გლობალური მონაწილეობა" },
    ],
  },
  {
    label: "პროფილი",
    href: "#certifications",
    items: [
      { href: "#certifications", label: "განათლება და სერტიფიკატები" },
      { href: "#recommendation", label: "რეკომენდაციები" },
    ],
  },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<"ka" | "en">("ka");
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "backdrop-blur-xl bg-white/90 border-b border-line shadow-[0_1px_0_rgba(15,23,42,0.05)]"
          : "bg-white/0 border-b border-white/10"
      }`}
    >
      <div className="container-x flex h-[76px] md:h-[92px] items-center justify-between gap-4">

        {/* Logo */}
        <a
          href="#top"
          className="flex shrink-0 items-center"
          aria-label="ნანა ლობჯანიძე"
        >
          <img
            src={logo}
            alt="ნანა ლობჯანიძე"
            className="h-14 md:h-[76px] w-auto object-contain transition-[filter] duration-300"
            style={
              onHero
                ? { filter: "brightness(0) invert(1)" }
                : undefined
            }
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex min-w-0 flex-1 justify-center items-center gap-5 xl:gap-8">
          {NAV.map((n) => (
            <div
              key={n.label}
              className="relative"
              onMouseEnter={() =>
                setOpenMenu(n.items ? n.label : null)
              }
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                href={n.href}
                className={`inline-flex items-center gap-1 whitespace-nowrap text-[13px] font-semibold tracking-wide py-3 transition-colors duration-300 ${
                  onHero
                    ? "text-white/90 hover:text-white"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {n.label}

                {n.items && (
                  <span
                    aria-hidden
                    className="text-[9px] opacity-70"
                  >
                    ▾
                  </span>
                )}
              </a>

              {n.items && openMenu === n.label && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                  <div className="min-w-[260px] rounded-2xl border border-line bg-white shadow-[var(--shadow-soft)] p-2">
                    {n.items.map((i) => (
                      <a
                        key={i.href + i.label}
                        href={i.href}
                        onClick={() => setOpenMenu(null)}
                        className="block rounded-xl px-3.5 py-2.5 text-[13px] font-semibold text-ink-soft hover:text-ink hover:bg-surface transition-colors"
                      >
                        {i.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Language Selector */}
        <div className="hidden lg:flex items-center gap-1 text-[12px] font-bold">

          <button
            type="button"
            onClick={() => setLanguage("ka")}
            className={`inline-flex items-center gap-1.5 ${
              language === "ka"
                ? onHero
                  ? "text-white"
                  : "text-ink"
                : onHero
                  ? "text-white/50"
                  : "text-ink-soft/50"
            }`}
          >
            <span>🇬🇪</span>
            <span>KA</span>
          </button>

          <span
            className={
              onHero
                ? "text-white/40"
                : "text-ink-soft/30"
            }
          >
            |
          </span>

          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`inline-flex items-center gap-1.5 ${
              language === "en"
                ? onHero
                  ? "text-white"
                  : "text-ink"
                : onHero
                  ? "text-white/50"
                  : "text-ink-soft/50"
            }`}
          >
            <span>🇬🇧</span>
            <span>EN</span>
          </button>

        </div>

        {/* Consultation Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex shrink-0 items-center whitespace-nowrap rounded-full px-4.5 py-2 text-[13px] font-bold transition-all hover:-translate-y-0.5"
          style={{
            background: "var(--mint)",
            color: "var(--navy-deep)",
          }}
        >
          დაჯავშნე კონსულტაცია
        </a>

        {/* Mobile Menu Button */}
        <button
          aria-label="Menu"
          className={`lg:hidden inline-flex shrink-0 items-center justify-center h-10 w-10 rounded-md border transition-colors duration-300 ${
            onHero
              ? "border-white/40 text-white"
              : "border-line text-ink"
          }`}
          onClick={() => setOpen((o) => !o)}
        >
          <span>≡</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-line bg-white/95 backdrop-blur-xl max-h-[70vh] overflow-y-auto">
          <div className="container-x py-4 flex flex-col gap-1">

            {NAV.map((n) =>
              n.items ? (
                <div key={n.label}>

                  <button
                    onClick={() =>
                      setMobileOpen((m) =>
                        m === n.label ? null : n.label
                      )
                    }
                    className="w-full flex items-center justify-between py-3 text-base font-semibold text-ink"
                  >
                    <span>{n.label}</span>

                    <span
                      aria-hidden
                      className="text-xs opacity-70"
                    >
                      {mobileOpen === n.label ? "▴" : "▾"}
                    </span>
                  </button>

                  {mobileOpen === n.label && (
                    <div className="pl-3 pb-2 flex flex-col">
                      {n.items.map((i) => (
                        <a
                          key={i.href + i.label}
                          href={i.href}
                          onClick={() => setOpen(false)}
                          className="py-2.5 text-sm font-medium text-ink-soft"
                        >
                          {i.label}
                        </a>
                      ))}
                    </div>
                  )}

                </div>
              ) : (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-semibold text-ink"
                >
                  {n.label}
                </a>
              )
            )}

            {/* Mobile Language Selector */}
            <div className="flex items-center gap-1 text-[12px] font-bold mt-2">

              <button
                type="button"
                onClick={() => setLanguage("ka")}
                className={`inline-flex items-center gap-1.5 ${
                  language === "ka"
                    ? "text-ink"
                    : "text-ink-soft/50"
                }`}
              >
                <span>🇬🇪</span>
                <span>KA</span>
              </button>

              <span className="text-ink-soft/30">
                |
              </span>

              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`inline-flex items-center gap-1.5 ${
                  language === "en"
                    ? "text-ink"
                    : "text-ink-soft/50"
                }`}
              >
                <span>🇬🇧</span>
                <span>EN</span>
              </button>

            </div>

            {/* Mobile Consultation Button */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 font-bold"
              style={{
                background: "var(--mint)",
                color: "var(--navy-deep)",
              }}
            >
              დაჯავშნე კონსულტაცია
            </a>

          </div>
        </div>
      )}
    </header>
  );
}
