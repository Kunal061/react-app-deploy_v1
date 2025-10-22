import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { portfolioData } from "@shared/schema";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={ref as any}
      className={`py-16 md:py-24 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      data-testid="section-experience"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-experience-heading">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>

                <Card className="md:ml-20 p-6 md:p-8 hover-elevate transition-all" data-testid={`card-experience-${index}`}>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground" data-testid={`text-experience-title-${index}`}>
                          {exp.title}
                        </h3>
                        <p className="text-lg font-medium text-primary mt-1" data-testid={`text-experience-company-${index}`}>
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-base text-muted-foreground"
                          data-testid={`text-responsibility-${index}-${idx}`}
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
