import about from "@/assets/about-portrait.asset.json";

const PILLARS = [
  { t: "სისტემური აზროვნება", d: "პროცესების სტრუქტურირება ქაოსიდან კონტროლამდე." },
  { t: "ლიდერობა", d: "გუნდები, რომლებიც ერთ მიმართულებაში მოძრაობენ." },
  { t: "კომუნიკაცია", d: "სტეიკჰოლდერებთან გამჭვირვალე და მკაფიო დიალოგი." },
  { t: "რისკების მართვა", d: "პრობლემები — სანამ პრობლემები გახდებიან." },
];

export function About() {
  return (
    <section id="about" className="section-y relative">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10">
            <img src={about.url} alt="ნანა ლობჯანიძე — სამუშაო პროცესში" className="w-full h-auto object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <span className="eyebrow">შესახებ</span>
          <h2 className="heading-lg mt-4 text-balance">
            პროექტი არ უნდა იყოს იღბლის საქმე — <span className="text-mint">ის უნდა იყოს სისტემა.</span>
          </h2>
          <div className="mt-6 space-y-4 text-foreground/80 text-base md:text-lg leading-relaxed">
            <p>
              15 წელზე მეტია, რაც პროექტებს ვმართავ — საერთაშორისო დონორებთან (EU, GIZ, UNDP,
              Embassy of Japan, Slovak ODA), საჯარო და კერძო სექტორთან. ჩემი მისიაა,
              ორგანიზაციებმა და ლიდერებმა ისწავლონ პროექტის მართვა, როგორც პროფესია — და არა
              როგორც ინტუიცია.
            </p>
            <p>
              PMP® სერტიფიკატი 2024 წელს ჩავაბარე — და ახლა ვეხმარები სხვებსაც, ვინც იმავე
              გზაზე დგას: კონსულტაცია, ტრენინგი, მენტორინგი — სამივე ერთ ენაზე.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {PILLARS.map((p) => (
              <div key={p.t} className="surface-card p-5 transition hover:border-mint/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mint/15 text-mint font-bold">●</span>
                  <h3 className="font-extrabold text-base md:text-lg">{p.t}</h3>
                </div>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
