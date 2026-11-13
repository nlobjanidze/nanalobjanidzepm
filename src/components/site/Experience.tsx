import { Bullet } from "./Bullet";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

type Role = {
  period: string;
  org: string;
  role: string;
  highlights: string[];
};

const PRIMARY: Role[] = [
  {
    period: "03/2025 - მიმდინარე",
    org: "PMI Tbilisi Georgia Chapter",
    role: "კომუნიკაციის, მარკეტინგისა და სოციალური მედიის დირექტორი | Board Member",
    highlights: [
      "სტრატეგიული, მარკეტინგული და საოპერაციო პროექტების პორტფელის მართვა.",
      "20-25 წევრიანი მრავალფუნქციური მოხალისეთა გუნდის კოორდინაცია და განვითარება.",
      "KPI-ების განსაზღვრა, შესრულების მონიტორინგი და ანგარიშგება მმართველი საბჭოსთვის.",
      "პარტნიორებთან, სპონსორებთან და საერთაშორისო პროფესიულ ორგანიზაციებთან თანამშრომლობა.",
      "პროცესების ოპტიმიზაციისა და ცვლილებების მართვის ინიციატივების განხორციელება.",
    ],
  },
  {
    period: "01/2025 - 12/2025",
    org: "Kursi.ge",
    role: "პროექტის მენეჯერი",
    highlights: [
      "ციფრული, მარკეტინგული და ბიზნეს განვითარების პროექტების დაგეგმვა და მართვა.",
      "ტექნიკური და ბიზნეს გუნდების კოორდინაცია პროექტების წარმატებით განხორციელების მიზნით.",
      "ბიზნეს პროცესების ანალიზი და ეფექტიანობის ზრდაზე ორიენტირებული ინიციატივების განხორციელება.",
      "პროექტების პროგრესის მონიტორინგი, რისკების მართვა და რეგულარული ანგარიშგება.",
      "პროექტებისა და პორტფოლიოს მართვის სისტემის დანერგვა, რამაც გააუმჯობესა პროექტების ხილვადობა და კომუნიკაცია.",
    ],
  },
  {
    period: "მიმდინარე",
    org: "Sage Georgia",
    role: "მენტორი | ჟიურის წევრი",
    highlights: [
      "პროექტების მართვის ტრენინგების დაგეგმვა და ჩატარება.",
      "საერთაშორისო სტანდარტებსა და საუკეთესო პრაქტიკებზე დაფუძნებული პრაქტიკული ცოდნის გაზიარება.",
      "მონაწილეთა პროფესიული უნარების განვითარება ქეისების, პრაქტიკული დავალებებისა და მენტორინგის საშუალებით.",
      "SAGE-ის ნახევარფინალური და ეროვნული ფინალური ეტაპების ჟიურის წევრის როლში ახალგაზრდული პროექტების შეფასება.",
      "მონაწილეებისთვის პროფესიული უკუკავშირის და განვითარების რეკომენდაციების მიწოდება.",
    ],
  },
  {
    period: "მიმდინარე",
    org: "Junior Achievement Georgia",
    role: "მენტორი",
    highlights: [
      "ახალგაზრდების მენტორინგი ლიდერობის, პროექტული აზროვნებისა და კარიერული განვითარების მიმართულებით.",
      "პროექტების დაგეგმვისა და იდეების რეალურ ინიციატივებად გარდაქმნის პროცესში მხარდაჭერა.",
      "გუნდური მუშაობის, კრიტიკული აზროვნებისა და პრობლემების გადაჭრის უნარების განვითარება.",
      "პრაქტიკული გამოცდილებისა და პროფესიული ცოდნის გაზიარება პროექტების მართვის მიმართულებით.",
      "მონაწილეთა პროფესიული და პიროვნული განვითარების ხელშეწყობა.",
    ],
  },
  {
    period: "05/2022 - 05/2025",
    org: "PMI Tbilisi Georgia Chapter",
    role: "პროექტის მენეჯერი | გუნდის ლიდერი",
    highlights: [
      "სტრატეგიული და მარკეტინგული პროექტების დაგეგმვა, კოორდინაცია და განხორციელება.",
      "მოხალისეთა გუნდის საქმიანობის ორგანიზება და მიმართულებებს შორის თანამშრომლობის უზრუნველყოფა.",
      "მარკეტინგული კამპანიების შესრულების მონიტორინგი და შედეგების შეფასება.",
      "პარტნიორებთან და დაინტერესებულ მხარეებთან კომუნიკაციის კოორდინაცია.",
    ],
  },
  {
    period: "02/2024 - 11/2024",
    org: "ონის მუნიციპალიტეტის მერია",
    role: "მერის თანაშემწე",
    highlights: [
      "მერიის სტრუქტურულ ერთეულებს შორის კოორდინაციისა და ეფექტიანი კომუნიკაციის უზრუნველყოფა.",
      "დონორების მიერ დაფინანსებული პროექტების მიმდინარეობის მონიტორინგი და შესრულების კონტროლი.",
      "ადმინისტრაციული და საორგანიზაციო პროცესების მხარდაჭერა მუნიციპალიტეტის ხელმძღვანელობის დონეზე.",
      "შეხვედრების, ოფიციალური კომუნიკაციისა და კორესპონდენციის მართვა.",
    ],
  },
  {
    period: "02/2024 - 11/2024",
    org: "JobDeal",
    role: "პროექტის მენეჯერი",
    highlights: [
      "HR პროექტების სრული ციკლის მართვა Agile მეთოდოლოგიის გამოყენებით.",
      "რეკრუტინგისა და ტალანტების მოზიდვის პროცესების კოორდინაცია.",
      "HR პროცესების ანალიზი, ოპტიმიზაცია და ეფექტიანობის ზრდის ინიციატივების განხორციელება.",
      "შესრულების მაჩვენებლების მონიტორინგი და დაინტერესებულ მხარეებთან კომუნიკაცია.",
    ],
  },
  {
    period: "03/2022 - 01/2024",
    org: "ონის მუნიციპალიტეტის მერია",
    role: "პროექტების მართვის სპეციალისტი",
    highlights: [
      "1.5 მილიონი ლარის საერთაშორისო საგრანტო და საინვესტიციო პროექტების სრული ციკლის მართვა.",
      "ევროკავშირის, GIZ-ის, UNDP-ისა და სხვა დონორი ორგანიზაციების პროექტების კოორდინაცია.",
      "პროექტების ბიუჯეტის, რესურსების, ვადებისა და რისკების მართვა.",
      "მდგრადი განვითარების, ტურიზმისა და ადგილობრივი ეკონომიკური განვითარების ინიციატივების განხორციელება.",
      "საგრანტო განაცხადების, ანგარიშებისა და საპრეზენტაციო მასალების მომზადება.",
    ],
  },
  {
    period: "10/2021 - 12/2021",
    org: "Credo Bank",
    role: "საცალო მენეჯერი",
    highlights: [
      "გაყიდვებისა და კლიენტთა მომსახურების გუნდების საქმიანობის კოორდინაცია.",
      "მომსახურების ხარისხისა და საოპერაციო პროცესების ეფექტიანობის უზრუნველყოფა.",
      "თანამშრომელთა განვითარებისა და შესრულების მართვის პროცესების მხარდაჭერა.",
      "გაყიდვების შედეგების მონიტორინგი და ბიზნეს მაჩვენებლების ანალიზი.",
    ],
  },
  {
    period: "11/2020 - 10/2021",
    org: "FINCA Bank",
    role: "საოპერაციო / კლიენტთა მომსახურების მენეჯერი",
    highlights: [
      "საოპერაციო პროცესების მართვა და ეფექტიანობის გაუმჯობესება.",
      "მომსახურების ხარისხის კონტროლი და საოპერაციო რისკების მართვა.",
      "თანამშრომელთა საქმიანობის კოორდინაცია და შესრულების შეფასება.",
      "KPI-ების მონიტორინგი და პროცესების გაუმჯობესების ინიციატივების განხორციელება.",
    ],
  },
];

const ARCHIVE: Role[] = [
  {
    period: "03/2020 - 09/2020",
    org: "IboStar",
    role: "გაყიდვების დეპარტამენტის უფროსი",
    highlights: [
      "გაყიდვების დეპარტამენტის შექმნა, სტრუქტურირება და ოპერაციული მოდელის ჩამოყალიბება.",
      "გაყიდვების სტრატეგიისა და ანგარიშგების სისტემების დანერგვა.",
      "გაყიდვების გუნდის დაკომპლექტება, განვითარება და შედეგების მონიტორინგი.",
      "ბიზნეს მაჩვენებლების ანალიზი და გაყიდვების ზრდის ინიციატივების განხორციელება.",
    ],
  },
  {
    period: "11/2019 - 03/2020",
    org: "IboStar",
    role: "დირექტორის მოადგილე",
    highlights: [
      "კომპანიის ოპერაციული და ადმინისტრაციული საქმიანობის მხარდაჭერა.",
      "თანამშრომელთა საქმიანობის კოორდინაცია და შესრულების მონიტორინგი.",
      "ახალი ბიზნეს ინიციატივებისა და პროექტების დაგეგმვაში მონაწილეობა.",
      "შიდა პროცესებისა და დოკუმენტბრუნვის ეფექტიანობის უზრუნველყოფა.",
    ],
  },
  {
    period: "09/2019 - 11/2019",
    org: "ირაო",
    role: "მცირე და საშუალო ბიზნესის დაზღვევის მენეჯერი",
    highlights: [
      "კორპორატიული კლიენტებისთვის სადაზღვევო გადაწყვეტილებების შეთავაზება და განვითარება.",
      "კომერციული შეთავაზებებისა და პრეზენტაციების მომზადება.",
      "პოტენციურ და არსებულ კლიენტებთან ურთიერთობების მართვა.",
      "ახალი ბიზნეს შესაძლებლობებისა და კლიენტური ბაზის განვითარება.",
    ],
  },
  {
    period: "08/2016 - 06/2018",
    org: "საქართველოს ბანკი",
    role: "უნივერსალური ბანკირი",
    highlights: [
      "ფიზიკური და იურიდიული პირებისთვის საბანკო პროდუქტებისა და მომსახურების შეთავაზება.",
      "საკრედიტო და არასაკრედიტო ოპერაციების განხორციელება.",
      "კლიენტთა საჭიროებების ანალიზი და შესაბამისი ფინანსური გადაწყვეტილებების შეთავაზება.",
      "გაყიდვების მიზნების შესრულებასა და კლიენტური პორტფელის განვითარებაში მონაწილეობა.",
    ],
  },
  {
    period: "01/2012 - 08/2016",
    org: "საქართველოს ბანკი",
    role: "მოლარე-ოპერატორი",
    highlights: [
      "საბანკო ოპერაციების უსაფრთხო და ზუსტი შესრულება.",
      "ფიზიკური და იურიდიული პირების ყოველდღიური საბანკო მომსახურების უზრუნველყოფა.",
      "სალარო და ანგარიშსწორების ოპერაციების მართვა.",
      "მომხმარებელთა მომსახურებისა და გაყიდვების პროცესების მხარდაჭერა.",
    ],
  },
];


const PRIMARY_EN: Role[] = [
  {period:"03/2025 - Present",org:"PMI Tbilisi Georgia Chapter",role:"Director of Marketing, Communications & Social Media | Board Member",highlights:["Manage strategic, marketing and operational project portfolios.","Coordinate and develop a cross-functional volunteer team of 20–25 members.","Define KPIs, monitor performance and report to the Board.","Collaborate with partners, sponsors and international professional organizations.","Lead process improvement and change management initiatives."]},
  {period:"01/2025 - 12/2025",org:"Kursi.ge",role:"Project Manager",highlights:["Planned and managed digital, marketing and business development projects.","Coordinated technical and business teams to deliver project outcomes.","Analyzed business processes and led efficiency improvements.","Monitored progress, managed risks and delivered regular reports.","Implemented project and portfolio management processes to improve visibility and communication."]},
  {period:"Present",org:"SAGE Georgia",role:"Mentor | Jury Member",highlights:["Design and deliver project management training.","Share practical knowledge based on international standards and leading practices.","Develop participants' skills through case studies, exercises and mentoring.","Evaluate youth projects as a semifinal and national final jury member.","Provide actionable feedback and development recommendations."]},
  {period:"Present",org:"Junior Achievement Georgia",role:"Mentor",highlights:["Mentor young people in leadership, project thinking and career development.","Support project planning and turning ideas into practical initiatives.","Develop teamwork, critical thinking and problem-solving skills.","Share hands-on project management expertise.","Support participants' personal and professional growth."]},
  {period:"05/2022 - 05/2025",org:"PMI Tbilisi Georgia Chapter",role:"Project Manager | Team Lead",highlights:["Planned and delivered strategic and marketing projects.","Organized volunteer activities and cross-team collaboration.","Monitored marketing campaign performance and results.","Coordinated communication with partners and stakeholders."]},
  {period:"02/2024 - 11/2024",org:"Oni Municipality City Hall",role:"Assistant to the Mayor",highlights:["Facilitated coordination and communication across municipal departments.","Monitored donor-funded projects and their implementation.","Supported executive-level administrative and organizational processes.","Managed meetings, official communication and correspondence."]},
  {period:"02/2024 - 11/2024",org:"JobDeal",role:"Project Manager",highlights:["Managed end-to-end HR projects using Agile practices.","Coordinated recruitment and talent acquisition processes.","Analyzed and improved HR workflows and operational efficiency.","Monitored performance metrics and stakeholder communication."]},
  {period:"03/2022 - 01/2024",org:"Oni Municipality City Hall",role:"Project Management Specialist",highlights:["Managed the full lifecycle of international grant and investment projects totaling GEL 1.5 million.","Coordinated projects supported by the EU, GIZ, UNDP and other donors.","Managed project budgets, resources, schedules and risks.","Delivered sustainable development, tourism and local economic initiatives.","Prepared grant proposals, reports and presentations."]},
  {period:"10/2021 - 12/2021",org:"Credo Bank",role:"Retail Manager",highlights:["Managed retail banking operations and customer relationships."]},
  {period:"11/2020 - 10/2021",org:"FINCA Bank",role:"Operations & Customer Service Manager",highlights:["Managed operations and improved efficiency.","Oversaw service quality and operational risks.","Coordinated staff performance and evaluation.","Monitored KPIs and led process improvements."]},
];
const ARCHIVE_EN: Role[] = [
  {period:"03/2020 - 09/2020",org:"IboStar",role:"Head of Sales Department",highlights:["Established the sales department and its operating model.","Implemented sales strategy and reporting systems.","Recruited, developed and monitored the sales team.","Analyzed business performance and growth opportunities."]},
  {period:"11/2019 - 03/2020",org:"IboStar",role:"Deputy Director",highlights:["Supported company operations and administration.","Coordinated staff performance.","Contributed to business initiatives and project planning.","Improved internal processes and documentation workflows."]},
  {period:"09/2019 - 11/2019",org:"IRAO",role:"SME Insurance Manager",highlights:["Developed insurance solutions for corporate clients.","Prepared commercial offers and presentations.","Managed prospective and existing client relationships.","Identified new business opportunities."]},
  {period:"08/2016 - 06/2018",org:"Bank of Georgia",role:"Universal Banker",highlights:["Provided banking products and services to individuals and businesses.","Handled lending and non-lending transactions.","Assessed client needs and recommended financial solutions.","Supported sales targets and portfolio development."]},
  {period:"01/2012 - 08/2016",org:"Bank of Georgia",role:"Teller / Banking Operations Officer",highlights:["Processed banking transactions accurately and securely.","Provided day-to-day banking services to individuals and businesses.","Managed cash and settlement operations.","Supported customer service and sales activities."]},
];
function RoleCard({ r }: { r: Role }) {
  return (
    <div className="surface-card p-5 md:p-6 hover:-translate-y-0.5">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
        <h3 className="text-base md:text-lg font-extrabold text-ink">{r.org}</h3>
        <p className="text-xs font-black tracking-widest uppercase text-navy-soft tabular-nums">{r.period}</p>
      </div>
      <p className="mt-1 text-sm font-semibold text-navy">{r.role}</p>
      {r.highlights.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {r.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-ink leading-relaxed">
              <Bullet />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Experience() {
  const [expanded, setExpanded] = useState(false);
  const { language } = useLanguage();
  const english = language === "en";
  return (
    <section id="experience" className="section-y bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">{english ? "Professional Experience" : "სამუშაო გამოცდილება"}</span>
          <h2 className="heading-lg mt-4 text-balance">
            {english ? "10+ Years of " : "10+ წელი - "}<span className="text-navy">{english ? "Leading Projects, Programs and Teams" : "პროექტების, პროგრამების და გუნდების ხელმძღვანელობა"}</span>
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            {english ? "Practical experience across public, private, education and professional organizations, from international donor-funded projects to operational leadership in banking. My training and consulting services are grounded in this real-world experience." : "მრავალწლიანი პრაქტიკული გამოცდილება საჯარო, კერძო, საგანმანათლებლო და პროფესიულ ორგანიზაციებში - საერთაშორისო დონორების პროექტებიდან საბანკო სექტორის ოპერაციულ ლიდერობამდე. ჩემი ტრენინგები და საკონსულტაციო მომსახურება ეფუძნება ამ რეალურ გამოცდილებას."}
          </p>
        </div>

        <div className="mt-8 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-line to-transparent" aria-hidden />
          <ol className="space-y-4">
            {(english ? PRIMARY_EN : PRIMARY).map((r, i) => (
              <li key={r.period + r.org + i} className="relative pl-12">
                <span
                  className="absolute left-2.5 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-white border-2"
                  style={{ borderColor: "var(--mint)", boxShadow: "0 0 0 4px rgba(23,227,178,0.15)" }}
                />
                <RoleCard r={r} />
              </li>
            ))}
            {expanded &&
              (english ? ARCHIVE_EN : ARCHIVE).map((r, i) => (
                <li key={r.period + r.org + i} className="relative pl-12">
                  <span
                    className="absolute left-2.5 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-white border-2"
                    style={{ borderColor: "var(--navy-soft)", boxShadow: "0 0 0 4px rgba(14,61,107,0.10)" }}
                  />
                  <RoleCard r={r} />
                </li>
              ))}
          </ol>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="cta-btn inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-[var(--surface)] transition"
            >
              {expanded ? (english ? "Show Less" : "დახურე სრული კარიერული გზა") : (english ? "View Full Career Journey" : "View Full Career Journey - ნახე ადრეული გამოცდილება")}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
