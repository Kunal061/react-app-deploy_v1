import Navbar from "@/components/Navbar";
import ExperienceCard from "@/components/ExperienceCard";

const experiences = [
  {
    title: "Cybersecurity Intern",
    company: "Gurugram Police Cyber Cell",
    location: "Gurgaon, India",
    type: "On-site",
    duration: "June 2025 – July 2025",
    responsibilities: [
      "Conducted OSINT and collected digital evidence for cases, preparing reports used in legal proceedings",
      "Supported vulnerability assessment, OSINT research, and digital evidence analysis for incident reporting and case tracking",
    ],
  },
  {
    title: "AI Intern",
    company: "TechSaksham (Microsoft & SAP CSR Initiative)",
    location: "Remote",
    type: "Remote",
    duration: "Feb 2025 – March 2025",
    responsibilities: [
      "Built a Python-based resume screening tool to automate candidate-job matching and shortlisting",
      "Helped improve recruiter workflow by analyzing patterns in applicant data and optimizing selection efficiency",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company: "ShadowFox",
    location: "Remote",
    type: "Remote",
    duration: "Jan 2025 – Feb 2025",
    responsibilities: [
      "Conducted security assessments on web applications, including port scanning, directory brute-forcing, and traffic interception using tools like Nmap, DirBuster, and Wireshark",
      "Identified plaintext credential exposure and recommended mitigation measures such as encryption, firewall configuration, and brute-force protection",
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Work <span className="text-primary">Experience</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey in cybersecurity and technology
          </p>
        </div>

        <div className="space-y-6 animate-fade-in">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
