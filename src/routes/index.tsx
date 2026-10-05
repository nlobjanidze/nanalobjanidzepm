import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { CurrentProjects } from "@/components/site/CurrentProjects";
import { About } from "@/components/site/About";
import { Certifications } from "@/components/site/Certifications";
import { Services } from "@/components/site/Services";
import { Trainings } from "@/components/site/Trainings";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { LeadershipRecognition } from "@/components/site/LeadershipRecognition";
import { GlobalEngagement } from "@/components/site/GlobalEngagement";

import { Testimonials } from "@/components/site/Testimonials";
import { ContactForm } from "@/components/site/ContactForm";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ნანა ლობჯანიძე | PMP® პროექტების მართვის კონსულტანტი" },
      { name: "description", content: "ნანა ლობჯანიძე - დამოუკიდებელი პროექტებისა და პროცესების მართვის კონსულტანტი. მიმდინარე პროექტები, პროფესიული ტრენინგები და საკონსულტაციო მომსახურება." },
      { property: "og:title", content: "ნანა ლობჯანიძე | პროექტების მართვის კონსულტანტი" },
      { property: "og:description", content: "დამოუკიდებელი საკონსულტაციო საქმიანობა, მიმდინარე პროექტები და პროფესიული ტრენინგები." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <CurrentProjects />
        <About />
        <Services />
        <Trainings />
        <Experience />
        <Projects />
        <LeadershipRecognition />
        <GlobalEngagement />

        <Certifications />
        <Testimonials />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
