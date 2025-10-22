import { Card } from "@/components/ui/card";
import { portfolioData } from "@shared/schema";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  SiPython,
  SiGnubash,
  SiHtml5,
  SiCss3,
  SiYaml,
  SiDocker,
  SiJenkins,
  SiApache,
  SiLinux,
  SiGit,
  SiAmazon,
  SiGithub,
} from "react-icons/si";
import { Code2, Cloud, FileCode, Server } from "lucide-react";

const skillIcons: Record<string, any> = {
  Python: SiPython,
  Bash: SiGnubash,
  HTML: SiHtml5,
  CSS: SiCss3,
  Java: Code2,
  YAML: SiYaml,
  Docker: SiDocker,
  Jenkins: SiJenkins,
  Apache2: SiApache,
  "Linux CLI": SiLinux,
  "VS Code": FileCode,
  Git: SiGit,
  AWS: SiAmazon,
  Azure: Server,
  "Linux (Ubuntu)": SiLinux,
  GitHub: SiGithub,
  "Docker Hub": SiDocker,
  Groovy: Code2,
  DSL: Code2,
};

export function Skills() {
  const categories = ["Languages", "Tools", "Platforms"] as const;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="skills"
      ref={ref as any}
      className={`py-16 md:py-24 bg-card transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      data-testid="section-skills"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-skills-heading">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const categorySkills = portfolioData.skills.filter(
              (skill) => skill.category === category
            );

            return (
              <Card
                key={category}
                className="p-6 md:p-8 hover-elevate transition-all"
                data-testid={`card-skills-${category.toLowerCase()}`}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {categorySkills.map((skill) => {
                    const Icon = skillIcons[skill.name];
                    return (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 p-3 rounded-md hover-elevate transition-all"
                        data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {Icon && (
                          <Icon className="h-8 w-8 text-primary" />
                        )}
                        <span className="text-sm font-medium text-center text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
