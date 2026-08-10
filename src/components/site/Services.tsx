import { useState } from "react";

type SubService = {
  code: string;
  title: string;
  includes: string[];
  outcomes: string[];
  price: string;
};
type Category = {
  num: string;
  key: string;
  tag: string;
  title: string;
  audience: string;
  intro?: string;
  accent: "mint" | "navy" | "blend" | "deep";
  subs: SubService[];
};

const CATEGORIES: Category[] = [
  {
    num: "01",
    key: "delivery",
    tag: "Project Management & Strategic Delivery",
    title: "პროექტების მართვა, სტრატეგიული შესრულება და ლიდერშიფი",
    audience: "ორგანიზაციები, NGO-ები, სტარტაპები, სახელმწიფო სტრუქტურები, ინდივიდუალური PM-ები, დონორებთან მომუშავე ორგანიზაციები.",
    accent: "mint",
    subs: [
      {
        code: "A",
        title: "სრული ციკლის პროექტების მართვა (End-to-End Delivery)",
        includes: [
          "პროექტის ინიცირება და სკოპის განსაზღვრა",
          "Project Charter და Roadmap-ის შექმნა",
          "WBS / Task Breakdown",
          "Timeline და რესურსების დაგეგმვა",
          "ბიუჯეტის კონტროლი და მონიტორინგი",
          "Risk & Issue Management (RAID Log)",
          "Stakeholder Management & Communication Plan",
          "ყოველდღიური / კვირეული პროგრესის კონტროლი",
          "Agile / Waterfall / Hybrid მეთოდოლოგიის გამოყენება",
          "Delivery და Closure + Lessons Learned",
        ],
        outcomes: [
          "პროექტი ხდება კონტროლირებადი და პროგნოზირებადი",
          "მცირდება დაგვიანებები და ბიუჯეტის გადაჭარბება",
          "იზრდება სტეიკჰოლდერების ნდობა და ხილვადობა",
        ],
        price: "1,200–2,800 ₾ / თვეში · ონლაინ / ოფლაინ (თბილისი)",
      },
      {
        code: "B",
        title: "პროექტის აუდიტი და დიაგნოსტიკა",
        includes: [
          "მიმდინარე პროცესების ანალიზი",
          "პრობლემების root cause იდენტიფიკაცია",
          "დროის, ბიუჯეტისა და რესურსების გადახედვა",
          "კომუნიკაციისა და სტრუქტურის შეფასება",
          "Risk gaps და bottlenecks",
          "კონკრეტული Improvement Plan",
        ],
        outcomes: [
          "ზუსტად ჩანს სად „იჭედება“ პროექტი",
          "მიიღებთ გამოსწორების კონკრეტულ გზას",
          "სწრაფი ეფექტი მინიმალურ დროში",
        ],
        price: "600–1,200 ₾ (ერთჯერადი)",
      },
      {
        code: "C",
        title: "გრანტების მართვა და განვითარება (End-to-End Delivery)",
        includes: [
          "Grant Proposal Writing",
          "Donor requirements alignment",
          "Budget structuring",
          "Compliance & reporting framework",
          "Implementation plan",
          "Monitoring & Evaluation (M&E)",
          "Sub-grant management სისტემის შექმნა",
        ],
        outcomes: [
          "უფრო მაღალი შანსი გრანტის მიღებაზე",
          "გამართული დონორული ანგარიშგება",
          "ფინანსურად და სტრუქტურულად ძლიერი პროექტი",
        ],
        price: "800–2,000 ₾ (წერა) · 500–1,000 ₾ / თვე (მართვა)",
      },
      {
        code: "D",
        title: "ღონისძიებებისა და პროექტული ინიციატივების მართვა",
        includes: [
          "კონცეფციის შექმნა",
          "სრული ღონისძიების დაგეგმვა",
          "სპიკერების / პარტნიორების კოორდინაცია",
          "ლოჯისტიკა და ოპერაციები",
          "კომუნიკაცია და მარკეტინგი",
          "Run of Show და execution",
          "Post-event analysis",
        ],
        outcomes: [
          "სტრუქტურირებული, პროფესიონალური ღონისძიება",
          "ნაკლები ქაოსი და უკეთესი გამოცდილება მონაწილეებისთვის",
        ],
        price: "500–2,500 ₾",
      },
    ],
  },
  {
    num: "02",
    key: "ops",
    tag: "Process Improvement & Operational Systems",
    title: "გუნდის მენტორინგი, პროცესების დალაგება და საოპერაციო სისტემები",
    audience: "კომპანიები, გუნდები, HR დეპარტამენტები, მენეჯერები.",
    accent: "navy",
    subs: [
      {
        code: "A",
        title: "PM სისტემის დანერგვა (Jira / Asana / ClickUp / Trello)",
        includes: [
          "პროექტების მართვის სისტემის დაყენება",
          "Workflow-ის კონფიგურაცია",
          "Task structure და board setup",
          "გუნდის ტრენინგი",
          "Dashboard & reporting სისტემები",
          "KPI tracking setup",
        ],
        outcomes: [
          "ყველა პროექტი ჩანს ერთ სივრცეში",
          "გუნდი მუშაობს სისტემურად, არა ქაოსურად",
          "იზრდება კონტროლი და პროგნოზირება",
        ],
        price: "500–1,300 ₾",
      },
      {
        code: "B",
        title: "საოპერაციო მოდელის გამართვა",
        includes: [
          "არსებული პროცესების ანალიზი",
          "ორგანიზაციული სტრუქტურის დალაგება",
          "როლებისა და პასუხისმგებლობების განსაზღვრა (RACI)",
          "გადაწყვეტილების მიღების მოდელი",
          "Workflow optimization",
          "Escalation სისტემა",
        ],
        outcomes: [
          "ნაკლები გადატვირთვა და დაბნეულობა",
          "მკაფიო პასუხისმგებლობები",
          "ეფექტური შიდა კომუნიკაცია",
        ],
        price: "1,000–2,500 ₾",
      },
      {
        code: "C",
        title: "გუნდის მენტორინგი და Performance Coaching",
        includes: [
          "თანამშრომლების სამუშაო პროცესის ანალიზი",
          "ინდივიდუალური მენტორინგი (1-on-1)",
          "Time & Task management",
          "რეალურ პროექტებზე coaching",
          "პრიორიტეტიზაცია და delivery მხარდაჭერა",
          "შეხვედრების და კომუნიკაციის გაუმჯობესება",
          "Leadership transition support",
        ],
        outcomes: [
          "გუნდი უფრო დამოუკიდებლად მუშაობს",
          "მცირდება მიკრო-მენეჯმენტი",
          "იზრდება შესრულების ხარისხი",
        ],
        price: "150–250 ₾ / სესია · 500–850 ₾ / 4 სესია · 800–2,500 ₾ / თვე (ორგანიზაცია)",
      },
      {
        code: "D",
        title: "კომუნიკაციისა და სტეიკჰოლდერების მართვის სისტემა",
        includes: [
          "კომუნიკაციის სტრატეგია",
          "Internal / External communication flow",
          "Reporting structure",
          "Meeting system design",
          "Escalation policy",
          "Stakeholder mapping",
        ],
        outcomes: [
          "ნაკლები გაუგებრობა გუნდში",
          "გამართული ინფორმაციის ნაკადი",
          "სწრაფი გადაწყვეტილებები",
        ],
        price: "400–900 ₾",
      },
    ],
  },
  {
    num: "03",
    key: "mentoring",
    tag: "Mentoring & Leadership Development",
    title: "გუნდის მენტორინგი, ლიდერობა და შესრულების გაუმჯობესება",
    audience: "Junior/Middle PM-ები, Team Lead-ები, მენეჯერები, ლიდერულ პოზიციებზე გადასვლის პროცესში მყოფი თანამშრომლები.",
    accent: "blend",
    subs: [
      {
        code: "A",
        title: "PM მენტორინგი (1-on-1)",
        includes: [
          "სამუშაო პროცესის ანალიზი",
          "Task და პრიორიტეტების მართვა",
          "რეალურ პროექტებზე პრაქტიკული guidance",
          "Jira / Asana / ClickUp workflow-ის გაუმჯობესება",
          "შეხვედრების და კომუნიკაციის სტრუქტურა",
          "Deadline და delivery management",
          "პრობლემების და ბლოკერების გარჩევა რეალურ ქეისებზე",
          "ინდივიდუალური განვითარება და კარიერული მიმართულება",
        ],
        outcomes: [
          "თანამშრომელი უფრო დამოუკიდებლად მუშაობს",
          "მცირდება შეცდომები და გადატვირთვა",
          "იზრდება შესრულების ხარისხი და სტაბილურობა",
        ],
        price: "150–250 ₾ / სესია (60–90 წთ) · 500–850 ₾ / პაკეტი (4 სესია)",
      },
      {
        code: "B",
        title: "გუნდის Performance მენტორინგი",
        includes: [
          "გუნდის workflow ანალიზი",
          "როლებისა და პასუხისმგებლობების დაზუსტება",
          "Weekly planning სისტემის აწყობა",
          "Task tracking და delivery monitoring",
          "შეხვედრების სტრუქტურის გაუმჯობესება",
          "კომუნიკაციის და კოორდინაციის ოპტიმიზაცია",
          "ბლოკერების იდენტიფიკაცია და გადაწყვეტა",
        ],
        outcomes: [
          "გუნდი მუშაობს უფრო სტრუქტურულად",
          "ნაკლები ქაოსი და გადაცდენები",
          "იზრდება შესრულების პროგნოზირება და კონტროლი",
        ],
        price: "800–2,500 ₾ / თვე",
      },
      {
        code: "C",
        title: "ლიდერობისა და მენეჯერული მენტორინგი",
        includes: [
          "ლიდერული გადაწყვეტილებების მხარდაჭერა",
          "დელეგირების გაუმჯობესება",
          "რთული საუბრები და კონფლიქტების მართვა",
          "Performance feedback სისტემის განვითარება",
          "მოლოდინების მართვა ხელმძღვანელობასთან",
          "გუნდის მოტივაცია და engagement",
        ],
        outcomes: [
          "უფრო ძლიერი ლიდერული უნარები",
          "უკეთესი გუნდის მართვა",
          "ნაკლები მიკრო-მენეჯმენტი",
        ],
        price: "150–300 ₾ / სესია",
      },
      {
        code: "D",
        title: "ორგანიზაციული Performance Improvement პროგრამა",
        includes: [
          "ორგანიზაციული პროცესების ანალიზი",
          "გუნდის სტრუქტურის შეფასება",
          "Workflow redesign",
          "Communication flow სისტემის აწყობა",
          "KPI და accountability სისტემის შექმნა",
          "Project delivery სისტემის გაუმჯობესება",
          "მენეჯერების coaching",
        ],
        outcomes: [
          "ორგანიზაცია მუშაობს როგორც სისტემა",
          "იზრდება შესრულების ხარისხი",
          "გუნდი ხდება უფრო ეფექტური და scalable",
        ],
        price: "1,000–2,500 ₾ / თვე",
      },
    ],
  },
  {
    num: "04",
    key: "grants",
    tag: "Grant Management & Grantmaking Systems",
    title: "გრანტების მართვა და გრანტების გაცემა",
    audience: "NGO-ები, საჯარო და კერძო სტრუქტურები, საერთაშორისო ორგანიზაციები, ფონდები.",
    accent: "deep",
    subs: [
      {
        code: "A",
        title: "გრანტების მიღება და მართვა",
        includes: [
          "Grant Proposal Writing (EU / UNDP / GIZ / Embassy programs)",
          "Donor requirements ანალიზი და alignment",
          "Budget structuring და justification",
          "Implementation plan და timeline",
          "Compliance & eligibility check",
          "Monitoring & Evaluation (M&E) framework",
          "Reporting system (narrative + financial)",
          "Sub-grant management",
        ],
        outcomes: [
          "ძლიერი, კონკურენტული განაცხადები",
          "დონორული მოთხოვნების სრული შესაბამისობა",
          "გამართული პროექტის შესრულება და ანგარიშგება",
        ],
        price: "800–2,000 ₾ (application) · 500–1,000 ₾ / თვე (management)",
      },
      {
        code: "B",
        title: "გრანტების გაცემა და გრანტ-სისტემის შექმნა (Grantmaking Systems)",
        includes: [
          "გრანტების პროგრამის დიზაინი (Grant Program Design)",
          "შეფასების კრიტერიუმების შექმნა (Evaluation Framework)",
          "აპლიკაციის პროცესის სტრუქტურირება",
          "შერჩევის კომიტეტებისა და პროცესების აწყობა",
          "კონტრაქტებისა და compliance framework-ის შექმნა",
          "Disbursement (ფინანსების გაცემის) პროცესი",
          "Monitoring & Reporting სისტემის დიზაინი",
          "Impact measurement (შედეგების გაზომვა)",
        ],
        outcomes: [
          "ორგანიზაციას აქვს საკუთარი გრანტების სისტემა",
          "გამჭვირვალე და სტანდარტიზებული შერჩევის პროცესი",
          "კონტროლირებადი ფინანსური და შედეგობრივი მართვა",
        ],
        price: "1,000–2,500 ₾ (პროექტის მიხედვით)",
      },
    ],
  },
];

const PROBLEMS = [
  "პროექტები იგვიანებს და ბიუჯეტი იზრდება",
  "გუნდი არ არის დალაგებული და პასუხისმგებლობები ბუნდოვანია",
  "კომუნიკაცია ქაოსურია (Excel, Chat, გაუგებარი updates)",
  "გრანტები იკარგება ან არ სრულდება სწორად",
  "შედეგი არ ჩანს მკაფიოდ დონორებისთვის ან მენეჯმენტისთვის",
  "ლიდერობის ნაკლებობა",
];

function accentStyle(a: Category["accent"]) {
  switch (a) {
    case "mint":
      return { bg: "var(--mint-soft)", border: "var(--mint)", text: "var(--navy-deep)", dot: "var(--mint)" };
    case "navy":
      return { bg: "color-mix(in oklab, var(--navy) 8%, white)", border: "color-mix(in oklab, var(--navy) 35%, white)", text: "var(--navy-deep)", dot: "var(--navy)" };
    case "blend":
      return { bg: "color-mix(in oklab, var(--mint) 18%, white)", border: "color-mix(in oklab, var(--mint) 55%, white)", text: "var(--navy-deep)", dot: "var(--navy)" };
    case "deep":
      return { bg: "var(--navy-deep)", border: "var(--navy-deep)", text: "white", dot: "var(--mint)" };
  }
}

export function Services() {
  return (
    <section id="services" className="section-y bg-white">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow">სერვისები</span>
            <h2 className="heading-lg mt-4 text-balance">
              ჩვენი მიდგომა - <span className="text-navy">სისტემა, შესრულება, შედეგი</span>
            </h2>
            <p className="mt-4 text-ink-soft text-base md:text-lg">
              ჩვენ არ ვაკეთებთ უბრალოდ კონსულტაციას - ვაშენებთ სისტემას, ვმართავთ შესრულებას და ვქმნით შედეგს.
              ოთხი ფოკუსირებული მიმართულება ბიზნესის, NGO-სა და საჯარო სექტორისთვის.
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

        {/* Problem framing */}
        <div className="mt-10 surface-card p-6 md:p-7">
          <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: "var(--navy-soft)" }}>
            თქვენი პრობლემა გამოიყურება ასე
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5">
            {PROBLEMS.map((p) => (
              <li key={p} className="flex gap-2.5 text-sm md:text-[0.95rem] text-ink">
                <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--mint)" }} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 space-y-6">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.key} c={c} />
          ))}
        </div>

        <div
          className="mt-16 grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-line shadow-[var(--shadow-soft)]"
          style={{ background: "var(--navy-deep)", color: "white" }}
        >
          <div className="lg:col-span-8 p-8 md:p-12">
            <span className="eyebrow" style={{ color: "var(--mint-bright)" }}>დიაგნოსტიკა</span>
            <h3 className="heading-md mt-4 text-balance" style={{ color: "white" }}>
              გჭირდებათ თქვენზე მორგებული ინდივიდუალური მიდგომა?{" "}
              <span style={{ color: "var(--mint)" }}>ვიმუშაოთ ერთად.</span>
            </h3>
            <p className="mt-4 text-white/75 max-w-xl">
              დავიწყოთ უფასო 30-წუთიანი დიაგნოსტიკით - გავარკვიოთ, რომელი მიდგომა მუშაობს თქვენთვის.
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
  const [open, setOpen] = useState(false);
  const [activeCode, setActiveCode] = useState<string | null>(null);
  const s = accentStyle(c.accent);
  const dark = c.accent === "deep";

  return (
    <article
      id={`svc-${c.key}`}
      className="scroll-mt-32 rounded-3xl border overflow-hidden shadow-[var(--shadow-soft)]"
      style={{
        background: dark ? "var(--navy-deep)" : "white",
        color: dark ? "white" : undefined,
        borderColor: "var(--line)",
      }}
    >
      <header className="p-7 md:p-9 grid lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-9">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-xs font-black"
              style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}` }}
            >
              {c.num}
            </span>
            <span
              className="text-[10px] font-black tracking-[0.22em] uppercase"
              style={{ color: dark ? "var(--mint-bright)" : "var(--navy-soft)" }}
            >
              {c.tag}
            </span>
            <span
              className="text-[11px] font-black px-2.5 py-1 rounded-full"
              style={{ background: dark ? "rgba(255,255,255,0.08)" : "var(--surface)", color: dark ? "white" : "var(--navy-deep)" }}
            >
              {c.subs.length} სერვისი
            </span>
          </div>
          <h3
            className="heading-md mt-4"
            style={{ color: dark ? "white" : "var(--navy-deep)" }}
          >
            {c.title}
          </h3>
          <p
            className="mt-3 text-sm md:text-base"
            style={{ color: dark ? "rgba(255,255,255,0.82)" : "var(--ink-soft)" }}
          >
            <span className="font-bold" style={{ color: dark ? "white" : "var(--ink)" }}>ვისთვის:</span> {c.audience}
          </p>
        </div>
        <div className="lg:col-span-3 flex lg:justify-end">
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold transition"
            style={{
              background: dark ? "var(--mint)" : "var(--navy-deep)",
              color: dark ? "var(--navy-deep)" : "white",
            }}
            aria-expanded={open}
          >
            {open ? "დახურე" : "ნახე ყველა სერვისი"} <span className={`transition ${open ? "rotate-90" : ""}`}>→</span>
          </button>
        </div>
      </header>

      {open && (
        <div
          className="px-7 md:px-9 pb-9 space-y-3"
          style={{ borderTop: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "var(--line)"}` }}
        >
          {c.subs.map((sub) => {
            const isOpen = activeCode === sub.code;
            return (
              <div
                key={sub.code}
                className="rounded-2xl border"
                style={{
                  background: dark ? "rgba(255,255,255,0.04)" : "white",
                  borderColor: dark ? "rgba(255,255,255,0.12)" : "var(--line)",
                }}
              >
                <button
                  onClick={() => setActiveCode(isOpen ? null : sub.code)}
                  className="w-full flex items-start justify-between gap-4 text-left p-5 md:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-3">
                    <span
                      className="shrink-0 h-8 w-8 rounded-md inline-flex items-center justify-center text-xs font-black"
                      style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}` }}
                    >
                      {sub.code}
                    </span>
                    <span>
                      <span
                        className="block font-extrabold text-base md:text-lg"
                        style={{ color: dark ? "white" : "var(--ink)" }}
                      >
                        {sub.title}
                      </span>
                      <span
                        className="block mt-1 text-[12px] font-extrabold"
                        style={{ color: dark ? "var(--mint-bright)" : "var(--navy)" }}
                      >
                        <span
                          role="link"
                          tabIndex={0}
                          onClick={(e) => {
                            e.stopPropagation();
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="underline underline-offset-4 cursor-pointer"
                        >
                          დამიკავშირდით
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className={`shrink-0 h-8 w-8 rounded-full border inline-flex items-center justify-center font-bold transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    style={
                      isOpen
                        ? dark
                          ? { background: "var(--mint)", color: "var(--navy-deep)", borderColor: "var(--mint)" }
                          : { background: "var(--navy-deep)", color: "var(--mint)", borderColor: "var(--navy-deep)" }
                        : { borderColor: dark ? "rgba(255,255,255,0.3)" : "var(--line)", color: dark ? "white" : "var(--navy)" }
                    }
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    className="grid md:grid-cols-2 gap-5 px-5 md:px-6 pb-6"
                    style={{ borderTop: `1px dashed ${dark ? "rgba(255,255,255,0.18)" : "var(--line)"}` }}
                  >
                    <div className="pt-5">
                      <p
                        className="text-[11px] font-black tracking-widest uppercase"
                        style={{ color: dark ? "rgba(255,255,255,0.65)" : "var(--navy-soft)" }}
                      >
                        რას მოიცავს
                      </p>
                      <ul className="mt-3 space-y-2">
                        {sub.includes.map((d) => (
                          <li
                            key={d}
                            className="flex gap-2.5 text-[13px] md:text-sm leading-relaxed"
                            style={{ color: dark ? "rgba(255,255,255,0.9)" : "var(--ink)" }}
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: s.dot }} />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-5">
                      <p
                        className="text-[11px] font-black tracking-widest uppercase"
                        style={{ color: dark ? "rgba(255,255,255,0.65)" : "var(--navy-soft)" }}
                      >
                        მოსალოდნელი შედეგი
                      </p>
                      <ul className="mt-3 space-y-2">
                        {sub.outcomes.map((d) => (
                          <li
                            key={d}
                            className="flex gap-2.5 text-[13px] md:text-sm leading-relaxed"
                            style={{ color: dark ? "rgba(255,255,255,0.9)" : "var(--ink)" }}
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: s.dot }} />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
}
