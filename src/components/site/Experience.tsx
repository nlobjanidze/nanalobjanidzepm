const ROLES = [
  {
    period: "2025 — დღემდე",
    org: "PMI Tbilisi, Georgia Chapter",
    role: "კომუნიკაციის, მარკეტინგისა და სოციალური მედიის დირექტორი · Board Member",
    desc: "ვხელმძღვანელობ პროგრამებისა და 20+ პროექტის პორტფოლიოს, ვკოორდინირებ 25-მდე მოხალისეს, ვმართავ სტრატეგიულ პარტნიორობებსა და პროფესიული განვითარების ინიციატივებს.",
    highlights: [
      "გაიზარდა ღონისძიებების მონაწილეთა ჩართულობა",
      "მოხალისეთა აქტივობის ზრდა",
      "ციფრული აუდიტორიის მოცულობის ზრდა",
    ],
  },
  {
    period: "2025",
    org: "Kursi.ge",
    role: "პროექტის მენეჯერი",
    desc: "ვმართავდი სტრატეგიულ, მარკეტინგულ და ციფრულ პროექტებს, ვახორციელებდი პორტფოლიოს მართვის სისტემების დანერგვას, პროცესების ოპტიმიზაციასა და ბიზნეს ეფექტიანობის გაუმჯობესებას.",
    highlights: [
      "პროექტების ხილვადობა და კომუნიკაცია გაუმჯობესდა 30%-ით",
    ],
  },
  {
    period: "2024",
    org: "JobDeal",
    role: "პროექტის მენეჯერი",
    desc: "ვმართავდი HR პროექტებს Agile მიდგომების გამოყენებით — ტალანტების მოზიდვა, შერჩევა, პროცესების ოპტიმიზაცია და ორგანიზაციული ეფექტიანობა.",
    highlights: [],
  },
  {
    period: "2022 — 2024",
    org: "ონის მუნიციპალიტეტის მერია",
    role: "პროექტების მართვისა და დონორებთან ურთიერთობის სპეციალისტი · მერის თანაშემწე",
    desc: "ვმართავდი EU-ის, GIZ-ის, UNDP-ის, იაპონიის საელჩოს, Slovak ODA-სა და სხვა საერთაშორისო ორგანიზაციების მიერ დაფინანსებულ პროექტებს.",
    highlights: [
      "1.5+ მლნ ლარის ღირებულების პროექტების მართვა",
      "მუნიციპალური და რეგიონული განვითარება, საინვესტიციო პროექტები",
      "ბიზნეს კლასტერების შექმნა და საგრანტო პროექტების მართვა",
      "SDG-ების ლოკალიზაცია, საერთაშორისო პარტნიორებთან თანამშრომლობა",
    ],
  },
  {
    period: "2012 — 2021",
    org: "საბანკო და კერძო სექტორი",
    role: "სხვადასხვა მენეჯერული პოზიციები",
    desc: "ვხელმძღვანელობდი გუნდებს, ვმართავდი ოპერაციულ პროცესებს, KPI-ებს, გაყიდვებს, მომსახურების ხარისხს, თანამშრომელთა განვითარებასა და ბიზნეს პროცესების გაუმჯობესებას.",
    highlights: [],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-y bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">სამუშაო გამოცდილება</span>
          <h2 className="heading-lg mt-4 text-balance">
            10+ წელი — <span className="text-navy">პროექტებისა და გუნდების ხაზზე</span>
          </h2>
        </div>

        <div className="mt-12 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-line to-transparent" aria-hidden />
          <ol className="space-y-6">
            {ROLES.map((r) => (
              <li key={r.period + r.org} className="relative pl-12">
                <span
                  className="absolute left-2.5 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-white border-2"
                  style={{ borderColor: "var(--mint)", boxShadow: "0 0 0 4px rgba(23,227,178,0.15)" }}
                />
                <div className="surface-card p-6 md:p-7 hover:-translate-y-0.5">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <h3 className="text-lg md:text-xl font-extrabold text-ink">{r.org}</h3>
                    <p className="text-xs font-black tracking-widest uppercase text-navy-soft tabular-nums">{r.period}</p>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-navy">{r.role}</p>
                  <p className="mt-3 text-sm md:text-base text-ink-soft leading-relaxed">{r.desc}</p>
                  {r.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {r.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm text-ink">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--mint)" }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
