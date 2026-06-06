import hero from "@/assets/hero-portrait.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.3]"
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
          <p className="mt-3 text-lg md:text-xl font-semibold text-navy">
            პროექტების მართვის კონსულტანტი · ტრენერი · მენტორი
          </p>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-ink-soft">
            15+ წლის გამოცდილება საერთაშორისო დონორებთან, კორპორაციებთან
            და გუნდებთან, რომლებიც პროექტებს რეალურ შედეგებად აქცევენ.
            სისტემური მიდგომა — დაგეგმვიდან გაზომვად შედეგამდე.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-navy-deep px-6 py-3.5 font-bold text-white hover:bg-navy transition-colors shadow-[var(--shadow-soft)]"
            >
              დაჯავშნე უფასო კონსულტაცია
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3.5 font-semibold text-ink hover:border-navy/30 transition-colors"
            >
              გაიგე მეტი სერვისებზე →
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "15+", v: "წლის გამოცდილება" },
              { k: "1.5M+", v: "₾ მართული პროექტი" },
              { k: "PMP®", v: "სერტიფიკატი · 2024" },
            ].map((s) => (
              <div key={s.k} className="border-l-2 border-mint pl-4">
                <dt className="text-2xl md:text-3xl font-black text-ink">{s.k}</dt>
                <dd className="mt-1 text-xs md:text-sm text-ink-soft">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo composition — no frame, no card. Organic shapes + brand accents blend the image into the page. */}
        <div className="lg:col-span-5 relative min-h-[460px] md:min-h-[560px]">
          {/* Large organic mint blob behind the portrait */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 55% at 55% 45%, oklch(0.72 0.14 168 / 0.30), transparent 70%)",
            }}
            aria-hidden
          />
          {/* Soft azure wash */}
          <div
            className="absolute -top-10 -right-10 h-72 w-72 -z-10"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.55 0.13 235 / 0.18), transparent)",
            }}
            aria-hidden
          />

          {/* Brand-inspired geometric shapes echoing the poster */}
          <svg
            className="absolute -top-6 left-2 h-20 w-20 text-mint -z-10"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden
          >
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.55" />
          </svg>
          <div
            className="absolute bottom-10 -left-4 h-32 w-32 -z-10 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(var(--navy) 1.2px, transparent 1.4px)",
              backgroundSize: "12px 12px",
              maskImage: "radial-gradient(closest-side, black, transparent)",
            }}
            aria-hidden
          />
          <div
            className="absolute top-1/3 -right-2 h-16 w-16 rounded-full -z-10"
            style={{ background: "var(--gradient-mint)", opacity: 0.85 }}
            aria-hidden
          />

          {/* Solid asymmetric shape sitting behind the portrait — acts as a color anchor, not a frame */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[92%] -z-10"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.20 0.05 250) 0%, oklch(0.28 0.07 252) 100%)",
              borderRadius: "62% 38% 55% 45% / 50% 55% 45% 50%",
            }}
            aria-hidden
          />

          {/* The portrait — no border, no card. Just a soft organic mask. */}
          <img
            src={hero.url}
            alt="ნანა ლობჯანიძე — პორტრეტი"
            loading="eager"
            className="relative z-10 mx-auto block h-[460px] md:h-[560px] w-auto max-w-full object-cover object-top drop-shadow-[0_30px_40px_oklch(0.20_0.05_250/0.18)]"
            style={{
              WebkitMaskImage:
                "radial-gradient(120% 95% at 50% 45%, black 65%, transparent 85%)",
              maskImage:
                "radial-gradient(120% 95% at 50% 45%, black 65%, transparent 85%)",
            }}
          />

          {/* Floating brand chips — not cards on the image, but small marks anchored to the composition */}
          <div className="absolute bottom-4 left-0 z-20 flex items-center gap-2.5 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 border border-line shadow-[var(--shadow-soft)]">
            <span className="h-2 w-2 rounded-full bg-mint" />
            <p className="text-[11px] font-black tracking-widest uppercase text-ink">PMI Chapter Tbilisi</p>
          </div>
          <div className="absolute top-6 right-0 z-20 rounded-full bg-navy-deep text-white px-4 py-2 shadow-[var(--shadow-soft)]">
            <p className="text-[11px] font-black tracking-widest uppercase">
              <span className="text-mint">●</span> PMP® Certified · 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
