import pmpBadge from "@/assets/pmp-badge.asset.json";

const PMI = [
  { name: "PMP® — Project Management Professional", issuer: "Project Management Institute", year: "2024–2027" },
  { name: "Business Continuity", issuer: "Project Management Institute", year: "2025" },
  { name: "Data Landscape of GenAI for Project Managers", issuer: "Project Management Institute", year: "2024" },
  { name: "Generative AI Overview for Project Managers", issuer: "Project Management Institute", year: "2023" },
  { name: "Project Management for Beginners", issuer: "Project Management Institute", year: "2023" },
];

const PROFESSIONAL = [
  { name: "Mastering the Art of Cross-Functional Collaboration", issuer: "University of Colorado System", year: "2026" },
  { name: "Executive Leadership", issuer: "LinkedIn", year: "2025" },
  { name: "Becoming an Agile Coach", issuer: "LinkedIn Learning", year: "2025" },
  { name: "Leveraging Generative AI for Project Management", issuer: "LinkedIn", year: "2025" },
  { name: "Radical Product Thinking: Vision Setting", issuer: "Pendo.io", year: "2025" },
  { name: "Megaprojects Conference 2025", issuer: "P3GQA", year: "2025" },
  { name: "Scrum for Beginners + Scrum Master Certification Prep", issuer: "Udemy", year: "2023" },
  { name: "General Management", issuer: "Georgian Institute of Public Affairs (GIPA)", year: "2018–2019" },
  { name: "Communication Psychology & Interpersonal Relationships", issuer: "GIPA", year: "2022" },
  { name: "Personal & Professional Competence Development", issuer: "Academy of the Ministry of Finance", year: "2023" },
  { name: "Standards of Investors Service", issuer: "Ministry of Development Funds, Republic of Poland", year: "2023" },
  { name: "საზოგადოებრივი მონაწილეობა ადგილობრივი განვითარებისთვის", issuer: "სამოქალაქო საზოგადოების ინსტიტუტი", year: "2022–2023" },
  { name: "Inventory Management in Public Organizations", issuer: "Public Audit Institute", year: "2022" },
];

const EDUCATION = [
  { name: "საერთაშორისო ბიზნესის მენეჯმენტი — მაგისტრი", issuer: "Caucasus International University", year: "2025 – დღემდე" },
  { name: "ბიზნეს ადმინისტრირება და ფინანსები — ბაკალავრი", issuer: "Gori State Teaching University", year: "2007–2011" },
];

function Group({ title, items, accent }: { title: string; items: { name: string; issuer: string; year: string }[]; accent: "mint" | "navy" }) {
  return (
    <div className="surface-card p-7 md:p-8 hover:-translate-y-0.5">
      <div className="flex items-center gap-3">
        <span
          className="h-8 w-8 rounded-lg inline-flex items-center justify-center text-xs font-black border"
          style={
            accent === "mint"
              ? { background: "var(--mint-soft)", color: "var(--navy-deep)", borderColor: "var(--mint)" }
              : { background: "var(--navy-deep)", color: "white", borderColor: "var(--navy-deep)" }
          }
        >
          ✦
        </span>
        <h3 className="font-extrabold text-lg md:text-xl text-ink">{title}</h3>
      </div>
      <ul className="mt-5 divide-y divide-line">
        {items.map((i) => (
          <li key={i.name} className="py-3.5 flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold text-sm md:text-base text-ink">{i.name}</p>
              <p className="text-xs md:text-sm text-ink-soft mt-0.5">{i.issuer}</p>
            </div>
            {i.year && (
              <span className="shrink-0 text-xs font-black mt-1 tabular-nums" style={{ color: "var(--navy)" }}>{i.year}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="section-y bg-surface">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">განათლება &amp; სერტიფიკატები</span>
          <h2 className="heading-lg mt-4 text-balance">
            საერთაშორისო კვალიფიკაცია — <span className="text-navy">დადასტურებული</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base md:text-lg">
            PMP® სერტიფიკატი, PMI-ის და სხვა საერთაშორისო ინსტიტუტების სასწავლო პროგრამები,
            უმაღლესი განათლება — ერთ პროფესიულ პროფილში.
          </p>
        </div>

        <div
          className="mt-12 grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-line shadow-[var(--shadow-soft)]"
          style={{ background: "var(--navy-deep)", color: "white" }}
        >
          <div className="lg:col-span-8 p-8 md:p-10">
            <span className="eyebrow" style={{ color: "var(--mint-bright)" }}>PMP® სერტიფიკაცია</span>
            <h3 className="heading-md mt-4 text-balance" style={{ color: "white" }}>
              Project Management Professional <span style={{ color: "var(--mint)" }}>(PMI)</span>
            </h3>
            <p className="mt-3 text-white/80 max-w-xl">
              მოქმედების პერიოდი: <span className="font-bold" style={{ color: "var(--mint-bright)" }}>2024–2027</span> — გლობალურად აღიარებული პროექტების მართვის კვალიფიკაცია.
            </p>
          </div>
          <div
            className="lg:col-span-4 relative min-h-[180px] flex items-center justify-center p-8"
            style={{ background: "var(--gradient-brand)" }}
          >
            <img
              src={pmpBadge.url}
              alt="PMP® Professional Certification — Project Management Institute"
              className="block h-auto w-[120px] md:w-[140px] drop-shadow-xl"
              style={{ mixBlendMode: "multiply" }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Group title="PMI სერტიფიკატები" items={PMI} accent="mint" />
          <Group title="უმაღლესი განათლება" items={EDUCATION} accent="navy" />
          <Group title="საერთაშორისო პროფესიული სერტიფიკატები" items={PROFESSIONAL} accent="navy" />
        </div>
      </div>
    </section>
  );
}
