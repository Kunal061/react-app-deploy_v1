import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { portfolioData } from "@shared/schema";
import heroImage from "@assets/generated_images/DevOps_cloud_workspace_hero_background_702ac5af.png";

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = portfolioData.title;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="DevOps Cloud Workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="space-y-8">
          {/* Name */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground"
            data-testid="text-name"
          >
            {portfolioData.name}
          </h1>

          {/* Animated Terminal Title */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-primary text-2xl md:text-3xl font-mono">$</span>
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-mono text-foreground min-h-[3rem] flex items-center"
              data-testid="text-title"
            >
              {displayedText}
              <span className="inline-block w-3 h-8 md:h-10 bg-primary ml-2 animate-pulse"></span>
            </p>
          </div>

          {/* Location */}
          <p className="text-lg md:text-xl text-muted-foreground" data-testid="text-location">
            📍 {portfolioData.location}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              size="icon"
              variant="outline"
              className="hover-elevate"
              asChild
              data-testid="button-github"
            >
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="hover-elevate"
              asChild
              data-testid="button-linkedin"
            >
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="hover-elevate"
              asChild
              data-testid="button-email"
            >
              <a href={`mailto:${portfolioData.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="min-w-[200px]"
              data-testid="button-view-projects"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="min-w-[200px] backdrop-blur-sm"
              data-testid="button-contact"
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
