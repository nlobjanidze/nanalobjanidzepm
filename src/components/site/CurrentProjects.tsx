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
            <div className="surface-card p-6 md:p-8" style={{ background: "var(--gradient-hero)" }}>
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-5">
                  <img src={nanaLogo} alt="Nana Lobjanidze" className="h-10 w-auto object-contain md:h-12" />
                  <span aria-hidden className="text-2xl font-light" style={{ color: "var(--mint)" }}>
                    ×
                  </span>
                  <img src={e.logo} alt={e.logoAlt} className="h-10 w-auto object-contain md:h-12" />
                </div>
                <div className="md:text-right">
                  <div className="text-[13px] font-extrabold uppercase tracking-wider" style={{ color: "var(--navy-deep)" }}>
                    Independent Project &amp; Process Management Consultant
                  </div>
                  <div className="mt-1 text-sm font-semibold text-ink-soft">{e.org}</div>
                </div>
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-ink-soft max-w-[78ch]">{e.intro}</p>
              <p className="mt-3 text-[15px] font-semibold text-ink max-w-[78ch]">{e.lead}</p>
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
