import hero from "@/assets/nana-hero-photo.png.jpeg";
import heroBanner from "@/assets/nana-header-banner.png";

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
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="relative overflow-hidden pt-[88px] md:pt-[104px] lg:pt-[100px] pb-8 md:pb-10 lg:min-h-[560px] xl:min-h-[620px] lg:flex lg:items-center">

        {/* Full-bleed banner photo - desktop/large screens */}
        <div
          className="hidden lg:block absolute inset-0 -z-0"
          aria-hidden
        >
          <img
            src={heroBanner}
            alt=""
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover object-[64%_5%]"
          />
        </div>

        {/* Soft mint wash - mobile/tablet only */}
        <div
          className="lg:hidden absolute inset-0 -z-0 overflow-hidden pointer-events-none"
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

        {/* Flowing accent lines - left side */}
        <div
          className="hidden lg:block absolute inset-y-0 left-0 w-[46%] -z-0 overflow-hidden pointer-events-none"
          aria-hidden
        >
          <svg
            viewBox="0 0 520 600"
            className="absolute left-[-70px] bottom-[-30px] h-[115%] w-auto"
            fill="none"
          >
            <path
              d="M-40 560 C 90 525, 150 460, 220 400 C 290 340, 330 260, 410 180 C 450 140, 480 100, 530 40"
              stroke="var(--mint)"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.55"
            />

            <path
              d="M-40 520 C 100 498, 160 435, 235 375 C 305 320, 345 245, 425 165 C 465 128, 495 92, 545 32"
              stroke="var(--mint)"
              strokeWidth="1.3"
              strokeLinecap="round"
              opacity="0.4"
            />

            <path
              d="M-40 480 C 110 472, 170 410, 250 350 C 320 300, 360 230, 440 150 C 480 115, 510 82, 560 24"
              stroke="var(--mint)"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.28"
            />

            <path
              d="M-40 440 C 120 447, 180 385, 265 325 C 335 280, 375 215, 455 135 C 495 100, 525 72, 575 16"
              stroke="var(--mint)"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.18"
            />
          </svg>
        </div>

        <div className="container-x relative z-10 grid lg:grid-cols-[55fr_45fr] gap-6 lg:gap-12 items-center w-full">

          {/* LEFT - text */}
          <div className="lg:pr-4">

            {/* Name / certification line */}
            <span className="inline-flex items-center gap-2 text-[0.64rem] font-extrabold tracking-[0.18em] uppercase text-navy-soft">
              <span
                className="inline-block h-[2px] w-7 rounded"
                style={{ background: "var(--mint)" }}
              />

              NANA LOBJANIDZE · PMP® CERTIFIED PROJECT MANAGEMENT CONSULTANT
            </span>

            {/* Main heading */}
            <h1
              className="mt-3 text-balance text-navy-deep"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.35rem, 2.15vw, 1.9rem)",
                lineHeight: 1.2,
                fontWeight: 800,
                letterSpacing: "-0.025em",
              }}
            >
              ქაოსური პროექტებიდან - მკაფიო, დაგეგმილ
              <br />
              და მართვად პროცესებამდე
            </h1>

            {/* Description */}
            <p className="mt-2.5 text-base md:text-[16px] leading-relaxed max-w-xl text-navy-deep">
              ვეხმარები ორგანიზაციებსა და გუნდებს პროექტების სტრუქტურირებაში,
              დაგეგმვასა და ეფექტურად შესრულებაში პროექტების მართვის პრაქტიკული
              მიდგომებით.
            </p>

            {/* Value bullets */}
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-3 max-w-2xl">
              {VALUE_BULLETS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{
                      background: "var(--mint)",
                      boxShadow: "0 0 0 4px var(--mint-soft)",
                    }}
                  />

                  <span className="text-sm md:text-[14px] leading-relaxed text-navy-deep">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full px-7 py-3.5 text-[14px] font-bold transition-all hover:-translate-y-0.5 cta-btn"
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
                className="inline-flex items-center rounded-full border px-6 py-3.5 text-[14px] font-semibold transition-colors border-line text-navy-deep hover:bg-surface cta-btn"
              >
                გაიგე მეტი →
              </a>
            </div>

            {/* Credentials */}
            <p className="mt-4 text-xs tracking-wide text-navy-soft">
              PMP® Certified · Project Management Practitioner · PMI Leadership Experience
            </p>
          </div>

          {/* RIGHT - hero photo (mobile/tablet only; desktop uses banner) */}
          <div className="relative flex justify-center lg:hidden">
            <img
              src={hero}
              alt="ნანა ლობჯანიძე - PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი"
              loading="eager"
              className="relative block w-full max-w-none h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="container-x mt-6 md:mt-8 relative z-10">
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
                  fontFamily: "var(--font-display)",
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
