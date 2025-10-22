import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { SiLinkedin, SiGithub, SiTryhackme } from "react-icons/si";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "risha.26154@ggnindia.dronacharya.info",
    href: "mailto:risha.26154@ggnindia.dronacharya.info",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Delhi, India",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/rishabatra1802",
    color: "text-[#0A66C2]",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/rishabatra1802",
    color: "text-foreground",
  },
  {
    name: "TryHackMe",
    icon: SiTryhackme,
    url: "https://tryhackme.com/p/rishabatra",
    color: "text-primary",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to connect
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
          <div className="space-y-6">
            <Card className="p-6 space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-lg hover-elevate transition-all">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      data-testid={`link-${item.label.toLowerCase()}`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Social Links</h2>
              <div className="grid grid-cols-1 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-social-${social.name.toLowerCase()}`}
                    >
                      <Button
                        variant="outline"
                        className="w-full justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 ${social.color}`} />
                          <span>{social.name}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </Button>
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>

          <Card className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a B.Tech Computer Science student at Dronacharya College of Engineering
                and a passionate cybersecurity enthusiast with hands-on experience in:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>OSINT investigations and digital evidence collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Vulnerability assessment and penetration testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Incident response and digital forensics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Security tool development and automation</span>
                </li>
              </ul>
              <p>
                I'm currently seeking opportunities in cybersecurity where I can apply my
                skills in threat detection, security analysis, and system hardening.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
