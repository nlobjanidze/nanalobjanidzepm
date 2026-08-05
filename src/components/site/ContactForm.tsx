import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Linkedin, Facebook, Instagram, Youtube, Globe } from "lucide-react";

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

/**
 * EmailJS კონფიგურაცია — ჩაანაცვლე შენი მონაცემებით (emailjs.com → Account / Email Services / Email Templates)
 */
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const SOCIALS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nana-lobjanidze/", Icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/nanuka.lobjanidze.7/", Icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/lobjanidzenanukaa", Icon: Instagram },
  { name: "YouTube", href: "#", Icon: Youtube },
  { name: "PMI", href: "https://pmi.ge/", Icon: Globe },
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [interest, setInterest] = useState(INTERESTS[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const org = String(fd.get("org") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || !email) {
      setError("გთხოვ შეავსო სახელი და ელფოსტა.");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: TO_EMAIL,
          name,
          email,
          subject: interest,
          phone,
          organization: org,
          message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setSent(true);
    } catch {
      setError("გაგზავნა ვერ მოხერხდა. სცადე ხელახლა ან მომწერე პირდაპირ ელფოსტაზე.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-y bg-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">დაკავშირება</span>
            <h2 className="heading-lg mt-4 text-balance">
              დავიწყოთ <span className="text-navy">საუბრით.</span>
            </h2>
            <p className="mt-4 text-ink-soft text-base md:text-lg leading-relaxed">
              თუ გსურთ ვისაუბროთ პროექტების მართვაზე, ტრენინგებზე, პროფესიულ განვითარებაზე,
              ღონისძიებებზე, სპიკერობაზე ან თანამშრომლობის შესაძლებლობებზე - სიამოვნებით მოგისმენთ.
            </p>
            <p className="mt-3 text-ink-soft text-base leading-relaxed">
              მომწერეთ და ერთად განვიხილოთ, როგორ შეიძლება თქვენი იდეის, პროექტის ან
              ინიციატივის მხარდაჭერა. ღია ვარ როგორც ორგანიზაციებთან, ისე ცალკეულ
              პროფესიონალებთან პარტნიორობისთვის.
            </p>

            <div className="mt-8 space-y-3">
              {[
                { l: "ელფოსტა", v: TO_EMAIL, href: `mailto:${TO_EMAIL}` },
                { l: "ტელეფონი", v: "+995 599 18 36 35", href: "tel:+995599183635" },
              ].map((c) => (
                <a
                  key={c.l}
                  href={c.href}
                  className="block surface-card px-5 py-4 hover:border-navy/30 hover:-translate-y-0.5"
                >
                  <p className="text-[10px] uppercase tracking-widest font-black" style={{ color: "var(--navy-soft)" }}>{c.l}</p>
                  <p className="mt-1 font-bold text-sm md:text-base text-ink break-all">{c.v}</p>
                </a>
              ))}
            </div>
          </div>

          <form className="lg:col-span-7 surface-card p-7 md:p-9" onSubmit={handleSubmit}>
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
                  გმადლობთ შეტყობინებისთვის. პასუხს უმოკლეს დროში დაგიბრუნებთ.
                </p>
              </div>
            ) : (
              <>
                <h3 className="heading-md">დაჯავშნე უფასო კონსულტაცია</h3>
                <p className="mt-2 text-sm text-ink-soft">30 წუთი · გაირკვევა შენი მიზნები და მომდევნო ნაბიჯები</p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
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

                {error && <p className="mt-4 text-sm font-semibold" style={{ color: "#c0392b" }}>{error}</p>}

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-6 w-full sm:w-auto inline-flex items-center justify-center rounded-full px-7 py-4 font-extrabold transition disabled:opacity-60"
                  style={{ background: "var(--mint)", color: "var(--navy-deep)", boxShadow: "var(--shadow-mint)" }}
                >
                  {sending ? "იგზავნება…" : "გაგზავნა →"}
                </button>
                <p className="mt-3 text-xs text-ink-soft/80">
                  შენი მონაცემები გამოყენებული იქნება მხოლოდ ჩვენი კომუნიკაციისთვის.
                </p>
              </>
            )}
          </form>
        </div>

        {/* Social icons */}
        <div className="mt-12 pt-8 border-t border-line flex flex-wrap items-center justify-center gap-4">
          {SOCIALS.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              className="h-12 w-12 rounded-full inline-flex items-center justify-center border border-line bg-white text-navy-deep transition hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
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
