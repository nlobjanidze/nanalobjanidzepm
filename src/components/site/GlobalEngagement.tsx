import pmdaySpeaking from "@/assets/pmday-speaking.asset.json";
import pmdayKeynote from "@/assets/pmday-keynote.asset.json";
import ipmDay from "@/assets/ipm-day-2025.asset.json";
import sageTalk from "@/assets/sage-talk.asset.json";

const INTERNATIONAL = [
  {
    year: "2026",
    title: "Agile Forum 2026 — ორგანიზატორი",
    desc: "PMI Galicia Spain Chapter-ის გლობალური ონლაინ ღონისძიება 14 PMI Chapter-ის მონაწილეობით.",
    tag: "Global",
  },
  {
    year: "2025",
    title: "Eastern Europe's First Virtual PM Summit — ორგანიზატორი",
    desc: "5 ქვეყნის PMI Chapter-ის გაერთიანება: საქართველო, სომხეთი, ყაზახეთი, ლიტვა, უკრაინა.",
    tag: "Regional",
  },
  {
    year: "2026",
    title: "Project Management Without Borders — სპიკერი & PM",
    desc: "საერთაშორისო ვებინარი UNKLESA-სთან პარტნიორობით — „Aligning Project Communication with Corporate Culture“.",
    tag: "International",
  },
  {
    year: "2025",
    title: "NATO–Georgia Professional Development Program",
    desc: "PMI Tbilisi-ს მხრიდან ორგანიზატორი — ნატოს გუნდთან ერთობლივი შეხვედრა.",
    tag: "NATO",
  },
  {
    year: "2025",
    title: "UN House — ახალი ლიდერების შეხვედრა",
    desc: "ბრიტანეთის საელჩოსა და Innovations and Reforms Center-თან ერთობლივი ღონისძიება.",
    tag: "UN",
  },
  {
    year: "2024",
    title: "Winter School on Public Administration Reform",
    desc: "UNDP Georgia · ბორჯომი — 5-დღიანი ინტენსიური სკოლა საჯარო მმართველობის რეფორმაზე.",
    tag: "UNDP",
  },
];

const SPEAKING = [
  {
    date: "27 მაისი 2026",
    org: "კავკასიის საერთაშორისო უნივერსიტეტი",
    title: "საჯარო ლექცია — „პროექტების მენეჯერი: მითები, რეალობა და შენი შანსი ამ პროფესიაში“",
    image: pmdayKeynote.url,
  },
  {
    date: "14 მაისი 2026",
    org: "PMI Tbilisi × IIBA Georgia",
    title: "PM or BA? — ერთობლივი ვებინარი თინათინ პაპაშვილთან ერთად",
    image: pmdaySpeaking.url,
  },
  {
    date: "9 მაისი 2026",
    org: "SAGE Georgia",
    title: "ტრენერი — „Who Says What, to Whom, and How — მარკეტინგული კომუნიკაცია პროექტებში“",
    image: sageTalk.url,
  },
  {
    date: "12 ნოემბერი 2024",
    org: "სულხან-საბა ორბელიანის უნივერსიტეტი",
    title: "Workshop — „პროექტის მართვა და საპროექტო განაცხადის შედგენა“",
    image: null,
  },
];

const EVENTS = [
  {
    date: "6 ნოემბერი 2025",
    title: "IPM Day 2025 - პროექტ-მენეჯერი & მოდერატორი",
    desc: "პროექტის მართვის საერთაშორისო დღე - PMI თბილისის ყოველწლიური ფლაგმანი ღონისძიება, რომელიც 2025 წელს თემით „Project Horizon“ გაიმართა Holiday Inn Tbilisi-ში და 260+ პროფესიონალი, სტუდენტი და ინდუსტრიის ლიდერი შეკრიბა. როგორც პროექტის მენეჯერმა, ვუძღვებოდი ღონისძიების დაგეგმვას, ბიუჯეტისა და გრაფიკის კონტროლს, პარტნიორებთან და დაინტერესებულ მხარეებთან კოორდინაციას, სპიკერების შერჩევასა და მომზადებას, Exhibit Hall-ის (20-25 სტენდი), ნეთვორქინგისა და გათამაშებების ორგანიზებას. მოდერატორის როლში ვმართავდი დღის წესრიგს და აუდიტორიის ჩართულობას. მთავარი სპიკერები: Mohammed Gad (TDS-ის გენერალური დირექტორი) - „PM Beyond Borders: Leading Global Projects in a Diverse, Disruptive World“ და Ilia Revia, PMP® - „Future Fast Forward: Aligning Project Management with Organizational Strategy for Rapid Growth“. ღონისძიება ეროვნულ ტელევიზიაშიც გაშუქდა.",
    image: ipmDay.url,
  },
  {
    date: "2025",
    title: "Annual General Assembly 2025 - მოდერატორი",
    desc: "PMI Tbilisi, Georgia Chapter-ის წლიური საერთო შეკრება - წარმომადგენლობის მმართველობის მთავარი შემაჯამებელი ღონისძიება, რომელმაც 100+ წევრი და პროფესიონალი გააერთიანა. შეხვედრაზე განიხილეს წლიური შედეგები, სტრატეგიული მიმართულებები და საორგანიზაციო გადაწყვეტილებები. მოდერატორის როლში ვუზრუნველყოფდი ღონისძიების სრულ კოორდინაციას, დღის წესრიგის წარმართვას, სესიებსა და დისკუსიებს შორის დროის მართვას და 100+ მონაწილის აქტიურ ჩართულობას. მოწვეული სპიკერები: Pablo Lledó - PMI Global-ის Board of Directors-ის წევრი, თემით „პროექტის წარმატება: ღირებულების შექმნა, გავლენის მიღწევა“, და გია კაპანაძე - Flutter-ის CIO და PMI საქართველოს წარმომადგენლობის პრეზიდენტი (2026 წლიდან), თემით „Beyond Delivery - მიწოდების მიღმა“.",
    image: agm2025.url,
  },
];

export function GlobalEngagement() {
  return (
    <section id="engagement" className="section-y bg-surface">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">საერთაშორისო ჩართულობა</span>
          <h2 className="heading-lg mt-4 text-balance">
            გლობალური მონაწილეობა, <span className="text-navy">სპიკერობა და მედია</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base md:text-lg">
            PMI-ის გლობალური ინიციატივები, საერთაშორისო პარტნიორობები, საუნივერსიტეტო
            ლექციები, ივენთ-მენეჯმენტი და მედია-აქტივობები.
          </p>
        </div>

        {/* International */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-black text-navy-deep">საერთაშორისო მონაწილეობა & ლიდერობა</h3>
          <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INTERNATIONAL.map((i) => (
              <article key={i.title} className="surface-card p-6 hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: "var(--navy-deep)", color: "white" }}
                  >
                    {i.tag}
                  </span>
                  <span className="text-xs font-black tabular-nums" style={{ color: "var(--navy)" }}>{i.year}</span>
                </div>
                <h4 className="mt-4 font-extrabold text-ink leading-tight">{i.title}</h4>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{i.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Speaking */}
        <div className="mt-14">
          <h3 className="text-xl md:text-2xl font-black text-navy-deep">სპიკერობა & საუნივერსიტეტო ლექციები</h3>
          <div className="mt-5 grid md:grid-cols-2 gap-5">
            {SPEAKING.map((s) => (
              <article key={s.title} className="surface-card overflow-hidden hover:-translate-y-0.5 flex flex-col">
                {s.image && (
                  <div className="aspect-[16/10] overflow-hidden bg-line">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-black uppercase tracking-widest text-navy-soft">{s.org}</p>
                    <span className="text-xs font-black tabular-nums" style={{ color: "var(--navy)" }}>{s.date}</span>
                  </div>
                  <h4 className="mt-2 font-extrabold text-ink leading-tight">{s.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="mt-14">
          <h3 className="text-xl md:text-2xl font-black text-navy-deep">ივენთ-მენეჯმენტი</h3>
          <div className="mt-5 grid md:grid-cols-2 gap-5">
            {EVENTS.map((e) => (
              <article key={e.title} className="surface-card overflow-hidden hover:-translate-y-0.5 flex flex-col">
                {e.image && (
                  <div className="aspect-[16/9] overflow-hidden bg-line">
                    <img src={e.image} alt={e.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs font-black tabular-nums" style={{ color: "var(--navy)" }}>{e.date}</span>
                  <h4 className="mt-2 font-extrabold text-ink leading-tight">{e.title}</h4>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{e.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Media */}
        <div className="mt-14">
          <h3 className="text-xl md:text-2xl font-black text-navy-deep">მედია & საჯარო გამოჩენა</h3>
          <a
            href="https://www.youtube.com/watch?v=7WEBNNZAWdE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block surface-card p-6 md:p-7 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-navy-soft">Euronews Georgia · ნოემბერი 2025</p>
                <h4 className="mt-2 font-extrabold text-ink leading-tight">
                  Euronews Georgia — IPM Day-ის გაშუქება ეროვნულ ტელევიზიაზე
                </h4>
                <p className="mt-2 text-sm text-ink-soft">PMI Tbilisi-ის IPM Day 2025 — ეთერი Euronews Georgia-ზე.</p>
              </div>
              <span className="shrink-0 text-sm font-bold text-navy">YouTube →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
