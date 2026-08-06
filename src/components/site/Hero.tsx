import hero from "@/assets/nana-portrait-transparent.png.asset.json";

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
      className="relative overflow-hidden pt-16 md:pt-20 lg:pt-24 pb-14 md:pb-18 lg:pb-20"
      style={{
        background:
          "radial-gradient(120% 90% at 100% 50%, rgba(23,227,178,0.10), transparent 55%), radial-gradient(90% 80% at 0% 0%, rgba(46,123,191,0.18), transparent 60%), linear-gradient(135deg, #0A2748 0%, #0E3D6B 55%, #103F70 100%)",
      }}
    >
      {/* Unified decorative canvas — spans full hero */}
      <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none" aria-hidden>
        {/* Large mint arc, top-left */}
        <div
          className="absolute -top-[22%] -left-[14%] h-[720px] w-[720px] rounded-full opacity-90"
          style={{
            background:
              "radial-gradient(circle at 55% 45%, rgba(23,227,178,0.55), rgba(23,227,178,0.18) 45%, transparent 70%)",
            filter: "blur(2px)",
          }}
        />
        {/* Solid mint blob near portrait — creates continuity */}
        <div
          className="absolute -top-[10%] right-[-8%] h-[560px] w-[560px] rounded-full"
          style={{
            background: "linear-gradient(140deg, #17E3B2 0%, #14C79C 60%, #0E3D6B 120%)",
            opacity: 0.9,
          }}
        />
        {/* Azure circle overlap — layered depth */}
        <div
          className="absolute top-[18%] right-[-18%] h-[680px] w-[680px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 50%, rgba(46,123,191,0.85), rgba(20,93,160,0.35) 55%, transparent 78%)",
          }}
        />
        {/* Small mint bottom-left accent */}
        <div
          className="absolute bottom-[-10%] left-[-6%] h-[320px] w-[320px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle at center, rgba(23,227,178,0.45), transparent 70%)",
          }}
        />
        {/* Fine grid overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(70% 60% at 50% 40%, black, transparent 85%)",
          }}
        />
      </div>

      <div className="container-x relative z-10 grid lg:grid-cols-[55fr_45fr] gap-6 lg:gap-12 items-center">
        {/* LEFT — text */}
        <div className="lg:pr-4">

          <span
            className="inline-flex items-center gap-2 text-[0.72rem] font-extrabold tracking-[0.22em] uppercase"
            style={{ color: "#7BE9C8" }}
          >
            <span
              className="inline-block h-[2px] w-7 rounded"
              style={{ background: "var(--mint)" }}
            />
            ნანა ლობჯანიძე · PMP® Certified Project Management Consultant
          </span>

          <h1
            className="mt-4 text-balance"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              lineHeight: 1.12,
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "#FFFFFF",
            }}
          >
            ქაოსური პროექტებიდან — მკაფიო, დაგეგმილ და მართვად პროცესებამდე
          </h1>

          <p
            className="mt-3 text-base md:text-[16px] leading-relaxed max-w-xl"
            style={{ color: "rgba(230, 242, 252, 0.82)" }}
          >
            ვეხმარები ორგანიზაციებსა და გუნდებს პროექტების სტრუქტურირებაში, დაგეგმვასა და ეფექტურად შესრულებაში პროექტების მართვის პრაქტიკული მიდგომებით.
          </p>

          <ul className="mt-4 grid sm:grid-cols-2 gap-2 max-w-2xl">
            {VALUE_BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--mint)", boxShadow: "0 0 0 4px rgba(23,227,178,0.15)" }}
                />
                <span
                  className="text-sm md:text-[14px] leading-relaxed"
                  style={{ color: "rgba(220, 236, 250, 0.85)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-7 py-3.5 font-bold transition-all hover:-translate-y-0.5"
              style={{ background: "var(--mint)", color: "var(--navy-deep)", boxShadow: "var(--shadow-mint)" }}
            >
              დაჯავშნე კონსულტაცია
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border px-6 py-3.5 font-semibold transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.25)",
                color: "#FFFFFF",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(6px)",
              }}
            >
              გაიგე მეტი →
            </a>
          </div>

          <p
            className="mt-2 text-xs tracking-wide"
            style={{ color: "rgba(220, 236, 250, 0.6)" }}
          >
            PMP® Certified · Project Management Practitioner · PMI Leadership Experience
          </p>
        </div>

        {/* RIGHT — integrated portrait, no card, no mask */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Soft glow behind portrait */}
            <div
              className="absolute inset-0 -z-10 rounded-full"
              style={{
                background:
                  "radial-gradient(55% 55% at 50% 45%, rgba(23,227,178,0.25), transparent 70%)",
                transform: "scale(1.12)",
                filter: "blur(18px)",
              }}
              aria-hidden
            />
            <img
              src={hero.url}
              alt="ნანა ლობჯანიძე — PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი"
              loading="eager"
              className="relative block h-[420px] md:h-[520px] lg:h-[580px] w-auto object-contain"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
              }}
            />
          </div>
        </div>
      </div>

      {/* Statistics — glass row on dark canvas */}
      <div className="container-x mt-8 md:mt-12 relative z-10">
        <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {STATS.map((s) => (
            <div
              key={s.v}
              className="text-center px-5 py-6 rounded-2xl transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
              }}
            >
              <dt
                className="text-2xl md:text-3xl font-black"
                style={{ color: "var(--mint)", letterSpacing: "-0.02em" }}
              >
                {s.k}
              </dt>
              <dd
                className="mt-2 text-xs md:text-sm leading-snug"
                style={{ color: "rgba(220, 236, 250, 0.8)" }}
              >
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
