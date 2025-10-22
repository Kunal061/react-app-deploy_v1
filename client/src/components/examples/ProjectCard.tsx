import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-2xl">
      <ProjectCard
        title="Vuln-Detector"
        description="OWASP Top 10 Vulnerability Scanner"
        details={[
          "Python-based CLI tool that identified 20+ critical issues including XSS, SQLi, and misconfigurations across 100 sites",
          "Integrated modules for subdomain discovery, broken link analysis, and automated reporting"
        ]}
        technologies={["Python", "OWASP", "Security", "CLI"]}
        githubUrl="https://github.com"
      />
    </div>
  );
}
