import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface TechCategoryProps {
  title: string;
  items: string[];
}

export default function TechCategory({ title, items }: TechCategoryProps) {
  return (
    <Card className="p-6 space-y-4" data-testid={`card-tech-category-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="px-4 py-2 text-sm hover-elevate"
          >
            {item}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
