import { useLanguage } from "@/lib/LanguageContext";
import { Bullet } from "./Bullet";
const PROJECTS = [
  {
    donor: "EU · M4EG",
    title: "ონის მუნიციპალიტეტის ეკონომიკური განვითარება ბიზნეს კლასტერების შექმნისა და ინვესტიციების მოზიდვის გზით",
    summary:
      "ევროკომისიის Mayors for Economic Growth Facility (M4EG) პროგრამის ფარგლებში დაფინანსებული ორწლიანი პროექტი, 352,000 ევროს ბიუჯეტით. მიზანი - ონის მუნიციპალიტეტის ეკონომიკური კონკურენტუნარიანობის გაძლიერება ბიზნეს კლასტერების განვითარებისა და ინვესტიციების მოზიდვის გზით. ჩემი როლი მოიცავდა პროექტის სრულ მართვას - დაგეგმვიდან განხორციელებამდე, დონორთან კომუნიკაციას, სუბ-გრანტების ადმინისტრირებას და დაინტერესებულ მხარეებთან კოორდინაციას.",
    outcomes: [
      "ტურიზმისა და კვების მრეწველობის ორი ბიზნეს კლასტერის ჩამოყალიბება, თითოეული 15+ MSME წევრით",
      "მუნიციპალური საინვესტიციო პროფილისა და საინვესტიციო ვებ-პლატფორმის შექმნა",
      "სუბ-გრანტირების გამჭვირვალე მექანიზმის დანერგვა კლასტერზე ორიენტირებული ინოვაციური ინიციატივებისთვის",
      "შესაძლებლობების განვითარების სემინარები MSME-ებისა და საჯარო მოხელეებისთვის",
      "გაძლიერებული საინვესტიციო მიმზიდველობა, ახალი დასაქმებისა და ბიზნეს ზრდის შესაძლებლობები",
    ],
    impact: "€352K · 30+ MSME",
    link: "https://eu4business.ge/projects/economic-development-of-oni-municipality-via-business-clusters-creation-and-investment-attraction/",
  },
  {
    donor: "GIZ · BMZ",
    title: "საქართველოში მდგრადი ურბანული განვითარება (SUD)",
    summary:
      "გერმანიის ფედერალური ეკონომიკური თანამშრომლობისა და განვითარების სამინისტროს (BMZ) დაფინანსებით და GIZ-ის მიერ განხორციელებული პროგრამა ონში, ბათუმსა და ზუგდიდში. ფოკუსი - ენერგოეფექტურობა, კლიმატისადმი მეგობრული ქალაქგეგმარება და ნარჩენების მართვა, საქართველოს ეროვნულ ურბანულ დღის წესრიგსა და SDG-ებთან შესაბამისობაში. ჩემი როლი მოიცავდა ადგილობრივი აქტივობების კოორდინაციას, პოლიტიკის შემუშავებაში მხარდაჭერას და მუნიციპალურ გუნდებთან მუშაობას.",
    outcomes: [
      "მუნიციპალური ენერგომართვის სისტემის (EMS) დანერგვა საჯარო შენობებში",
      "ენერგოეფექტურობის პოლიტიკისა და განხორციელების სტრატეგიების შემუშავება",
      "მუნიციპალური მოხელეების გადამზადება საინვესტიციო ბიუჯეტირებასა და კლიმატ-ადაპტურ დაგეგმვაში",
      "მოქალაქეთა ჩართულობაზე დაფუძნებული ქალაქგეგმარების სესიები და სემინარები",
    ],
    impact: "3 ქალაქი · SDG",
  },
  {
    donor: "Embassy of Japan · GGP",
    title: "საზოგადოებრივი ავტობუსის უზრუნველყოფა ონის მუნიციპალიტეტისთვის",
    summary:
      "იაპონიის მთავრობის „სახალხო დონეზე საგრანტო დახმარების“ (GGP) პროგრამის ფარგლებში დაფინანსებული ინფრასტრუქტურული პროექტი, რომელიც მიზნად ისახავდა 700-ზე მეტი სოფლის მაცხოვრებლისთვის საზოგადოებრივი ტრანსპორტის ხელმისაწვდომობის რადიკალურ გაუმჯობესებას. ჩემი პასუხისმგებლობა - პროექტის დაგეგმვა, დონორთან ურთიერთობა, შესყიდვების პროცესის მართვა და მდგრადი ოპერაციული მოდელის ჩამოყალიბება.",
    outcomes: [
      "საზოგადოებრივი ავტობუსის სისტემის ამოქმედება, რომელიც აკავშირებს რამდენიმე შორეულ სოფელს ქალაქის ცენტრთან",
      "700+ მოქალაქისთვის ჯანდაცვის, განათლებისა და მუნიციპალურ სერვისებზე გაუმჯობესებული ხელმისაწვდომობა",
      "მდგრადი ოპერაციული გეგმის შემუშავება ავტობუსის სერვისის გრძელვადიანი მართვისთვის",
      "სოციალური იზოლაციის შემცირება და ადგილობრივი მობილობის გაძლიერება",
    ],
    impact: "700+ ბენეფიციარი",
  },
  {
    donor: "UNDP · SDC · ADA",
    title: "მუნიციპალური ინვესტიციების ხელშეწყობის ინიციატივა",
    summary:
      "UNDP-ის, შვეიცარიისა და ავსტრიის განვითარების თანამშრომლობის მხარდაჭერით - მუნიციპალური საინვესტიციო პროფილის შექმნა და საინვესტიციო ფორუმის ჩატარება ადგილობრივი და უცხოური ინვესტორების მოზიდვის მიზნით. ჩემი როლი - შინაარსობრივი წარმართვა, ინვესტორებთან კომუნიკაცია და ფორუმის ორგანიზება.",
    outcomes: [
      "მუნიციპალური საინვესტიციო პროფილის შემუშავება ინვესტორებისთვის მკაფიო წარდგენით",
      "საინვესტიციო ფორუმის ჩატარება ადგილობრივი და უცხოური მხარეების მონაწილეობით",
      "ინვესტორებთან პირდაპირი კომუნიკაციისა და კონტაქტების არხების გახსნა",
    ],
    impact: "Invest · Municipal",
  },
  {
    donor: "UNDP",
    title: "SDG Localization Initiative",
    summary:
      "გაეროს მდგრადი განვითარების მიზნების (SDG) ლოკალიზაცია ონის მუნიციპალიტეტში - სტრატეგიის, სამოქმედო გეგმის და ანგარიშგების სისტემის შემუშავება 2030 წლის დღის წესრიგთან შესაბამისობაში. ვხელმძღვანელობდი პროცესს დაწყებიდან დანერგვამდე, დივერსიფიცირებული დაინტერესებული მხარეების ჩართულობით.",
    outcomes: [
      "8 პრიორიტეტული SDG მიზნისა და 18 ამოცანის იდენტიფიცირება",
      "მუნიციპალური SDG სტრატეგიისა და სამოქმედო გეგმის შემუშავება",
      "მონიტორინგისა და ანგარიშგების სისტემის დანერგვა პროგრესის თვალყურის სადევნებლად",
      "მტკიცებულებაზე დაფუძნებული და ინკლუზიური მმართველობის კულტურის გაძლიერება",
    ],
    impact: "SDG ჩარჩო",
  },
  {
    donor: "EU · Sub-grants",
    title: "ევროკავშირის სუბ-გრანტების მართვის გამოცდილება (M4EG)",
    summary:
      "M4EG კლასტერების განვითარების პროგრამის ფარგლებში - სუბ-გრანტების სრული ციკლის მართვა: შერჩევის კრიტერიუმების შემუშავებიდან მონიტორინგამდე და გავლენის შეფასებამდე. მუშაობა ხდებოდა ევროკავშირის მკაცრი ფინანსური და ანგარიშგების წესების სრული დაცვით.",
    outcomes: [
      "გამჭვირვალე შერჩევის კრიტერიუმებისა და პროცედურების შემუშავება და დანერგვა",
      "სუბ-გრანტების განაწილების ზედამხედველობა კლასტერების MSME-ებისთვის",
      "ევროკავშირის დაფინანსების წესებთან შესაბამისობის მონიტორინგი და ანგარიშგება",
      "ტექნიკური დახმარება მიმღებებისთვის განხორციელების ეტაპზე",
      "დაფინანსებული ინიციატივების გავლენისა და მდგრადობის შეფასება",
    ],
    impact: "EU Compliance",
  },
  {
    donor: "Slovak ODA",
    title: "სლოვაკეთის ოფიციალური განვითარების დახმარების პროექტები",
    summary:
      "სლოვაკეთის მთავრობის ოფიციალური განვითარების დახმარების (Slovak Aid) ფარგლებში მხარდაჭერილი ინფრასტრუქტურული და სპორტული ინიციატივები ონის მუნიციპალიტეტში. ფოკუსი - ადგილობრივი ინფრასტრუქტურის განახლება და ახალგაზრდებისთვის სპორტული პირობების გაუმჯობესება.",
    outcomes: [
      "ინფრასტრუქტურული განახლების პროექტების განხორციელება ადგილობრივ დონეზე",
      "სპორტული პირობებისა და ინვენტარის მხარდაჭერა თემისთვის",
      "ორმხრივი განვითარების თანამშრომლობის განმტკიცება საქართველოსა და სლოვაკეთს შორის",
    ],
    impact: "Infra · Sport",
  },
];


const PROJECTS_EN = [
{ title: "Economic Development of Oni Municipality through Business Clusters and Investment Attraction", summary: "An EU Mayors for Economic Growth (M4EG) two-year project with a \u20ac352,000 budget, designed to strengthen local competitiveness through business clusters and investment attraction. I managed planning, implementation, donor communication, subgrants and stakeholder coordination.", outcomes: ["Established tourism and food-industry clusters, each with more than 15 MSME members", "Created a municipal investment profile and online investment platform", "Introduced transparent subgrant procedures for innovative cluster initiatives", "Delivered capacity-building workshops for MSMEs and public officials", "Improved prospects for investment, employment and business growth"] },
{ title: "Sustainable Urban Development in Georgia (SUD)", summary: "A BMZ-funded, GIZ-implemented program in Oni, Batumi and Zugdidi focused on energy efficiency, climate-friendly urban planning and waste management. I coordinated local activities and supported municipal teams and policy development.", outcomes: ["Introduced municipal energy management systems in public buildings", "Supported energy-efficiency policies and implementation strategies", "Trained municipal staff in investment budgeting and climate-resilient planning", "Facilitated participatory urban planning workshops"] },
{ title: "Public Bus Service for Oni Municipality", summary: "A Japanese government Grassroots Grant Assistance (GGP) infrastructure initiative to improve transport access for more than 700 rural residents. I coordinated project planning, donor relations, procurement and sustainable operations.", outcomes: ["Launched bus services connecting remote villages with the municipal center", "Improved access to healthcare, education and public services for 700+ residents", "Developed a long-term operational plan for the service", "Reduced isolation and improved local mobility"] },
{ title: "Municipal Investment Promotion Initiative", summary: "Supported by UNDP and Swiss and Austrian development cooperation, this initiative produced a municipal investment profile and an investor forum. I coordinated content, investor outreach and event delivery.", outcomes: ["Developed a clear municipal investment profile for prospective investors", "Organized an investment forum with domestic and international participants", "Established direct investor communication channels"] },
{ title: "SDG Localization Initiative", summary: "Led the localization of the UN Sustainable Development Goals in Oni Municipality, including strategy, action planning and reporting aligned with the 2030 Agenda and informed by diverse stakeholders.", outcomes: ["Identified eight priority SDGs and 18 targets", "Developed a municipal SDG strategy and action plan", "Established monitoring and reporting processes", "Strengthened evidence-based and inclusive governance"] },
{ title: "EU Subgrant Management (M4EG)", summary: "Managed the complete subgrant cycle within the M4EG cluster-development program, from selection criteria to monitoring and impact assessment, in accordance with EU financial and reporting requirements.", outcomes: ["Developed transparent selection criteria and procedures", "Oversaw subgrant allocation to cluster MSMEs", "Monitored compliance with EU funding and reporting rules", "Provided implementation-stage support to recipients", "Assessed the impact and sustainability of funded initiatives"] },
{ title: "Slovak Official Development Assistance Projects", summary: "Local infrastructure and sports initiatives supported by Slovak development assistance, with a focus on improving community facilities and opportunities for young people.", outcomes: ["Delivered local infrastructure improvements", "Supported community sports facilities and equipment", "Strengthened bilateral development cooperation between Georgia and Slovakia"] }
];

export function Projects() {
  const { language } = useLanguage();
  const en = language === "en";
  const projects = en ? PROJECTS.map((p, i) => ({ ...p, ...PROJECTS_EN[i] })) : PROJECTS;
  return (
    <section id="projects" className="section-y bg-surface">
      <div className="container-x">
        <div className="max-w-4xl">
          <span className="eyebrow">{en ? "Selected Projects" : "განხორციელებული პროექტები"}</span>
          <h2 className="heading-lg mt-4 text-balance">
            {en ? "Delivered" : "განხორციელებული"} <span className="text-navy">{en ? "Projects" : "პროექტები"}</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base md:text-lg">
            {en ? "Years of experience collaborating with international donors, municipalities, businesses and local communities. Beyond funding and administration, these projects focused on creating lasting impact, new opportunities and sustainable results." : "მრავალწლიანი გამოცდილება საერთაშორისო დონორებთან, მუნიციპალიტეტებთან, კერძო სექტორთან და ადგილობრივ თემებთან მუშაობაში. თითოეული პროექტი მხოლოდ დაფინანსების მოზიდვა ან ადმინისტრირება არ ყოფილა - მიზანი იყო რეალური ცვლილებების, ახალი შესაძლებლობებისა და მდგრადი შედეგების შექმნა, რომელიც გრძელვადიანად რჩება თემისა და ორგანიზაციების სამსახურში."}
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {projects.map((p) => (
            <article key={p.title} className="surface-card p-6 md:p-8 flex flex-col hover:-translate-y-1 h-full">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{ background: "var(--navy-deep)", color: "white" }}
                >
                  {p.donor}
                </span>
                <span className="text-xs font-black tabular-nums" style={{ color: "var(--navy)" }}>{p.impact}</span>
              </div>
              <h3 className="mt-4 text-sm md:text-base font-extrabold leading-tight text-ink">{p.title}</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{p.summary}</p>

              <div className="mt-5 pt-5 border-t border-line">
                <p className="text-[10px] font-black uppercase tracking-widest text-navy-soft mb-3">{en ? "Key Outcomes" : "ძირითადი შედეგები"}</p>
                <ul className="space-y-2">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex gap-2.5 text-sm text-ink">
                      <Bullet />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-bold text-navy hover:underline"
                >
                  {en ? "Project website →" : "პროექტის გვერდი →"}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
