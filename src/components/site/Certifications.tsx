const GROUPS = [
  {
    title: "PMI სერტიფიკატები",
    accent: "mint",
    items: [
      { name: "PMP® — Project Management Professional", issuer: "Project Management Institute", year: "2024" },
      { name: "PMI Member · PMI Chapter Tbilisi", issuer: "PMI", year: "2020 — Present" },
    ],
  },
  {
    title: "პროფესიული სერტიფიკატები",
    accent: "navy",
    items: [
      { name: "Agile Project Management", issuer: "International Training", year: "2023" },
      { name: "Risk Management Professional", issuer: "Professional Body", year: "2022" },
      { name: "Stakeholder Engagement", issuer: "GIZ Academy", year: "2021" },
    ],
  },
  {
    title: "ტრენინგ სერტიფიკატები",
    accent: "mint",
    items: [
      { name: "Training of Trainers (ToT)", issuer: "UNDP", year: "2022" },
      { name: "Facilitation Skills", issuer: "International", year: "2021" },
      { name: "Coaching & Mentoring", issuer: "EU Programme", year: "2020" },
    ],
  },
  {
    title: "უმაღლესი განათლება",
    accent: "navy",
    items: [
      { name: "MBA / Public Administration", issuer: "Tbilisi State University", year: "" },
      { name: "Bachelor of Business", issuer: "Georgian University", year: "" },
    ],
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="section-y bg-surface">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">სერტიფიკატები</span>
          <h2 className="heading-lg mt-4 text-balance">
            საერთაშორისო კვალიფიკაცია — <span className="text-navy">დადასტურებული</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base md:text-lg">
            PMI-ს მიერ აღიარებული PMP® სერტიფიკატი, საერთაშორისო ტრენინგები
            და უმაღლესი განათლება — ერთ პროფესიულ პროფილში.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {GROUPS.map((g) => (
            <div key={g.title} className="surface-card p-7 md:p-8 hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <span className={`h-8 w-8 rounded-lg inline-flex items-center justify-center text-xs font-black ${g.accent === "mint" ? "bg-mint-soft text-navy-deep border border-mint/40" : "bg-navy-deep text-white"}`}>
                  ✦
                </span>
                <h3 className="font-extrabold text-lg md:text-xl text-ink">{g.title}</h3>
              </div>
              <ul className="mt-5 divide-y divide-line">
                {g.items.map((i) => (
                  <li key={i.name} className="py-3.5 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-sm md:text-base text-ink">{i.name}</p>
                      <p className="text-xs md:text-sm text-ink-soft mt-0.5">{i.issuer}</p>
                    </div>
                    {i.year && (
                      <span className="shrink-0 text-xs font-black text-navy mt-1 tabular-nums">{i.year}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
