import hero from "@/assets/nana-portrait-v2.asset.json";

const STATS = [
  { k: "+8", v: "წლის მენეჯერული გამოცდილება" },
  { k: "+4", v: "წელი პროექტების მართვაში" },
  { k: "€60K", v: "გაცემული გრანტი" },
  { k: "80+", v: "წარმატებული პროექტი" },
  { k: "PMP®", v: "Certified PMI · 2024" },
  { k: "₾1.75M+", v: "მართული პროექტები" },
];

const VALUE_BULLETS = [
  "გაურკვეველი ვადების და პასუხისმგებლობების მოწესრიგება",
  "ქაოსური პროექტების სტრუქტურირებული გეგმებად გადაყვანა",
  "პროცესების გამართვა და კონტროლის სისტემის შექმნა",
  "გუნდების ეფექტურობის გაზრდა და შესრულების გაუმჯობესება",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 md:pt-28 pb-16 md:pb-20">
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

      <div className="container-x grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 relative z-10">
          <span className="eyebrow">ნანა ლობჯანიძე · PMP® Certified Project Management Consultant</span>

          <h1 className="mt-4 text-balance" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', lineHeight: 1.08, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
            ქაოსური პროექტებიდან — მკაფიო, დაგეგმილ და მართვად პროცესებამდე
          </h1>

          <p className="mt-4 text-sm md:text-base text-ink-soft leading-relaxed max-w-xl">
            ვეხმარები ორგანიზაციებსა და გუნდებს პროექტების სტრუქტურირებაში, დაგეგმვასა და ეფექტურად შესრულებაში პროექტების მართვის პრაქტიკული მიდგომებით.
          </p>

          <ul className="mt-5 grid sm:grid-cols-2 gap-2.5 max-w-2xl">
            {VALUE_BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--mint)" }}
                />
                <span className="text-sm md:text-base text-ink-soft leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-7 py-3.5 font-bold transition-all"
              style={{ background: "var(--mint)", color: "var(--navy-deep)", boxShadow: "var(--shadow-mint)" }}
            >
              დაჯავშნე კონსულტაცია
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-line bg-white/80 backdrop-blur px-6 py-3.5 font-semibold text-ink hover:border-navy/40 transition-colors"
            >
              გაიგე მეტი →
            </a>
          </div>

          <p className="mt-3 text-xs text-ink-soft/80 tracking-wide">
            PMP® Certified · Project Management Practitioner · PMI Leadership Experience
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-3 max-w-2xl">
            {STATS.map((s) => (
              <div key={s.v} className="text-center px-3 py-3.5 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <dt className="text-xl md:text-2xl font-black" style={{ color: 'var(--navy-deep)' }}>{s.k}</dt>
                <dd className="mt-1 text-xs md:text-sm text-ink-soft leading-snug">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo — right side, no frame, feathered into gradient */}
        <div className="lg:col-span-5 relative">
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
            className="relative z-10 mx-auto block h-[380px] md:h-[480px] lg:h-[540px] w-auto max-w-full object-cover object-top rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
