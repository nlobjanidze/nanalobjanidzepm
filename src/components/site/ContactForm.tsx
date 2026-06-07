import { useState } from "react";

const INTERESTS = [
  "კონსულტაცია",
  "ტრენინგი / კურსი",
  "PMO დანერგვა",
  "გრანტების მართვა",
  "კორპორატიული ტრენინგი",
  "მენტორინგი",
  "სხვა",
];

const TO_EMAIL = "nanalobjanidze.pm@gmail.com";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState(INTERESTS[0]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const org = String(fd.get("org") ?? "");
    const message = String(fd.get("message") ?? "");
    const subject = `ვებსაიტიდან: ${interest} — ${name}`;
    const body = [
      `სახელი: ${name}`,
      `ელფოსტა: ${email}`,
      `ტელეფონი: ${phone}`,
      `ორგანიზაცია: ${org}`,
      `დაინტერესება: ${interest}`,
      "",
      "შეტყობინება:",
      message,
    ].join("\n");
    window.location.href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-y bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">დაკავშირება</span>
          <h2 className="heading-lg mt-4 text-balance">
            დავიწყოთ <span className="text-navy">საუბრით.</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base md:text-lg">
            შეავსე ფორმა — 24 საათში დაგიკავშირდები. პირველი 30-წუთიანი
            დიაგნოსტიკური ზარი — უფასოა.
          </p>

          <div className="mt-8 space-y-3">
            {[
              { l: "ელფოსტა", v: TO_EMAIL, href: `mailto:${TO_EMAIL}` },
              { l: "ტელეფონი", v: "+995 599 18 36 35", href: "tel:+995599183635" },
              { l: "LinkedIn", v: "linkedin.com/in/nana-lobjanidze", href: "https://www.linkedin.com/in/nana-lobjanidze/" },
              { l: "Facebook", v: "facebook.com/nanuka.lobjanidze.7", href: "https://www.facebook.com/nanuka.lobjanidze.7/" },
              { l: "Instagram", v: "@lobjanidzenanukaa", href: "https://www.instagram.com/lobjanidzenanukaa" },
            ].map((c) => (
              <a
                key={c.l}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block surface-card px-5 py-4 hover:border-navy/30 hover:-translate-y-0.5"
              >
                <p className="text-[10px] uppercase tracking-widest font-black" style={{ color: "var(--navy-soft)" }}>{c.l}</p>
                <p className="mt-1 font-bold text-sm md:text-base text-ink break-all">{c.v}</p>
              </a>
            ))}
          </div>
        </div>

        <form className="lg:col-span-7 surface-card p-7 md:p-10" onSubmit={handleSubmit}>
          {sent ? (
            <div className="text-center py-12">
              <div
                className="mx-auto h-14 w-14 rounded-full inline-flex items-center justify-center font-black text-2xl"
                style={{ background: "var(--mint)", color: "var(--navy-deep)" }}
              >
                ✓
              </div>
              <h3 className="mt-5 heading-md">გმადლობთ!</h3>
              <p className="mt-2 text-ink-soft">
                შენი ფოსტის კლიენტი გაიხსნა — დაადასტურე გაგზავნა. 24 საათში დაგიკავშირდები.
              </p>
            </div>
          ) : (
            <>
              <h3 className="heading-md">დაჯავშნე უფასო კონსულტაცია</h3>
              <p className="mt-2 text-sm text-ink-soft">30 წუთი · გაირკვევა შენი მიზნები და მომდევნო ნაბიჯები</p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                <Field label="სახელი და გვარი" name="name" required />
                <Field label="ელფოსტა" name="email" type="email" required />
                <Field label="ტელეფონი" name="phone" />
                <Field label="ორგანიზაცია (არასავალდებულო)" name="org" />
              </div>

              <div className="mt-5">
                <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: "var(--navy-soft)" }}>დაინტერესება</p>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setInterest(i)}
                      className="px-4 py-2 rounded-full text-sm font-semibold border transition"
                      style={
                        interest === i
                          ? { background: "var(--navy-deep)", color: "white", borderColor: "var(--navy-deep)" }
                          : { background: "white", borderColor: "var(--line)", color: "var(--ink)" }
                      }
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-[11px] font-black uppercase tracking-widest mb-2" style={{ color: "var(--navy-soft)" }}>
                  მოგვწერე შენი მიზნის შესახებ
                </label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={1000}
                  className="w-full rounded-xl bg-white border border-line px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 transition"
                  style={{ borderColor: "var(--line)" }}
                  placeholder="რა გამოწვევაა შენი გუნდის წინაშე?"
                />
              </div>

              <button
                type="submit"
                className="mt-7 w-full sm:w-auto inline-flex items-center justify-center rounded-full px-7 py-4 font-extrabold transition"
                style={{ background: "var(--mint)", color: "var(--navy-deep)", boxShadow: "var(--shadow-mint)" }}
              >
                გაგზავნა →
              </button>
              <p className="mt-3 text-xs text-ink-soft/80">
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
      <label htmlFor={name} className="block text-[11px] font-black uppercase tracking-widest mb-2" style={{ color: "var(--navy-soft)" }}>
        {label}
        {required && <span className="ml-0.5" style={{ color: "var(--mint)" }}>*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-xl bg-white border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 transition"
      />
    </div>
  );
}
