import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { portfolioData } from "@shared/schema";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      ref={ref as any}
      className={`py-16 md:py-24 bg-card transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      data-testid="section-projects"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-projects-heading">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover-elevate transition-all flex flex-col"
              data-testid={`card-project-${index}`}
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>

                <p className="text-base text-muted-foreground" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-tech-${index}-${idx}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                      data-testid={`text-highlight-${index}-${idx}`}
                    >
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 mt-6 pt-4 border-t border-border">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                    data-testid={`button-github-${index}`}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    size="sm"
                    className="flex-1"
                    asChild
                    data-testid={`button-live-${index}`}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
