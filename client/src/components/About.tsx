import { portfolioData } from "@shared/schema";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref as any}
      className={`py-16 md:py-24 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      data-testid="section-about"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-about-heading">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed" data-testid="text-about-summary">
            {portfolioData.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
