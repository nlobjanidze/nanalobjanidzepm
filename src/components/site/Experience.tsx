const ROLES = [
  {
    period: "2022 — Present",
    role: "Senior Project Management Consultant & Trainer",
    org: "Independent · LN Consulting",
    desc: "PMP® კონსულტაცია, ტრენინგი და მენტორინგი — კერძო ბიზნესისთვის, NGO-სა და საჯარო სექტორისთვის.",
  },
  {
    period: "2018 — 2022",
    role: "Project Manager",
    org: "EU / GIZ / UNDP საგრანტო პროგრამები",
    desc: "1.5+ მლნ ლარის საერთო ღირებულების პროექტების მართვა, დონორთა ანგარიშგება, ქვე-გრანტის ადმინისტრირება.",
  },
  {
    period: "2014 — 2018",
    role: "Program Coordinator",
    org: "Embassy of Japan / Slovak ODA პროექტები",
    desc: "საერთაშორისო პროექტების კოორდინაცია, სტეიკჰოლდერებთან კომუნიკაცია, ლოგისტიკა და ანგარიშგება.",
  },
  {
    period: "2010 — 2014",
    role: "Project Officer",
    org: "საჯარო და საერთაშორისო ორგანიზაციები",
    desc: "პროექტის დაგეგმვის, შესყიდვების და მონიტორინგის გამოცდილების მიღება.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-y bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">სამუშაო გამოცდილება</span>
          <h2 className="heading-lg mt-4 text-balance">
            15+ წელი — <span className="text-navy">პროექტების ხაზზე</span>
          </h2>
        </div>

        <div className="mt-12 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-line to-transparent" aria-hidden />
          <ol className="space-y-6">
            {ROLES.map((r) => (
              <li key={r.period} className="relative pl-12">
                <span className="absolute left-2.5 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-white border-2 border-mint shadow-[0_0_0_4px_oklch(0.95_0.04_168)]" />
                <div className="surface-card p-6 md:p-7 hover:-translate-y-0.5">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <h3 className="text-lg md:text-xl font-extrabold text-ink">{r.role}</h3>
                    <p className="text-xs font-black tracking-widest uppercase text-navy-soft tabular-nums">{r.period}</p>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-navy">{r.org}</p>
                  <p className="mt-3 text-sm md:text-base text-ink-soft leading-relaxed">{r.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
