import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { portfolioData } from "@shared/schema";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref as any}
      className={`py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-chart-2/5 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      data-testid="section-contact"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-contact-heading">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about cloud and DevOps technologies!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button
            variant="outline"
            size="lg"
            className="h-auto py-6 flex-col gap-3 hover-elevate"
            asChild
            data-testid="button-contact-email"
          >
            <a href={`mailto:${portfolioData.email}`}>
              <Mail className="h-8 w-8 text-primary" />
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">Email</div>
                <div className="text-sm font-medium break-all">{portfolioData.email}</div>
              </div>
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-auto py-6 flex-col gap-3 hover-elevate"
            asChild
            data-testid="button-contact-phone"
          >
            <a href={`tel:${portfolioData.phone}`}>
              <Phone className="h-8 w-8 text-primary" />
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">Phone</div>
                <div className="text-sm font-medium">{portfolioData.phone}</div>
              </div>
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-auto py-6 flex-col gap-3 hover-elevate"
            asChild
            data-testid="button-contact-linkedin"
          >
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-8 w-8 text-primary" />
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">LinkedIn</div>
                <div className="text-sm font-medium">Connect</div>
              </div>
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-auto py-6 flex-col gap-3 hover-elevate"
            asChild
            data-testid="button-contact-github"
          >
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-8 w-8 text-primary" />
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">GitHub</div>
                <div className="text-sm font-medium">Follow</div>
              </div>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
