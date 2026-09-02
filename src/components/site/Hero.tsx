import hero from "@/assets/nana-hero-photo.png.jpeg";

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
      className="relative overflow-hidden pt-[100px] md:pt-[120px] lg:pt-[128px] pb-12 md:pb-16 bg-white"
    >
      {/* Soft mint wash, echoes the banner artwork without competing with it */}
      <div
        className="absolute inset-0 -z-0 overflow-hidden pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute -top-[18%] -left-[10%] h-[520px] w-[520px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--mint-soft), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[-8%] h-[420px] w-[420px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--mint-soft), transparent 70%)",
          }}
        />
      </div>

      <div className="container-x relative z-10 grid lg:grid-cols-[55fr_45fr] gap-6 lg:gap-12 items-center">
        {/* LEFT - text */}
        <div className="lg:pr-4">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-extrabold tracking-[0.22em] uppercase text-navy-soft">
            <span
              className="inline-block h-[2px] w-7 rounded"
              style={{ background: "var(--mint)" }}
            />
            ნანა ლობჯანიძე · PMP® Certified Project Management Consultant
          </span>

          <h1
            className="mt-4 text-balance text-navy-deep"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 2.6vw, 2.3rem)",
              lineHeight: 1.22,
              fontWeight: 800,
              letterSpacing: "-0.025em",
            }}
          >
            ქაოსური პროექტებიდან - მკაფიო, დაგეგმილ და მართვად პროცესებამდე
          </h1>

          <p className="mt-3 text-base md:text-[16px] leading-relaxed max-w-xl text-ink-soft">
            ვეხმარები ორგანიზაციებსა და გუნდებს პროექტების სტრუქტურირებაში,
            დაგეგმვასა და ეფექტურად შესრულებაში პროექტების მართვის პრაქტიკული
            მიდგომებით.
          </p>

          <ul className="mt-4 grid sm:grid-cols-2 gap-2 max-w-2xl">
            {VALUE_BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{
                    background: "var(--mint)",
                    boxShadow: "0 0 0 4px var(--mint-soft)",
                  }}
                />
                <span className="text-sm md:text-[14px] leading-relaxed text-ink-soft">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-7 py-3.5 font-bold transition-all hover:-translate-y-0.5 cta-btn"
              style={{
                background: "var(--mint)",
                color: "var(--navy-deep)",
                boxShadow: "var(--shadow-mint)",
              }}
            >
              დაჯავშნე კონსულტაცია
            </a>

            <a
              href="#services"
              className="inline-flex items-center rounded-full border px-6 py-3.5 font-semibold transition-colors border-line text-navy-deep hover:bg-surface cta-btn"
            >
              გაიგე მეტი →
            </a>
          </div>

          <p className="mt-2 text-xs tracking-wide text-ink-soft/80">
            PMP® Certified · Project Management Practitioner · PMI Leadership Experience
          </p>
        </div>

        <div className="relative flex justify-center lg:justify-end lg:self-center">
  <img
    src={hero}
    alt="ნანა ლობჯანიძე - PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი"
    loading="eager"
    className="relative block w-full max-w-none h-auto object-contain lg:scale-110 lg:origin-right"
  />
</div>
      </div>

      {/* Statistics - light cards on white canvas */}
      <div className="container-x mt-8 md:mt-12 relative z-10">
        <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {STATS.map((s) => (
            <div
              key={s.v}
              className="text-center px-5 py-6 rounded-2xl transition-all hover:-translate-y-0.5 bg-white"
              style={{
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <dt
                className="text-2xl md:text-3xl font-black"
                style={{
                  color: "var(--mint)",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.k}
              </dt>

              <dd className="mt-2 text-xs md:text-sm leading-snug text-ink-soft">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
