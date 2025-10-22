import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Award, ExternalLink } from "lucide-react";
import { portfolioData } from "@shared/schema";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const achievementIcons = [Trophy, Award];

export function Achievements() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="achievements"
      ref={ref as any}
      className={`py-16 md:py-24 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      data-testid="section-achievements"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-achievements-heading">
            Achievements
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.achievements.map((achievement, index) => {
            const Icon = achievementIcons[index % achievementIcons.length];
            return (
              <Card
                key={index}
                className="p-6 md:p-8 hover-elevate transition-all"
                data-testid={`card-achievement-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-chart-3/10 rounded-lg flex-shrink-0">
                    <Icon className="h-8 w-8 text-chart-3" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2" data-testid={`text-achievement-title-${index}`}>
                      {achievement.title}
                    </h3>
                    <p className="text-base text-muted-foreground" data-testid={`text-achievement-description-${index}`}>
                      {achievement.description}
                    </p>
                    {achievement.link && achievement.link !== "#" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2 px-0 h-auto text-primary hover:text-primary"
                        asChild
                        data-testid={`button-achievement-link-${index}`}
                      >
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View Details
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
