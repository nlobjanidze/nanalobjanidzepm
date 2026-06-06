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
        {/* Frameless photo — soft brand wash, feathered edges fade to background */}
        <div className="lg:col-span-5 relative min-h-[460px] md:min-h-[560px]">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(55% 50% at 50% 50%, oklch(0.78 0.16 165 / 0.16), transparent 75%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(40% 35% at 20% 80%, oklch(0.55 0.13 235 / 0.12), transparent 70%)",
            }}
            aria-hidden
          />

          <img
            src={about.url}
            alt="ნანა ლობჯანიძე — სამუშაო პროცესში"
            className="relative z-10 mx-auto block h-[460px] md:h-[560px] w-auto max-w-full object-cover object-top"
            style={{
              WebkitMaskImage:
                "radial-gradient(75% 80% at 50% 45%, black 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.4) 75%, transparent 92%)",
              maskImage:
                "radial-gradient(75% 80% at 50% 45%, black 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.4) 75%, transparent 92%)",
            }}
          />
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
