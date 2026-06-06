const QUOTES = [
  {
    text: "ნანას ტრენინგმა გვიჩვენა, რომ პროექტის მართვა შეიძლება იყოს მარტივი, თუ სწორი სტრუქტურა გაქვს. PMP®-ის მომზადება პირველი ცდით ჩავაბარეთ.",
    name: "თამარ ბერიძე",
    role: "Senior Project Manager",
    org: "IT კომპანია",
  },
  {
    text: "PMO ჩამოვაყალიბეთ ნანას მხარდაჭერით. დღეს კომპანიის ხელმძღვანელობა პროექტებს ერთ dashboard-ზე ხედავს — და გადაწყვეტილებები სწრაფდება.",
    name: "გიორგი მამულაშვილი",
    role: "COO",
    org: "მსხვილი კერძო კომპანია",
  },
  {
    text: "EU პროექტი ჩავაბარეთ ვადაში და ბიუჯეტში — ანგარიშგების სტრუქტურის წყალობით, რომელიც ნანამ დაგვიხატა. დონორი კმაყოფილი დარჩა.",
    name: "ლანა ჯაფარიძე",
    role: "Program Director",
    org: "NGO",
  },
  {
    text: "კორპორატიული ტრენინგი ჩატარდა ჩვენი 18-კაციანი გუნდისთვის. ენა, რომელზეც ვლაპარაკობთ პროექტებზე, ერთიანდა — ეს ფასდაუდებელია.",
    name: "ნიკა კვარაცხელია",
    role: "Head of Operations",
    org: "Logistics",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">კლიენტთა შეფასებები</span>
          <h2 className="heading-lg mt-4 text-balance">
            ხმები იმათგან, ვინც <span className="text-mint">პროექტი დაამთავრა</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {QUOTES.map((q) => (
            <figure key={q.name} className="surface-card p-7 md:p-9 relative">
              <span className="absolute top-5 right-6 text-6xl leading-none text-mint/30 font-serif">”</span>
              <blockquote className="text-base md:text-lg leading-relaxed text-foreground/90">
                {q.text}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/5 flex items-center gap-4">
                <span className="h-11 w-11 rounded-full bg-gradient-to-br from-mint to-azure inline-flex items-center justify-center font-black text-navy-deep">
                  {q.name.charAt(0)}
                </span>
                <div>
                  <p className="font-extrabold text-sm">{q.name}</p>
                  <p className="text-xs text-foreground/65">{q.role} · {q.org}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
