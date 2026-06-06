import hero from "@/assets/hero-portrait.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      {/* Decorative shapes echoing the poster */}
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-mint/20 blur-3xl -z-10" aria-hidden />
      <div className="absolute top-1/3 right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-azure/30 blur-3xl -z-10" aria-hidden />

      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 relative z-10">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            PMP® Certified · Project Management Consultant
          </span>
          <h1 className="heading-xl mt-6 text-balance">
            <span className="text-mint">ნანა</span>
            <br />
            ლობჯანიძე
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-foreground/80">
            PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი, ტრენერი და მენტორი.
            15+ წლიანი გამოცდილებით — საერთაშორისო დონორებთან, კორპორაციებთან
            და გუნდებთან, რომლებიც პროექტებს რეალურ შედეგებად აქცევენ.
          </p>
          <p className="mt-4 italic text-mint/80 text-sm md:text-base">
            „პროექტის მართვა სხვა ჩვევებს ხელოვან ჩვევას — ისე შრომობს ცხოვრება.“
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-mint px-6 py-3.5 font-bold text-navy-deep hover:bg-mint-bright transition-colors shadow-[var(--shadow-mint)]"
            >
              დაჯავშნე კონსულტაცია
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 font-semibold text-foreground hover:bg-white/5 transition-colors"
            >
              გაიგე მეტი სერვისებზე
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "15+", v: "წლის გამოცდილება" },
              { k: "1.5M+", v: "₾ მართული პროექტი" },
              { k: "PMP®", v: "სერტიფიკატი 2024" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-2xl md:text-3xl font-black text-mint">{s.k}</dt>
                <dd className="mt-1 text-xs md:text-sm text-foreground/65">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-mint/30 via-azure/20 to-transparent blur-2xl" aria-hidden />
          <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 surface-card">
            <img
              src={hero.url}
              alt="ნანა ლობჯანიძე — პორტრეტი"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-navy px-5 py-4 border border-white/10 shadow-[var(--shadow-soft)]">
            <p className="text-xs uppercase tracking-widest text-mint font-bold">PMI Member</p>
            <p className="text-sm font-semibold mt-1">PMI Chapter Tbilisi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
