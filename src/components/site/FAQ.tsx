import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const ITEMS_KA = [
  {
    q: "რა გამოცდილება გჭირდება PMP®-ის ჩასაბარებლად?",
    a: "PMI მოითხოვს 36 თვის პროექტის მართვის გამოცდილებას (ბაკალავრიატის შემთხვევაში) ან 60 თვის (გვერდითი განათლების შემთხვევაში) + 35 საათი PM სწავლება. ჩვენი PMP® Prep ტრენინგი ფარავს ამ 35 საათს და ემზადებით გამოცდისთვის.",
  },
  {
    q: "რამდენ ხანში მზადდება გუნდი PMO-ს დანერგვისთვის?",
    a: "საშუალოდ 8–12 კვირაში: 2–3 კვირა დიაგნოსტიკა, 3–4 კვირა დიზაინი და შაბლონები, 3–5 კვირა ტრენინგი და დანერგვა. ზუსტი ვადა დამოკიდებულია ორგანიზაციის ზომაზე.",
  },
  {
    q: "ტრენინგი ონლაინ ტარდება თუ ფიზიკურად?",
    a: "ორივე ფორმატი ხელმისაწვდომია. კორპორატიული ტრენინგი - ჩვეულებრივ ფიზიკურად; PMP® Prep და Agile in Practice - ჰიბრიდულად, ვიდეო ჩანაწერებით.",
  },
  {
    q: "კონსულტაცია ერთჯერადია თუ გრძელვადიანი?",
    a: "გვაქვს ორივე ფორმატი. დიაგნოსტიკური სესია - 1 შეხვედრა. სრული პროექტის თანხლება - 3–12 თვის retainer.",
  },
  {
    q: "ვმუშაობთ თუ არა საერთაშორისო კლიენტებთან?",
    a: "კი - საქართველოს ფარგლებს გარეთ ვმუშაობთ რემოტ ფორმატით. EU, GIZ, UNDP და სხვა დონორებთან თანამშრომლობის გამოცდილებით.",
  },
  {
    q: "რა ენებზე ტარდება სერვისები?",
    a: "ქართული - ძირითადი ენა. ინგლისური - დონორებთან კომუნიკაცია, საერთაშორისო კლიენტებთან კონსულტაცია.",
  },
];

const ITEMS_EN = [
  { q: "What experience is required for the PMP® exam?", a: "PMI generally requires 36 months of project leadership experience with a four-year degree, or 60 months with a secondary-school diploma, along with 35 hours of project management education or an accepted alternative. Check PMI's current eligibility criteria before applying." },
  { q: "How long does it take to introduce a PMO?", a: "A typical initial rollout takes around 8–12 weeks: discovery, process and template design, then training and implementation. The exact schedule depends on your organization's size and needs." },
  { q: "Are training sessions online or in person?", a: "Both formats are available, depending on the program and the client's requirements." },
  { q: "Can I book a one-off consultation or longer-term support?", a: "Both are possible: a one-time diagnostic consultation or ongoing project management support, depending on the scope." },
  { q: "Do you work with international clients?", a: "Yes. Remote consulting and international collaboration are possible, drawing on experience with donor-funded initiatives." },
  { q: "Which languages are available?", a: "Georgian is the primary delivery language. English is available for international client and donor communication." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  const { language } = useLanguage();
  const en = language === "en";
  const ITEMS = en ? ITEMS_EN : ITEMS_KA;
  return (
    <section id="faq" className="section-y bg-surface">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">{en ? "Frequently asked questions" : "ხშირი კითხვები"}</span>
          <h2 className="heading-lg mt-4 text-balance">
            {en ? "Have a question? " : "გაქვს კითხვა? "}<span className="text-navy">{en ? "Find the answer here." : "აქ ნახე პასუხი."}</span>
          </h2>
          <p className="mt-4 text-ink-soft">
            {en ? "If you cannot find an answer, get in touch using the contact form." : "თუ პასუხს ვერ პოულობ - დაგვიკავშირდი პირდაპირ ფორმის გავლით."}
          </p>
          <a href="#contact" className="cta-btn mt-6 inline-flex items-center rounded-full bg-navy-deep px-5 py-3 font-bold text-white hover:bg-navy transition text-sm">
            {en ? "Ask a question →" : "დასვი კითხვა →"}
          </a>
        </div>
        <div className="lg:col-span-8">
          <ul className="space-y-3">
            {ITEMS.map((it, i) => {
              const isOpen = open === i;
              return (
                <li key={it.q} className={`surface-card overflow-hidden ${isOpen ? "border-mint shadow-[var(--shadow-soft)]" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-start justify-between gap-6 text-left p-5 md:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-extrabold text-base md:text-lg text-ink">{it.q}</span>
                    <span className={`shrink-0 h-8 w-8 rounded-full border inline-flex items-center justify-center font-bold transition ${isOpen ? "rotate-45 bg-navy-deep text-mint border-navy-deep" : "border-line text-navy bg-white"}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 text-ink-soft text-sm md:text-base leading-relaxed -mt-1">
                      {it.a}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
