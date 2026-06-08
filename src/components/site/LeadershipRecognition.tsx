import limPoster from "@/assets/lim-poster.asset.json";
import pmiConf from "@/assets/pmi-conference.asset.json";

const ROLES = [
  {
    org: "PMI Tbilisi, Georgia Chapter",
    title: "Board Member · Director of Marketing, Communications & Social Media",
    period: "2024 - დღემდე",
  },
  {
    org: "PMI Chapter Leader 2026",
    title: "Chapter Leadership Program Participant",
    period: "2026",
  },
  {
    org: "SAGE Georgia",
    title: "Mentor · National Finals Jury Member",
    period: "2024 - დღემდე",
  },
  {
    org: "Junior Achievement Georgia",
    title: "Student Company Mentor — Company of the Year Competition",
    period: "2024",
  },
];

const AWARDS = [
  {
    year: "2024",
    title: "Dedication, Outstanding Volunteering & Support of the Marketing Team",
    org: "PMI Tbilisi, Georgia Chapter",
  },
  {
    year: "2024",
    title: "Student Company Mentor Recognition",
    org: "JA Georgia",
  },
  {
    year: "2023",
    title: "Successful Organization of „Kahoot Season 2\"",
    org: "PMI Tbilisi, Georgia Chapter",
  },
];

export function LeadershipRecognition() {
  return (
    <section id="leadership" className="section-y bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">ლიდერობა &amp; აღიარება</span>
          <h2 className="heading-lg mt-4 text-balance">
            აღიარებები და <span className="text-navy">ლიდერული როლები</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base md:text-lg">
            PMI-ის გლობალური ლიდერული ინიციატივები, ჩაფტერის სამმართველო, საერთაშორისო
            მენტორული პროგრამები და პროფესიული ჯილდოები.
          </p>
        </div>

        {/* PMI LIM 2026 featured card */}
        <article
          className="mt-12 grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-line shadow-[var(--shadow-soft)]"
          style={{ background: "var(--navy-deep)", color: "white" }}
        >
          <div className="lg:col-span-7 p-8 md:p-12">
            <span className="eyebrow" style={{ color: "var(--mint-bright)" }}>
              Featured · LIM 2026
            </span>
            <h3 className="heading-md mt-4 text-balance" style={{ color: "white" }}>
              PMI Leadership Institute Meeting (LIM) 2026
            </h3>
            <p className="mt-4 text-white/85 leading-relaxed">
              PMI-ის გლობალური ლიდერული განვითარების ფლაგმანი ღონისძიება, რომელშიც
              მონაწილეობას იღებენ PMI Chapter-ების ლიდერები მთელი მსოფლიოდან.
              ფოკუსი — ლიდერობა, Chapter-ის ზრდა, სტრატეგიული დაგეგმვა, მოხალისეების მართვა
              და თემის განვითარება. ლისაბონი, 2026.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/85">
              {[
                "Leadership Development",
                "Chapter Growth",
                "Strategic Planning",
                "Volunteer Management",
                "Community Development",
                "Global PMI Network",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--mint)" }} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 relative min-h-[260px]">
            <img
              src={limPoster.url}
              alt="PMI Leadership Institute Meeting 2026 — ლისაბონი"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </article>

        {/* Leadership roles */}
        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <h3 className="text-xl md:text-2xl font-black text-navy-deep">ლიდერული როლები</h3>
            <ul className="mt-5 divide-y divide-line surface-card p-2">
              {ROLES.map((r) => (
                <li key={r.org + r.title} className="p-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-navy-soft">{r.org}</p>
                    <p className="mt-1 font-extrabold text-ink">{r.title}</p>
                  </div>
                  <span className="shrink-0 text-xs font-black tabular-nums mt-1" style={{ color: "var(--navy)" }}>{r.period}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 surface-card p-6">
              <p className="text-[11px] font-black uppercase tracking-widest text-navy-soft">SAGE Georgia</p>
              <h4 className="mt-2 font-extrabold text-lg text-ink">საერთაშორისო საგანმანათლებლო და სამეწარმეო პლატფორმა</h4>
              <p className="mt-2 text-sm md:text-[0.95rem] text-ink-soft leading-relaxed">
                SAGE Georgia ხელს უწყობს ახალგაზრდულ მეწარმეობას, ინოვაციას, ლიდერობას და
                SDG-ზე დაფუძნებულ პროექტურ ინიციატივებს. ორგანიზაცია აერთიანებს მენტორებს,
                ახალგაზრდებსა და საერთაშორისო პარტნიორებს ლოკალური და გლობალური ინიციატივების მეშვეობით.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
                <span className="px-3 py-1 rounded-full" style={{ background: "var(--mint-soft)", color: "var(--navy-deep)", border: "1px solid var(--mint)" }}>Mentor</span>
                <span className="px-3 py-1 rounded-full" style={{ background: "var(--mint-soft)", color: "var(--navy-deep)", border: "1px solid var(--mint)" }}>National Finals Jury Member</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-xl md:text-2xl font-black text-navy-deep">ჯილდოები &amp; აღიარება</h3>
            <div className="mt-5 space-y-4">
              {AWARDS.map((a) => (
                <article key={a.title} className="surface-card p-5 hover:-translate-y-0.5">
                  <div className="flex items-center justify-between">
                    <span
                      className="h-9 w-9 rounded-full inline-flex items-center justify-center"
                      style={{ background: "var(--mint-soft)", color: "var(--navy-deep)", border: "1px solid var(--mint)" }}
                    >
                      ★
                    </span>
                    <span className="text-xs font-black tabular-nums" style={{ color: "var(--navy)" }}>{a.year}</span>
                  </div>
                  <h4 className="mt-3 font-extrabold text-ink leading-tight">{a.title}</h4>
                  <p className="mt-1 text-sm text-ink-soft">{a.org}</p>
                </article>
              ))}
            </div>

            <figure className="mt-6 rounded-2xl overflow-hidden border border-line">
              <img
                src={pmiConf.url}
                alt="PMI Leadership Institute Meeting — სესიები"
                className="w-full h-48 object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-ink-soft bg-surface">
                PMI Leadership Institute Meeting 2026, ლისაბონი
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
