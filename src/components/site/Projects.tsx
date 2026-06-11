const PROJECTS = [
  {
    donor: "EU",
    title: "Economic Development of Oni Municipality via Business Clusters and Investment Attraction",
    summary: "ონის მუნიციპალიტეტის ეკონომიკური განვითარება ბიზნეს კლასტერებისა და ინვესტიციების მოზიდვის გზით.",
    outcomes: [
      "ტურიზმისა და კვების ბიზნეს კლასტერების შექმნა",
      "30+ მცირე და საშუალო ბიზნესის გაერთიანება",
      "საინვესტიციო პროფილისა და პლატფორმის შექმნა",
      "ქვე-გრანტების მექანიზმის დანერგვა",
    ],
    impact: "30+ SME",
    link: "https://eu4business.ge/projects/economic-development-of-oni-municipality-via-business-clusters-creation-and-investment-attraction/",
  },
  {
    donor: "GIZ",
    title: "Sustainable Urban Development in Georgia",
    summary: "მდგრადი ურბანული განვითარების ინიციატივების მხარდაჭერა მუნიციპალურ დონეზე.",
    outcomes: [
      "ენერგიის მართვის სისტემის დანერგვა",
      "მუნიციპალური თანამშრომლების გადამზადება",
      "მოქალაქეთა ჩართულობის მექანიზმების განვითარება",
    ],
    impact: "მუნიც. დონე",
  },
  {
    donor: "Embassy of Japan",
    title: "Community Bus Project",
    summary: "თემზე ორიენტირებული სატრანსპორტო პროექტი — გადაადგილებისა და სერვისებზე ხელმისაწვდომობის გაუმჯობესება.",
    outcomes: [
      "700+ ბენეფიციარისთვის გადაადგილების გაუმჯობესება",
      "მუნიციპალურ სერვისებზე ხელმისაწვდომობის ზრდა",
      "სოციალური ჩართულობისა და ცხოვრების ხარისხის გაუმჯობესება",
    ],
    impact: "700+ ბენეფიციარი",
  },
  {
    donor: "UNDP",
    title: "SDG Localization Program",
    summary: "გაეროს მდგრადი განვითარების მიზნების (SDG) ლოკალიზაცია ადგილობრივ მუნიციპალურ დონეზე.",
    outcomes: [
      "SDG სტრატეგიისა და სამოქმედო გეგმის შექმნა",
      "მონიტორინგისა და ანგარიშგების სისტემის დანერგვა",
      "ადგილობრივი დაინტერესებული მხარეების აქტიური ჩართულობა",
    ],
    impact: "SDG ჩარჩო",
  },
  {
    donor: "EU · UNDP · M4EG",
    title: "URBANIST AI Workshop — Borjomi (2024)",
    summary: "EU4Georgia და UNDP-EU პარტნიორობით — URBANIST AI ხელსაწყოს გამოყენების სემინარი მუნიციპალური დაგეგმარებისთვის.",
    outcomes: [
      "AI-ზე დაფუძნებული ურბანული დაგეგმარების ინსტრუმენტების დანერგვა",
      "მუნიციპალური გუნდების გადამზადება",
    ],
    impact: "AI · Urban",
  },
  {
    donor: "Visegrad Fund",
    title: "Regional Branding Project (2023)",
    summary: "რაჭა-ლეჩხუმ-ქვემო სვანეთის რეგიონული ბრენდინგი — სლოვაკეთის, ჩეხეთის, პოლონეთისა და საქართველოს თანამშრომლობით.",
    outcomes: [
      "რეგიონული ბრენდის სტრატეგიის შემუშავება",
      "4-ქვეყნიანი პარტნიორობის კოორდინაცია",
    ],
    impact: "4 ქვეყანა",
  },
  {
    donor: "Solidarność Fund PL",
    title: "ენერგოეფექტურობის პროექტი — ონი (2023)",
    summary: "პოლონეთის საგარეო საქმეთა სამინისტროს დაფინანსებით — ენერგოეფექტურობის ღონისძიებები ონის მუნიციპალიტეტში.",
    outcomes: [
      "ენერგოეფექტურობის გადაწყვეტილებების დანერგვა",
      "მუნიციპალური ინფრასტრუქტურის გაუმჯობესება",
    ],
    impact: "მუნიც. დონე",
  },
  {
    donor: "Forum",
    title: "„მწვანე და ჭკვიანი ტექნოლოგიები“ ფორუმი (2023)",
    summary: "Pullman Tbilisi Axis Towers — ონის მუნიციპალიტეტის წარმომადგენლობა საერთაშორისო ფორუმზე მდგრადი ტექნოლოგიების შესახებ.",
    outcomes: [
      "მუნიციპალიტეტის გამოცდილების პრეზენტაცია",
      "ახალი პარტნიორობების დამყარება",
    ],
    impact: "Green Tech",
  },
];


export function Projects() {
  return (
    <section id="projects" className="section-y bg-surface">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">ძირითადი პროექტები</span>
          <h2 className="heading-lg mt-4 text-balance">
            შერჩეული ქეისები — <span className="text-navy">საერთაშორისო დონორებთან</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base md:text-lg">
            EU, GIZ, UNDP, იაპონიის საელჩო, Slovak ODA. ყველა პროექტი იწყება გამოწვევით —
            მთავრდება გაზომვადი შედეგით.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="surface-card p-6 md:p-8 flex flex-col hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{ background: "var(--navy-deep)", color: "white" }}
                >
                  {p.donor}
                </span>
                <span className="text-xs font-black tabular-nums" style={{ color: "var(--navy)" }}>{p.impact}</span>
              </div>
              <h3 className="mt-4 text-base md:text-lg font-extrabold leading-tight text-ink">{p.title}</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{p.summary}</p>

              <div className="mt-5 pt-5 border-t border-line">
                <p className="text-[10px] font-black uppercase tracking-widest text-navy-soft mb-3">ძირითადი შედეგები</p>
                <ul className="space-y-2">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex gap-2.5 text-sm text-ink">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--mint)" }} />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-bold text-navy hover:underline"
                >
                  პროექტის გვერდი →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
