import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  responsibilities: string[];
}

export default function ExperienceCard({
  title,
  company,
  location,
  type,
  duration,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <Card className="p-6 space-y-4 border-l-4 border-l-primary" data-testid={`card-experience-${company.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="font-medium">{company}</span>
            </div>
          </div>
          <Badge variant="secondary" className="w-fit">{type}</Badge>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{duration}</span>
          </div>
        </div>
      </div>

      <ul className="space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-sm text-foreground flex items-start gap-2">
            <span className="text-primary mt-1">▹</span>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
