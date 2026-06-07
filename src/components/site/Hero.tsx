import hero from "@/assets/hero-portrait.asset.json";

const STATS = [
  { k: "+8", v: "წლის მენეჯერული გამოცდილება" },
  { k: "+4", v: "წელი პროექტების მართვაში" },
  { k: "€60K", v: "გაცემული გრანტი" },
  { k: "80+", v: "წარმატებული პროექტი" },
  { k: "PMP®", v: "Certified PMI · 2024" },
  { k: "₾1.75M+", v: "მართული პროექტები" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
      {/* Brand gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(60% 50% at 50% 30%, black, transparent 80%)",
        }}
        aria-hidden
      />

      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 relative z-10">
          <span className="eyebrow">PMP® · Project Management Consultant</span>
          <h1 className="heading-xl mt-6 text-balance">
            ნანა ლობჯანიძე
          </h1>
          <p className="mt-4 text-lg md:text-xl font-semibold text-navy">
            PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი
            <br className="hidden md:block" />
            ტრენერი &amp; მენტორი
          </p>
          <blockquote className="mt-6 max-w-xl border-l-4 pl-5 italic text-base md:text-lg leading-relaxed text-ink-soft" style={{ borderColor: "var(--mint)" }}>
            „პროექტის მართვა უნდა ქმნიდეს რეალურ შედეგს — არა მხოლოდ პროცესს“
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-7 py-3.5 font-bold transition-all"
              style={{ background: "var(--mint)", color: "var(--navy-deep)", boxShadow: "var(--shadow-mint)" }}
            >
              დაჯავშნე უფასო კონსულტაცია
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-line bg-white/80 backdrop-blur px-6 py-3.5 font-semibold text-ink hover:border-navy/40 transition-colors"
            >
              ნახე სერვისები →
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-2xl">
            {STATS.map((s) => (
              <div key={s.v} className="border-l-2 pl-4" style={{ borderColor: "var(--mint)" }}>
                <dt className="text-xl md:text-2xl font-black text-ink">{s.k}</dt>
                <dd className="mt-1 text-[11px] md:text-xs text-ink-soft leading-snug">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo — right side, no frame, feathered into gradient */}
        <div className="lg:col-span-5 relative min-h-[460px] md:min-h-[600px]">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(55% 50% at 55% 45%, rgba(23, 227, 178, 0.22), transparent 75%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(45% 40% at 80% 20%, rgba(20, 93, 160, 0.18), transparent 70%)",
            }}
            aria-hidden
          />
          <img
            src={hero.url}
            alt="ნანა ლობჯანიძე — PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი"
            loading="eager"
            className="relative z-10 mx-auto block h-[460px] md:h-[600px] w-auto max-w-full object-cover object-top"
            style={{
              WebkitMaskImage:
                "radial-gradient(75% 80% at 50% 45%, black 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.4) 75%, transparent 92%)",
              maskImage:
                "radial-gradient(75% 80% at 50% 45%, black 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.4) 75%, transparent 92%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
