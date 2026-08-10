import { useState } from "react";

type Module = { title: string; items: string[] };
type Training = {
  code: string;
  title: string;
  audience: string;
  duration: string;
  price: string;
  summary: string;
  modules: Module[];
};
type Category = {
  num: string;
  key: string;
  tag: string;
  title: string;
  intro: string;
  accent: "mint" | "navy" | "blend" | "deep";
  items: Training[];
};

const ST: Training[] = [
  {
    code: "ST-1",
    title: "პროექტის მართვის შესავალი - დამწყებებისთვის",
    audience: "Junior PM, ახალი გუნდის ლიდერები, ვინც პირველად ხელმძღვანელობს პროექტს.",
    duration: "2 შეხვედრა · 4 საათი · 1 კვირა",
    price: "250 ₾",
    summary:
      "კურსი შექმნილია მათთვის, ვინც პირველად ხელმძღვანელობს პროექტს ან ახლახან გადავიდა პროექტის მართვის ფუნქციაზე. მონაწილეები გაიგებენ, რა არის პროექტი, ვინ არის პროექტის მენეჯერი და რა ნაბიჯებია გადასადგმელი - პირველი დღიდანვე. ყოველი ლექციის ბოლოს სრულდება პრაქტიკული სავარჯიშო, რომელიც ეფუძნება PMBOK® Guide-ის მე-8 გამოცემის Performance Domain-ებსა და Rita Mulcahy-ის PM ჩარჩოს.",
    modules: [
      {
        title: "მოდული 1: რა არის პროექტი და ვინ არის პროექტის მენეჯერი",
        items: [
          "პროექტი vs. ოპერაცია - სად მთავრდება „ყოველდღიური საქმიანობა“ და სად იწყება „პროექტი“",
          "პროექტის სასიცოცხლო ციკლი: ინიციაცია → დაგეგმვა → შესრულება → დახურვა",
          "პროექტის მენეჯერის როლი, პასუხისმგებლობები და კომპეტენციები (PMBOK® 8th - Leadership Domain)",
          "Triple Constraint: სკოპი, ვადა, ბიუჯეტი - ოქროს სამკუთხედი",
          "Organizational Influences - როგორ მოქმედებს ორგანიზაციის სტრუქტურა PM-ზე",
          "პრაქტიკული სავარჯიშო: საკუთარი ან სამუშაო პროექტის იდენტიფიცირება + სასიცოცხლო ციკლის შედგენა",
        ],
      },
      {
        title: "მოდული 2: პირველი ნაბიჯები - დაგეგმვა და ინსტრუმენტები",
        items: [
          "Project Charter - პროექტის „გამშვები ბარათი“: სტრუქტურა, შევსება, დამტკიცება",
          "WBS (Work Breakdown Structure) - სამუშაოს დაშლა კომპონენტებად",
          "Gantt Chart - ვიზუალური განრიგი: ლოგიკა, შედგენა, გამოყენება",
          "ინსტრუმენტები პრაქტიკაში: Trello / ClickUp - პირველი დაყენება და სამუშაო ბარათები",
          "პრაქტიკული სავარჯიშო: Project Charter + WBS + Gantt - სასწავლო პროექტზე სრულად",
        ],
      },
    ],
  },
  {
    code: "ST-2",
    title: "Agile მინი-კურსი - Scrum პრაქტიკაში",
    audience: "Junior/Middle PM-ები, ტექნიკური და არა-ტექნიკური გუნდები, ვინც Agile მეთოდოლოგიაზე გადადის.",
    duration: "2 შეხვედრა · 4 საათი · 1 კვირა",
    price: "280 ₾",
    summary:
      "კურსი ეძღვნება Agile მეინდსეთისა და Scrum ჩარჩოს პრაქტიკულ ათვისებას. მონაწილეები გაიგებენ, რა განსხვავებაა Agile-სა და Waterfall-ს შორის, როგორ ფუნქციონირებს Scrum გუნდი და როგორ გამოიყურება Sprint-ის ციკლი რეალობაში. კურსი ეყრდნობა Scrum Guide 2020-ს და Mike Griffiths-ის PMI-ACP® Exam Prep-ის Agile ჩარჩოს.",
    modules: [
      {
        title: "მოდული 1: Agile მეინდსეთი და Scrum ჩარჩო",
        items: [
          "Agile Manifesto - 4 ღირებულება, 12 პრინციპი და მათი რეალური მნიშვნელობა პროექტებში",
          "Agile vs. Waterfall - განსხვავება, სად გამოიყენება რომელი",
          "Scrum ჩარჩო: 3 როლი (Product Owner, Scrum Master, Development Team), 5 ივენთი, 3 არტეფაქტი",
          "User Story - „As a user, I want… so that…“ ფორმატი + Definition of Done (DoD)",
          "Product Backlog - სტრუქტურა, პრიორიტეტიზაცია, Refinement",
          "პრაქტიკული სავარჯიშო: User Story-ების დაწერა + Backlog-ის შედგენა Jira-ში",
        ],
      },
      {
        title: "მოდული 2: Sprint-ის ციკლი პრაქტიკაში",
        items: [
          "Sprint Planning - Sprint Goal, Task Breakdown, Story Points",
          "Daily Scrum - 3 კითხვის ფორმატი, დროის კონტროლი (15 წუთი)",
          "Sprint Review vs. Sprint Retrospective - განსხვავება, მიზანი, ფასილიტაცია",
          "Kanban Board - სამუშაოს ნაკადის ვიზუალიზაცია Jira-ში",
          "Burndown Chart - პროგრესის თვალყურის დევნება",
          "პრაქტიკული სავარჯიშო: 1-კვირიანი სიმულაციური Sprint - Planning → Daily → Review → Retro",
        ],
      },
    ],
  },
  {
    code: "ST-3",
    title: "სტეიკჰოლდერები - ვინ არიან და როგორ ვმართოთ",
    audience: "Junior/Middle PM-ები, NGO-ების PM-ები, ორგანიზაციის ხელმძღვანელები.",
    duration: "2 შეხვედრა · 4 საათი · 1 კვირა",
    price: "280 ₾",
    summary:
      "სტეიკჰოლდერების არასწორი მართვა ერთ-ერთი მთავარი მიზეზია პროექტების წარუმატებლობისა. ეს კურსი ასწავლის, ვინ არიან სტეიკჰოლდერები, როგორ განვსაზღვროთ მათი გავლენა და ინტერესი და როგორ ავაგოთ კომუნიკაციის სტრატეგია, რომელიც პროექტს წარმატებამდე მიიყვანს. ეყრდნობა PMBOK® 8th-ის Stakeholder Performance Domain-ს.",
    modules: [
      {
        title: "მოდული 1: სტეიკჰოლდერების იდენტიფიცირება და ანალიზი",
        items: [
          "სტეიკჰოლდერი - განმარტება, ტიპები, შიდა vs. გარე",
          "Stakeholder Register - ვინ, რა ინტერესი, რა გავლენა, რა მოლოდინი",
          "Power/Interest Matrix - 4 კვადრანტი და სტრატეგია თითოეულისთვის: Manage Closely / Keep Satisfied / Keep Informed / Monitor",
          "Salience Model - Power + Legitimacy + Urgency",
          "სტეიკჰოლდერ-ანალიზი ქართული პროექტის კონტექსტში: მუნიციპალური, NGO, კორპორაციული",
          "პრაქტიკული სავარჯიშო: სასწავლო კაზუსზე Stakeholder Map-ის სრული შედგენა",
        ],
      },
      {
        title: "მოდული 2: სტეიკჰოლდერებთან ჩართულობა და კომუნიკაცია",
        items: [
          "Engagement Assessment Matrix - „Unaware → Resistant → Neutral → Supportive → Leading“",
          "კომუნიკაციის გეგმა: ვინ, რა, როდის, რომელი არხით, ვის მიერ",
          "რთული სტეიკჰოლდერების მართვა - ოპოზიცია, ჩუმი გავლენა, კონფლიქტი",
          "Case Study: PMI Tbilisi-ს რეალური პროექტებიდან - ოპონენტი სტეიკჰოლდერი მუნიციპალურ გარემოში",
          "პრაქტიკული სავარჯიშო: Communication Plan + Engagement Matrix - სრული ფორმატი",
        ],
      },
    ],
  },
];

const DD: Training[] = [
  {
    code: "DD-1",
    title: "პროექტის მართვის საფუძვლები - 0-დან პროფესიამდე",
    audience:
      "Junior/დამწყები და Middle დონის პროექტ-მენეჯერები; გუნდების ხელმძღვანელები; ხელმძღვანელები, რომლებიც პირადად მართავენ პროექტებს.",
    duration: "6 შეხვედრა · 12 საათი · 3 კვირა · ონლაინ (MS Teams) ან თბილისი",
    price: "650 ₾",
    summary:
      "მონაწილეები გაეცნობიან პროექტის მართვის ძირითად ცნებებს, მეთოდოლოგიებსა და პრაქტიკულ ინსტრუმენტებს: ვინ არის PM, რა როლი და პასუხისმგებლობები აქვს მას, როგორ ახდენს ინიციაციას, დაგეგმვას, შესრულებასა და დახურვას. კურსის განმავლობაში მონაწილე ამუშავებს ერთ პროექტს - ყოველი მოდულის ბოლოს პრაქტიკული სავარჯიშოს სახით - და კურსის ბოლოს წარმოგიდგენთ სრულ PM პაკეტს. ეყრდნობა PMBOK® Guide 8th Edition-ს და Rita Mulcahy-ის PMP® Exam Prep (10th Ed.)-ს.",
    modules: [
      {
        title: "მოდული 1: ფუნდამენტი",
        items: [
          "პროექტი vs. პროგრამა vs. პორტფოლიო - განსხვავება და კავშირი",
          "PMBOK® 8th Edition - 8 Performance Domain: Stakeholders, Team, Development Approach, Planning, Project Work, Delivery, Measurement, Uncertainty",
          "პროექტის გარემო: ორგანიზაციული სტრუქტურები (Functional, Matrix, Projectized), PMO, Enterprise Environmental Factors",
          "Predictive (Waterfall) vs. Adaptive (Agile) vs. Hybrid მიდგომები - შერჩევის კრიტერიუმები",
          "PM–გუნდი–ორგანიზაცია: ვალდებულებები, გეგმები, კომუნიკაცია",
          "პრაქტიკული სავარჯიშო: საკუთარი ორგანიზაციის ტიპის ანალიზი + შესაბამისი PM მიდგომის დასაბუთება",
        ],
      },
      {
        title: "მოდული 2: ინიციაცია და სკოპი",
        items: [
          "Business Case - ღირებულების დასაბუთება, Benefits Realization",
          "Project Charter - სტრუქტურა, Sponsor-ის როლი, ინიციაციის პაკეტი",
          "Scope Statement - In/Out of Scope, Scope Creep-ის პრევენცია",
          "Requirements Management - შეგროვება, ანალიზი, Traceability Matrix",
          "WBS + WBS Dictionary - სამუშაოს სრული დაშლა",
          "პრაქტიკული სავარჯიშო: სასწავლო პროექტის სრული ინიციაციის პაკეტი - Charter + Scope + WBS",
        ],
      },
      {
        title: "მოდული 3: განრიგი და ბიუჯეტი",
        items: [
          "Activity Definition, Sequencing, Duration Estimation",
          "Network Diagram + Critical Path Method (CPM) - ვადის ოპტიმიზაცია",
          "Gantt Chart + Milestone Schedule - ვიზუალური განრიგი",
          "Budget Estimation ტექნიკები: Bottom-Up, Analogous, Parametric",
          "Cost Baseline + Contingency Reserve + Management Reserve",
          "EVM (Earned Value Management): CV, SV, CPI, SPI - პროგრესის გაზომვა",
          "პრაქტიკული სავარჯიშო: სასწავლო პროექტის სრული განრიგი + ბიუჯეტი + EVM გაანგარიშება",
        ],
      },
      {
        title: "მოდული 4: ხარისხი, რესურსები და შესყიდვები",
        items: [
          "Quality Management Plan - QA vs. QC",
          "Definition of Done (DoD) - Predictive და Agile კონტექსტში",
          "RACI Matrix - პასუხისმგებლობების სრული სქემა",
          "Resource Histogram + Team Charter - გუნდის სტრუქტურა და ვალდებულებები",
          "Procurement Management: Make-or-Buy ანალიზი, Vendor Selection",
          "Contract Types - FFP (Fixed-Price), T&M (Time & Materials), Cost-Plus",
          "პრაქტიკული სავარჯიშო: RACI + Resource Plan + Procurement Plan - სასწავლო პროექტზე",
        ],
      },
      {
        title: "მოდული 5: რისკები",
        items: [
          "Risk Identification ტექნიკები: Brainstorming, Delphi, SWOT, Checklists, Interviews",
          "Qualitative Risk Analysis - Probability/Impact Matrix (Heatmap)",
          "Quantitative Risk Analysis - EMV (Expected Monetary Value), Monte Carlo-ს კონცეფცია",
          "Risk Register - სრული ფორმატი: Risk ID, Description, Category, Probability, Impact, Score, Owner, Response",
          "Risk Response Strategies - Threats: Avoid, Transfer, Mitigate, Accept / Opportunities: Exploit, Share, Enhance, Accept",
          "Residual Risks + Secondary Risks + Contingency Triggers",
          "პრაქტიკული სავარჯიშო: სრული Risk Register + Response Plan",
        ],
      },
      {
        title: "მოდული 6: შესრულება, მონიტორინგი და დახურვა",
        items: [
          "Kickoff Meeting - სტრუქტურა, დღის წესრიგი, ფასილიტაცია",
          "Status Reports + Dashboards - Jira / ClickUp: რა ინფორმაცია, ვის, რა სიხშირით",
          "Change Management - Change Request პროცესი, Change Control Board (CCB)",
          "Lessons Learned - ფორმატი, ფასილიტაცია, ორგანიზაციული მეხსიერება",
          "Project Closure - Formal Acceptance, Archive, Team Recognition",
          "პრაქტიკული სავარჯიშო: სრული სასწავლო პროექტის ფინალური პრეზენტაცია - ყველა დოკუმენტი + Defense",
        ],
      },
    ],
  },
  {
    code: "DD-2",
    title: "Agile, Scrum, Kanban & Lean - სიღრმისეული კურსი",
    audience: "Junior/Middle/Senior PM-ები; Scrum Master-ობის მსურველები; გუნდები, რომლებიც Agile-ზე გადადიან.",
    duration: "6 შეხვედრა · 12 საათი · 3 კვირა",
    price: "700 ₾",
    summary:
      "კურსი ეძღვნება Agile-ის სიღრმისეულ ათვისებას - მეინდსეთიდან სრულ Scrum ციკლამდე, Kanban-ისა და Lean-ის ინტეგრაციამდე. ორიენტირებულია ქართულ ბიზნეს-გარემოზე. ეყრდნობა Scrum Guide 2020-ს, Mike Griffiths-ის PMI-ACP® Exam Prep-ს და PMBOK® 8th-ის Development Approach Domain-ს. კურსის ბოლოს მონაწილეები ასრულებენ სრულ სიმულაციურ Sprint-ს Jira-ზე.",
    modules: [
      {
        title: "მოდული 1: Agile Mindset - ჭეშმარიტი გაგება",
        items: [
          "Agile Manifesto სიღრმეში - 4 ღირებულება პრაქტიკაში, 12 პრინციპი კონკრეტული სიტუაციებით",
          "Agile Mindset vs. Agile Tools - რატომ Jira-ს გამოყენება ≠ Agile-ი",
          "Business Agility - ორგანიზაციული მოქნილობის კონცეფცია",
          "Agile ქართულ ბაზარზე: სად მუშაობს (ტექ, NGO, მარკეტინგი), სად ვერ (საჯარო სექტორი, მარეგულირებელი გარემო)",
          "Case Study: ქართული კომპანიების Agile Adoption - გამოცდილება, შეცდომები, გაკვეთილები",
          "პრაქტიკული სავარჯიშო: Agile Maturity Assessment",
        ],
      },
      {
        title: "მოდული 2: Scrum სიღრმეში",
        items: [
          "Scrum Guide 2020 - ყველა ცვლილება წინა ვერსიასთან შედარებით",
          "Product Owner: Backlog Management, Prioritization ტექნიკები - WSJF, MoSCoW, Kano Model",
          "Scrum Master: სერვანტ-ლიდერობა, ფასილიტაცია, Impediment Removal",
          "Development Team: Self-organization, T-shaped Skills, Velocity-ის გამოთვლა",
          "Sprint ციკლი სრულად: Planning → Daily Scrum → Review → Retrospective",
          "Retrospective ტექნიკები: 4Ls, Start/Stop/Continue, Mad/Sad/Glad, Sailboat",
          "პრაქტიკული სავარჯიშო: 2-კვირიანი სიმულაციური Sprint - Jira-ზე სრული ციკლი",
        ],
      },
      {
        title: "მოდული 3: Kanban - ვიზუალური ნაკადის მართვა",
        items: [
          "Kanban 4 ძირითადი პრინციპი: Visualize, Limit WIP, Manage Flow, Make Policies Explicit",
          "Kanban vs. Scrum - გამოყენების კრიტერიუმები: მუდმივი ნაკადი vs. Sprint ციკლები",
          "Cumulative Flow Diagram (CFD) - ბოთლის ყელის ამოცნობა",
          "Lead Time vs. Cycle Time - სხვაობა და ოპტიმიზაცია",
          "WIP Limits - პრაქტიკა: რა ხდება ლიმიტის გარეშე",
          "პრაქტიკული სავარჯიშო: Kanban Board-ის შედგენა + WIP Limit-ების დადგენა",
        ],
      },
      {
        title: "მოდული 4: Lean - ნარჩენების ელიმინაცია",
        items: [
          "Lean ფილოსოფია: Value Stream, Waste (Muda), Continuous Improvement (Kaizen)",
          "7 ტიპის Waste PM-ში: Over-production, Waiting, Transportation, Motion, Over-processing, Inventory, Defects",
          "Value Stream Mapping - სამუშაო ნაკადის ვიზუალიზაცია",
          "Lean + Scrum ინტეგრაცია: Scrumban",
          "პრაქტიკული სავარჯიშო: Value Stream Map - ქართული ოფისის სიტუაციაზე",
        ],
      },
      {
        title: "მოდული 5: Hybrid - Agile + Predictive კომბინაცია",
        items: [
          "Hybrid მიდგომის არსი: რა ეტაპები Waterfall-ით, რა - Agile-ით",
          "Hybrid-ის გამოყენება ქართულ გარემოში: საჯარო სექტორი, NGO, ბანკები",
          "Rolling Wave Planning - მოქნილი დაგეგმვა ეტაპობრივად",
          "Agile Release Planning + Product Roadmap",
          "PM–BA თანამშრომლობა Agile-ში: როლების გამიჯვნა",
          "პრაქტიკული სავარჯიშო: Hybrid Project Plan - ქართული სტარტაპის სცენარი",
        ],
      },
      {
        title: "მოდული 6: SAFe შესავალი და Agile Scaling",
        items: [
          "SAFe (Scaled Agile Framework) - მსხვილ ორგანიზაციებში Agile-ის მასშტაბირება",
          "PI Planning - Program Increment-ის დაგეგმვა",
          "LeSS (Large-Scale Scrum) - განსხვავება SAFe-სთან",
          "Agile-ის გამოწვევები Scale-ზე: ქართული ბაზრის კონტექსტი",
          "სიმულაცია: სრული Scrum Project - 3 Sprint - Jira-ზე + Final Retrospective",
        ],
      },
    ],
  },
  {
    code: "DD-3",
    title: "პროექტის მენეჯერი, როგორც ლიდერი",
    audience: "Middle/Senior PM-ები; გუნდების ხელმძღვანელები; ნებისმიერი, ვინც ხალხს ხელმძღვანელობს.",
    duration: "6 შეხვედრა · 12 საათი · 3 კვირა",
    price: "750 ₾",
    summary:
      "ტექნიკური PM უნარები აუცილებელია, მაგრამ არ კმარა. პროექტების ჩაშლის 70%-ზე მეტი გამოწვეულია ადამიანური ფაქტორებით - კომუნიკაციის პრობლემებით, გუნდის კონფლიქტებით, ცვლილებების წინააღმდეგობით ან ლიდერობის სტილის შეუსაბამობით. ეს კურსი ეხება სწორედ ამ „რბილ“ ნაწილს - ქართული ბიზნეს-კულტურის სპეციფიკაზე მორგებულად. ეყრდნობა PMBOK® 8th-ის Team Performance და Leadership Domain-ებს.",
    modules: [
      {
        title: "მოდული 1: PM-ის ლიდერობის სტილები",
        items: [
          "ლიდერობა vs. მართვა - PM კონტექსტში",
          "Situational Leadership (Hersey & Blanchard) - S1/S2/S3/S4: სტილი გუნდის მომზადების დონის მიხედვით",
          "Servant Leadership - Scrum Master-ის და Agile PM-ის მოდელი",
          "Transformational vs. Transactional Leadership - PMI-ს მიდგომა",
          "PM-ის ძალაუფლების ტიპები: Formal, Reward, Penalty, Expert, Referent",
          "ქართული ბაზრის სპეციფიკა: ხელმძღვანელის ავტორიტეტი, „დიახ“-კულტურა, იერარქია vs. გამჭვირვალობა",
          "პრაქტიკული სავარჯიშო: Self-Assessment - საკუთარი ლიდერობის სტილის ანალიზი + Case Study",
        ],
      },
      {
        title: "მოდული 2: გუნდის განვითარება",
        items: [
          "Tuckman-ის გუნდის მოდელი: Forming → Storming → Norming → Performing → Adjourning",
          "გუნდის ჩამოყალიბება: Team Charter, Working Agreements, Ground Rules",
          "Motivation Theories PM-ში: Maslow, Herzberg, McClelland, McGregor X/Y",
          "Conflict Resolution ტექნიკები: Collaborate/Problem Solve, Compromise, Withdraw, Force, Smooth",
          "Virtual/Hybrid Team-ის მართვა - ქართული გარემოს სპეციფიკა",
          "პრაქტიკული სავარჯიშო: Conflict Scenario Role-Play",
        ],
      },
      {
        title: "მოდული 3: კომუნიკაციის ოსტატობა",
        items: [
          "Communication Models PM-ში: Sender-Receiver, Noise, Feedback Loop",
          "Active Listening - 3 დონე + სავარჯიშოები",
          "Nonviolent Communication (NVC) - Marshall Rosenberg: Observation → Feeling → Need → Request",
          "Assertiveness vs. Aggressiveness vs. Passiveness - PM-ისთვის",
          "Difficult Conversations Framework: SBI (Situation-Behavior-Impact) + COIN მეთოდი",
          "Meeting Facilitation: Agenda Design, Timeboxing, Parking Lot, Decision Log",
          "პრაქტიკული სავარჯიშო: Facilitated Mock Meeting + Role-Play „კრიტიკული საუბარი სპონსორთან“",
        ],
      },
      {
        title: "მოდული 4: კორპორატიული კულტურა და PM",
        items: [
          "Edgar Schein-ის კულტურის მოდელი - 3 დონე: Artifacts, Values, Assumptions",
          "Hofstede Dimensions ქართულ კონტექსტში: Power Distance, Individualism, Uncertainty Avoidance",
          "Psychological Safety (Amy Edmondson) - ზომვა, დანერგვა, სარგებელი PM გუნდში",
          "ქართული სამუშაო კულტურის სპეციფიკა: ნეპოტიზმი, ურთიერთობის ზეწოლა, არაფორმალური გადაწყვეტილებები",
          "პრაქტიკული სავარჯიშო: Hofstede Online Assessment + Team Psychological Safety Survey",
        ],
      },
      {
        title: "მოდული 5: ცვლილებების მართვა (Change Management)",
        items: [
          "Change Management vs. Change Control - PM-ის 2 განსხვავებული კონტექსტი",
          "ADKAR მოდელი: Awareness → Desire → Knowledge → Ability → Reinforcement",
          "Kotter-ის 8 ნაბიჯი - „Leading Change“ PM პერსპექტივიდან",
          "Change Resistance ტიპები: ფიზიკური, ემოციური, ლოგიკური - სტრატეგია თითოეულისთვის",
          "Escalation of Commitment - „ჩვენ უკვე ამდენი გადავიხადეთ“ - Sunk Cost Fallacy",
          "ქართული Case Studies: Agile Transformation, ახალი ინსტრუმენტის შემოტანა, ჰიბრიდული სამუშაო",
          "პრაქტიკული სავარჯიშო: Change Management Plan + Stakeholder Resistance Map",
        ],
      },
      {
        title: "მოდული 6: PM-ის პირადი ეფექტიანობა",
        items: [
          "Time Management PM-ისთვის: Eisenhower Matrix, Time Boxing, Maker vs. Manager Schedule",
          "Cognitive Biases PM-ში: Optimism Bias, Sunk Cost Fallacy, Anchoring, Groupthink",
          "Ethics & Integrity PM-ში - PMI Code of Ethics: Responsibility, Respect, Fairness, Honesty",
          "Burnout პრევენცია - PM-ის ემოციური ჯანმრთელობა",
          "Personal PM Brand: LinkedIn, CV, Portfolio - ქართული ბაზრისთვის",
          "Career Path: Junior PM → Senior PM → Program Manager → PMO Lead → Director",
          "პრაქტიკული სავარჯიშო: Personal Development Plan (PDP) - 6-თვიანი PM კარიერული გეგმა",
        ],
      },
    ],
  },
];

const TH: Training[] = [
  {
    code: "TH-1",
    title: "რისკების მართვა - სიღრმისეული კურსი",
    audience: "Junior/Middle/Senior PM-ები; PM-ები, რომლებიც დონორებით დაფინანსებულ პროექტებს მართავენ.",
    duration: "4 შეხვედრა · 8 საათი · 2 კვირა",
    price: "400 ₾",
    summary:
      "კურსი ეძღვნება რისკების მართვის სრულ ციკლს - იდენტიფიცირებიდან მონიტორინგამდე. მონაწილეები ისწავლიან Risk Register-ის შედგენას, Risk Response სტრატეგიებს და Monitoring-ის სისტემის ორგანიზებას. კაზუსები ქართული კონტექსტიდანაა - მუნიციპალური, დონორული და კორპორაციული პროექტები. ეყრდნობა PMBOK® 8th-ის Uncertainty Performance Domain-ს და Rita Mulcahy-ის Risk Management-ის თავებს.",
    modules: [
      {
        title: "მოდული 1: Risk Identification & Assessment",
        items: [
          "Risk vs. Issue vs. Assumption vs. Dependency - ოთხი ცნების გამიჯვნა",
          "Risk Identification ტექნიკები: Brainstorming, Delphi, Interviews, Checklist, SWOT, Root Cause Analysis",
          "Risk Categorization - PMBOK® TEOF: Technical, External, Organizational, Project Management",
          "Probability & Impact Matrix - Heatmap (5×5): მწვანე, ყვითელი, წითელი ზონები",
          "Qualitative vs. Quantitative Risk Analysis - განსხვავება და გამოყენება",
          "EMV (Expected Monetary Value) + Decision Tree - რაოდენობრივი ანალიზი",
          "Monte Carlo Simulation - ინტერაქტიული სცენარი: ალბათობრივი ვადა და ბიუჯეტი",
          "პრაქტიკული სავარჯიშო: Risk Register სრული ფორმატით - ქართული პროექტის სცენარი",
        ],
      },
      {
        title: "მოდული 2: Risk Response & Monitoring",
        items: [
          "Response Strategies - Threats: Avoid, Transfer, Mitigate, Accept / Opportunities: Exploit, Share, Enhance, Accept",
          "Secondary Risks + Residual Risks - რა ახალი რისკი ჩნდება რეაგირების შემდეგ",
          "Contingency Reserve vs. Management Reserve - ვის ეკუთვნის რა ბიუჯეტი",
          "Risk Trigger + Early Warning Indicators - სიგნალების სისტემა",
          "Risk Escalation - Threshold-ების განსაზღვრა: რა დონეზე მოაქვს PM-ს Sponsor-თან",
          "Risk Reassessment Cadence - პერიოდული გადახედვის სქემა",
          "Case Study: ქართული დონორული პროექტი - ვალუტის რყევა, მოახლოებული ვადა, გუნდის ბრუნვა",
          "პრაქტიკული სავარჯიშო: Risk Response Plan + Risk Dashboard - Jira / Excel-ში",
        ],
      },
    ],
  },
  {
    code: "TH-2",
    title: "კომუნიკაცია პროექტებში - სრული სახელმძღვანელო",
    audience: "Junior/Middle/Senior PM-ები; გუნდების ხელმძღვანელები; NGO და საჯარო სექტორის PM-ები.",
    duration: "4 შეხვედრა · 8 საათი · 2 კვირა",
    price: "380 ₾",
    summary:
      "კომუნიკაციის მენეჯმენტი PMBOK®-ის მიხედვით პროექტის ერთ-ერთი ყველაზე კრიტიკული სფეროა - ხარვეზები პირდაპირ ნიშნავს მოსალოდნელი შედეგების ჩაშლას. კურსი ეყრდნობა PMBOK® 8th-ის Stakeholder და Team Performance Domain-ებს. პრაქტიკული ნაწილი მოიცავს Mock Meeting-ს და Role-Play-ს რეალური სცენარებით ქართული გარემოდან.",
    modules: [
      {
        title: "მოდული 1: კომუნიკაციის არქიტექტურა",
        items: [
          "Communication Management Plan - სტრუქტურა, ავტომატიზაცია, განახლების პოლიტიკა",
          "Stakeholder Communication Matrix - ვინ, რა, სიხშირე, ფორმატი, არხი, პასუხისმგებელი",
          "Push vs. Pull vs. Interactive Communication - სამი ტიპი და გამოყენება",
          "ფორმალური vs. არაფორმალური კომუნიკაცია - PM-ის ბალანსი",
          "Report Types: Status Report, Progress Report, Forecast Report, Variance Report",
          "Dashboard Design - ვიზუალური ანგარიშგება Jira / ClickUp / PowerBI",
          "პრაქტიკული სავარჯიშო: Communication Plan + Status Report Template",
        ],
      },
      {
        title: "მოდული 2: კომუნიკაცია ადამიანებთან - „რბილი“ ნაწილი",
        items: [
          "Active Listening - 3 დონე: Attentive, Responsive, Empathic + სავარჯიშოები",
          "Nonviolent Communication (NVC) - Marshall Rosenberg: Observation → Feeling → Need → Request",
          "Assertiveness vs. Aggressiveness vs. Passiveness - PM-ის ოპტიმალური პოზიცია",
          "Difficult Conversations Framework: SBI (Situation-Behavior-Impact) + COIN მეთოდი",
          "Cross-cultural Communication - ქართული ბაზრის კონტექსტი: ბანკი, NGO, მუნიციპალიტეტი",
          "Meeting Facilitation: Agenda Design, Timeboxing, Parking Lot, Decision Log",
          "პრაქტიკული სავარჯიშო: Facilitated Mock Meeting + Role-Play „კრიტიკული საუბარი სპონსორთან“",
        ],
      },
    ],
  },
  {
    code: "TH-3",
    title: "სტეიკჰოლდერების მართვა - სტრატეგიული მიდგომა",
    audience: "Middle/Senior PM-ები; NGO და საჯარო სექტორის PM-ები; Senior ხელმძღვანელები.",
    duration: "4 შეხვედრა · 8 საათი · 2 კვირა",
    price: "380 ₾",
    summary:
      "ST-3-ის გაფართოებული ვარიანტი - სიღრმისეული ანალიზი და სრული სტრატეგია. კურსი ეყრდნობა PMBOK® 8th-ის Stakeholder Performance Domain-ს. ყურადღება გამახვილებულია ქართული კონტექსტის სპეციფიკაზე: Influence Without Authority, ნეპოტიზმი, კოალიციის ჩამოყალიბება, Sponsor-თან კომუნიკაცია.",
    modules: [
      {
        title: "მოდული 1: სტეიკჰოლდერ-ეკოსისტემის სრული ანალიზი",
        items: [
          "Stakeholder Register - სრული ფორმატი: ID, Name, Role, Interest, Power, Attitude, Impact, Strategy",
          "Power/Interest, Power/Influence, Impact/Interest Matrices - 3 განსხვავებული ინსტრუმენტი",
          "Salience Model - Power + Legitimacy + Urgency: 7 სეგმენტი",
          "Dynamic Stakeholder Mapping - ყოველ პროექტის ეტაპზე განახლება",
          "Case Study: EU-დაფინანსებული პროექტი - 12 სტეიკჰოლდერი, 4 კვადრანტი, 3 ოპონენტი",
          "პრაქტიკული სავარჯიშო: სრული Stakeholder Map + Register - ქართული სცენარი",
        ],
      },
      {
        title: "მოდული 2: სტეიკჰოლდერების ჩართულობის სტრატეგია",
        items: [
          "Engagement Assessment Matrix: Unaware → Resistant → Neutral → Supportive → Leading",
          "Influence Without Authority - ქართული კონტექსტი: ოფიციალური vs. არაოფიციალური გავლენა",
          "Resistant Stakeholder Strategy - 5 ტექნიკა: One-on-One, Coalition, Data-Driven, Co-creation, Escalation",
          "Coalition Building - მოკავშირეების პოვნა და გამოყენება",
          "Sponsor Management - Exec-სთან კომუნიკაცია: სიხშირე, ფორმატი, „ცუდი ამბის“ გადაცემა",
          "პრაქტიკული სავარჯიშო: Engagement Strategy Plan + Resistant Stakeholder Role-Play",
        ],
      },
    ],
  },
  {
    code: "TH-4",
    title: "კორპორატიული კულტურა და ლიდერობა პროექტებში",
    audience: "Middle/Senior PM-ები; Agile Coaches; Change Management-ის სპეციალისტები.",
    duration: "4 შეხვედრა · 8 საათი · 2 კვირა",
    price: "400 ₾",
    summary:
      "DD-3-ის მოდული 3–4–5-ის გაფართოებული ვარიანტი - თემატური ჩაღრმავება კულტურასა და ცვლილებების მართვაში. კურსი სასარგებლოა PM-ებისთვის, რომლებიც ორგანიზაციულ ტრანსფორმაციებს ხელმძღვანელობენ ან ახალ კულტურულ გარემოში მუშაობენ. ეყრდნობა PMBOK® 8th-ის Team Performance Domain-ს.",
    modules: [
      {
        title: "მოდული 1: კულტურა, ნდობა, Psychological Safety",
        items: [
          "Edgar Schein-ის კულტურის მოდელი - 3 დონე: Artifacts, Values, Basic Assumptions",
          "Hofstede Dimensions ქართულ კონტექსტში: Power Distance, Individualism, Uncertainty Avoidance, Long-term Orientation",
          "Psychological Safety (Amy Edmondson) - ზომვა (Team Survey), დანერგვა, სარგებელი PM გუნდში",
          "ქართული სამუშაო კულტურის სპეციფიკა: „დიახ“-კულტურა, ხელმძღვანელის ავტორიტეტი, ურთიერთობა vs. პროცესი",
          "პრაქტიკული სავარჯიშო: Culture Assessment (Hofstede Tool) + Team Psychological Safety Survey",
        ],
      },
      {
        title: "მოდული 2: Change Management + ლიდერობა ცვლილებებში",
        items: [
          "ADKAR მოდელი - ეტაპობრივი ცვლილების მართვა + ხარვეზების დიაგნოსტიკა",
          "Kotter-ის 8 ნაბიჯი - „Leading Change“: Create Urgency → Build Coalition → Form Vision → Communicate → Enable → Generate Wins → Sustain → Anchor",
          "Change Resistance ტიპები: ფიზიკური, ემოციური, ლოგიკური - სტრატეგია თითოეულისთვის",
          "PM-ის როლი ორგანიზაციულ ცვლილებაში - Sponsor-ის, Change Agent-ისა და PM-ის განსხვავებული პასუხისმგებლობები",
          "ქართული Case Studies: Agile Transformation, ჰიბრიდული სამუშაო, ახალი ინსტრუმენტის შემოტანა",
          "პრაქტიკული სავარჯიშო: Change Management Plan + Stakeholder Resistance Map",
        ],
      },
    ],
  },
  {
    code: "TH-5",
    title: "Agile Mindset & Scrum Master-ის გზა",
    audience: "PM-ები, გუნდის ლიდერები, Scrum Master-ობის მსურველები.",
    duration: "6 შეხვედრა · 12 საათი · 3 კვირა",
    price: "550 ₾",
    summary:
      "DD-2-ის ინტენსიური ვარიანტი - Scrum Master-ობაზე ფოკუსით. კურსი შექმნილია იმ PM-ებისა და გუნდის ლიდერებისთვის, ვინც Scrum Master-ის ფუნქციის ათვისება სურს ქართული ბიზნეს-გარემოს სპეციფიკასთან ერთად. ეყრდნობა Scrum Guide 2020-ს და Mike Griffiths-ის PMI-ACP® Exam Prep-ს.",
    modules: [
      {
        title: "მოდული 1: Agile Mindset სიღრმეში",
        items: [
          "Agile Manifesto + 12 პრინციპი - კონკრეტული სიტუაციების გარჩევა",
          "Agile-ი, როდესაც „არ მუშაობს“ - კულტურა, ლიდერობა, Governance",
          "Agile Maturity Assessment - ორგანიზაციის დიაგნოსტიკა",
          "პრაქტიკული სავარჯიშო: Agile Readiness Assessment",
        ],
      },
      {
        title: "მოდული 2: Scrum Guide 2020 - სრული ანალიზი",
        items: [
          "Scrum Guide-ის 2020 ცვლილებები: Team → Scrum Team, Events-ის განახლება",
          "Product Goal vs. Sprint Goal - ახალი კონცეფცია სიღრმეში",
          "Scrum-ის ამოუხსნელი სიტუაციები - FAQ ქართული კონტექსტიდან",
          "პრაქტიკული სავარჯიშო: Scrum Guide Trivia + სცენარის გარჩევა",
        ],
      },
      {
        title: "მოდული 3: Scrum Master-ის ფასილიტაცია და Impediment Removal",
        items: [
          "Servant Leadership - Scrum Master-ის 5 ძირითადი სფერო",
          "Facilitation ტექნიკები: Liberating Structures, Fist-to-Five, Dot Voting, Silent Brainstorming",
          "Impediment Log - ვინ, რა, სად, როდის მოგვარდება",
          "Scrum Master vs. PM - განსხვავება, ინტეგრაცია, ქართული სცენარი",
          "პრაქტიკული სავარჯიშო: Retrospective ფასილიტაცია - 4 სხვადასხვა ფორმატი",
        ],
      },
      {
        title: "მოდული 4: Kanban + Lean + ნარჩენების ელიმინაცია",
        items: [
          "Kanban სისტემა სიღრმეში: Service Level Expectations, Replenishment Meeting, Flow Review",
          "Lean Thinking: Value, Value Stream, Flow, Pull, Perfection",
          "7 ტიპის Waste + ელიმინაციის ტაქტიკები",
          "Scrumban - Scrum + Kanban ჰიბრიდი",
        ],
      },
      {
        title: "მოდული 5: Hybrid - Agile + Waterfall ქართული გარემოსთვის",
        items: [
          "Hybrid-ის გამოყენება: საჯარო სექტორი, NGO, ბანკები, სტარტაპი",
          "Rolling Wave Planning ჰიბრიდულ კონტექსტში",
          "ფაზები Waterfall-ით + Sprint-ები Agile-ით - კომბინირების ლოგიკა",
          "პრაქტიკული სავარჯიშო: Hybrid Project Plan - ქართული კომპანიის სცენარი",
        ],
      },
      {
        title: "მოდული 6: სიმულაცია - სრული Scrum Project (3 Sprint) Jira-ზე",
        items: [
          "Sprint 1: Planning → Daily → Review → Retro",
          "Sprint 2: Backlog Refinement + Velocity კორექცია + Impediment Removal",
          "Sprint 3: Release Planning + Product Increment + Final Retrospective",
          "Debrief: რა გამოვიდა, რა ვერ გამოვიდა, რა შევცვლიდით",
        ],
      },
    ],
  },
];

const CORP: Training[] = [
  {
    code: "CORP-1",
    title: "PM Fundamentals for Non-PM Teams",
    audience: "გუნდები, რომელთა წევრები მონაწილეობენ პროექტებში, მაგრამ არ არიან PM-ები.",
    duration: "4 საათი · 1 შეხვედრა",
    price: "ინდივიდუალური შეთანხმება",
    summary:
      "მოკლე, მაღალი ღირებულების სესია - გუნდი იწყებს „პროექტული აზროვნებით“ მუშაობას: როლები, ვადები, კომუნიკაცია, რისკი.",
    modules: [
      {
        title: "შინაარსი",
        items: [
          "რა არის პროექტი - Triple Constraint",
          "ვინ რას აკეთებს - PM, Sponsor, Team, Stakeholder",
          "Status, Risk, Issue - სამი მთავარი სიგნალი",
          "სამუშაო ბარათები და სტატუსები - Trello/ClickUp-ში პრაქტიკა",
        ],
      },
    ],
  },
  {
    code: "CORP-2",
    title: "Agile Introduction for Leadership",
    audience: "C-level, Head of Department, Senior მენეჯერები.",
    duration: "3 საათი · 1 შეხვედრა",
    price: "ინდივიდუალური შეთანხმება",
    summary:
      "ლიდერებისთვის - როდის ნამდვილად მუშაობს Agile, რა გადაწყვეტილებები სჭირდება ორგანიზაციას და როგორ უნდა შეფასდეს მზადყოფნა.",
    modules: [
      {
        title: "შინაარსი",
        items: [
          "Agile Mindset vs. Agile Theatre",
          "სად მუშაობს Agile, სად - არ მუშაობს",
          "ლიდერის როლი ტრანსფორმაციაში",
          "Agile Readiness Quick Check",
        ],
      },
    ],
  },
  {
    code: "CORP-3",
    title: "Risk Workshop for Project Teams",
    audience: "სამუშაო ჯგუფები, რომლებიც კონკრეტულ პროექტს ანახორციელებენ.",
    duration: "4 საათი · 1 შეხვედრა",
    price: "ინდივიდუალური შეთანხმება",
    summary:
      "ფასილიტირებული სამუშაო სესია გუნდის რეალურ პროექტზე - გამოვა მზა Risk Register, Response Plan და Trigger-ები.",
    modules: [
      {
        title: "შინაარსი",
        items: [
          "Risk Identification - Brainstorming + Checklist",
          "Probability/Impact Matrix",
          "Response Strategies + Owner",
          "Risk Register, Trigger-ები, Reporting",
        ],
      },
    ],
  },
  {
    code: "CORP-4",
    title: "Stakeholder Management for Executives",
    audience: "Executives, Heads, NGO Directors.",
    duration: "3 საათი · 1 შეხვედრა",
    price: "ინდივიდუალური შეთანხმება",
    summary:
      "უმაღლესი დონის სტრატეგია სტეიკჰოლდერებთან: Influence Without Authority, Coalition Building, Sponsor კომუნიკაცია.",
    modules: [
      {
        title: "შინაარსი",
        items: [
          "Power/Interest + Salience Model",
          "Engagement Strategy",
          "Resistant Stakeholder Tactics",
          "Sponsor & Board Communication",
        ],
      },
    ],
  },
];

const CATEGORIES: Category[] = [
  {
    num: "01",
    key: "short",
    tag: "Short Format Trainings",
    title: "მოკლე ფორმატის ტრენინგები (ST)",
    intro:
      "სწრაფი, ფოკუსირებული შესავალი - 1 კვირაში. იდეალურია PM-პროფესიის გასაცნობად ან კონკრეტული უნარის ასაწევად.",
    accent: "mint",
    items: ST,
  },
  {
    num: "02",
    key: "deep",
    tag: "Deep Dive Trainings",
    title: "სიღრმისეული ტრენინგები (Deep Dive - DD)",
    intro:
      "3-კვირიანი სიღრმისეული პროგრამები - სრული PM პაკეტი მონაწილის რეალურ პროექტზე დაყრდნობით.",
    accent: "navy",
    items: DD,
  },
  {
    num: "03",
    key: "thematic",
    tag: "Specialized · Thematic Trainings",
    title: "სპეციალიზებული თემატური ტრენინგები (TH)",
    intro:
      "ფოკუსირებული თემები - რისკი, კომუნიკაცია, სტეიკჰოლდერი, კულტურა, Scrum Master-ის გზა.",
    accent: "blend",
    items: TH,
  },
  {
    num: "04",
    key: "corporate",
    tag: "Corporate Trainings",
    title: "კორპორატიული ტრენინგები ორგანიზაციებისთვის",
    intro:
      "ყველა ზემოთ ჩამოთვლილი კურსი ხელმისაწვდომია კორპორატიულ ფორმატში - კომპანიის სფეროს, გუნდის სიდიდისა და მიზნების მიხედვით მორგებული Case Study-ებით. Onsite / Online · ქართულად.",
    accent: "deep",
    items: CORP,
  },
];

function accentStyle(a: Category["accent"]) {
  switch (a) {
    case "mint":
      return { bg: "var(--mint-soft)", border: "var(--mint)", text: "var(--navy-deep)", dot: "var(--mint)" };
    case "navy":
      return { bg: "color-mix(in oklab, var(--navy) 8%, white)", border: "color-mix(in oklab, var(--navy) 35%, white)", text: "var(--navy-deep)", dot: "var(--navy)" };
    case "blend":
      return { bg: "color-mix(in oklab, var(--mint) 18%, white)", border: "color-mix(in oklab, var(--mint) 55%, white)", text: "var(--navy-deep)", dot: "var(--navy)" };
    case "deep":
      return { bg: "var(--navy-deep)", border: "var(--navy-deep)", text: "white", dot: "var(--mint)" };
  }
}

export function Trainings() {
  return (
    <section id="trainings" className="section-y bg-surface">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">ტრენინგ პროგრამები</span>
          <h2 className="heading-lg mt-4 text-balance">
            პროფესიული ტრენინგები - <span className="text-navy">პროექტების მართვა, ლიდერობა, Agile და გუნდის განვითარება</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base md:text-lg">
            პრაქტიკული სასწავლო პროგრამები პროექტების მენეჯერებისთვის, ლიდერებისთვის, გუნდის ხელმძღვანელებისთვის, Agile პრაქტიკოსებისთვის და პროფესიული განვითარების მსურველებისთვის. კურსები აერთიანებს პროექტების მართვას, ლიდერობას, გუნდის მართვას, Agile მიდგომებსა და პროფესიული ზრდის ინსტრუმენტებს.
          </p>
          <p className="mt-3 text-ink-soft text-base md:text-lg">
            ფორმატი: ონლაინ (Google Meet / MS Teams / Zoom) ან ფიზიკურად (თბილისი). რეგიონებში ჩატარება შესაძლებელია წინასწარი შეთანხმებით. ენა: ქართული.
          </p>
          <div className="mt-6 rounded-2xl border p-5 md:p-6" style={{ borderColor: "var(--line)", background: "white" }}>
            <h3 className="text-sm font-black tracking-[0.18em] uppercase" style={{ color: "var(--navy-deep)" }}>
              სასწავლო მასალები და რესურსები
            </h3>
            <p className="mt-3 text-sm md:text-base text-ink-soft leading-relaxed">
              სასწავლო პროგრამები ეფუძნება საერთაშორისო სტანდარტებს, ავტორიტეტულ პროფესიულ ლიტერატურას, პრაქტიკულ მაგალითებსა და ტრენერის მრავალწლიან გამოცდილებას. აქცენტი კეთდება პრაქტიკულ სწავლებაზე, რეალურ სამუშაო გარემოსთან კავშირსა და დაუყოვნებლივ გამოყენებად უნარებზე.
            </p>
            <ul className="mt-4 space-y-2 text-sm md:text-base text-ink-soft leading-relaxed list-disc pl-5">
              <li><strong>PMBOK® Guide - Eighth Edition</strong> - Project Management Institute (PMI)</li>
              <li><strong>PMP® Exam Prep, 10th Edition</strong> - Rita Mulcahy</li>
              <li><strong>PMI-ACP® Exam Prep, 2nd Edition</strong> - Mike Griffiths</li>
              <li><strong>Agile Practice Guide</strong> - Project Management Institute (PMI)</li>
              <li>ტრენერის მიერ მომზადებული სალექციო მასალები</li>
              <li>რეკომენდებული პროფესიული რესურსები, სასარგებლო ბმულები და ელექტრონული სასწავლო მასალები</li>
              <li>რეალურ პრაქტიკაზე დაფუძნებული ქართული და საერთაშორისო Case Study-ები, ბიზნეს-სცენარები, სიმულაციები, ჯგუფური სავარჯიშოები და პრაქტიკული დავალებები, რომლებიც მონაწილეებს ეხმარება მიღებული ცოდნის რეალურ სამუშაო გარემოში გამოყენებაში</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 space-y-6">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.key} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ c }: { c: Category }) {
  const [open, setOpen] = useState(false);
  const [activeCode, setActiveCode] = useState<string | null>(null);
  const s = accentStyle(c.accent);
  const dark = c.accent === "deep";

  return (
    <article
      id={`tr-${c.key}`}
      className="scroll-mt-32 rounded-3xl border overflow-hidden shadow-[var(--shadow-soft)]"
      style={{
        background: dark ? "var(--navy-deep)" : "white",
        color: dark ? "white" : undefined,
        borderColor: "var(--line)",
      }}
    >
      <header className="p-7 md:p-9 grid lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-9">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-xs font-black"
              style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}` }}
            >
              {c.num}
            </span>
            <span
              className="text-[10px] font-black tracking-[0.22em] uppercase"
              style={{ color: dark ? "var(--mint-bright)" : "var(--navy-soft)" }}
            >
              {c.tag}
            </span>
            <span
              className="text-[11px] font-black px-2.5 py-1 rounded-full"
              style={{ background: dark ? "rgba(255,255,255,0.08)" : "var(--surface)", color: dark ? "white" : "var(--navy-deep)" }}
            >
              {c.items.length} {c.items.length === 1 ? "კურსი" : "კურსი"}
            </span>
          </div>
          <h3
            className="heading-md mt-4"
            style={{ color: dark ? "white" : "var(--navy-deep)" }}
          >
            {c.title}
          </h3>
          <p
            className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed"
            style={{ color: dark ? "rgba(255,255,255,0.82)" : "var(--ink-soft)" }}
          >
            {c.intro}
          </p>
        </div>
        <div className="lg:col-span-3 flex lg:justify-end">
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold transition"
            style={{
              background: dark ? "var(--mint)" : "var(--navy-deep)",
              color: dark ? "var(--navy-deep)" : "white",
            }}
            aria-expanded={open}
          >
            {open ? "დახურე" : "ნახე ყველა კურსი"} <span className={`transition ${open ? "rotate-90" : ""}`}>→</span>
          </button>
        </div>
      </header>

      {open && (
        <div
          className="px-7 md:px-9 pb-9 grid md:grid-cols-2 gap-4"
          style={{ borderTop: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "var(--line)"}` }}
        >
          {c.items.map((t) => (
            <TrainingItem
              key={t.code}
              t={t}
              dark={dark}
              accent={s}
              active={activeCode === t.code}
              onToggle={() => setActiveCode(activeCode === t.code ? null : t.code)}
            />
          ))}
        </div>
      )}
    </article>
  );
}

function TrainingItem({
  t,
  dark,
  accent,
  active,
  onToggle,
}: {
  t: Training;
  dark: boolean;
  accent: ReturnType<typeof accentStyle>;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-2xl p-5 md:p-6 border transition"
      style={{
        background: dark ? "rgba(255,255,255,0.04)" : "white",
        borderColor: dark ? "rgba(255,255,255,0.12)" : "var(--line)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{ background: accent.bg, color: accent.text, border: `1px solid ${accent.border}` }}
        >
          {t.code}
        </span>
        <a
          href="#contact"
          className="text-[11px] font-black uppercase tracking-widest rounded-full px-3 py-1.5 border transition"
          style={{
            color: dark ? "var(--mint-bright)" : "var(--navy)",
            borderColor: dark ? "rgba(255,255,255,0.25)" : "var(--line)",
          }}
        >
          დამიკავშირდით
        </a>
      </div>
      <h4
        className="mt-3 text-base md:text-lg font-extrabold leading-tight"
        style={{ color: dark ? "white" : "var(--ink)" }}
      >
        {t.title}
      </h4>
      <div className="mt-3 grid gap-1.5 text-[12.5px]" style={{ color: dark ? "rgba(255,255,255,0.78)" : "var(--ink-soft)" }}>
        <p><span className="font-bold" style={{ color: dark ? "white" : "var(--ink)" }}>ვისთვის:</span> {t.audience}</p>
        <p><span className="font-bold" style={{ color: dark ? "white" : "var(--ink)" }}>ხანგრძლივობა:</span> {t.duration}</p>
      </div>
      <p
        className="mt-3 text-[13px] md:text-sm leading-relaxed"
        style={{ color: dark ? "rgba(255,255,255,0.82)" : "var(--ink-soft)" }}
      >
        {t.summary}
      </p>

      <button
        onClick={onToggle}
        className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest"
        style={{ color: dark ? "var(--mint-bright)" : "var(--navy)" }}
        aria-expanded={active}
      >
        {active ? "დახურე" : "სრული სილაბუსი"} <span className={`transition ${active ? "rotate-180" : ""}`}>▾</span>
      </button>

      {active && (
        <div
          className="mt-4 space-y-4 pt-4"
          style={{ borderTop: `1px dashed ${dark ? "rgba(255,255,255,0.18)" : "var(--line)"}` }}
        >
          {t.modules.map((m) => (
            <div key={m.title}>
              <p
                className="text-[12.5px] font-extrabold"
                style={{ color: dark ? "white" : "var(--navy-deep)" }}
              >
                ★ {m.title}
              </p>
              <ul className="mt-2 space-y-1.5">
                {m.items.map((it) => (
                  <li
                    key={it}
                    className="flex gap-2.5 text-[13px] leading-relaxed"
                    style={{ color: dark ? "rgba(255,255,255,0.85)" : "var(--ink)" }}
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: accent.dot }} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
