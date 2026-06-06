import { useState } from "react";

const INTERESTS = ["კონსულტაცია", "PMP® Prep", "Agile", "კორპორატიული ტრენინგი", "PMO დანერგვა", "სხვა"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState(INTERESTS[0]);

  return (
    <section id="contact" className="section-y">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">დაკავშირება</span>
          <h2 className="heading-lg mt-4 text-balance">
            დავიწყოთ <span className="text-mint">საუბრით.</span>
          </h2>
          <p className="mt-4 text-foreground/75 text-base md:text-lg">
            შეავსე ფორმა — 24 საათში დაგიკავშირდები. პირველი 30-წუთიანი
            დიაგნოსტიკური ზარი — უფასოა.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { l: "ელფოსტა", v: "nana@lobjanidze.ge", href: "mailto:nana@lobjanidze.ge" },
              { l: "ტელეფონი", v: "+995 555 00 00 00", href: "tel:+995555000000" },
              { l: "მდებარეობა", v: "თბილისი, საქართველო" },
              { l: "LinkedIn", v: "linkedin.com/in/nana-lobjanidze", href: "#" },
            ].map((c) => (
              <a
                key={c.l}
                href={c.href || "#"}
                className="block surface-card px-5 py-4 hover:border-mint/40 transition"
              >
                <p className="text-[11px] uppercase tracking-widest font-bold text-mint">{c.l}</p>
                <p className="mt-1 font-semibold text-sm md:text-base">{c.v}</p>
              </a>
            ))}
          </div>
        </div>

        <form
          className="lg:col-span-7 surface-card p-7 md:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="mx-auto h-14 w-14 rounded-full bg-mint text-navy-deep inline-flex items-center justify-center font-black text-2xl">✓</div>
              <h3 className="mt-5 heading-md">გმადლობთ!</h3>
              <p className="mt-2 text-foreground/75">თქვენი მოთხოვნა მიღებულია. 24 საათში დაგიკავშირდები.</p>
            </div>
          ) : (
            <>
              <h3 className="heading-md">დაჯავშნე უფასო კონსულტაცია</h3>
              <p className="mt-2 text-sm text-foreground/65">30 წუთი · გაირკვევა შენი მიზნები და მომდევნო ნაბიჯები</p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                <Field label="სახელი და გვარი" name="name" required />
                <Field label="ელფოსტა" name="email" type="email" required />
                <Field label="ტელეფონი" name="phone" />
                <Field label="ორგანიზაცია (არასავალდებულო)" name="org" />
              </div>

              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-widest text-mint mb-3">დაინტერესება</p>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setInterest(i)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                        interest === i
                          ? "bg-mint text-navy-deep border-mint"
                          : "border-white/15 text-foreground/80 hover:border-mint/50"
                      }`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-xs font-bold uppercase tracking-widest text-foreground/65 mb-2">
                  მოგვწერე შენი მიზნის შესახებ
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30 transition"
                  placeholder="რა გამოწვევაა შენი გუნდის წინაშე?"
                />
              </div>

              <button
                type="submit"
                className="mt-7 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-mint px-7 py-4 font-extrabold text-navy-deep hover:bg-mint-bright transition shadow-[var(--shadow-mint)]"
              >
                გაგზავნა →
              </button>
              <p className="mt-3 text-xs text-foreground/55">
                შენი მონაცემები გამოყენებული იქნება მხოლოდ ჩვენი კომუნიკაციისთვის.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold uppercase tracking-widest text-foreground/65 mb-2">
        {label}{required && <span className="text-mint ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30 transition"
      />
    </div>
  );
}
