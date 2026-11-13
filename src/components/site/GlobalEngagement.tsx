import { useLanguage } from "@/lib/LanguageContext";
import { Bullet } from "./Bullet";
import ipmDay from "@/assets/ipm-day-2025.jpg";
import agm2025 from "@/assets/agm-2025.jpg";
import ciuLecture from "@/assets/ciu-lecture.jpeg";
import pmOrBa from "@/assets/pm-or-ba.jpg";
import sageTraining from "@/assets/sage-training.jpg";
import ssuWorkshop from "@/assets/ssu-workshop.jpg";

const INTERNATIONAL = [
  {
    year: "2026",
    title: "Agile Forum 2026 - ორგანიზატორი",
    desc: "PMI Galicia Spain Chapter-ის გლობალური ონლაინ ღონისძიება 14 PMI Chapter-ის მონაწილეობით.",
    tag: "Global",
  },
  {
    year: "2025",
    title: "Eastern Europe's First Virtual PM Summit - ორგანიზატორი",
    desc: "5 ქვეყნის PMI Chapter-ის გაერთიანება: საქართველო, სომხეთი, ყაზახეთი, ლიტვა, უკრაინა.",
    tag: "Regional",
  },
  {
    year: "2026",
    title: "Project Management Without Borders - სპიკერი & PM",
    desc: "საერთაშორისო ვებინარი UNKLESA-სთან პარტნიორობით - „Aligning Project Communication with Corporate Culture“.",
    tag: "International",
  },
  {
    year: "2025",
    title: "NATO–Georgia Professional Development Program",
    desc: "PMI Tbilisi-ს მხრიდან ორგანიზატორი - ნატოს გუნდთან ერთობლივი შეხვედრა.",
    tag: "NATO",
  },
  {
    year: "2025",
    title: "UN House - ახალი ლიდერების შეხვედრა",
    desc: "ბრიტანეთის საელჩოსა და Innovations and Reforms Center-თან ერთობლივი ღონისძიება.",
    tag: "UN",
  },
  {
    year: "2024",
    title: "Winter School on Public Administration Reform",
    desc: "UNDP Georgia · ბორჯომი - 5-დღიანი ინტენსიური სკოლა საჯარო მმართველობის რეფორმაზე.",
    tag: "UNDP",
  },
];

const SPEAKING = [
  {
    date: "27 მაისი 2026",
    org: "კავკასიის საერთაშორისო უნივერსიტეტი",
    title: "საჯარო ლექცია - „პროექტების მენეჯერი: მითები, რეალობა და შენი შანსი ამ პროფესიაში“",
    desc:
      "ლექცია კავკასიის საერთაშორისო უნივერსიტეტის ბიზნესისა და ტექნოლოგიების ფაკულტეტის ორგანიზებით გაიმართა. განვიხილეთ პროექტების მენეჯერის პროფესიის რეალური სპეციფიკა, გავრცელებული მითები და შრომით ბაზარზე არსებული შესაძლებლობები, ასევე ის უნარები და კომპეტენციები, რომლებიც კარიერის დასაწყებად და განვითარებისთვისაა საჭირო. სტუდენტებს გავუზიარე საკუთარი პროფესიული გამოცდილება და პრაქტიკული რეკომენდაციები. შეხვედრა ინტერაქციულ ფორმატში წარიმართა და კითხვა-პასუხის სესიით დასრულდა სტუდენტებთან და აკადემიურ პერსონალთან.",
    image: ciuLecture,
    fit: "cover" as const,
    link: "https://www.facebook.com/share/p/183FsALfjg/",
  },
  {
    date: "14 მაისი 2026",
    org: "PMI Tbilisi × IIBA Georgia",
    title: "PM or BA: Where Do I Begin? - A Starter Guide to Two Essential Roles",
    desc:
      "PMI თბილისი, საქართველოს წარმომადგენლობისა და IIBA საქართველოს წარმომადგენლობის ერთობლივი ვებინარი, სადაც ერთ-ერთი სპიკერი ვიყავი თინათინ პაპაშვილთან ერთად. ღონისძიება დამწყებ და მოქმედ პროფესიონალებს ეხმარებოდა პროექტების მართვისა და ბიზნეს ანალიზის მიმართულებებს შორის განსხვავებებისა და კავშირების გააზრებაში. განვიხილეთ ორივე პროფესიის როლი, პასუხისმგებლობები, კარიერული შესაძლებლობები და განვითარების გზები. ვებინარის მიზანი მონაწილეებისთვის ინფორმირებული კარიერული არჩევანის მხარდაჭერა იყო.",
    image: pmOrBa,
    fit: "contain" as const,
    link: null,
  },
  {
    date: "9 მაისი 2026",
    org: "SAGE Georgia",
    title: "ტრენერი - „Who Says What, to Whom, and How - მარკეტინგული კომუნიკაცია პროექტებში“",
    desc:
      "ტრენინგი SAGE 2026 Innovation & Entrepreneurship Championship-ის მოსამზადებელი პროგრამის ფარგლებში ჩავატარე და განკუთვნილი იყო ჩემპიონატში მონაწილე გუნდებისა და მენტორებისთვის. მთავარი თემა პროექტებში ეფექტური მარკეტინგული კომუნიკაცია იყო. მონაწილეებმა მიიღეს პრაქტიკული რეკომენდაციები მიზნობრივ აუდიტორიასთან კომუნიკაციის, შეტყობინებების ფორმირებისა და პროექტის ღირებულების ეფექტურად წარდგენის შესახებ. შეხვედრა რეალურ მაგალითებსა და პრაქტიკულ მიდგომებზე იყო ფოკუსირებული.",
    image: sageTraining,
    fit: "contain" as const,
    link: null,
  },
  {
    date: "12 ნოემბერი 2024",
    org: "სულხან-საბა ორბელიანის უნივერსიტეტი",
    title: "Workshop - „პროექტის მართვა და საპროექტო განაცხადის შედგენა“",
    desc:
      "ვორქშოპი PMI თბილისი, საქართველოს წარმომადგენლობასა და სულხან-საბა ორბელიანის უნივერსიტეტს შორის თანამშრომლობის ფარგლებში გაიმართა. მონაწილეებმა შეისწავლეს პროექტის მართვის ძირითადი ეტაპები და საპროექტო განაცხადის მომზადების პრაქტიკული პრინციპები, მათ შორის მიზნების, აქტივობებისა და ბიუჯეტის სწორად განსაზღვრის მიდგომები. სტუდენტები გაეცნენ პროექტების მართვის თანამედროვე პრაქტიკებსა და PMI-ის საქმიანობას. შეხვედრის მიზანი ახალგაზრდებისთვის პრაქტიკული ცოდნის გაზიარება და პროფესიული განვითარების ხელშეწყობა იყო.",
    image: ssuWorkshop,
    fit: "cover" as const,
    link: null,
  },
];

const EVENTS = [
  {
    date: "6 ნოემბერი 2025",
    title: "IPM Day 2025 - პროექტ-მენეჯერი & მოდერატორი",
    intro:
      "პროექტის მართვის საერთაშორისო დღე - PMI თბილისის ყოველწლიური ფლაგმანი ღონისძიება, რომელიც 2025 წელს თემით „Project Horizon“ გაიმართა Holiday Inn Tbilisi-ში და 260+ პროფესიონალი, სტუდენტი და ინდუსტრიის ლიდერი შეკრიბა.",
    roles: [
      "როგორც პროექტის მენეჯერმა, ვუძღვებოდი ღონისძიების დაგეგმვას",
      "ბიუჯეტისა და გრაფიკის კონტროლს",
      "პარტნიორებთან და დაინტერესებულ მხარეებთან კოორდინაციას",
      "სპიკერების შერჩევასა და მომზადებას",
      "Exhibit Hall-ის (20-25 სტენდი), ნეთვორქინგისა და გათამაშებების ორგანიზებას",
      "მოდერატორის როლში ვმართავდი დღის წესრიგს და აუდიტორიის ჩართულობას",
    ],
    highlights: [
      "მთავარი სპიკერი: Mohammed Gad (TDS-ის გენერალური დირექტორი) - „PM Beyond Borders: Leading Global Projects in a Diverse, Disruptive World“",
      "მთავარი სპიკერი: Ilia Revia, PMP® - „Future Fast Forward: Aligning Project Management with Organizational Strategy for Rapid Growth“",
      "ღონისძიება ეროვნულ ტელევიზიაშიც გაშუქდა",
    ],
    image: ipmDay,
  },
  {
    date: "2025",
    title: "Annual General Assembly 2025 - მოდერატორი",
    intro:
      "PMI Tbilisi, Georgia Chapter-ის წლიური საერთო შეკრება - წარმომადგენლობის მმართველობის მთავარი შემაჯამებელი ღონისძიება, რომელმაც 100+ წევრი და პროფესიონალი გააერთიანა. შეხვედრაზე განიხილეს წლიური შედეგები, სტრატეგიული მიმართულებები და საორგანიზაციო გადაწყვეტილებები.",
    roles: [
      "მოდერატორის როლში ვუზრუნველყოფდი ღონისძიების სრულ კოორდინაციას",
      "დღის წესრიგის წარმართვას",
      "სესიებსა და დისკუსიებს შორის დროის მართვას",
      "100+ მონაწილის აქტიურ ჩართულობას",
    ],
    highlights: [
      "მოწვეული სპიკერი: Pablo Lledó - PMI Global-ის Board of Directors-ის წევრი, თემით „პროექტის წარმატება: ღირებულების შექმნა, გავლენის მიღწევა“",
      "მოწვეული სპიკერი: ანრი ჯიქია - Flutter-ის CIO და PMI საქართველოს წარმომადგენლობის პრეზიდენტი (2026 წლიდან), თემით „Beyond Delivery - მიწოდების მიღმა“",
    ],
    image: agm2025,
  },
];

const INTERNATIONAL_EN = [["Agile Forum 2026 · Organizer", "Global online event hosted by PMI Galicia Spain Chapter, bringing together 14 PMI chapters."], ["Eastern Europe’s First Virtual PM Summit · Organizer", "A collaboration between PMI chapters in Georgia, Armenia, Kazakhstan, Lithuania and Ukraine."], ["Project Management Without Borders · Speaker & PM", "International webinar in partnership with UNKLESA: “Aligning Project Communication with Corporate Culture.”"], ["NATO–Georgia Professional Development Program", "Co-organized a meeting with the NATO team on behalf of PMI Tbilisi."], ["UN House · Emerging Leaders Meeting", "Joint event with the British Embassy and the Innovations and Reforms Center."], ["Winter School on Public Administration Reform", "UNDP Georgia · Borjomi · Five-day intensive program on public administration reform."]];
const SPEAKING_EN = [["27 May 2026", "Caucasus International University", "Public Lecture: Project Manager: Myths, Reality and Your Opportunity in the Profession", "An interactive lecture organized by the Faculty of Business and Technology at Caucasus International University. I discussed the realities of project management, common misconceptions, career opportunities and the skills needed to enter and grow in the profession. I shared practical advice and answered questions from students and faculty."], ["14 May 2026", "PMI Tbilisi × IIBA Georgia", "PM or BA: Where Do I Begin? A Starter Guide to Two Essential Roles", "I co-presented this joint PMI and IIBA Georgia webinar with Tinatin Papashvili. We explored the differences and connections between project management and business analysis, including responsibilities, career paths and professional development opportunities."], ["9 May 2026", "SAGE Georgia", "Trainer: Who Says What, to Whom, and How · Marketing Communication in Projects", "Delivered an interactive training session for teams and mentors preparing for the SAGE 2026 Innovation & Entrepreneurship Championship. The session covered target audiences, effective messaging and communicating project value through practical examples."], ["12 November 2024", "Sulkhan-Saba Orbeliani University", "Workshop: Project Management and Proposal Writing", "Facilitated a workshop in collaboration with PMI Tbilisi, Georgia Chapter. Participants explored project phases, proposal preparation, objectives, activities, budgets and contemporary project management practices."]];
const EVENTS_EN = [{"date": "6 November 2025", "title": "IPM Day 2025 · Project Manager & Moderator", "intro": "PMI Tbilisi’s flagship International Project Management Day event, themed “Project Horizon,” brought together 260+ professionals, students and industry leaders at Holiday Inn Tbilisi.", "roles": ["Led event planning as project manager", "Managed budget and schedule", "Coordinated partners and stakeholders", "Supported speaker selection and preparation", "Organized the exhibition hall, networking and prize draws", "Moderated the agenda and audience engagement"], "highlights": ["Keynote: Mohammed Gad, TDS General Manager, on leading global projects", "Keynote: Ilia Revia, PMP®, on aligning project management with organizational strategy", "Coverage on national television"]}, {"date": "2025", "title": "Annual General Assembly 2025 · Moderator", "intro": "PMI Tbilisi, Georgia Chapter’s annual governance gathering brought together more than 100 members and professionals to review results, strategic priorities and organizational decisions.", "roles": ["Coordinated the event as moderator", "Guided the agenda", "Managed timing across sessions and discussions", "Engaged more than 100 participants"], "highlights": ["Guest speaker Pablo Lledó, PMI Global Board of Directors, on project success and value creation", "Guest speaker Anri Jikia, Flutter CIO and incoming PMI Georgia Chapter President, on going beyond delivery"]}];
export function GlobalEngagement() {
  const { language } = useLanguage();
  const en = language === "en";
  const international = en ? INTERNATIONAL.map((v,i) => ({...v,title: INTERNATIONAL_EN[i][0],desc: INTERNATIONAL_EN[i][1]})) : INTERNATIONAL;
  const speaking = en ? SPEAKING.map((v,i) => ({...v,date:SPEAKING_EN[i][0],org:SPEAKING_EN[i][1],title:SPEAKING_EN[i][2],desc:SPEAKING_EN[i][3]})) : SPEAKING;
  const events = en ? EVENTS.map((v,i) => ({...v,...EVENTS_EN[i]})) : EVENTS;
  return (
    <section id="engagement" className="section-y bg-surface">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">{en ? "Global Engagement" : "საერთაშორისო ჩართულობა"}</span>
          <h2 className="heading-lg mt-4 text-balance">
            {en ? "Global Participation," : "გლობალური მონაწილეობა,"} <span className="text-navy">{en ? "Speaking & Media" : "სპიკერობა და მედია"}</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base md:text-lg">
            {en ? "Global PMI initiatives, international partnerships, university lectures, event management and media appearances." : "PMI-ის გლობალური ინიციატივები, საერთაშორისო პარტნიორობები, საუნივერსიტეტო ლექციები, ივენთ-მენეჯმენტი და მედია-აქტივობები."}
          </p>
        </div>

        {/* International */}
        <div className="mt-12">
          <h3 className="text-lg md:text-xl font-black text-navy-deep">{en ? "International Participation & Leadership" : "საერთაშორისო მონაწილეობა & ლიდერობა"}</h3>
          <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {international.map((i) => (
              <article key={i.title} className="surface-card p-6 hover:-translate-y-0.5 h-full">
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
        <div className="mt-12">
          <h3 className="text-lg md:text-xl font-black text-navy-deep">{en ? "Speaking & University Lectures" : "სპიკერობა & საუნივერსიტეტო ლექციები"}</h3>
          <div className="mt-5 grid md:grid-cols-2 gap-5">
            {speaking.map((s) => (
              <article key={s.title} className="surface-card overflow-hidden hover:-translate-y-0.5 flex flex-col h-full">
                {s.image && (
                  <div className={`aspect-[16/10] overflow-hidden bg-line ${s.fit === "contain" ? "p-3" : ""}`}>
                    <img
                      src={s.image}
                      alt={s.title}
                      className={`w-full h-full ${s.fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-500 hover:scale-[1.03]`}
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-navy-soft">{s.org}</p>
                    <span className="text-xs font-black tabular-nums" style={{ color: "var(--navy)" }}>{s.date}</span>
                  </div>
                  <h4 className="mt-2 font-extrabold text-ink leading-tight">{s.title}</h4>
                  <ul className="mt-3 space-y-2">
                    {s.desc.split(/(?<=\.)\s+/).filter(Boolean).map((line) => (
                      <li key={line} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
                        <Bullet />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  {s.link && (
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-fit text-sm font-bold text-navy hover:underline"
                    >
                      {en ? "View event →" : "იხილეთ ღონისძიება →"}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="mt-12">
          <h3 className="text-lg md:text-xl font-black text-navy-deep">{en ? "Event Management" : "ივენთ-მენეჯმენტი"}</h3>
          <div className="mt-5 grid md:grid-cols-2 gap-5 items-stretch">
            {events.map((e) => (
              <article key={e.title} className="surface-card overflow-hidden hover:-translate-y-0.5 flex flex-col h-full">
                {e.image && (
                  <div className="aspect-[16/9] overflow-hidden bg-line">
                    <img src={e.image} alt={e.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <span className="text-xs font-black tabular-nums" style={{ color: "var(--navy)" }}>{e.date}</span>
                    <h4 className="mt-2 font-extrabold text-ink leading-tight">{e.title}</h4>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">{e.intro}</p>
                  </div>
                  <div>
                    <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-navy-soft">{en ? "Responsibilities" : "პასუხისმგებლობები"}</p>
                    <ul className="mt-2 space-y-1.5">
                      {e.roles.map((r) => (
                        <li key={r} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
                          <Bullet />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-navy-soft">{en ? "Highlights & Speakers" : "მიღწევები & სპიკერები"}</p>
                    <ul className="mt-2 space-y-1.5">
                      {e.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
                          <Bullet tone="navy" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>


        {/* Media */}
        <div className="mt-12">
          <h3 className="text-lg md:text-xl font-black text-navy-deep">{en ? "Media & Public Appearances" : "მედია & საჯარო გამოჩენა"}</h3>
          <a
            href="https://www.youtube.com/watch?v=7WEBNNZAWdE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block surface-card p-6 md:p-7 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-navy-soft">{en ? "Euronews Georgia · November 2025" : "Euronews Georgia · ნოემბერი 2025"}</p>
                <h4 className="mt-2 font-extrabold text-ink leading-tight">
                  {en ? "Euronews Georgia · National Coverage of IPM Day" : "Euronews Georgia - IPM Day-ის გაშუქება ეროვნულ ტელევიზიაზე"}
                </h4>
                <p className="mt-2 text-sm text-ink-soft">{en ? "PMI Tbilisi’s IPM Day 2025 featured on Euronews Georgia." : "PMI Tbilisi-ის IPM Day 2025 - ეთერი Euronews Georgia-ზე."}</p>
              </div>
              <span className="shrink-0 text-sm font-bold text-navy">YouTube →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
