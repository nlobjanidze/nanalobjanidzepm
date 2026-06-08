const RECOMMENDATION = {
  text: `Ms. Nana Lobjanidze served as a coordinator of the EU-funded project „Development of Oni Municipality via Business Cluster Creation and Investment Attraction" from the Mayor's Office of Oni Municipality. In cooperation with the PMC Research Team, Nana demonstrated impressive project management skills and strong knowledge of the local environment and major stakeholders. Her dedicated work was decisive in meeting project deadlines, conducting research activities, elaborating reports, organising prioritisation and institutionalisation workshops for business clusters, and managing study tours to Romania and Latvia. She also led the elaboration of Oni Municipality's investment-attractiveness information and the related website. The PMC Research Team had a highly productive cooperation with Nana — she deployed her experience, local knowledge, and excellent management, organisational and communication skills for the successful implementation of the project.`,
  name: "Mikheil Skhiereli",
  role: "Team Leader, Senior Consultant",
  org: "Policy and Management Consulting Group",
};

export function Testimonials() {
  return (
    <section id="recommendation" className="section-y bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">რეკომენდაცია</span>
          <h2 className="heading-lg mt-4 text-balance">
            პარტნიორის <span className="text-navy">პროფესიული შეფასება</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base md:text-lg">
            EU-დაფინანსებული პროექტის გუნდის წერილობითი რეკომენდაცია.
          </p>
        </div>

        <figure className="mt-12 max-w-4xl mx-auto surface-card p-8 md:p-12 relative">
          <span
            className="absolute top-6 right-8 text-8xl leading-none font-serif select-none"
            style={{ color: "var(--mint)", opacity: 0.35 }}
            aria-hidden
          >
            "
          </span>
          <blockquote className="text-base md:text-lg leading-relaxed text-ink relative z-10">
            {RECOMMENDATION.text}
          </blockquote>
          <figcaption className="mt-8 pt-6 border-t border-line flex items-center gap-5">
            <span
              className="h-14 w-14 rounded-full inline-flex items-center justify-center font-black text-xl shrink-0"
              style={{ background: "var(--navy-deep)", color: "var(--mint)" }}
            >
              MS
            </span>
            <div>
              <p className="font-extrabold text-base text-ink">{RECOMMENDATION.name}</p>
              <p className="text-sm text-ink-soft mt-0.5">{RECOMMENDATION.role}</p>
              <p className="text-xs text-navy font-bold mt-0.5">{RECOMMENDATION.org}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
