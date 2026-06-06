const SERVICES = [
  {
    tag: "PM Advisory",
    title: "პროექტის მართვის კონსულტაცია",
    problem: "„გვაქვს იდეა, მაგრამ არ ვიცით, სად ვიწყოთ.“ „პროექტი ვერ მიდის — ვერ ვხვდებით, რატომ.“",
    steps: [
      "დიაგნოსტიკა — სად ხართ ახლა",
      "სამოქმედო გეგმა — რა, ვინ, როდის",
      "ინსტრუმენტების დანერგვა — Jira, Asana, ClickUp",
      "პროგრესის მონიტორინგი — KPI და ანგარიშგება",
    ],
    outcome: "ნაკლები ქაოსი, მეტი კონტროლი, პროექტი — დროში და ბიუჯეტში.",
  },
  {
    tag: "Build Your PMO",
    title: "PMO ჩამოყალიბება ნულიდან",
    problem: "ბევრი პროექტი — მაგრამ არ იცით, რომელი პრიორიტეტულია და სად „გაქრა“ ბიუჯეტი.",
    steps: [
      "პორტფოლიოს ინვენტარიზაცია და ანალიზი",
      "PMO-ს სტრუქტურის დიზაინი",
      "პროცესების შაბლონები და ანგარიშგების სისტემა",
      "გუნდის ტრენინგი ახალ სისტემაზე",
    ],
    outcome: "ხელმძღვანელობა ხედავს მთლიან სურათს. გადაწყვეტილებები სწრაფდება. ბიუჯეტი — კონტროლში.",
  },
  {
    tag: "Grant Project Management",
    title: "საგრანტო პროექტების მართვა",
    problem: "„გრანტი მოვიგეთ — ახლა რა?“ EU, GIZ, UNDP, USAID და სხვა დონორებთან მუშაობის გამოცდილებით.",
    steps: [
      "პროექტის სამოქმედო გეგმის შემუშავება",
      "ბიუჯეტის ტრეკინგი და კონტროლი",
      "დონორთა ანგარიშების მომზადება",
      "სტეიკჰოლდერებთან კომუნიკაცია",
    ],
    outcome: "დონორი კმაყოფილია → ანგარიში ჩაბარებულია → მეორე გრანტი მოდის.",
  },
  {
    tag: "Process Redesign",
    title: "სტრატეგიული პროცესების ოპტიმიზაცია",
    problem: "„ვაკეთებთ ბევრს, მაგრამ ნაკლები გვიმარჩება.“ „ყველა ყველაფერს აკეთებს — ნათელი პასუხისმგებლობა არ არის.“",
    steps: [
      "As-Is ანალიზი — როგორ მუშაობთ ახლა",
      "პრობლემების დიაგნოსტიკა",
      "To-Be სქემა — როგორ უნდა მუშაობდეთ",
      "ცვლილებების მართვა და გუნდის მომზადება",
    ],
    outcome: "ნაკლები დაყოვნება, მეტი ეფექტიანობა, ორგანიზაცია — სადაც ყველა იცის, რა უნდა გააკეთოს.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-y bg-white">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow">სერვისები</span>
            <h2 className="heading-lg mt-4 text-balance">
              კონსულტაცია, რომელიც <span className="text-navy">შედეგად აისახება</span>
            </h2>
            <p className="mt-4 text-ink-soft text-base md:text-lg">
              ოთხი ფოკუსირებული მიმართულება — ბიზნესისთვის, NGO-სა და
              საჯარო სექტორისთვის. ყველა სერვისი იწყება დიაგნოსტიკით —
              და მთავრდება გაზომვადი ბიზნეს შედეგით.
            </p>
          </div>
          <a
            href="#contact"
            className="self-start inline-flex items-center rounded-full bg-navy-deep px-6 py-3 font-bold text-white hover:bg-navy transition"
          >
            დაგეგმე ზარი →
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <article
              key={s.tag}
              className="surface-card p-7 md:p-9 group relative overflow-hidden hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mint to-azure opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black tracking-[0.2em] text-navy-soft uppercase">
                  {String(i + 1).padStart(2, "0")} · {s.tag}
                </span>
                <span className="h-10 w-10 rounded-full bg-mint-soft border border-mint/40 inline-flex items-center justify-center text-navy-deep font-bold group-hover:bg-mint transition">→</span>
              </div>
              <h3 className="heading-md mt-4">{s.title}</h3>
              <p className="mt-3 text-sm md:text-base text-ink-soft leading-relaxed italic">{s.problem}</p>
              <ul className="mt-5 space-y-2.5">
                {s.steps.map((st) => (
                  <li key={st} className="flex gap-3 text-sm md:text-[0.95rem] text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mint shrink-0 ring-4 ring-mint/15" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-line">
                <p className="text-xs uppercase tracking-widest font-black text-navy-soft mb-2">ბიზნეს შედეგი</p>
                <p className="text-sm md:text-base text-ink font-medium">{s.outcome}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-line shadow-[var(--shadow-soft)] bg-navy-deep text-white">
          <div className="lg:col-span-8 p-8 md:p-12">
            <span className="eyebrow" style={{ color: "var(--mint-bright)" }}>დიაგნოსტიკა</span>
            <h3 className="heading-md mt-4 text-balance text-white" style={{ color: "white" }}>
              გჭირდებათ შერეული მიდგომა? <span className="text-mint">მოვამზადოთ ერთად.</span>
            </h3>
            <p className="mt-4 text-white/75 max-w-xl">
              ყველა ორგანიზაცია სხვაა. დავიწყოთ უფასო 30-წუთიანი დიაგნოსტიკით —
              გავარკვიოთ, რომელი მიდგომა მუშაობს თქვენთვის.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center rounded-full bg-mint px-6 py-3.5 font-bold text-navy-deep hover:bg-mint-bright transition">
              დაჯავშნე უფასო კონსულტაცია
            </a>
          </div>
          <div className="lg:col-span-4 relative min-h-[200px] bg-gradient-to-br from-azure/40 via-navy to-navy-deep flex items-center justify-center p-10">
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-black text-mint">30’</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-white/70 font-bold">უფასო ზარი</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
