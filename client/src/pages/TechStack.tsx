import Navbar from "@/components/Navbar";
import TechCategory from "@/components/TechCategory";

const techCategories = [
  {
    title: "Languages",
    items: ["Python", "C", "C++", "Bash"],
  },
  {
    title: "Security & Penetration Testing Tools",
    items: [
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Nessus",
      "Hydra",
      "Wireshark",
      "DirBuster",
    ],
  },
  {
    title: "Forensics & Incident Response",
    items: [
      "Redline",
      "KAPE",
      "Autopsy",
      "Volatility",
      "TheHive",
      "Velociraptor",
    ],
  },
  {
    title: "Operating Systems & Networking",
    items: [
      "Linux (Kali, RHEL)",
      "Windows",
      "CLI Operations",
      "Bash Scripting",
    ],
  },
  {
    title: "Security Concepts & Practices",
    items: [
      "Threat Detection",
      "SIEM",
      "Firewalls",
      "IDS/IPS",
      "OWASP Top 10",
      "Incident Response Lifecycle",
    ],
  },
  {
    title: "Other Tools and Platforms",
    items: ["Git/GitHub", "VS Code", "Jupyter Notebook", "TryHackMe"],
  },
];

export default function TechStack() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Tech <span className="text-primary">Stack</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of security tools, languages, and frameworks I work with
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
          {techCategories.map((category) => (
            <TechCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}
