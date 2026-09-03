import { Bullet } from "./Bullet";
type Recommendation = {
  text: string;
  bullets?: string[];
  after?: string;
  name: string;
  role?: string;
  org?: string;
  initials: string;
};

const RECOMMENDATIONS: Recommendation[] = [
  {
    text: `Ms. Nana Lobjanidze served as a coordinator of the EU-funded project „Development of Oni Municipality via Business Cluster Creation and Investment Attraction" from the Mayor's Office of Oni Municipality. In cooperation with the PMC Research Team, Nana demonstrated impressive project management skills and strong knowledge of the local environment and major stakeholders. Her dedicated work was decisive in meeting project deadlines, conducting research activities, elaborating reports, organising prioritisation and institutionalisation workshops for business clusters, and managing study tours to Romania and Latvia. She also led the elaboration of Oni Municipality's investment-attractiveness information and the related website. The PMC Research Team had a highly productive cooperation with Nana - she deployed her experience, local knowledge, and excellent management, organisational and communication skills for the successful implementation of the project.`,
    name: "Mikheil Skhiereli",
    role: "Team Leader, Senior Consultant",
    org: "Policy and Management Consulting Group",
    initials: "MS",
  },
  {
    text: `It is my pleasure to endorse Ms. Nana Lobjanidze, who has been an active volunteer of the PMI Tbilisi, Georgia Chapter since 2022 and has served as Director of Communications, Marketing and Social Media since 2025.

Over the past four years, Nana has demonstrated exceptional commitment to the advancement of the project management profession and to the growth of our chapter. Through her volunteer leadership, she has played a key role in strengthening our chapter's visibility, community engagement, and communication efforts.

Nana consistently demonstrates strong leadership, strategic thinking, effective stakeholder engagement, and a results-oriented mindset. Her ability to combine project management expertise with communication and marketing leadership has created meaningful value for our chapter and the broader professional community.

Beyond her technical and organizational capabilities, Nana is recognized for her professionalism, reliability, collaborative approach, and genuine passion for helping others grow and succeed. She is a dedicated professional who continuously seeks opportunities to learn, contribute, and make a positive impact.

I am confident that Nana will continue to excel in her professional endeavors and make valuable contributions to any organization, initiative, or community she serves. I proudly endorse Ms. Nana Lobjanidze as a highly capable project management professional, emerging leader, and committed contributor to the project management profession.`,
    name: "Ilia Revia",
    role: "President (2023–2026)",
    org: "PMI Tbilisi, Georgia Chapter",
    initials: "IR",
  },
  {
    text: `On behalf of the UNDP Georgia project Mayor for Economic Growth (M4EG), I am pleased to recommend Ms. Nana Lobjanidze, with whom we collaborated on municipal development initiatives during 2022-23.

In her role as Mayor's Advisor, Nana was responsible for representing the municipality within the M4EG network and relevant working groups. She served as the key focal point between M4EG and the City Hall, facilitating strategic cooperation and ensuring effective coordination among stakeholders. Her contribution was instrumental in advancing several strategic initiatives, including:`,
    bullets: [
      "Introducing AI-based solutions for participatory urban design and supporting capacity building of municipal staff;",
      "Supporting the revision and improvement of municipal development documents and strategic planning processes.",
    ],
    after: `Throughout our cooperation, Nana demonstrated exceptional project management capabilities, a strong understanding of international standards, and an outstanding ability to adapt and localize new approaches to fit the needs of the municipality. She consistently delivered results in complex, multi-stakeholder environments, combining strategic thinking with practical implementation skills.

Her professionalism, reliability, analytical capacity, and excellent communication skills made her an invaluable partner. I highly recommend Ms. Lobjanidze without reservation for professional engagements related to project management, strategic consulting, urban development, or organizational transformation.`,
    name: "Tiko Tkeshelashvili",
    role: "M4EG Georgia Project Manager",
    org: "UNDP Georgia",
    initials: "TT",
  },
  {
    text: `I am pleased to write this letter of recommendation for Ms. Nana Lobjanidze, with whom I had the opportunity to collaborate in 2022 in the framework of the GIZ-supported project on the localization of the Sustainable Development Goals (SDGs) in Georgian municipalities, including Oni Municipality.

During this process, Ms. Lobjanidze served as the designated focal person for the SDG localization work on behalf of the Oni Municipality City Hall, where she held the position of Senior Specialist in Tourism and Project Management. Although she was not a formal decision-maker within the municipal structure, she was entrusted with leading and coordinating the process locally, a responsibility she fulfilled with notable efficiency, precision, and professionalism.

Nana demonstrated strong organizational skills and a high level of commitment throughout the assignment. She was proactive in coordinating internal municipal inputs and ensuring timely communication across relevant departments. Importantly, she also played a key role in engaging external stakeholders, including non-governmental organizations, helping to foster inclusive discussions around local development priorities and SDG-related needs in the municipality.

Her ability to communicate effectively within the municipal administration, as well as with external partners, significantly contributed to the smooth implementation of the SDG localization process in Oni Municipality. She consistently showed herself to be a diligent, intelligent, and dedicated professional who took ownership of the assigned tasks and delivered them responsibly.

Based on my experience working with her, I can confidently recommend Ms. Nana Lobjanidze as a professional of integrity, strong work ethic, and reliable performance. I am certain she will continue to contribute meaningfully in any future role she undertakes, and I wish her every success in her professional endeavors.`,
    name: "Tengiz Tsekvava",
    role: "Statistical consultant · Former Deputy Executive Director",
    org: "National Statistical Office of Georgia · GIZ SDG Localization",
    initials: "TT",
  },
  {
    text: `It is my pleasure to recommend Ms. Nana Lobjanidze, with whom I collaborated closely on an international webinar jointly hosted by the PMI Georgia Chapter and the United Nations Kenya Local Expatriate Spouse Association (UNKLESA). Through this collaboration, I had the opportunity to observe firsthand her professionalism, expertise, and leadership qualities, leaving me with great confidence in her ability to excel in complex professional environments.

I served as co-organizer alongside Nana for this initiative, which brought together professionals from multiple countries for a session on Project Management without Borders. Working with her directly, I observed her ability to translate complex project management concepts into clear and practical guidance. Through the use of relevant case studies and interactive facilitation techniques, she maintained strong engagement among a diverse, multinational audience while ensuring that key learning objectives were effectively delivered.

Nana's preparation was evident in how she structured her material for a multi-country, multi-timezone audience, anticipating technical and operational constraints and adjusting her pacing accordingly. She demonstrated strong facilitation skills by encouraging participation from quieter attendees and creating space for genuine discussion rather than relying on a one-way presentation.

Beyond her technical expertise, Nana demonstrates a genuine commitment to supporting the growth and success of others. She consistently creates an environment where people feel encouraged to contribute, learn, and collaborate. Throughout our collaboration, I was particularly impressed by her adaptability, professionalism, and ability to maintain a positive and solutions-oriented approach when navigating challenges.

Based on our collaboration, I highly recommend Nana for roles involving project management, facilitation, training, stakeholder engagement, communication, leadership, and capacity building. I am confident that she will bring the same professionalism, expertise, and commitment to excellence to any organization or initiative she supports.`,
    name: "Tamara Topuridze",
    role: "Executive Director",
    org: "TEDx Nairobi",
    initials: "TT",
  },
  {
    text: `მქონდა შესაძლებლობა მემუშავა ნანა ლობჯანიძესთან PMI Tbilisi, Georgia Chapter-ისა და IIBA Georgia Chapter-ის ერთობლივი თანამშრომლობის ფარგლებში, სადაც მე, როგორც IIBA Georgia Chapter-ის დამფუძნებელი პრეზიდენტი, ხოლო ნანა, როგორც PMI Tbilisi, Georgia Chapter-ის კომუნიკაციის, მარკეტინგისა და სოციალური მედიის დირექტორი, ერთად ვუმასპინძლეთ ვებინარს - "PM or BA: Where Do I Begin? A Starter Guide to Two Essential Roles."

ეს ინიციატივა აერთიანებდა ორ წამყვან პროფესიულ საზოგადოებას საქართველოში და მიზნად ისახავდა დამწყები თუ მოქმედი პროფესიონალებისთვის პროექტის მენეჯერისა და ბიზნეს ანალიტიკოსის როლებს შორის განსხვავებების, საერთო წერტილებისა და კარიერული განვითარების შესაძლებლობების უკეთ წარმოჩენას.

ნანასთან თანამშრომლობის პროცესში განსაკუთრებით გამოიკვეთა მისი მაღალი პროფესიონალიზმი, პასუხისმგებლობის გრძნობა და ორგანიზებულობა. ის გამოირჩევა მკაფიო კომუნიკაციით, პროცესების კოორდინაციის უნარითა და დეტალებისადმი ყურადღებით, რაც მნიშვნელოვანი იყო ღონისძიების ეფექტიანად დაგეგმვისა და განხორციელებისთვის.

ნანას აქვს უნარი, პროფესიული საზოგადოებების თანამშრომლობა აქციოს ღირებულ, შედეგზე ორიენტირებულ ინიციატივად. მისი ჩართულობა, პროაქტიულობა და პოზიტიური დამოკიდებულება მნიშვნელოვნად უწყობს ხელს საერთო მიზნების მიღწევას და პროფესიული ეკოსისტემის გაძლიერებას საქართველოში.

მოხარული ვარ, რომ მქონდა ნანასთან თანამშრომლობის შესაძლებლობა და დარწმუნებული ვარ, მისი ცოდნა, გამოცდილება და ლიდერული მიდგომა მომავალშიც მნიშვნელოვან წვლილს შეიტანს პროფესიული საზოგადოებების განვითარებასა და მაღალი ხარისხის ინიციატივების განხორციელებაში.`,
    name: "თინათინ პაპაშვილი",
    role: "დამფუძნებელი პრეზიდენტი · CBAP® • PRINCE2® • PSPO II® • AAC® • CPOA®",
    org: "IIBA Georgia Chapter",
    initials: "თპ",
  },
  {
    text: `FINCA Bank Georgia-ში მუშაობის პერიოდში ნანა ლობჯანიძე გამოირჩეოდა მაღალი პროფესიონალიზმით, ლიდერული უნარებითა და შედეგზე ორიენტირებული მიდგომით. საოპერაციო მენეჯერის პოზიციაზე საქმიანობისას მან მნიშვნელოვანი წვლილი შეიტანა როგორც მომსახურების ხარისხის გაუმჯობესებაში, ისე გუნდის ეფექტიან მართვასა და განვითარებაში. მუშაობის პერიოდში ნანა წარმატებით უზრუნველყოფდა:`,
    bullets: [
      "კლიენტთა მომსახურების პროცესების ეფექტურ ორგანიზებასა და კონტროლს;",
      "საბანკო პროდუქტებისა და სერვისების გაყიდვების კოორდინაციას;",
      "თანამშრომელთა სამუშაო პროცესის დაგეგმვასა და რესურსების ოპტიმალურ განაწილებას;",
      "პრობლემური და არასტანდარტული შემთხვევების დროულ და ეფექტურ მართვას;",
      "თანამშრომელთა მოტივაციის, სწავლებისა და პროფესიული განვითარების ხელშეწყობას;",
      "ახალი თანამშრომლების შერჩევისა და ადაპტაციის პროცესში აქტიურ მონაწილეობას;",
      "კლიენტზე ორიენტირებული გარემოს შექმნასა და მომსახურების მაღალი სტანდარტების დაცვას.",
    ],
    after: `განსაკუთრებით აღსანიშნავია ნანას უნარი ეფექტურად მართოს გუნდი, მიიღოს სწრაფი და გააზრებული გადაწყვეტილებები და წარმატებით გაუმკლავდეს მრავალმხრივ საოპერაციო გამოწვევებს.

დარწმუნებული ვარ, რომ ნანა ნებისმიერი ორგანიზაციისთვის იქნება მაღალი ღირებულების მქონე პროფესიონალი, რომელიც თავისი ცოდნით, გამოცდილებითა და პასუხისმგებლობის მაღალი გრძნობით მნიშვნელოვან წვლილს შეიტანს ორგანიზაციის წარმატებაში.`,
    name: "ლელა ღირდალაძე",
    role: "Retail Banking Development Manager",
    org: "FINCA Bank Georgia",
    initials: "ლღ",
  },
  {
    text: `ნანა ლობჯანიძე კომპანიაში "Job Deal" იკავებდა პროექტების მენეჯერის პოზიციას. მან თავი გამოავლინა, როგორც სწორ დაგეგმვასა და რისკების გადაზღვევაზე ორიენტირებულმა მენეჯერმა.

ასევე, უნდა აღინიშნოს მისი დეტალებზე ორიენტირების უნარი, რაც ხშირად გამართულად შედგენილ დოკუმენტებშიც გამოიხატებოდა. ნანა განვითარებაზე ორიენტირებული ადამაინია.

წარმატებები მას ყველა კარიერულ საფეხურზე!`,
    name: "გიგა ჭანტურია",
    role: "ხელმძღვანელების მხარდამჭერი ორგანიზაციული ცვლილებების გატარებაში",
    org: "Job Deal",
    initials: "გჭ",
  },
  {
    text: `ნანასთან მუშაობა ყოველთვის სასიამოვნო გამოცდილებაა. გამოირჩევა პასუხისმგებლობით, ინიციატივითა და იმ განსაკუთრებული დამოკიდებულებით, რომელიც ყველა პროექტში იგრძნობა. ეფექტურად მართავს პროცესებს, მარტივად ამყარებს კომუნიკაციას გუნდთან და დაინტერესებულ მხარეებთან, პასუხისმგებლობით უდგება გამოწვევებს და მუდმივად ზრუნავს პროფესიულ განვითარებაზე. დარწმუნებული ვარ, მისი პროფესიონალიზმი, ორგანიზებულობა და ადამიანებთან მუშაობის უნარი ნებისმიერი გუნდისთვის მნიშვნელოვანი ღირებულება იქნება.`,
    name: "თამთა ბასილაია",
    role: "პროექტების მართვის კონსულტანტი | მენტორი",
    initials: "თბ",
  },
  {
    text: `კრედო ბანკში მუშაობის პერიოდში ნანა ლობჯანიძე გამოირჩეოდა მაღალი პროფესიონალიზმით, ლიდერული უნარებითა და შედეგზე ორიენტირებული მიდგომით. რითეილ მენეჯერის პოზიციაზე საქმიანობისას მან მნიშვნელოვანი წვლილი შეიტანა როგორც ფილიალის ბიზნეს შედეგების გაუმჯობესებაში, ისე გუნდის ეფექტიან მართვასა და კლიენტთა მომსახურების მაღალი სტანდარტების უზრუნველყოფაში.

განსაკუთრებით აღსანიშნავია ნანას ძლიერი კომუნიკაციის უნარი, პასუხისმგებლობის მაღალი გრძნობა, ანალიტიკური აზროვნება და უნარი, ეფექტიანად მართოს როგორც ყოველდღიური საოპერაციო პროცესები, ისე გაყიდვებზე ორიენტირებული გუნდი. იგი ყოველთვის ავლენდა ინიციატივას, პროფესიონალიზმსა და მზადყოფნას, მიეღო ორგანიზაციის წარმატებისთვის მნიშვნელოვანი გადაწყვეტილებები.

დარწმუნებული ვარ, რომ ნანა ნებისმიერი ორგანიზაციისთვის იქნება მაღალი ღირებულების მქონე პროფესიონალი, რომელიც თავისი გამოცდილებით, ლიდერული უნარებითა და შედეგზე ორიენტირებული მიდგომით მნიშვნელოვან წვლილს შეიტანს ორგანიზაციის განვითარებასა და წარმატებაში.`,
    name: "ბადრი ბარჯაძე",
    role: "ფილიალის მმართველი",
    org: "კრედო ბანკი",
    initials: "ბბ",
  },
];

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((p, i) => (
        <p key={i} className={i === 0 ? "" : "mt-4"}>
          {p}
        </p>
      ))}
    </>
  );
}

export function Testimonials() {
  return (
    <section id="recommendation" className="section-y bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">რეკომენდაციები</span>
          <h2 className="heading-lg mt-4 text-balance">
            პარტნიორების <span className="text-navy">პროფესიული შეფასებები</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base md:text-lg">
            საერთაშორისო დონორების, პროფესიული ორგანიზაციებისა და თანამშრომლების წერილობითი რეკომენდაციები.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 items-start">
          {RECOMMENDATIONS.map((r, idx) => (
            <figure key={idx} className="surface-card p-6 md:p-7 relative h-full flex flex-col">
              <span
                className="absolute top-4 right-6 text-6xl leading-none font-serif select-none"
                style={{ color: "var(--mint)", opacity: 0.35 }}
                aria-hidden
              >
                "
              </span>
              <blockquote className="text-[14px] md:text-[15px] leading-relaxed text-ink relative z-10 flex-1">
                <Paragraphs text={r.text} />
                {r.bullets && (
                  <ul className="mt-4 space-y-2">
                    {r.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <Bullet />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {r.after && (
                  <div className="mt-4">
                    <Paragraphs text={r.after} />
                  </div>
                )}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-line flex items-center gap-4">
                <span
                  className="h-12 w-12 rounded-full inline-flex items-center justify-center font-black text-lg shrink-0"
                  style={{ background: "var(--navy-deep)", color: "var(--mint)" }}
                >
                  {r.initials}
                </span>
                <div>
                  <p className="font-extrabold text-[15px] text-ink">{r.name}</p>
                  {r.role && <p className="text-sm text-ink-soft mt-0.5">{r.role}</p>}
                  {r.org && <p className="text-xs text-navy font-bold mt-0.5">{r.org}</p>}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
