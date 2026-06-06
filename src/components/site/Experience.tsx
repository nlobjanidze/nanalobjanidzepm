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
    <section id="experience" className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">სამუშაო გამოცდილება</span>
          <h2 className="heading-lg mt-4 text-balance">
            15+ წელი — <span className="text-mint">პროექტების ხაზზე</span>
          </h2>
        </div>

        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-mint/0 via-mint/40 to-mint/0" aria-hidden />
          <ol className="space-y-10">
            {ROLES.map((r, i) => (
              <li key={r.period} className="relative md:grid md:grid-cols-2 md:gap-12">
                <div className={`md:${i % 2 === 0 ? "text-right md:pr-12" : "col-start-2 md:pl-12"}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "" : "md:pl-12"}`}>
                    <span className="absolute left-2.5 md:left-1/2 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full bg-mint ring-4 ring-mint/20" />
                    <p className="text-xs font-black tracking-widest uppercase text-mint">{r.period}</p>
                    <h3 className="mt-2 text-lg md:text-xl font-extrabold">{r.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-foreground/70">{r.org}</p>
                    <p className="mt-3 text-sm md:text-base text-foreground/75 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
