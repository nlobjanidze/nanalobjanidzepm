const GROUPS = [
  {
    title: "PMI სერტიფიკატები",
    color: "mint",
    items: [
      { name: "PMP® — Project Management Professional", issuer: "Project Management Institute", year: "2024" },
      { name: "PMI Member · PMI Chapter Tbilisi", issuer: "PMI", year: "2020 — Present" },
    ],
  },
  {
    title: "პროფესიული სერტიფიკატები",
    color: "azure",
    items: [
      { name: "Agile Project Management", issuer: "International Training", year: "2023" },
      { name: "Risk Management Professional", issuer: "Professional Body", year: "2022" },
      { name: "Stakeholder Engagement", issuer: "GIZ Academy", year: "2021" },
    ],
  },
  {
    title: "ტრენინგ სერტიფიკატები",
    color: "mint",
    items: [
      { name: "Training of Trainers (ToT)", issuer: "UNDP", year: "2022" },
      { name: "Facilitation Skills", issuer: "International", year: "2021" },
      { name: "Coaching & Mentoring", issuer: "EU Programme", year: "2020" },
    ],
  },
  {
    title: "უმაღლესი განათლება",
    color: "azure",
    items: [
      { name: "MBA / Public Administration", issuer: "Tbilisi State University", year: "" },
      { name: "Bachelor of Business", issuer: "Georgian University", year: "" },
    ],
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="section-y bg-gradient-to-b from-transparent via-navy/40 to-transparent">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">სერტიფიკატები</span>
          <h2 className="heading-lg mt-4 text-balance">
            საერთაშორისო კვალიფიკაცია — <span className="text-mint">დადასტურებული</span>
          </h2>
          <p className="mt-4 text-foreground/75 text-base md:text-lg">
            PMI-ს მიერ აღიარებული PMP® სერტიფიკატი, საერთაშორისო ტრენინგები
            და უმაღლესი განათლება — ერთ პროფესიულ პროფილში.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {GROUPS.map((g) => (
            <div key={g.title} className="surface-card p-7 md:p-8">
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${g.color === "mint" ? "bg-mint" : "bg-azure"}`} />
                <h3 className="font-extrabold text-lg md:text-xl">{g.title}</h3>
              </div>
              <ul className="mt-5 divide-y divide-white/5">
                {g.items.map((i) => (
                  <li key={i.name} className="py-3 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-sm md:text-base">{i.name}</p>
                      <p className="text-xs md:text-sm text-foreground/60 mt-0.5">{i.issuer}</p>
                    </div>
                    {i.year && (
                      <span className="shrink-0 text-xs font-bold text-mint/90 mt-1">{i.year}</span>
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
