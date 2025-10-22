import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import rishaImage from "@assets/image_1760809293941.png";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-14 pb-32">
      <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-in">
        <div className="flex justify-center mb-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl"></div>
            <img
              src={rishaImage}
              alt="Risha Batra"
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-primary/30"
              data-testid="img-profile"
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-1">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium">Risha Batra</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
            <span className="text-foreground">
              From threats to <span className="text-primary">defense</span>,
            </span>
          </h1>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
            <span className="text-foreground">
              I turn <span className="text-primary">vulnerabilities</span> into
            </span>
          </h1>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
            <span className="text-primary">fortified systems.</span>
          </h1>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed pt-2">
          Cybersecurity enthusiast with experience in <span className="text-foreground font-semibold">OSINT investigations</span>, 
          <span className="text-foreground font-semibold"> vulnerability assessment</span>, and 
          <span className="text-foreground font-semibold"> incident response</span>. 
          Passionate about securing systems and solving real-world security challenges.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-3">
          <Link href="/projects">
            <Button 
              size="sm" 
              className="group px-5"
              data-testid="button-view-projects"
            >
              View Projects
              <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              size="sm" 
              variant="outline" 
              className="px-5"
              data-testid="button-contact"
            >
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
