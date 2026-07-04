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
    <section
      id="top"
      className="relative overflow-hidden pt-28 md:pt-36 lg:pt-44 pb-20 md:pb-28 lg:pb-32"
    >
      {/* Brand gradient background */}
      <div
        className="absolute inset-0 -z-20"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />

      {/* Abstract geometric shapes — brand palette, low opacity */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
        {/* Large mint circle top-left */}
        <div
          className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full opacity-[0.18]"
          style={{ background: "radial-gradient(circle at center, var(--mint), transparent 70%)" }}
        />
        {/* Navy soft blob bottom-right */}
        <div
          className="absolute -bottom-52 -right-40 h-[640px] w-[640px] rounded-full opacity-[0.14]"
          style={{ background: "radial-gradient(circle at center, var(--navy-deep), transparent 70%)" }}
        />
        {/* Outlined ring behind portrait area */}
        <div
          className="hidden md:block absolute top-24 right-[8%] h-[380px] w-[380px] rounded-full opacity-[0.10]"
          style={{ border: "1.5px solid var(--navy-deep)" }}
        />
        <div
          className="hidden md:block absolute top-56 right-[22%] h-[220px] w-[220px] rounded-full opacity-[0.08]"
          style={{ border: "1.5px solid var(--mint)" }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(65% 55% at 50% 35%, black, transparent 82%)",
          }}
        />
      </div>

      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 relative z-10">
          <span className="eyebrow">ნანა ლობჯანიძე · PMP® Certified Project Management Consultant</span>

          <h1
            className="mt-6 text-balance"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.75rem, 5.6vw, 4.75rem)",
              lineHeight: 1.04,
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "var(--ink)",
            }}
          >
            ქაოსური პროექტებიდან — მკაფიო, დაგეგმილ და მართვად პროცესებამდე
          </h1>

          <p className="mt-6 text-base md:text-lg text-ink-soft leading-relaxed max-w-xl">
            ვეხმარები ორგანიზაციებსა და გუნდებს პროექტების სტრუქტურირებაში, დაგეგმვასა და ეფექტურად შესრულებაში პროექტების მართვის პრაქტიკული მიდგომებით.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3 max-w-2xl">
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

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-8 py-4 font-bold transition-all hover:-translate-y-0.5"
              style={{ background: "var(--mint)", color: "var(--navy-deep)", boxShadow: "var(--shadow-mint)" }}
            >
              დაჯავშნე კონსულტაცია
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-line bg-white/80 backdrop-blur px-7 py-4 font-semibold text-ink hover:border-navy/40 transition-colors"
            >
              გაიგე მეტი →
            </a>
          </div>

          <p className="mt-4 text-xs text-ink-soft/80 tracking-wide">
            PMP® Certified · Project Management Practitioner · PMI Leadership Experience
          </p>
        </div>

        {/* Portrait — integrated with decorative background */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Mint halo behind */}
            <div
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-90"
              style={{
                background:
                  "radial-gradient(60% 55% at 50% 45%, rgba(23, 227, 178, 0.28), transparent 75%)",
              }}
              aria-hidden
            />
            {/* Navy accent */}
            <div
              className="absolute -inset-2 -z-10"
              style={{
                background:
                  "radial-gradient(45% 40% at 80% 15%, rgba(20, 93, 160, 0.22), transparent 70%)",
              }}
              aria-hidden
            />
            {/* Offset mint block */}
            <div
              className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl -z-10 opacity-70 hidden md:block"
              style={{ background: "var(--mint)", filter: "blur(2px)" }}
              aria-hidden
            />
            <img
              src={hero.url}
              alt="ნანა ლობჯანიძე — PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი"
              loading="eager"
              className="relative z-10 block h-[460px] md:h-[560px] lg:h-[640px] w-full object-cover object-top rounded-[2rem]"
              style={{ boxShadow: "0 30px 80px -30px rgba(15, 23, 42, 0.25)" }}
            />
          </div>
        </div>
      </div>

      {/* Statistics cards — premium row */}
      <div className="container-x mt-16 md:mt-24 relative z-10">
        <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {STATS.map((s) => (
            <div
              key={s.v}
              className="text-center px-5 py-6 rounded-2xl transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid var(--line)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 1px 0 rgba(15,23,42,0.02)",
              }}
            >
              <dt
                className="text-2xl md:text-3xl font-black"
                style={{ color: "var(--navy-deep)", letterSpacing: "-0.02em" }}
              >
                {s.k}
              </dt>
              <dd className="mt-2 text-xs md:text-sm text-ink-soft leading-snug">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
