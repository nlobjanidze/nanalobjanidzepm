import poster from "@/assets/ba-pm-course-poster.png";

const REGISTER_URL = "https://forms.gle/PgG8npciSifdQgHD6";
const SYLLABUS_URL = "/BA_PM_Integrated_Syllabus.pdf";

const DETAILS = [
  { label: "ხანგრძლივობა", value: "7 ოქტომბერი - 16 დეკემბერი, 2026" },
  { label: "შეხვედრები", value: "21 შეხვედრა | 42 საათი" },
  { label: "ფორმატი", value: "ონლაინ | Microsoft Teams" },
  { label: "განრიგი", value: "ყოველ ორშაბათსა და ოთხშაბათს" },
  { label: "დრო", value: "20:00 - 22:00" },
  { label: "ენა", value: "ქართული" },
];

const FOR_YOU = [
  "გინდა კარიერის დაწყება ბიზნეს ანალიზის ან პროექტების მართვის მიმართულებით;",
  "უკვე მუშაობ პროექტებთან და გინდა ცოდნის სტრუქტურირება;",
  "უკვე ხარ BA ან PM და გინდა მეორე მიმართულების უკეთ გაგება;",
  "გინდა დაინახო პროექტის სრული გზა და არა მხოლოდ მისი ცალკეული ეტაპები.",
];

const OUTCOMES = [
  "გაიცემა სერტიფიკატი;",
  "ერთ საერთო პროექტზე შექმნილი პრაქტიკული ნამუშევარი;",
  "BA და PM-ის ძირითადი არტეფაქტების პრაქტიკული გამოცდილება;",
  "პროფესიული ინსტრუმენტების გამოყენების გამოცდილება - მათ შორის Miro, Jira/Trello და Draw.io;",
  "Professional Templates Library;",
  "AI Prompt Library for BA & PM;",
  "1-თვიანი post-course mentoring;",
  "Alumni Community-ში ჩართულობის შესაძლებლობა.",
];

const TRAINERS = [
  {
    name: "თინათინ პაპაშვილი - CBAP®",
    bio: "CBAP®, PRINCE2®, PSPO II® და AAC® სერტიფიკაციებითა და 10+ წლიანი გამოცდილებით, თინათინი გაგატარებს ბიზნეს საჭიროებიდან მოთხოვნების ანალიზამდე, სტრუქტურირებამდე და მოდელირებამდე.",
    initials: "თპ",
  },
  {
    name: "ნანა ლობჯანიძე - PMP®",
    bio: "8+ წლიანი მენეჯერული გამოცდილებით ნანა გაჩვენებს, როგორ გარდაიქმნება ბიზნეს საჭიროება კონკრეტულ პროექტად - დაწყებიდან დაგეგმვამდე, აღსრულებიდან მონიტორინგამდე და საბოლოო შედეგამდე.",
    initials: "ნლ",
  },
];

function RegisterButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-bold transition-all hover:-translate-y-0.5 ${className}`}
      style={{ background: "var(--mint)", color: "var(--navy-deep)", boxShadow: "var(--shadow-mint)" }}
    >
      კურსზე რეგისტრაცია →
    </a>
  );
}

export function FeaturedCourse() {
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
              რეგისტრაცია მიმდინარეობს
            </span>

            <h2 className="heading-lg mt-5">IT ბიზნეს ანალიზი &amp; პროექტების მართვა</h2>

            <p className="mt-4 text-lg font-bold" style={{ color: "var(--navy)" }}>
              ბიზნეს საჭიროებიდან - ღირებულების შექმნამდე.
            </p>
            <p className="mt-1 text-base font-semibold text-ink-soft">ორი პროფესია, ერთი კურსი, ერთი პროექტი.</p>

            <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink-soft max-w-[60ch]">
              <p>
                თუ ბიზნეს ანალიზის ან პროექტების მართვის მიმართულებით განვითარებას გეგმავ, ალბათ უკვე იცი, რომ რეალურ პროექტში ეს ორი
                მიმართულება ერთმანეთისგან დამოუკიდებლად არ მუშაობს.
              </p>
              <p>ბიზნეს ანალიტიკოსი ეძებს პასუხს კითხვაზე - რა გვჭირდება და რატომ?</p>
              <p>
                პროექტის მენეჯერი კი ამ საჭიროებას გარდაქმნის რეალურ გეგმად - როგორ გავაკეთებთ, რა რესურსით, რა ვადაში და როგორ მივიყვანთ
                შედეგამდე?
              </p>
              <p>სწორედ ამ კავშირზეა აგებული ჩვენი ახალი ინტეგრირებული პროგრამა: IT ბიზნეს ანალიზი &amp; პროექტების მართვა</p>
            </div>

            <p className="mt-5 text-sm font-semibold text-ink">
              რეგისტრაცია: 1 სექტემბერი - 5 ოქტომბერი, 2026
            </p>

            {/* Early bird */}
            <div
              className="mt-5 rounded-2xl px-5 py-4"
              style={{ background: "var(--mint-soft)", border: "1px solid rgba(23,227,178,0.45)" }}
            >
              <p className="text-[15px] font-extrabold" style={{ color: "var(--navy-deep)" }}>
                EARLY BIRD - 10% ფასდაკლება
              </p>
              <p className="mt-1 text-sm text-ink-soft">დარეგისტრირდი 10 სექტემბრამდე და მიიღე 10% ფასდაკლება</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <RegisterButton />
              <a
                href={SYLLABUS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-bold text-ink transition-all hover:-translate-y-0.5"
              >
                იხილე სრული სილაბუსი →
              </a>
            </div>
          </div>

          {/* Poster */}
          <div className="surface-card p-4 md:p-6 flex items-center justify-center bg-white">
            <img
              src={poster}
              alt="IT ბიზნეს ანალიზი და პროექტების მართვა - კურსის პოსტერი"
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
            <h3 className="heading-md">🎯 რატომ ეს კურსი?</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              ეს არის ერთი პროფესიული გზა, სადაც ხედავ, როგორ გადადის ბიზნეს საჭიროება ღირებულებაში, ანალიზი - მოთხოვნებში, მოთხოვნები -
              პროექტის გეგმაში, ხოლო გეგმა - რეალურ შედეგში.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              კურსის განმავლობაში მუშაობ ერთ საერთო პროექტზე და ნაბიჯ-ნაბიჯ ქმნი იმ პრაქტიკულ შედეგებსა და არტეფაქტებს, რომლებიც რეალურ
              სამუშაო გარემოში ერთმანეთთან არის დაკავშირებული.
            </p>
          </div>

          <div className="surface-card p-6 md:p-8 bg-white">
            <h3 className="heading-md">👥 კურსი შენთვისაა, თუ:</h3>
            <ul className="mt-4 space-y-3">
              {FOR_YOU.map((t) => (
                <li key={t} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                  <span aria-hidden>🔹</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Outcomes */}
        <div className="mt-6 surface-card p-6 md:p-8 bg-white">
          <h3 className="heading-md">💡 რას მიიღებ კურსის ბოლოს?</h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {OUTCOMES.map((t) => (
              <li key={t} className="flex gap-2.5 rounded-xl px-4 py-3 text-[15px] leading-relaxed text-ink-soft surface-soft">
                <span aria-hidden>🔹</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Trainers */}
        <div className="mt-6">
          <h3 className="heading-md">🎙️ პროგრამის ტრენერები</h3>
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
          <h3 className="heading-md">📄 სრული სილაბუსი</h3>
          <p className="text-[15px] text-ink-soft max-w-[62ch]">
            სილაბუსში მოცემულია კურსის სრული პროგრამა - 21 შეხვედრა, პრაქტიკული დავალებები, BA/PM თემები, ინსტრუმენტები და Premium Bonus
            Package.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={SYLLABUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-bold text-ink transition-all hover:-translate-y-0.5"
            >
              იხილე სრული სილაბუსი →
            </a>
            <RegisterButton />
          </div>
        </div>
      </div>
    </section>
  );
}
