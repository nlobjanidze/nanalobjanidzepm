import about from "@/assets/about-portrait.asset.json";

const PILLARS = [
  { t: "PMP® სერტიფიცირებული", d: "Project Management Institute · 2024–2027" },
  { t: "Agile · Waterfall · Hybrid", d: "სამივე მეთოდოლოგია — სიტუაციის შესაბამისად." },
  { t: "საერთაშორისო დონორები", d: "EU, UNDP, GIZ, იაპონიის საელჩო, Slovak ODA." },
  { t: "ლიდერობა &amp; განვითარება", d: "ტრენინგი, მენტორინგი, ორგანიზაციული გაძლიერება." },
];

export function About() {
  return (
    <section id="about" className="section-y relative bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative min-h-[460px] md:min-h-[560px] order-2 lg:order-1">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(55% 50% at 50% 50%, rgba(23, 227, 178, 0.18), transparent 75%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(40% 35% at 20% 80%, rgba(20, 93, 160, 0.14), transparent 70%)",
            }}
            aria-hidden
          />
          <img
            src={about.url}
            alt="ნანა ლობჯანიძე — სამუშაო პროცესში"
            className="relative z-10 mx-auto block h-[460px] md:h-[560px] w-auto max-w-full object-cover object-top"
            style={{
              WebkitMaskImage:
                "radial-gradient(75% 80% at 50% 45%, black 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.4) 75%, transparent 92%)",
              maskImage:
                "radial-gradient(75% 80% at 50% 45%, black 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.4) 75%, transparent 92%)",
            }}
          />
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <span className="eyebrow">ჩემს შესახებ</span>
          <h2 className="heading-lg mt-4 text-balance">
            პროექტის მართვა — <span className="text-navy">ადამიანებისა და ღირებულების სწორი დაკავშირება</span>
          </h2>
          <div className="mt-6 space-y-4 text-ink-soft text-base md:text-lg leading-relaxed">
            <p>
              მე ვარ ნანა ლობჯანიძე — PMP® სერტიფიცირებული პროექტების მენეჯერი,
              კონსულტანტი, ტრენერი და მენტორი. მრავალწლიანი გამოცდილება მაქვს პროექტების,
              გუნდებისა და სტრატეგიული ინიციატივების მართვაში — როგორც კერძო, ისე საჯარო
              და საერთაშორისო სექტორში.
            </p>
            <p>
              ვმუშაობ Agile, Waterfall და Hybrid მეთოდოლოგიებით და მჯერა, რომ წარმატებული
              პროექტი მხოლოდ პროცესების მართვა არ არის — ეს არის ადამიანების, კომუნიკაციისა
              და ღირებულების სწორად დაკავშირება.
            </p>
            <p>
              ჩემი პროექტების პორტფელი მოიცავს მუნიციპალური განვითარების ინიციატივებს,
              საერთაშორისოდ დაფინანსებულ პროექტებს (EU, UNDP, GIZ, იაპონიის საელჩო და სხვ.),
              გრანტების კონკურსებს, ხოლო ამჟამად — სტრატეგიულ, საგანმანათლებლო და მარკეტინგულ
              პროექტებს ორგანიზაციულ დონეზე.
            </p>
          </div>

          <div className="mt-8 surface-soft p-5 md:p-6">
            <p className="text-[11px] font-black uppercase tracking-widest text-navy-soft mb-3">პროექტების მართვა ჩემთვის ნიშნავს</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm md:text-base text-ink">
              {[
                "იდეების რეალობად ქცევას",
                "ქაოსში სტრუქტურის შექმნას",
                "ადამიანების გაძლიერებას",
                "სისტემების აშენებას, რომლებიც რეალურ შედეგს ქმნის",
              ].map((x) => (
                <li key={x} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--mint)" }} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {PILLARS.map((p) => (
              <div key={p.t} className="surface-card p-5 hover:-translate-y-0.5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full font-black border" style={{ background: "var(--mint-soft)", color: "var(--navy-deep)", borderColor: "var(--mint)" }}>●</span>
                  <h3 className="font-extrabold text-base md:text-lg text-ink" dangerouslySetInnerHTML={{ __html: p.t }} />
                </div>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed" dangerouslySetInnerHTML={{ __html: p.d }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
