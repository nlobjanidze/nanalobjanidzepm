import hero from "@/assets/nana-header-banner.png";

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
      className="relative overflow-hidden bg-white pt-[100px] md:pt-[120px] lg:pt-[128px]"
    >
      {/* FULL WIDTH HERO BANNER */}
      <div className="relative w-full">
        <img
          src={hero}
          alt="ნანა ლობჯანიძე - PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* TEXT OVERLAY */}
        <div className="container-x relative z-10 min-h-[620px] md:min-h-[650px] lg:min-h-[680px] flex items-center">
          <div className="w-full lg:w-[58%] xl:w-[56%] pb-12 lg:pb-16">

            <span className="inline-flex items-center gap-2 text-[0.72rem] font-extrabold tracking-[0.18em] uppercase text-navy-soft">
              <span
                className="inline-block h-[2px] w-7 rounded"
                style={{ background: "var(--mint)" }}
              />
              ნანა ლობჯანიძე · PMP® Certified Project Management Consultant
            </span>

            <h1
              className="mt-4 max-w-3xl text-balance text-navy-deep"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.4vw, 3.25rem)",
                lineHeight: 1.12,
                fontWeight: 800,
                letterSpacing: "-0.035em",
              }}
            >
              ქაოსური პროექტებიდან — მკაფიო, დაგეგმილ და მართვად პროცესებამდე
            </h1>

            <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-ink-soft">
              ვეხმარები ორგანიზაციებსა და გუნდებს პროექტების სტრუქტურირებაში,
              დაგეგმვასა და ეფექტურად შესრულებაში პროექტების მართვის პრაქტიკული
              მიდგომებით.
            </p>

            <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3 max-w-2xl">
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

            <div className="mt-7 flex flex-wrap gap-3">
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

            <p className="mt-3 text-xs tracking-wide text-ink-soft/80">
              PMP® Certified · Project Management Practitioner · PMI Leadership Experience
            </p>
          </div>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="container-x mt-8 md:mt-12 relative z-10 pb-12 md:pb-16">
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
