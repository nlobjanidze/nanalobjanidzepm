import { useState } from "react";

type SubService = { code: string; title: string; details: string[]; price: string };
type Category = {
  num: string;
  tag: string;
  title: string;
  audience: string;
  subs: SubService[];
};

const CATEGORIES: Category[] = [
  {
    num: "01",
    tag: "Project Delivery · Execution · Leadership",
    title: "პროექტების მართვა, სტრატეგიული შესრულება &amp; ლიდერობა",
    audience: "კომპანიები, NGO-ები, სტარტაპები, სახელმწიფო სტრუქტურები, საერთაშორისო PM-ები.",
    subs: [
      {
        code: "A",
        title: "სრული ციკლის პროექტების მართვა (End-to-End Delivery)",
        details: [
          "პროექტის ინიცირება და სკოპის განსაზღვრა",
          "Project Charter, Roadmap, WBS / Task Breakdown",
          "Timeline და რესურსების დაგეგმვა, ბიუჯეტის კონტროლი",
          "Risk &amp; Issue Management (RAID Log)",
          "Stakeholder Management &amp; Communication Plan",
          "Agile / Waterfall / Hybrid მეთოდოლოგია",
          "Delivery, Closure + Lessons Learned",
        ],
        price: "800–2,500 ₾ / თვე",
      },
      {
        code: "B",
        title: "პროექტის აუდიტი და დიაგნოსტიკა",
        details: [
          "მიმდინარე პროცესების ანალიზი",
          "Root cause იდენტიფიკაცია",
          "დროის, ბიუჯეტისა და რესურსების გადახედვა",
          "Risk gaps და bottlenecks",
          "კონკრეტული Improvement Plan",
        ],
        price: "600–1,200 ₾ (ერთჯერადი)",
      },
      {
        code: "C",
        title: "გრანტების მართვა",
        details: [
          "Grant Proposal Writing",
          "Donor requirements alignment, Budget structuring",
          "Compliance &amp; reporting framework",
          "Implementation plan, M&amp;E",
          "Sub-grant management სისტემა",
        ],
        price: "800–2,000 ₾ (წერა) / 500–1,000 ₾ თვე (მართვა)",
      },
      {
        code: "D",
        title: "ღონისძიებებისა და პროექტული ინიციატივების მართვა",
        details: [
          "კონცეფცია, სრული ღონისძიების დაგეგმვა",
          "სპიკერების / პარტნიორების კოორდინაცია",
          "ლოჯისტიკა, ოპერაციები, კომუნიკაცია, მარკეტინგი",
          "Run of Show, execution, post-event analysis",
        ],
        price: "500–2,500 ₾",
      },
    ],
  },
  {
    num: "02",
    tag: "Team Performance · Process Optimization · Organizational Design",
    title: "გუნდის მენტორინგი, პროცესების დალაგება &amp; საოპერაციო სისტემები",
    audience: "კომპანიები, NGO-ები, HR განყოფილებები, მენეჯერები.",
    subs: [
      {
        code: "A",
        title: "PM სისტემის დანერგვა (Jira / Asana / ClickUp / Trello)",
        details: [
          "სისტემის დაყენება, workflow კონფიგურაცია",
          "Task structure და board setup",
          "გუნდის ტრენინგი",
          "Dashboard, reporting, KPI tracking",
        ],
        price: "400–1,200 ₾",
      },
      {
        code: "B",
        title: "საოპერაციო მოდელის გამართვა",
        details: [
          "არსებული პროცესების ანალიზი",
          "ორგანიზაციული სტრუქტურის დალაგება",
          "RACI მატრიცა, გადაწყვეტილებების მოდელი",
          "Workflow optimization, escalation სისტემა",
        ],
        price: "1,000–2,500 ₾",
      },
      {
        code: "C",
        title: "გუნდის მენტორინგი და Performance Coaching",
        details: [
          "თანამშრომლების სამუშაო პროცესის ანალიზი",
          "ინდივიდუალური მენტორინგი (1-on-1)",
          "Time &amp; Task management",
          "რეალურ პროექტებზე coaching, Leadership transition",
        ],
        price: "150–250 ₾/სესია · 500–850 ₾/4 სესია · 800–2,500 ₾/თვე",
      },
      {
        code: "D",
        title: "კომუნიკაციისა და სტეიკჰოლდერების მართვის სისტემა",
        details: [
          "კომუნიკაციის სტრატეგია",
          "Internal/External communication flow",
          "Reporting structure, meeting system design",
          "Escalation policy, stakeholder mapping",
        ],
        price: "400–900 ₾",
      },
    ],
  },
  {
    num: "03",
    tag: "Training · Leadership · Capability Building",
    title: "ტრენინგი, ლიდერობა &amp; შესრულების გაუმჯობესება",
    audience: "კომპანიები, NGO-ები, გუნდები, მენეჯერები, Team Lead-ები, თანამშრომლები.",
    subs: [
      {
        code: "A",
        title: "PM მენტორინგი (1-on-1)",
        details: [
          "სამუშაო პროცესის ანალიზი",
          "Task და პრიორიტეტების მართვა",
          "Jira/Asana/ClickUp workflow-ის გაუმჯობესება",
          "Deadline და delivery management",
          "ინდივიდუალური განვითარება, კარიერული მიმართულება",
        ],
        price: "150–250 ₾/სესია (60–90 წთ) · 500–850 ₾/4 სესია",
      },
      {
        code: "B",
        title: "გუნდის Performance მენტორინგი",
        details: [
          "გუნდის workflow ანალიზი",
          "როლების და პასუხისმგებლობების დაზუსტება",
          "Weekly planning, task tracking, delivery monitoring",
          "ბლოკერების იდენტიფიკაცია და გადაწყვეტა",
        ],
        price: "800–2,500 ₾ / თვე",
      },
      {
        code: "C",
        title: "ლიდერობისა და მენეჯერული მენტორინგი",
        details: [
          "ლიდერული გადაწყვეტილებების მხარდაჭერა",
          "დელეგირების გაუმჯობესება",
          "რთული საუბრები და კონფლიქტების მართვა",
          "Performance feedback, გუნდის engagement",
        ],
        price: "150–300 ₾/სესია",
      },
      {
        code: "D",
        title: "ორგანიზაციული Performance Improvement პროგრამა",
        details: [
          "ორგანიზაციული პროცესების ანალიზი",
          "Workflow redesign",
          "KPI და accountability სისტემის შექმნა",
          "Project delivery სისტემის გაუმჯობესება, მენეჯერების coaching",
        ],
        price: "1,000–2,500 ₾ / თვე",
      },
    ],
  },
  {
    num: "04",
    tag: "Grant Management &amp; Grant Giving Systems",
    title: "გრანტების მართვა და გრანტების გაცემა",
    audience: "NGO-ები, საჯარო და კერძო სტრუქტურები, საერთაშორისო ორგანიზაციები.",
    subs: [
      {
        code: "A",
        title: "გრანტების მიღება და მართვა",
        details: [
          "Grant Proposal Writing (EU / UNDP / GIZ / Embassy)",
          "Donor requirements ანალიზი და alignment",
          "Budget structuring და justification",
          "Compliance &amp; eligibility check",
          "M&amp;E framework, reporting (narrative + financial)",
          "Sub-grant management",
        ],
        price: "800–2,000 ₾ (application) · 500–1,000 ₾/თვე (management)",
      },
      {
        code: "B",
        title: "გრანტების გაცემა და გრანტ-სისტემის შექმნა",
        details: [
          "Grant Program Design",
          "Evaluation Framework",
          "აპლიკაციის პროცესის სტრუქტურირება",
          "შერჩევის კომიტეტებისა და პროცესების აწყობა",
          "Monitoring &amp; Reporting სისტემის დიზაინი",
          "Impact measurement",
        ],
        price: "1,000–2,500 ₾ (პროექტის მიხედვით)",
      },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="section-y bg-white">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow">სერვისები</span>
            <h2 className="heading-lg mt-4 text-balance">
              კონსულტაცია, რომელიც <span className="text-navy">შედეგად აისახება</span>
            </h2>
            <p className="mt-4 text-ink-soft text-base md:text-lg">
              ოთხი ფოკუსირებული მიმართულება — ბიზნესის, NGO-სა და საჯარო სექტორისთვის.
              ყველა სერვისი იწყება დიაგნოსტიკით — და მთავრდება გაზომვადი შედეგით.
            </p>
          </div>
          <a
            href="#contact"
            className="self-start inline-flex items-center rounded-full px-6 py-3 font-bold transition-all"
            style={{ background: "var(--mint)", color: "var(--navy-deep)", boxShadow: "var(--shadow-mint)" }}
          >
            დაგეგმე ზარი →
          </a>
        </div>

        <div className="mt-14 space-y-6">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.num} c={c} />
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-line shadow-[var(--shadow-soft)]" style={{ background: "var(--navy-deep)", color: "white" }}>
          <div className="lg:col-span-8 p-8 md:p-12">
            <span className="eyebrow" style={{ color: "var(--mint-bright)" }}>დიაგნოსტიკა</span>
            <h3 className="heading-md mt-4 text-balance" style={{ color: "white" }}>
              გჭირდებათ შერეული მიდგომა? <span style={{ color: "var(--mint)" }}>მოვამზადოთ ერთად.</span>
            </h3>
            <p className="mt-4 text-white/75 max-w-xl">
              დავიწყოთ უფასო 30-წუთიანი დიაგნოსტიკით — გავარკვიოთ, რომელი მიდგომა მუშაობს თქვენთვის.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center rounded-full px-6 py-3.5 font-bold transition"
              style={{ background: "var(--mint)", color: "var(--navy-deep)" }}
            >
              დაჯავშნე უფასო კონსულტაცია
            </a>
          </div>
          <div
            className="lg:col-span-4 relative min-h-[200px] flex items-center justify-center p-10"
            style={{ background: "var(--gradient-brand)" }}
          >
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-black text-white">30’</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-white/85 font-bold">უფასო ზარი</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ c }: { c: Category }) {
  const [open, setOpen] = useState<string | null>(c.subs[0]?.code ?? null);
  return (
    <article className="surface-card p-7 md:p-9">
      <div className="flex items-start justify-between gap-6">
        <div>
          <span className="text-[11px] font-black tracking-[0.2em] uppercase" style={{ color: "var(--navy-soft)" }}>
            {c.num} · {c.tag}
          </span>
          <h3 className="heading-md mt-3" dangerouslySetInnerHTML={{ __html: c.title }} />
          <p className="mt-2 text-sm md:text-base text-ink-soft">
            <span className="font-bold text-ink">ვისთვის:</span> {c.audience}
          </p>
        </div>
      </div>

      <div className="mt-6 divide-y divide-line border-t border-line">
        {c.subs.map((s) => {
          const isOpen = open === s.code;
          return (
            <div key={s.code} className="py-3">
              <button
                onClick={() => setOpen(isOpen ? null : s.code)}
                className="w-full flex items-start justify-between gap-4 text-left py-2"
                aria-expanded={isOpen}
              >
                <span className="flex items-start gap-3">
                  <span
                    className="shrink-0 h-7 w-7 rounded-md inline-flex items-center justify-center text-xs font-black"
                    style={{ background: "var(--mint-soft)", color: "var(--navy-deep)", border: "1px solid var(--mint)" }}
                  >
                    {s.code}
                  </span>
                  <span className="font-extrabold text-base md:text-lg text-ink" dangerouslySetInnerHTML={{ __html: s.title }} />
                </span>
                <span
                  className={`shrink-0 h-8 w-8 rounded-full border inline-flex items-center justify-center font-bold transition ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  style={isOpen ? { background: "var(--navy-deep)", color: "var(--mint)", borderColor: "var(--navy-deep)" } : { borderColor: "var(--line)", color: "var(--navy)" }}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="pl-10 pt-2 pb-3">
                  <ul className="space-y-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex gap-2.5 text-sm md:text-[0.95rem] text-ink">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--mint)" }} />
                        <span dangerouslySetInnerHTML={{ __html: d }} />
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold" style={{ color: "var(--navy)" }}>
                    <span className="text-[10px] tracking-widest uppercase" style={{ color: "var(--navy-soft)" }}>ფასი</span>
                    <span dangerouslySetInnerHTML={{ __html: s.price }} />
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
}
