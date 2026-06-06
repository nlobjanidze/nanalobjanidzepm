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
        className="absolute inset-0 -z-10 opacity-[0.28]"
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

        {/* Photo — fully frameless. Only very soft brand color washes far behind, image fades to background via feather mask. */}
        <div className="lg:col-span-5 relative min-h-[480px] md:min-h-[580px]">
          {/* Soft mint wash — diffuse, no edges */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(55% 50% at 55% 45%, oklch(0.78 0.16 165 / 0.18), transparent 75%)",
            }}
            aria-hidden
          />
          {/* Soft azure wash */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(40% 35% at 80% 20%, oklch(0.55 0.13 235 / 0.14), transparent 70%)",
            }}
            aria-hidden
          />

          {/* The portrait — no border, no card, no shadow, no glow. Feathered edges fade to white. */}
          <img
            src={hero.url}
            alt="ნანა ლობჯანიძე — პორტრეტი"
            loading="eager"
            className="relative z-10 mx-auto block h-[480px] md:h-[580px] w-auto max-w-full object-cover object-top"
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
