const TRAININGS = [
  {
    code: "PM Starter",
    title: "პროექტების მართვის საფუძვლები",
    who: "ბიზნეს ოუნერებისთვის, გუნდის ლიდერებისთვის, HR სპეციალისტებისთვის, NGO-ს კოორდინატორებისთვის — ყველასთვის, ვინც პირველად ეხება პროექტების მართვას.",
    learn: [
      "პროექტის სასიცოცხლო ციკლი — დაგეგმვიდან დახურვამდე",
      "სკოუფი, ვადები, ბიუჯეტი, ხარისხი",
      "სტეიკჰოლდერების იდენტიფიცირება და მართვა",
      "WBS, Gantt Chart, Risk Register",
      "PM ინსტრუმენტები: Trello, ClickUp, Asana",
    ],
    result: "პროექტის გეგმის შექმნა, გუნდის ეფექტური მართვა, ვადებისა და ბიუჯეტის კონტროლი — დამოუკიდებლად.",
    duration: "8 სესია",
    level: "Beginner",
  },
  {
    code: "PMP® Prep",
    title: "PMP® გამოცდის მომზადება",
    who: "პროექტის მენეჯერებისთვის, ვისაც 24–36+ თვის PM გამოცდილება აქვს და PMI-ს მიერ აღიარებული PMP® სერტიფიკატი სურს.",
    learn: [
      "PMBOK® Guide-ის 8 შესრულების დომენი",
      "Agile, Waterfall, Hybrid — განსხვავება და გამოყენება",
      "PMI-ს „სიტუაციური“ კითხვების ლოგიკა",
      "გამოცდაზე რეგისტრაცია — ნაბიჯ-ნაბიჯ",
      "150+ Practice Question პრაქტიკულ სესიებზე",
    ],
    result: "PMP® გამოცდაზე გასვლის სრული მზაობა. PMBOK®-ის პრაქტიკული გაგება.",
    duration: "12 სესია",
    level: "Advanced",
    featured: true,
  },
  {
    code: "Agile in Practice",
    title: "Agile Project Management",
    who: "IT გუნდებისთვის, სტარტაპებისთვის, ნებისმიერი ორგანიზაციისთვის, ვისაც სწრაფი ცვლილებებთან ადაპტაცია სჭირდება.",
    learn: [
      "Scrum, Kanban — სად გამოიყენება თითოეული",
      "Sprint Planning, Daily Standup, Retrospective",
      "Product Backlog-ის მართვა",
      "Agile vs Waterfall — როდის რომელი",
      "Jira / Trello — Agile-ის კონფიგურაცია",
    ],
    result: "Agile გუნდის ორგანიზება. Product Owner-ებთან და Scrum Master-ებთან ერთ ენაზე ლაპარაკი.",
    duration: "6 სესია",
    level: "Intermediate",
  },
  {
    code: "PM for Teams",
    title: "კორპორატიული ტრენინგი",
    who: "კომპანიებისთვის და ორგანიზაციებისთვის — 5–25 კაციანი გუნდი, რომელიც პროექტებს მართავს.",
    learn: [
      "ერთიანი PM ენა ორგანიზაციაში",
      "პროექტის ინიციაცია, დაგეგმვა, მონიტორინგი — ერთ სისტემაში",
      "Stakeholder Management — შიდა და გარე",
      "PM ინსტრუმენტების ინტეგრაცია კომპანიის პროცესებში",
    ],
    result: "ნაკლები ჩავარდნა, მეტი დასრულებული პროექტი, PM კულტურა ორგანიზაციაში.",
    duration: "მორგებული",
    level: "Corporate",
  },
];

export function Trainings() {
  return (
    <section id="trainings" className="section-y bg-gradient-to-b from-transparent via-navy/40 to-transparent">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">ტრენინგები</span>
          <h2 className="heading-lg mt-4 text-balance">
            ოთხი პროგრამა — <span className="text-mint">საფუძვლებიდან PMP®-მდე</span>
          </h2>
          <p className="mt-4 text-foreground/75 text-base md:text-lg">
            ყველა ტრენინგი დაფუძნებულია რეალურ პროექტებზე — არა მხოლოდ სლაიდებზე.
            სწავლა მუშაობს მაშინ, როცა მეორე დღეს უკვე გამოიყენე.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {TRAININGS.map((t) => (
            <article
              key={t.code}
              className={`surface-card p-7 md:p-9 relative ${t.featured ? "ring-mint" : ""}`}
            >
              {t.featured && (
                <span className="absolute top-5 right-5 text-[10px] font-black tracking-widest uppercase bg-mint text-navy-deep px-2.5 py-1 rounded-full">
                  მოთხოვნადი
                </span>
              )}
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                <span className="text-mint">{t.code}</span>
                <span className="text-foreground/40">·</span>
                <span className="text-foreground/60">{t.duration}</span>
                <span className="text-foreground/40">·</span>
                <span className="text-foreground/60">{t.level}</span>
              </div>
              <h3 className="heading-md mt-3">{t.title}</h3>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-widest font-bold text-mint mb-2">ვისთვისაა</p>
                <p className="text-sm md:text-[0.95rem] text-foreground/80 leading-relaxed">{t.who}</p>
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-widest font-bold text-mint mb-2">რას ისწავლი</p>
                <ul className="space-y-2">
                  {t.learn.map((l) => (
                    <li key={l} className="flex gap-3 text-sm md:text-[0.95rem] text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mint shrink-0" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="text-xs uppercase tracking-widest font-bold text-mint mb-2">შედეგი</p>
                <p className="text-sm md:text-base text-foreground/90">{t.result}</p>
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center rounded-full bg-white/5 border border-white/10 px-5 py-2.5 font-semibold text-sm hover:bg-mint hover:text-navy-deep hover:border-mint transition"
              >
                დარეგისტრირდი →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
