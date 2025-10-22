import ExperienceCard from '../ExperienceCard';

export default function ExperienceCardExample() {
  return (
    <div className="p-8 max-w-3xl">
      <ExperienceCard
        title="Cybersecurity Intern"
        company="Gurugram Police Cyber Cell"
        location="Gurgaon, India"
        type="On-site"
        duration="June 2025 – July 2025"
        responsibilities={[
          "Conducted OSINT and collected digital evidence for cases, preparing reports used in legal proceedings",
          "Supported vulnerability assessment, OSINT research, and digital evidence analysis for incident reporting and case tracking"
        ]}
      />
    </div>
  );
}
