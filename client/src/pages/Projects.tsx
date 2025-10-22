import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Vuln-Detector",
    description: "OWASP Top 10 Vulnerability Scanner",
    details: [
      "Developed a Python-based CLI tool that identified 20+ critical issues including XSS, SQLi, and misconfigurations across 100 sites",
      "Integrated modules for subdomain discovery, broken link analysis, and automated reporting",
    ],
    technologies: ["Python", "OWASP", "Security Testing", "CLI", "Web Security"],
    githubUrl: "https://github.com/rishabatra1802",
  },
  {
    title: "ForgeStrike",
    description: "OSINT Password Profiling Toolkit (AI-powered)",
    details: [
      "Developed an AI-powered OSINT credential generator using 40+ personal attributes for red team operations",
      "Assisted in OSINT, Password Profiling, Hashcat/John Integration, and AI-enhanced Pattern Analysis",
    ],
    technologies: ["Python", "AI/ML", "OSINT", "Red Team", "Hashcat", "John the Ripper"],
  },
  {
    title: "SecureVision",
    description: "Real-Time Threat Detection using ML",
    details: [
      "Developed a Random Forest model for detecting anomalies in security logs with high precision",
      "Enabled proactive monitoring through Python-based threat classification dashboards",
    ],
    technologies: ["Python", "Machine Learning", "Random Forest", "Security Analytics", "SIEM"],
    githubUrl: "https://github.com/rishabatra1802",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cybersecurity tools and solutions I've built to solve real-world security challenges
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
