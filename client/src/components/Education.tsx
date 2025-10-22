import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { portfolioData } from "@shared/schema";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Education() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="education"
      ref={ref as any}
      className={`py-16 md:py-24 bg-card transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      data-testid="section-education"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-education-heading">
            Education
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border hidden md:block"></div>

          {/* Education Items */}
          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary border-4 border-card hidden md:block"></div>

                <Card className="md:ml-20 p-6 md:p-8 hover-elevate transition-all" data-testid={`card-education-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground" data-testid={`text-edu-institution-${index}`}>
                          {edu.institution}
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground mt-1" data-testid={`text-edu-degree-${index}`}>
                          {edu.degree}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>

                      {edu.grade && (
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                          <span>Grade: {edu.grade}</span>
                        </div>
                      )}
                    </div>
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
