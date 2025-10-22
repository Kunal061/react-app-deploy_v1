import { Card } from "@/components/ui/card";
import { Trophy, Target } from "lucide-react";

interface AchievementCardProps {
  title: string;
  description: string;
  icon?: "trophy" | "target";
}

export default function AchievementCard({ title, description, icon = "trophy" }: AchievementCardProps) {
  const Icon = icon === "trophy" ? Trophy : Target;
  
  return (
    <Card 
      className="p-6 hover-elevate transition-all space-y-3" 
      data-testid={`card-achievement-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-center gap-3">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Card>
  );
}
