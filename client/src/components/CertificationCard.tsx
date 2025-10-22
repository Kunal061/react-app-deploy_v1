import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

interface CertificationCardProps {
  name: string;
  issuer: string;
  icon?: string;
}

export default function CertificationCard({ name, issuer, icon }: CertificationCardProps) {
  return (
    <Card 
      className="p-6 hover-elevate transition-all flex items-start gap-4" 
      data-testid={`card-certification-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="p-3 bg-primary/10 rounded-lg">
        <Award className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <Badge variant="outline" className="text-xs">
          {issuer}
        </Badge>
      </div>
    </Card>
  );
}
