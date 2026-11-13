import poster from "@/assets/ba-pm-course-poster.png";
import { Bullet } from "./Bullet";

const REGISTER_URL = "https://forms.gle/PgG8npciSifdQgHD6";
const SYLLABUS_URL = "/BA_PM_Integrated_Syllabus.pdf";

const DETAILS = [
  { label: "Duration", value: "7 October - 16 December 2026" },
  { label: "Sessions", value: "21 sessions | 42 hours" },
  { label: "Format", value: "Online | Microsoft Teams" },
  { label: "Schedule", value: "Every Monday and Wednesday" },
  { label: "Time", value: "20:00 - 22:00" },
  { label: "Language", value: "Georgian" },
];

const FOR_YOU = [
  "You want to start a career in business analysis or project management;",
  "You already work on projects and want to structure your knowledge;",
  "You are already a BA or PM and want to understand the other discipline better;",
  "You want to understand the complete project journey, not just individual stages.",
];

const OUTCOMES = [
  "Certificate of completion;",
  "Practical deliverables created through a shared project;",
  "Hands-on experience with core BA and PM artifacts;",
  "Experience with professional tools including Miro, Jira/Trello and Draw.io;",
  "Professional Templates Library;",
  "AI Prompt Library for BA & PM;",
  "One month of post-course mentoring;",
  "Opportunity to join the alumni community.",
];

const TRAINERS = [
  {
    name: "Tinatin Papashvili - CBAP®",
    bio: "With CBAP®, PRINCE2®, PSPO II® and AAC® certifications and over 10 years of experience, Tinatin guides you from business needs through requirements analysis, structuring and modeling.",
    initials: "TP",
  },
  {
    name: "Nana Lobjanidze - PMP®",
    bio: "With more than eight years of management experience, Nana shows how to turn business needs into concrete projects, from initiation and planning through delivery, monitoring and outcomes.",
    initials: "NL",
  },
];

function EnglishRegisterButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-bold transition-all hover:-translate-y-0.5 ${className}`}
      style={{ background: "var(--mint)", color: "var(--navy-deep)", boxShadow: "var(--shadow-mint)" }}
    >
      Register for the course →
    </a>
  );
}

export function EnglishFeaturedCourse() {
  return (
    <section id="featured-course" className="section-y relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-x">
        {/* Top: copy + poster */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-bold tracking-wide"
              style={{ background: "rgba(23, 227, 178, 0.10)", color: "#17E3B2", border: "1px solid rgba(23, 227, 178, 0.35)" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" style={{ background: "#17E3B2" }} />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: "#17E3B2" }} />
              </span>
              Registration open
            </span>

            <h2 className="heading-lg mt-5">IT Business Analysis &amp; Project Management</h2>

            <p className="mt-4 text-lg font-bold" style={{ color: "var(--navy)" }}>
              From business needs to value creation.
            </p>
            <p className="mt-1 text-base font-semibold text-ink-soft">Two professions, one course, one project.</p>

            <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink-soft max-w-[60ch]">
              <p>
                If you are planning to develop in business analysis or project management, you may already know that in real projects these two
                disciplines do not work independently of each other.
              </p>
              <p>A business analyst asks: what do we need, and why?</p>
              <p>
                A project manager turns that need into an actionable plan: how will we deliver it, with what resources, on what timeline, and how will we achieve
                the intended result?
              </p>
              <p>Our integrated IT Business Analysis &amp; Project Management program is built around this connection.</p>
            </div>

            <p className="mt-5 text-sm font-semibold text-ink">
              Registration: 1 September - 5 October 2026
            </p>

            {/* Early bird */}
            <div
              className="mt-5 rounded-2xl px-5 py-4"
              style={{ background: "var(--mint-soft)", border: "1px solid rgba(23,227,178,0.45)" }}
            >
              <p className="text-[15px] font-extrabold" style={{ color: "var(--navy-deep)" }}>
                EARLY BIRD - 10% discount
              </p>
              <p className="mt-1 text-sm text-ink-soft">Register by 10 September to receive a 10% discount</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <EnglishRegisterButton />
              <a
                href={SYLLABUS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-bold text-ink transition-all hover:-translate-y-0.5"
              >
                View the full syllabus →
              </a>
            </div>
          </div>

          {/* Poster */}
          <div className="surface-card p-4 md:p-6 flex items-center justify-center bg-white">
            <img
              src={poster}
              alt="IT Business Analysis and Project Management - course poster"
              className="w-full h-auto max-h-[640px] object-contain rounded-xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Details */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DETAILS.map((d) => (
            <div key={d.label} className="surface-card p-5 bg-white">
              <div className="text-xs font-bold uppercase tracking-wider text-ink-soft">{d.label}</div>
              <div className="mt-1 text-[15px] font-bold text-ink">{d.value}</div>
            </div>
          ))}
        </div>

        {/* Why */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="surface-card p-6 md:p-8 bg-white">
            <h3 className="heading-md">Why this course?</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              This is one connected learning journey showing how business needs become value, analysis becomes requirements, requirements become
              a project plan, and the plan becomes a tangible outcome.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Throughout the course, you work on one shared project and gradually develop the practical deliverables and artifacts that are connected in
              a real working environment.
            </p>
          </div>

          <div className="surface-card p-6 md:p-8 bg-white">
            <h3 className="heading-md">This course is for you if:</h3>
            <ul className="mt-4 space-y-3">
              {FOR_YOU.map((t) => (
                <li key={t} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                  <Bullet />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Outcomes */}
        <div className="mt-6 surface-card p-6 md:p-8 bg-white">
          <h3 className="heading-md">What will you gain?</h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {OUTCOMES.map((t) => (
              <li key={t} className="flex gap-2.5 rounded-xl px-4 py-3 text-[15px] leading-relaxed text-ink-soft surface-soft">
                <Bullet />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Trainers */}
        <div className="mt-6">
          <h3 className="heading-md">Meet the trainers</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {TRAINERS.map((t) => (
              <div key={t.name} className="surface-card p-6 bg-white flex gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-base font-extrabold"
                  style={{ background: "var(--mint-soft)", color: "var(--navy-deep)" }}
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[16px] font-extrabold text-ink">{t.name}</div>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 surface-card p-6 md:p-8 bg-white flex flex-col items-center gap-4 text-center">
          <h3 className="heading-md">Full syllabus</h3>
          <p className="text-[15px] text-ink-soft max-w-[62ch]">
            The syllabus covers the full program: 21 sessions, practical assignments, BA/PM topics, tools and the Premium Bonus
            Package.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={SYLLABUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-bold text-ink transition-all hover:-translate-y-0.5"
            >
              View the full syllabus →
            </a>
            <EnglishRegisterButton />
          </div>
        </div>
      </div>
    </section>
  );
}
