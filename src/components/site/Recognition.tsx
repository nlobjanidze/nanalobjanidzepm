import { useLanguage } from "@/lib/LanguageContext";
const AWARDS = [
  {
    year: "2024",
    title: "Dedication, Outstanding Volunteering & Support of the Marketing Team Throughout the Entire Year",
    org: "PMI Tbilisi, Georgia Chapter",
  },
  {
    year: "2024",
    title: "Student Company Mentor - JA Georgia Company of the Year Competition",
    org: "Junior Achievement Georgia",
  },
  {
    year: "2023",
    title: "Successful Organization of „Kahoot Season 2“",
    org: "PMI Tbilisi, Georgia Chapter",
  },
];

export function Recognition() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <section id="recognition" className="section-y bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">{en ? "Professional recognition" : "პროფესიული აღიარება"}</span>
          <h2 className="heading-lg mt-4 text-balance">
            {en ? "Recognition & " : "აღიარება & "}<span className="text-navy">{en ? "Awards" : "ჯილდოები"}</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base md:text-lg">
            {en ? "Contributions to the project management community and education recognized by PMI Tbilisi, Georgia Chapter and Junior Achievement Georgia." : "PMI Tbilisi-სა და Junior Achievement Georgia-ს მიერ აღიარებული წვლილი პროფესიულ თემსა და განათლების სფეროში."}
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {AWARDS.map((a) => (
            <article key={a.title} className="surface-card p-6 md:p-7 hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span
                  className="h-10 w-10 rounded-full inline-flex items-center justify-center text-lg"
                  style={{ background: "var(--mint-soft)", color: "var(--navy-deep)", border: "1px solid var(--mint)" }}
                >
                  ★
                </span>
                <span className="text-xs font-black tabular-nums" style={{ color: "var(--navy)" }}>{a.year}</span>
              </div>
              <h3 className="mt-4 text-base md:text-lg font-extrabold leading-tight text-ink">{a.title}</h3>
              <p className="mt-3 text-sm text-ink-soft">{a.org}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
