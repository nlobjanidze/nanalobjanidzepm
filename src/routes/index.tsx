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
import { LanguageProvider } from "@/lib/LanguageContext";
import { LocalizedMetadata } from "@/lib/LocalizedMetadata";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "პროექტების მართვის ტრენინგები და კონსულტაცია | ნანა ლობჯანიძე" },
      { name: "description", content: "PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი და ტრენერი საქართველოში. კორპორაციული ტრენინგები, პროექტების მართვის კონსულტაცია და მენტორინგი." },
      { property: "og:title", content: "პროექტების მართვის ტრენინგები და კონსულტაცია | ნანა ლობჯანიძე" },
      { property: "og:description", content: "პროექტების მართვის კორპორაციული ტრენინგები, კონსულტაცია და მენტორინგი საქართველოში." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://nanalobjanidze.ge/" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://nanalobjanidze.ge/" }],
  }),
});

function Index() {
  return (
    <LanguageProvider>
    <LocalizedMetadata />
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
    </LanguageProvider>
  );
}
