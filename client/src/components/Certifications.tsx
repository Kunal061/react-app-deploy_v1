import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ExternalLink } from "lucide-react";
import { portfolioData } from "@shared/schema";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="certifications"
      ref={ref as any}
      className={`py-16 md:py-24 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      data-testid="section-certifications"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-certifications-heading">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all flex flex-col"
              data-testid={`card-certification-${index}`}
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-cert-name-${index}`}>
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-cert-issuer-${index}`}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {cert.credentialUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full"
                  asChild
                  data-testid={`button-verify-${index}`}
                >
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Credential
                  </a>
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
