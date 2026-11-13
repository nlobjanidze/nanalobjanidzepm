import nanaLogo from "@/assets/nana-logo.svg";
import coachingUpLogo from "@/assets/coaching-up-logo.png";
import { Bullet } from "./Bullet";

type Project = {
  number: string;
  title: string;
  intro: string;
  items: string[];
};

type Engagement = {
  org: string;
  role: string;
  logo: string;
  logoAlt: string;
  intro: string;
  lead: string;
  projects: Project[];
};

const ENGAGEMENTS: Engagement[] = [
  {
    org: "Nana Lobjanidze × Coaching-UP University Georgia",
    role: "Independent Project & Process Management Consultant",
    logo: coachingUpLogo,
    logoAlt: "Coaching-UP University Georgia",
    intro:
      "ორგანიზაციებთან თანამშრომლობის ფარგლებში ვეხმარები გუნდებს პროცესების სტრუქტურირებაში, ოპერაციული სისტემების გაუმჯობესებასა და ბიზნეს ფუნქციების უფრო ეფექტურად ჩამოყალიბებაში.",
    lead: "Coaching-UP University Georgia-სთან მიმდინარე თანამშრომლობა ორი ძირითადი მიმართულებით მიმდინარეობს:",
    projects: [
      {
        number: "01",
        title: "სასწავლო პროგრამების ოპერაციული პროცესების სტრუქტურირება",
        intro:
          "მიზანია სასწავლო პროგრამების განხორციელების სრული ციკლი გახდეს უფრო სტრუქტურირებული, გამჭვირვალე და მართვადი როგორც ტრენერებისთვის, ისე ადმინისტრაციული გუნდისთვის.",
        items: [
          "არსებული პროცესების ანალიზსა და საჭირო ინფორმაციის სტრუქტურირებას;",
          "Student Journey / Program Workflow-ის შექმნას;",
          "პროცესების, ეტაპებისა და პასუხისმგებლობების განსაზღვრას;",
          "RACI Matrix-ის მომზადებას;",
          "SOP-ებისა და სამუშაო ინსტრუქციების სტრუქტურის შექმნას;",
          "ტრენერებისა და გუნდისთვის საჭირო გზამკვლევების მომზადებას;",
          "პროცესების გაუმჯობესების რეკომენდაციების შემუშავებას.",
        ],
      },
      {
        number: "02",
        title: "გაყიდვების დეპარტამენტის შექმნა",
        intro:
          "კომერციული მიმართულების ფარგლებში ვმუშაობ გაყიდვების დეპარტამენტის შექმნისა და მისი ეფექტური მუშაობისთვის საჭირო საფუძვლის ჩამოყალიბებაზე.",
        items: [
          "გაყიდვების ფუნქციისა და პროცესების სტრუქტურირებას;",
          "გაყიდვების პოზიციისა და კანდიდატის პროფილის განსაზღვრას;",
          "Job Description-ისა და შერჩევის პროცესის მომზადებას;",
          "CV-ების გადარჩევასა და კანდიდატებთან კომუნიკაციას;",
          "გასაუბრების კითხვებისა და კანდიდატების შეფასების ფორმის შექმნას;",
          "შერჩევის პროცესში მონაწილეობას;",
          "გაყიდვების გეგმისა და ძირითადი KPI-ების განსაზღვრას;",
          "Sales Presentation-ის მომზადებას;",
          "Sales Scripts-ისა და Communication Templates-ის შექმნას;",
          "Lead Management და Follow-up პროცესების სტრუქტურირებას;",
          "ახალი თანამშრომლისთვის Onboarding Guide-ის შექმნას.",
        ],
      },
    ],
  },
];

export function CurrentProjects() {
  return (
    <section id="current-projects" className="section-y bg-white">
      <div className="container-x">
        <h2 className="heading-lg">მიმდინარე პროექტები</h2>

        {ENGAGEMENTS.map((e) => (
          <div key={e.org} className="mt-8">
            {/* Organisation header */}
            <div className="surface-card collaboration-banner grid items-center gap-7 p-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8 md:p-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
                <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1.1fr)] items-center gap-3 sm:gap-5">
                  {/* Frame the original artwork, excluding only its transparent canvas margin. */}
                  <svg role="img" aria-label="Nana Lobjanidze" viewBox="385 602 704 296" className="block w-full" preserveAspectRatio="xMidYMid meet">
                    <image href={nanaLogo} width="1500" height="1500" />
                  </svg>
                  <span aria-hidden className="shrink-0 text-2xl font-light text-mint">
                    ×
                  </span>
                  <img src={e.logo} alt={e.logoAlt} className="block h-auto w-full min-w-0 object-contain" />
                </div>
                <div className="min-w-0 text-center md:text-right">
                  <div className="text-[13px] font-extrabold uppercase leading-relaxed text-navy-deep">
                    Independent Project &amp; Process Management Consultant
                  </div>
                  <div className="mt-2 text-sm font-semibold leading-relaxed text-ink-soft">{e.org}</div>
                  <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">{e.intro}</p>
                  <p className="mt-3 text-[15px] font-semibold leading-relaxed text-ink">{e.lead}</p>
                </div>
            </div>

            {/* Projects */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2 items-start">
              {e.projects.map((p) => (
                <article key={p.number} className="surface-card p-6 md:p-8 bg-white h-full">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-extrabold" style={{ color: "var(--mint)" }}>
                      {p.number}
                    </span>
                    <span aria-hidden className="text-lg text-line">
                      |
                    </span>
                    <h3 className="heading-md">{p.title}</h3>
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{p.intro}</p>

                  <p className="mt-5 text-sm font-bold text-ink">ჩემი ჩართულობა მოიცავს:</p>
                  <ul className="mt-3 space-y-2.5">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                        <Bullet />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 text-xs font-bold uppercase tracking-wider text-ink-soft">{e.logoAlt}</div>
                </article>
              ))}
            </div>
          </div>
        ))}

        {/* Approach */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.6fr] items-stretch">
          <div className="surface-card p-6 md:p-8 bg-white">
            <h3 className="heading-md">შედეგზე ორიენტირებული საკონსულტაციო მიდგომა</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft max-w-[78ch]">
              ჩემი მიზანია არა მხოლოდ რეკომენდაციების გაცემა, არამედ ისეთი პრაქტიკული სისტემებისა და სამუშაო ინსტრუმენტების შექმნა,
              რომელთა გამოყენებაც ორგანიზაციას ყოველდღიურ საქმიანობაში შეუძლია.
            </p>
          </div>
          <div
            className="surface-card flex items-center justify-center p-6 md:p-8 text-center"
            style={{ background: "var(--mint-soft)", border: "1px solid rgba(23,227,178,0.45)" }}
          >
            <span className="text-[17px] font-extrabold" style={{ color: "var(--navy-deep)" }}>
              Structure → System → Growth
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 surface-card p-6 md:p-8 bg-white flex flex-col items-center gap-4 text-center">
          <h3 className="heading-md">თანამშრომლობისთვის</h3>
          <p className="text-[15px] leading-relaxed text-ink-soft max-w-[72ch]">
            თუ თქვენს ორგანიზაციას სჭირდება პროცესების სტრუქტურირება, ოპერაციული სისტემების გაუმჯობესება, ახალი ბიზნეს ფუნქციის შექმნა ან
            კონკრეტული პროექტის სისტემატიზაცია, სიამოვნებით განვიხილავ თანამშრომლობის შესაძლებლობას.
          </p>
          <a
            href="#contact"
            className="cta-btn inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-bold transition-all hover:-translate-y-0.5"
            style={{ background: "var(--mint)", color: "var(--navy-deep)", boxShadow: "var(--shadow-mint)" }}
          >
            დავიწყოთ თანამშრომლობა →
          </a>
        </div>
      </div>
    </section>
  );
}
