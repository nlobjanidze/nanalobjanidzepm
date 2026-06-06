import servicesImg from "@/assets/services-portrait.asset.json";

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
    <section id="services" className="section-y">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow">სერვისები</span>
            <h2 className="heading-lg mt-4 text-balance">
              კონსულტაცია, რომელიც <span className="text-mint">შედეგად აისახება</span>
            </h2>
            <p className="mt-4 text-foreground/75 text-base md:text-lg">
              ოთხი ფოკუსირებული მიმართულება — საქართველოს ბიზნესისთვის, NGO-სა და
              საჯარო სექტორისთვის. ყველა სერვისი იწყება დიაგნოსტიკით — და მთავრდება
              გაზომვადი ბიზნეს შედეგით.
            </p>
          </div>
          <a
            href="#contact"
            className="self-start inline-flex items-center rounded-full bg-mint px-5 py-3 font-bold text-navy-deep hover:bg-mint-bright transition"
          >
            დაგეგმე ზარი →
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <article
              key={s.tag}
              className="surface-card p-7 md:p-9 group hover:border-mint/40 transition-all relative overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-mint/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black tracking-[0.2em] text-mint uppercase">
                  {String(i + 1).padStart(2, "0")} · {s.tag}
                </span>
                <span className="h-9 w-9 rounded-full bg-mint/10 border border-mint/30 inline-flex items-center justify-center text-mint">→</span>
              </div>
              <h3 className="heading-md mt-4">{s.title}</h3>
              <p className="mt-3 text-sm md:text-base text-foreground/70 leading-relaxed italic">{s.problem}</p>
              <ul className="mt-5 space-y-2.5">
                {s.steps.map((st) => (
                  <li key={st} className="flex gap-3 text-sm md:text-[0.95rem] text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mint shrink-0" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="text-xs uppercase tracking-widest font-bold text-mint mb-2">ბიზნეს შედეგი</p>
                <p className="text-sm md:text-base text-foreground/90">{s.outcome}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8 surface-card overflow-hidden">
          <div className="p-8 md:p-12">
            <h3 className="heading-md text-balance">
              გჭირდებათ შერეული მიდგომა? <span className="text-mint">მოვამზადოთ ერთად.</span>
            </h3>
            <p className="mt-4 text-foreground/75">
              ყველა ორგანიზაცია სხვაა. დავიწყოთ უფასო 30-წუთიანი დიაგნოსტიკით —
              გავარკვიოთ, რომელი მიდგომა მუშაობს თქვენთვის.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center rounded-full bg-mint px-6 py-3.5 font-bold text-navy-deep hover:bg-mint-bright">
              დაჯავშნე უფასო კონსულტაცია
            </a>
          </div>
          <div className="relative min-h-[280px]">
            <img src={servicesImg.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
