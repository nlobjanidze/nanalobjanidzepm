import about from "@/assets/about-portrait.asset.json";

const PILLARS = [
  { t: "სისტემური აზროვნება", d: "პროცესების სტრუქტურირება ქაოსიდან კონტროლამდე." },
  { t: "ლიდერობა", d: "გუნდები, რომლებიც ერთ მიმართულებაში მოძრაობენ." },
  { t: "კომუნიკაცია", d: "სტეიკჰოლდერებთან გამჭვირვალე და მკაფიო დიალოგი." },
  { t: "რისკების მართვა", d: "პრობლემები — სანამ პრობლემები გახდებიან." },
];

export function About() {
  return (
    <section id="about" className="section-y relative bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
        {/* Photo composition — frame-free, blended with brand shapes */}
        <div className="lg:col-span-5 relative min-h-[460px] md:min-h-[540px]">
          {/* Color anchor blob (mint) */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[86%] h-[88%] -z-10"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.78 0.16 165) 0%, oklch(0.55 0.13 235 / 0.7) 100%)",
              borderRadius: "55% 45% 60% 40% / 45% 55% 45% 55%",
              opacity: 0.85,
            }}
            aria-hidden
          />
          {/* Dot pattern */}
          <div
            className="absolute -bottom-2 right-0 h-28 w-28 -z-10 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(var(--navy) 1.2px, transparent 1.4px)",
              backgroundSize: "12px 12px",
              maskImage: "radial-gradient(closest-side, black, transparent)",
            }}
            aria-hidden
          />
          {/* Outline ring echoing poster */}
          <svg
            className="absolute top-4 -right-2 h-24 w-24 text-navy -z-10"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden
          >
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.45" />
          </svg>

          {/* Portrait — masked, no frame */}
          <img
            src={about.url}
            alt="ნანა ლობჯანიძე — სამუშაო პროცესში"
            className="relative z-10 mx-auto block h-[460px] md:h-[540px] w-auto max-w-full object-cover object-top drop-shadow-[0_24px_36px_oklch(0.20_0.05_250/0.15)]"
            style={{
              WebkitMaskImage:
                "radial-gradient(115% 95% at 50% 45%, black 65%, transparent 85%)",
              maskImage:
                "radial-gradient(115% 95% at 50% 45%, black 65%, transparent 85%)",
            }}
          />

          {/* Floating credibility chip */}
          <div className="absolute bottom-6 right-0 z-20 flex items-center gap-2.5 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 border border-line shadow-[var(--shadow-soft)]">
            <span className="text-[11px] font-black tracking-widest uppercase text-navy-soft">15+ წელი</span>
            <span className="h-1 w-1 rounded-full bg-mint" />
            <span className="text-[11px] font-black tracking-widest uppercase text-ink">პრაქტიკა</span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow">შესახებ</span>
          <h2 className="heading-lg mt-4 text-balance">
            პროექტი არ უნდა იყოს იღბლის საქმე — <span className="text-navy">ის უნდა იყოს სისტემა.</span>
          </h2>
          <div className="mt-6 space-y-4 text-ink-soft text-base md:text-lg leading-relaxed">
            <p>
              15 წელზე მეტია, რაც პროექტებს ვმართავ — საერთაშორისო დონორებთან
              (EU, GIZ, UNDP, Embassy of Japan, Slovak ODA), საჯარო და კერძო სექტორთან.
              ჩემი მისიაა, ორგანიზაციებმა და ლიდერებმა ისწავლონ პროექტის მართვა,
              როგორც პროფესია — და არა როგორც ინტუიცია.
            </p>
            <p>
              PMP® სერტიფიკატი 2024 წელს ჩავაბარე — და ახლა ვეხმარები სხვებსაც,
              ვინც იმავე გზაზე დგას: კონსულტაცია, ტრენინგი, მენტორინგი —
              სამივე ერთ ენაზე.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {PILLARS.map((p) => (
              <div key={p.t} className="surface-card p-5 hover:-translate-y-0.5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mint-soft text-navy-deep font-black border border-mint/40">●</span>
                  <h3 className="font-extrabold text-base md:text-lg text-ink">{p.t}</h3>
                </div>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
