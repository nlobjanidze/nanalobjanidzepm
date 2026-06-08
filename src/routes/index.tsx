import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Certifications } from "@/components/site/Certifications";
import { Services } from "@/components/site/Services";
import { Trainings } from "@/components/site/Trainings";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { LeadershipRecognition } from "@/components/site/LeadershipRecognition";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactForm } from "@/components/site/ContactForm";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Services />
        <Trainings />
        <Experience />
        <Projects />
        <LeadershipRecognition />
        <Certifications />
        <Testimonials />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
