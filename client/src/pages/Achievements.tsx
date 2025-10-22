import Navbar from "@/components/Navbar";
import AchievementCard from "@/components/AchievementCard";
import { Card } from "@/components/ui/card";
import { Users, Shield } from "lucide-react";

const achievements = [
  {
    title: "TryHackMe Top 8% | Level 8",
    description:
      "Learned cybersecurity skills and hands-on experience by solving rooms and labs on the platform.",
    icon: "target" as const,
  },
  {
    title: "Ranked 2nd, E-Cell Pitching Competition",
    description:
      "Jawaharlal Nehru University (JNU), Delhi - Project: EVARA",
    icon: "trophy" as const,
  },
];

const leadership = [
  {
    title: "Cybersecurity CO-LEAD",
    organization: "Deviators Club, Dronacharya College of Engineering",
    duration: "July 2025 – Present",
    icon: Shield,
  },
  {
    title: "Networking Lead",
    organization: "Gurugram Police CyberCell Internship",
    duration: "June 2025 – July 2025",
    icon: Users,
  },
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Achievements & <span className="text-primary">Leadership</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and leadership roles in cybersecurity
          </p>
        </div>

        <div className="space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <AchievementCard key={achievement.title} {...achievement} />
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leadership.map((role) => {
                const Icon = role.icon;
                return (
                  <Card
                    key={role.title}
                    className="p-6 hover-elevate transition-all space-y-3"
                    data-testid={`card-leadership-${role.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">
                        {role.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {role.organization}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {role.duration}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
