import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Certifications } from "@/components/site/Certifications";
import { Services } from "@/components/site/Services";
import { Trainings } from "@/components/site/Trainings";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { Recognition } from "@/components/site/Recognition";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
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
        <Certifications />
        <Recognition />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
