export type Language = "ka" | "en";

export const translations = {
  ka: {
    nav: {
      about: "შესახებ",
      services: "სერვისები",
      trainings: "ტრენინგები",
      experience: "გამოცდილება",
      profile: "პროფილი",
      consultation: "დაჯავშნე კონსულტაცია",
    },

    hero: {
      eyebrow:
        "ნანა ლობჯანიძე · PMP® Certified Project Management Consultant",
      title:
        "ქაოსური პროექტებიდან — მკაფიო, დაგეგმილ და მართვად პროცესებამდე",
      description:
        "ვეხმარები ორგანიზაციებსა და გუნდებს პროექტების სტრუქტურირებაში, დაგეგმვასა და ეფექტურად შესრულებაში პროექტების მართვის პრაქტიკული მიდგომებით.",
      bullets: [
        "გაურკვეველი ვადების და პასუხისმგებლობების მოწესრიგება",
        "ქაოსური პროექტების სტრუქტურირებულ გეგმებად გადაყვანა",
        "პროცესების გამართვა და კონტროლის სისტემის შექმნა",
        "გუნდების ეფექტურობის გაზრდა და შესრულების გაუმჯობესება",
      ],
      primaryButton: "დაჯავშნე კონსულტაცია",
      secondaryButton: "გაიგე მეტი →",
      credentials:
        "PMP® Certified · Project Management Practitioner · PMI Leadership Experience",
    },

    stats: {
      management: "წლის მენეჯერული გამოცდილება",
      projectManagement: "წელი პროექტების მართვაში",
      grants: "გაცემული გრანტი",
      projects: "წარმატებული პროექტი",
      certification: "Certified PMI · 2024",
      managedProjects: "მართული პროექტები",
    },
  },

  en: {
    nav: {
      about: "About",
      services: "Services",
      trainings: "Trainings",
      experience: "Experience",
      profile: "Profile",
      consultation: "Book a Consultation",
    },

    hero: {
      eyebrow:
        "Nana Lobjanidze · PMP® Certified Project Management Consultant",
      title:
        "From chaotic projects to clear, structured and manageable processes",
      description:
        "I help organizations and teams structure, plan and deliver projects effectively through practical project management approaches.",
      bullets: [
        "Bringing clarity to uncertain timelines and responsibilities",
        "Turning chaotic projects into structured, actionable plans",
        "Improving processes and building effective control systems",
        "Increasing team efficiency and improving performance",
      ],
      primaryButton: "Book a Consultation",
      secondaryButton: "Learn More →",
      credentials:
        "PMP® Certified · Project Management Practitioner · PMI Leadership Experience",
    },

    stats: {
      management: "years of management experience",
      projectManagement: "years in project management",
      grants: "grant funding awarded",
      projects: "successful projects",
      certification: "Certified PMI · 2024",
      managedProjects: "projects managed",
    },
  },
} as const;

export type Translations = typeof translations;
