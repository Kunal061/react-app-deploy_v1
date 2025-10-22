import Navbar from "@/components/Navbar";
import CertificationCard from "@/components/CertificationCard";

const certifications = [
  {
    name: "DevSecOps Learning",
    issuer: "TryHackMe",
  },
  {
    name: "Linux (LFS101)",
    issuer: "The Linux Foundation",
  },
  {
    name: "SQL Injection Attacks",
    issuer: "EC-Council",
  },
  {
    name: "Fundamentals of Information Security",
    issuer: "Infosys",
  },
  {
    name: "Introduction to OSINT",
    issuer: "Security Blue Team",
  },
  {
    name: "Networking Basics",
    issuer: "Cisco",
  },
];

export default function Certifications() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            <span className="text-primary">Certifications</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and training in cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          {certifications.map((cert) => (
            <CertificationCard key={cert.name} {...cert} />
          ))}
        </div>
      </div>
    </div>
  );
}
