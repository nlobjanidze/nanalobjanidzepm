const PROJECTS = [
  {
    donor: "EU",
    title: "რეგიონული განვითარების პროექტი",
    challenge: "მრავალკომპონენტიანი პროექტი 4 მუნიციპალიტეტში — განსხვავებული გუნდები, ერთიანი დონორის მოთხოვნები.",
    approach: "ერთიანი PMO სტრუქტურა, სტანდარტიზებული ანგარიშგება, რისკების კონტროლი.",
    outcome: "100% ბიუჯეტის ათვისება, ვადებში ჩატევა, EU-ს დადებითი შეფასება.",
    impact: "650K+ ₾",
  },
  {
    donor: "GIZ",
    title: "ბიზნეს განვითარების პროგრამა",
    challenge: "ადგილობრივი მცირე ბიზნესების მხარდაჭერა — სწავლება, მენტორინგი, გრანტირება.",
    approach: "სელექციის სქემა, შერეული ტრენინგი + 1:1 მენტორინგი, KPI მონიტორინგი.",
    outcome: "40+ ბენეფიციარი, 80% აქტიური ბიზნესი 1 წლის შემდეგ.",
    impact: "320K ₾",
  },
  {
    donor: "UNDP",
    title: "ინსტიტუციური გაძლიერების პროექტი",
    challenge: "საჯარო ორგანიზაციის შიდა პროცესების რეფორმა მოკლე ვადებში.",
    approach: "As-Is / To-Be ანალიზი, პროცესების ხელახალი დიზაინი, გუნდის ტრენინგი.",
    outcome: "შემცირებული გადაწყვეტილების მიღების დრო 45%-ით.",
    impact: "200+ თანამშრომელი",
  },
  {
    donor: "Embassy of Japan",
    title: "ინფრასტრუქტურული გრანტი",
    challenge: "მკაცრი დონორის სტანდარტი, ლოგისტიკურად რთული რეგიონი.",
    approach: "დეტალური Procurement Plan, რისკის რეესტრი, ყოველკვირეული მონიტორინგი.",
    outcome: "პროექტი ჩაბარდა ვადაზე ადრე, ბიუჯეტში.",
    impact: "180K ₾",
  },
  {
    donor: "Slovak ODA",
    title: "სოციალური განვითარების ინიციატივა",
    challenge: "მოწყვლადი ჯგუფების ჩართულობა, ხარისხის სტანდარტი.",
    approach: "სტეიკჰოლდერების რუკა, კომუნიკაციის გეგმა, ბენეფიციართა feedback ციკლი.",
    outcome: "150+ პირდაპირი ბენეფიციარი, მაღალი დონორის შეფასება.",
    impact: "150K ₾",
  },
  {
    donor: "Corporate",
    title: "PMO ჩამოყალიბება ნულიდან",
    challenge: "კერძო კომპანიას 12+ პარალელური პროექტი — ერთიანი ხედვის გარეშე.",
    approach: "PMO დიზაინი, შაბლონები, dashboard, გუნდის ტრენინგი.",
    outcome: "პროექტების on-time delivery გაიზარდა 60% → 92%.",
    impact: "12 პროექტი",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-y bg-gradient-to-b from-transparent via-navy/40 to-transparent">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">პროექტების პორტფოლიო</span>
          <h2 className="heading-lg mt-4 text-balance">
            შერჩეული ქეისები — <span className="text-mint">გაზომვადი შედეგებით</span>
          </h2>
          <p className="mt-4 text-foreground/75 text-base md:text-lg">
            EU, GIZ, UNDP, Embassy of Japan, Slovak ODA — და კერძო სექტორი.
            ყველა პროექტი იწყება გამოწვევით, მთავრდება შედეგით.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p) => (
            <article key={p.title} className="surface-card p-6 md:p-7 flex flex-col hover:border-mint/40 transition">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black tracking-widest uppercase bg-mint/10 text-mint border border-mint/30 px-2.5 py-1 rounded-full">
                  {p.donor}
                </span>
                <span className="text-xs font-bold text-foreground/60">{p.impact}</span>
              </div>
              <h3 className="mt-4 text-lg font-extrabold leading-tight">{p.title}</h3>
              <dl className="mt-4 space-y-3 text-sm flex-1">
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-widest text-mint/80">გამოწვევა</dt>
                  <dd className="mt-1 text-foreground/80">{p.challenge}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-widest text-mint/80">მიდგომა</dt>
                  <dd className="mt-1 text-foreground/80">{p.approach}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-widest text-mint/80">შედეგი</dt>
                  <dd className="mt-1 text-foreground/90 font-semibold">{p.outcome}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
