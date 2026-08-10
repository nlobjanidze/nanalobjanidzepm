import { useState } from "react";
import limPortrait from "@/assets/lim-portrait.asset.json";
import limPassStage from "@/assets/lim-pass-stage.asset.json";
import limScreen from "@/assets/lim-screen.asset.json";
import limGroup from "@/assets/lim-group.asset.json";
import chapterLeaderBadge from "@/assets/chapter-leader-badge.asset.json";
import sageLogo from "@/assets/sage-logo.asset.json";

const ROLES = [
  { org: "PMI Tbilisi, Georgia Chapter", title: "Board Member · Director of Marketing, Communications & Social Media", period: "2024 - დღემდე" },
  { org: "SAGE Georgia", title: "Mentor · National Finals Jury Member", period: "2024 - დღემდე" },
  { org: "Junior Achievement Georgia", title: "Student Company Mentor - Company of the Year Competition", period: "2024" },
];

const AWARDS = [
  { year: "2026", title: "PMI Certificate of Appreciation", org: "Project Management Institute - PMI Tbilisi, Georgia Chapter-ის განვითარებაში შეტანილი წვლილისთვის" },
  { year: "2024", title: "Dedication, Outstanding Volunteering & Support of the Marketing Team", org: "PMI Tbilisi, Georgia Chapter" },
  { year: "2024", title: "Student Company Mentor Recognition", org: "JA Georgia" },
  { year: "2023", title: "Successful Organization of „Kahoot Season 2“", org: "PMI Tbilisi, Georgia Chapter" },
];


const GALLERY = [
  { src: limGroup.url, caption: "Europe Leadership Institute Meeting 2026 · ჯგუფური ფოტო" },
  { src: limPassStage.url, caption: "Europe Leadership Institute Meeting 2026 - სცენა" },
  { src: limScreen.url, caption: "„We maximize project success to elevate our world.“ - PMI" },
];


export function LeadershipRecognition() {
  const [lightbox, setLightbox] = useState<string | null>(null);

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

        {/* Featured LIM 2026 */}
        <article
          className="mt-12 grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-line shadow-[var(--shadow-soft)]"
          style={{ background: "var(--navy-deep)", color: "white" }}
        >
          <div className="lg:col-span-7 p-8 md:p-12">
            <span className="eyebrow" style={{ color: "var(--mint-bright)" }}>Featured · PMI LIM 2026 · Lisbon</span>
            <h3 className="heading-md mt-4 text-balance" style={{ color: "white" }}>
              PMI Europe Leadership Institute Meeting (LIM) 2026
            </h3>
            <p className="mt-4 text-white/85 leading-relaxed">
              PMI-ის გლობალური ლიდერული განვითარების ფლაგმანი ღონისძიება, რომელშიც
              მონაწილეობას იღებენ PMI Chapter-ების ლიდერები მთელი მსოფლიოდან.
              ფოკუსი - ლიდერობა, Chapter-ის ზრდა, სტრატეგიული დაგეგმვა, მოხალისეების მართვა
              და თემის განვითარება. ლისაბონი, 2026.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/85">
              {["Leadership Development","Chapter Growth","Strategic Planning","Volunteer Management","Community Development","Global PMI Network"].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--mint)" }} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 relative min-h-[320px] bg-white/5">
            <img src={limPortrait.url} alt="Nana Lobjanidze - Europe LIM 2026, Lisbon" className="absolute inset-0 h-full w-full object-cover object-center" />
          </div>
        </article>

        {/* Gallery - clickable */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {GALLERY.map((g) => (
            <button
              key={g.src}
              type="button"
              onClick={() => setLightbox(g.src)}
              className="group text-left rounded-2xl overflow-hidden border border-line bg-surface focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ outlineColor: "var(--mint)" }}
            >
              <div className="overflow-hidden">
                <img src={g.src} alt={g.caption} className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <figcaption className="px-4 py-3 text-xs text-ink-soft">{g.caption}</figcaption>
            </button>
          ))}
        </div>

        {/* Roles + awards */}
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

            {/* PMI Chapter Leader - dedicated section */}
            <div className="mt-6 surface-card p-6">
              <p className="text-[11px] font-black uppercase tracking-widest text-navy-soft">PMI Chapter Leader · 2025 - 2026</p>
              <h4 className="mt-1 font-extrabold text-lg text-ink">PMI Chapter Leadership Program</h4>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                PMI-ის გლობალური Chapter Leader ბეიჯები ზედიზედ ორი წლისთვის - ლიდერობის, ზრდისა და
                გავლენის ფორმალური აღიარება PMI Tbilisi, Georgia Chapter-ის სამმართველოს დირექტორის როლისთვის.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-6">
                <div className="flex flex-col items-center">
                  <img src={chapterLeaderBadge.url} alt="PMI Chapter Leader 2026" className="h-24 w-24 object-contain" />
                  <span className="mt-2 text-xs font-black tabular-nums" style={{ color: "var(--navy)" }}>2026</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={chapterLeaderBadge.url} alt="PMI Chapter Leader 2025" className="h-24 w-24 object-contain opacity-90" style={{ filter: "hue-rotate(-15deg)" }} />
                  <span className="mt-2 text-xs font-black tabular-nums" style={{ color: "var(--navy)" }}>2025</span>
                </div>
              </div>
            </div>



            <div className="mt-6 surface-card p-6">
              <div className="flex items-start gap-5">
                <img src={sageLogo.url} alt="SAGE Georgia" className="h-14 w-auto object-contain shrink-0" />
                <div>
                  <p className="text-[11px] font-black uppercase tracking-widest text-navy-soft">SAGE Georgia</p>
                  <h4 className="mt-1 font-extrabold text-lg text-ink">საერთაშორისო საგანმანათლებლო და სამეწარმეო პლატფორმა</h4>
                </div>
              </div>
              <p className="mt-3 text-sm md:text-[0.95rem] text-ink-soft leading-relaxed">
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
                    <span className="h-9 w-9 rounded-full inline-flex items-center justify-center" style={{ background: "var(--mint-soft)", color: "var(--navy-deep)", border: "1px solid var(--mint)" }}>★</span>
                    <span className="text-xs font-black tabular-nums" style={{ color: "var(--navy)" }}>{a.year}</span>
                  </div>
                  <h4 className="mt-3 font-extrabold text-ink leading-tight">{a.title}</h4>
                  <p className="mt-1 text-sm text-ink-soft">{a.org}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 cursor-zoom-out"
          style={{ background: "rgba(8, 22, 40, 0.92)" }}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <img src={lightbox} alt="" className="max-h-[92vh] max-w-[95vw] object-contain rounded-xl shadow-2xl" />
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 text-white text-2xl font-bold hover:bg-white/20"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
