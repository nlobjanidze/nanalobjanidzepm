const PILLARS = [
  { t: "PMP® სერტიფიცირებული", d: "Project Management Institute · 2024–2027" },
  { t: "Agile · Waterfall · Hybrid", d: "სამივე მეთოდოლოგია — სიტუაციის შესაბამისად." },
  { t: "საერთაშორისო დონორები", d: "EU, UNDP, GIZ, იაპონიის საელჩო, Slovak ODA." },
  { t: "ლიდერობა &amp; განვითარება", d: "ტრენინგი, მენტორინგი, ორგანიზაციული გაძლიერება." },
];

export function About() {
  return (
    <section id="about" className="section-y relative bg-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">ჩემს შესახებ</span>
          <h2 className="heading-lg mt-4 text-balance">
            პროექტის მართვა — <span className="text-navy">ადამიანებისა და ღირებულების სწორი დაკავშირება</span>
          </h2>
        </div>

        <div className="mt-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
          {/* LEFT — narrative */}
          <div>
            <div className="space-y-5 text-ink-soft text-base md:text-[17px] leading-[1.75]">
              <p>
                მე ვარ ნანა ლობჯანიძე — PMP® სერტიფიცირებული პროექტების მენეჯერი,
                კონსულტანტი, ტრენერი და მენტორი. მრავალწლიანი გამოცდილება მაქვს პროექტების,
                გუნდებისა და სტრატეგიული ინიციატივების მართვაში — როგორც კერძო, ისე საჯარო
                და საერთაშორისო სექტორში.
              </p>
              <div>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-navy-soft">მიდგომა</h3>
                <p className="mt-2">
                  ვმუშაობ Agile, Waterfall და Hybrid მეთოდოლოგიებით და მჯერა, რომ წარმატებული
                  პროექტი მხოლოდ პროცესების მართვა არ არის — ეს არის ადამიანების, კომუნიკაციისა
                  და ღირებულების სწორად დაკავშირება.
                </p>
              </div>
              <div>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-navy-soft">პორტფელი</h3>
                <p className="mt-2">
                  ჩემი პროექტების პორტფელი მოიცავს მუნიციპალური განვითარების ინიციატივებს,
                  საერთაშორისოდ დაფინანსებულ პროექტებს (EU, UNDP, GIZ, იაპონიის საელჩო და სხვ.),
                  გრანტების კონკურსებს, ხოლო ამჟამად — სტრატეგიულ, საგანმანათლებლო და მარკეტინგულ
                  პროექტებს ორგანიზაციულ დონეზე.
                </p>
              </div>
            </div>

            <div className="mt-7 surface-soft p-5 md:p-6">
              <p className="text-[11px] font-black uppercase tracking-widest text-navy-soft mb-3">პროექტების მართვა ჩემთვის ნიშნავს</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm md:text-base text-ink">
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
          </div>

          {/* RIGHT — pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 items-stretch">
            {PILLARS.map((p) => (
              <div key={p.t} className="surface-card p-5 hover:-translate-y-0.5 h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-black border" style={{ background: "var(--mint-soft)", color: "var(--navy-deep)", borderColor: "var(--mint)" }}>●</span>
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
