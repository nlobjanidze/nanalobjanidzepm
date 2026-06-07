import { useState } from "react";

type Training = {
  code: string;
  title: string;
  audience: string;
  duration: string;
  price: string;
  summary: string;
  curriculum: string[];
};

const ST: Training[] = [
  {
    code: "ST-1",
    title: "პროექტის მართვის შესავალი — დამწყებებისთვის",
    audience: "Junior PM, ახალი გუნდის ლიდერები, ვინც პირველად ხელმძღვანელობს პროექტს.",
    duration: "2 შეხვედრა · 4 საათი · 1 კვირა",
    price: "250 ₾",
    summary:
      "კურსი მათთვის, ვინც პირველად ხელმძღვანელობს პროექტს. ეფუძნება PMBOK® Guide 8th-ის Performance Domain-ებსა და Rita Mulcahy-ის PM ჩარჩოს.",
    curriculum: [
      "მოდული 1: რა არის პროექტი და ვინ არის PM — სასიცოცხლო ციკლი, Triple Constraint, Organizational Influences",
      "მოდული 2: დაგეგმვა და ინსტრუმენტები — Project Charter, WBS, Gantt Chart, Trello / ClickUp",
      "პრაქტიკული სავარჯიშოები ყოველი მოდულის ბოლოს",
    ],
  },
  {
    code: "ST-2",
    title: "Agile მინი-კურსი — Scrum პრაქტიკაში",
    audience: "Junior/Middle PM-ები, ტექნიკური და არა-ტექნიკური გუნდები, Agile-ზე გადასვლა.",
    duration: "2 შეხვედრა · 4 საათი · 1 კვირა",
    price: "280 ₾",
    summary:
      "Agile მეინდსეთისა და Scrum ჩარჩოს პრაქტიკული ათვისება. ეფუძნება Scrum Guide 2020-ს და Mike Griffiths-ის PMI-ACP® ჩარჩოს.",
    curriculum: [
      "მოდული 1: Agile Manifesto, Agile vs. Waterfall, Scrum-ის 3 როლი, 5 ივენთი, 3 არტეფაქტი",
      "User Story, Definition of Done, Product Backlog, Jira პრაქტიკაში",
      "მოდული 2: Sprint Planning, Daily Scrum, Review, Retrospective, Kanban Board, Burndown Chart",
    ],
  },
  {
    code: "ST-3",
    title: "სტეიკჰოლდერები — ვინ არიან და როგორ ვმართოთ",
    audience: "Junior/Middle PM, NGO-ების PM-ები, ორგანიზაციის ხელმძღვანელები.",
    duration: "2 შეხვედრა · 4 საათი · 1 კვირა",
    price: "280 ₾",
    summary:
      "სტეიკჰოლდერების ანალიზი და კომუნიკაციის სტრატეგია. ეფუძნება PMBOK® 8th-ის Stakeholder Performance Domain-ს.",
    curriculum: [
      "მოდული 1: Stakeholder Register, Power/Interest Matrix, Salience Model",
      "მოდული 2: Engagement Assessment Matrix, Communication Plan, რთული სტეიკჰოლდერების მართვა",
      "Case Study: PMI Tbilisi-ს რეალური პროექტებიდან",
    ],
  },
];

const DD: Training[] = [
  {
    code: "DD-1",
    title: "პროექტის მართვის საფუძვლები — 0-დან პროფესიამდე",
    audience: "Junior/Middle PM-ები, გუნდების ხელმძღვანელები, ხელმძღვანელები რომლებიც პროექტებს მართავენ.",
    duration: "6 შეხვედრა · 12 საათი · 3 კვირა",
    price: "650 ₾",
    summary:
      "სრული Deep Dive PM კურსი. მონაწილე ამუშავებს ერთ პროექტს კურსის განმავლობაში. ეფუძნება PMBOK® 8th და Rita Mulcahy PMP® Exam Prep (10th).",
    curriculum: [
      "მოდული 1: ფუნდამენტი — 8 Performance Domain, ორგანიზაციული სტრუქტურები, Predictive / Adaptive / Hybrid",
      "მოდული 2: ინიციაცია — Business Case, Charter, Scope, WBS",
      "მოდული 3: განრიგი &amp; ბიუჯეტი — CPM, Gantt, EVM (CV, SV, CPI, SPI)",
      "მოდული 4: ხარისხი, რესურსები, შესყიდვები — RACI, Procurement, Contract Types",
      "მოდული 5: რისკები — Risk Register, EMV, Monte Carlo, Response Strategies",
      "მოდული 6: შესრულება, მონიტორინგი, დახურვა — Status Reports, Change Control, Closure",
    ],
  },
  {
    code: "DD-2",
    title: "Agile, Scrum, Kanban &amp; Lean — სიღრმისეული კურსი",
    audience: "Junior/Middle/Senior PM, Scrum Master-ობის მსურველები, Agile-ზე გადასული გუნდები.",
    duration: "6 შეხვედრა · 12 საათი · 3 კვირა",
    price: "700 ₾",
    summary:
      "Agile-ის სიღრმისეული ათვისება — მეინდსეთიდან სრულ Scrum ციკლამდე, Kanban-ისა და Lean-ის ინტეგრაციით. ქართულ ბიზნეს გარემოზე ფოკუსით.",
    curriculum: [
      "მოდული 1: Agile Mindset — Manifesto სიღრმეში, Business Agility, ქართული Case Studies",
      "მოდული 2: Scrum სიღრმეში — Scrum Guide 2020, WSJF / MoSCoW / Kano, Retrospective ტექნიკები",
      "მოდული 3: Kanban — Visualize, WIP Limits, CFD, Lead vs Cycle Time",
      "მოდული 4: Lean — Value Stream, 7 Waste, Scrumban",
      "მოდული 5: Hybrid — Agile + Predictive ქართულ გარემოში",
      "მოდული 6: SAFe, LeSS, Scaling Agile — სიმულაცია: 3 Sprint Jira-ზე",
    ],
  },
  {
    code: "DD-3",
    title: "პროექტის მენეჯერი, როგორც ლიდერი",
    audience: "Middle/Senior PM-ები, Change-ის ლიდერები (იხ. TH-4).",
    duration: "მითითებულია TH-4-ის ფარგლებში",
    price: "იხ. TH-4",
    summary:
      "შინაარსი ინტეგრირებულია TH-4 თემატურ კურსში — კულტურა, ლიდერობა, ცვლილებების მართვა.",
    curriculum: [],
  },
];

const TH: Training[] = [
  {
    code: "TH-1",
    title: "რისკების მართვა — სიღრმისეული კურსი",
    audience: "Junior/Middle/Senior PM-ები; PM-ები დონორებით დაფინანსებულ პროექტებში.",
    duration: "4 შეხვედრა · 8 საათი · 2 კვირა",
    price: "400 ₾",
    summary:
      "რისკების მართვის სრული ციკლი — იდენტიფიცირებიდან მონიტორინგამდე. ეფუძნება PMBOK® 8th Uncertainty Performance Domain-ს.",
    curriculum: [
      "მოდული 1: Risk Identification &amp; Assessment — TEOF, P/I Matrix, EMV, Decision Tree, Monte Carlo",
      "მოდული 2: Risk Response &amp; Monitoring — Strategies, Reserves, Triggers, Escalation, Risk Dashboard",
      "Case Study: ქართული დონორული პროექტი — ვალუტის რყევა, ვადა, გუნდის ბრუნვა",
    ],
  },
  {
    code: "TH-2",
    title: "კომუნიკაცია პროექტებში — სრული სახელმძღვანელო",
    audience: "Junior/Middle/Senior PM-ები; გუნდის ხელმძღვანელები; NGO და საჯარო სექტორი.",
    duration: "4 შეხვედრა · 8 საათი · 2 კვირა",
    price: "380 ₾",
    summary:
      "PMBOK® 8th-ის Stakeholder და Team Domain-ებზე დაფუძნებული. Mock Meeting და Role-Play რეალური სცენარებით.",
    curriculum: [
      "მოდული 1: კომუნიკაციის არქიტექტურა — Communication Management Plan, Stakeholder Matrix, Push/Pull/Interactive",
      "Report Types, Dashboard Design — Jira / ClickUp / PowerBI",
      "მოდული 2: Active Listening, NVC, SBI, Difficult Conversations, Meeting Facilitation",
    ],
  },
  {
    code: "TH-3",
    title: "სტეიკჰოლდერების მართვა — სტრატეგიული მიდგომა",
    audience: "Middle/Senior PM, NGO და საჯარო სექტორის PM-ები, Senior ხელმძღვანელები.",
    duration: "4 შეხვედრა · 8 საათი · 2 კვირა",
    price: "380 ₾",
    summary:
      "ST-3-ის გაფართოებული ვერსია. Influence Without Authority, კოალიციის ჩამოყალიბება, Sponsor-თან კომუნიკაცია.",
    curriculum: [
      "მოდული 1: Stakeholder Register, Power/Interest, Salience Model, Dynamic Mapping — EU პროექტის Case Study",
      "მოდული 2: Engagement Strategy, Resistant Stakeholder ტექნიკები, Coalition Building, Sponsor Management",
    ],
  },
  {
    code: "TH-4",
    title: "კორპორატიული კულტურა და ლიდერობა პროექტებში",
    audience: "Middle/Senior PM, Agile Coaches, Change Management სპეციალისტები.",
    duration: "4 შეხვედრა · 8 საათი · 2 კვირა",
    price: "400 ₾",
    summary:
      "DD-3-ის გაფართოებული ვერსია — კულტურა, ცვლილებების მართვა. ეფუძნება PMBOK® 8th Team Performance Domain-ს.",
    curriculum: [
      "მოდული 1: Schein-ის კულტურის მოდელი, Hofstede Dimensions, Psychological Safety (Edmondson)",
      "მოდული 2: ADKAR, Kotter-ის 8 ნაბიჯი, Change Resistance, ქართული Case Studies",
    ],
  },
  {
    code: "TH-5",
    title: "Agile Mindset &amp; Scrum Master-ის გზა",
    audience: "PM-ები, გუნდის ლიდერები, Scrum Master-ობის მსურველები.",
    duration: "6 შეხვედრა · 12 საათი · 3 კვირა",
    price: "550 ₾",
    summary:
      "DD-2-ის ინტენსიური ვერსია — Scrum Master-ობაზე ფოკუსით. ეფუძნება Scrum Guide 2020 და PMI-ACP®.",
    curriculum: [
      "მოდული 1: Agile Mindset, Agile Maturity Assessment",
      "მოდული 2: Scrum Guide 2020 — სრული ანალიზი, Product Goal vs Sprint Goal",
      "მოდული 3: Servant Leadership, Facilitation, Impediment Log",
      "მოდული 4: Kanban + Lean + Scrumban",
      "მოდული 5: Hybrid ქართულ გარემოში",
      "მოდული 6: სიმულაცია — სრული Scrum Project (3 Sprint) Jira-ზე",
    ],
  },
];

const CORP_EXTRAS = [
  "PM Fundamentals for Non-PM Teams — 4 სთ | 1 შეხვედრა",
  "Agile Introduction for Leadership — 3 სთ | 1 შეხვედრა",
  "Risk Workshop for Project Teams — 4 სთ | 1 შეხვედრა",
  "Stakeholder Management for Executives — 3 სთ | 1 შეხვედრა",
];

export function Trainings() {
  return (
    <section id="trainings" className="section-y bg-surface">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">ტრენინგები</span>
          <h2 className="heading-lg mt-4 text-balance">
            მინი-კურსები, Deep Dive &amp; <span className="text-navy">თემატური პროგრამები</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base md:text-lg">
            ფორმატი: ონლაინ (Google Meet / Zoom) ან ფიზიკურად (თბილისი). ენა: ქართული.
            ყველა კურსი ეფუძნება PMBOK® Guide 8th-ს, Scrum Guide 2020-ს და რეალურ ქართულ Case Study-ებს.
          </p>
        </div>

        <Group title="მინი-კურსები (Short Track — ST)" subtitle="სწრაფი, ფოკუსირებული შესავალი — 1 კვირაში." items={ST} accent="mint" />
        <Group title="სრული კურსები (Deep Dive — DD)" subtitle="3-კვირიანი სიღრმისეული პროგრამები — სრული PM პაკეტი." items={DD} accent="navy" />
        <Group title="თემატური კურსები (Thematic — TH)" subtitle="ფოკუსირებული თემები — რისკი, კომუნიკაცია, სტეიკჰოლდერი, კულტურა, Scrum." items={TH} accent="mint" />

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="surface-card p-7 md:p-8">
            <span className="eyebrow">კორპორატიული ფორმატი</span>
            <h3 className="heading-md mt-3">მორგებული თქვენი გუნდისთვის</h3>
            <p className="mt-3 text-sm md:text-base text-ink-soft leading-relaxed">
              ყველა კურსი ხელმისაწვდომია კორპორატიულ ფორმატში — კომპანიის სფეროს, გუნდის სიდიდისა
              და მიზნების მიხედვით მორგებული Case Study-ებით, სცენარებითა და ინსტრუმენტებით.
              Onsite ან Online · ქართულად.
            </p>
            <p className="mt-4 text-sm font-extrabold" style={{ color: "var(--navy)" }}>
              ფასი: ინდივიდუალური შეთანხმება
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center rounded-full px-5 py-3 font-bold transition"
              style={{ background: "var(--mint)", color: "var(--navy-deep)" }}
            >
              ითხოვე შეთავაზება →
            </a>
          </div>
          <div className="surface-card p-7 md:p-8">
            <span className="eyebrow">ცალკეული ვორქშოპები</span>
            <h3 className="heading-md mt-3">მოკლე, მაღალი ღირებულების სესიები</h3>
            <ul className="mt-5 space-y-2.5">
              {CORP_EXTRAS.map((x) => (
                <li key={x} className="flex gap-3 text-sm md:text-[0.95rem] text-ink">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--mint)" }} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Group({
  title,
  subtitle,
  items,
  accent,
}: {
  title: string;
  subtitle: string;
  items: Training[];
  accent: "mint" | "navy";
}) {
  return (
    <div className="mt-14">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h3
            className="text-xl md:text-2xl font-black"
            style={{ color: accent === "mint" ? "var(--navy-deep)" : "var(--navy-deep)" }}
          >
            {title}
          </h3>
          <p className="mt-1 text-sm md:text-base text-ink-soft">{subtitle}</p>
        </div>
      </div>
      <div className="mt-5 grid lg:grid-cols-2 gap-5">
        {items.map((t) => (
          <TrainingCard key={t.code} t={t} accent={accent} />
        ))}
      </div>
    </div>
  );
}

function TrainingCard({ t, accent }: { t: Training; accent: "mint" | "navy" }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="surface-card p-6 md:p-7 hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <span
          className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={
            accent === "mint"
              ? { background: "var(--mint-soft)", color: "var(--navy-deep)", border: "1px solid var(--mint)" }
              : { background: "var(--navy-deep)", color: "var(--mint)" }
          }
        >
          {t.code}
        </span>
        <span className="text-xs font-black tabular-nums" style={{ color: "var(--navy)" }}>{t.price}</span>
      </div>
      <h4 className="mt-4 text-lg font-extrabold leading-tight text-ink" dangerouslySetInnerHTML={{ __html: t.title }} />
      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-wider text-ink-soft">
        <span>{t.duration}</span>
      </div>
      <p className="mt-4 text-sm text-ink-soft leading-relaxed">
        <span className="font-bold text-ink">ვისთვის:</span> {t.audience}
      </p>
      <p className="mt-3 text-sm text-ink-soft leading-relaxed">{t.summary}</p>

      {t.curriculum.length > 0 && (
        <>
          <button
            onClick={() => setOpen((o) => !o)}
            className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold"
            style={{ color: "var(--navy)" }}
            aria-expanded={open}
          >
            {open ? "დახურე პროგრამა" : "ნახე სრული პროგრამა"}
            <span className={`transition ${open ? "rotate-180" : ""}`}>↓</span>
          </button>
          {open && (
            <ul className="mt-4 space-y-2 border-t border-line pt-4">
              {t.curriculum.map((m) => (
                <li key={m} className="flex gap-2.5 text-sm text-ink">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--mint)" }} />
                  <span dangerouslySetInnerHTML={{ __html: m }} />
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      <a
        href="#contact"
        className="mt-6 inline-flex items-center rounded-full px-5 py-2.5 font-bold text-sm transition"
        style={{ background: "var(--mint)", color: "var(--navy-deep)" }}
      >
        დარეგისტრირდი →
      </a>
    </article>
  );
}
