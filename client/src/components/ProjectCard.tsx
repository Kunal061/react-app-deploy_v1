import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  details,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all space-y-4" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-sm text-foreground flex items-start gap-2">
            <span className="text-primary mt-1">▹</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex gap-3 pt-2">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="outline" data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" data-testid={`button-live-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </a>
        )}
      </div>
    </Card>
  );
}
