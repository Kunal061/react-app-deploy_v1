import { z } from "zod";

// Portfolio Data Structures

export const skillSchema = z.object({
  name: z.string(),
  category: z.enum(["Languages", "Tools", "Platforms"]),
});

export const experienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  location: z.string(),
  duration: z.string(),
  type: z.string(),
  responsibilities: z.array(z.string()),
});

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  highlights: z.array(z.string()),
  githubUrl: z.string().optional(),
  liveUrl: z.string().optional(),
});

export const certificationSchema = z.object({
  name: z.string(),
  issuer: z.string(),
  credentialUrl: z.string().optional(),
});

export const educationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  location: z.string(),
  duration: z.string(),
  grade: z.string().optional(),
});

export const achievementSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string().optional(),
});

// Type exports
export type Skill = z.infer<typeof skillSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Certification = z.infer<typeof certificationSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Achievement = z.infer<typeof achievementSchema>;

// Portfolio data
export const portfolioData = {
  name: "Kunal Rohilla",
  title: "DevOps Engineer | Cloud Enthusiast | AWS Certified",
  location: "Gurugram, India",
  email: "Kunalr.tech@gmail.com",
  phone: "+91 9212294947",
  linkedin: "https://www.linkedin.com/in/kunal-rohilla-745545246/",
  github: "https://github.com/Kunal061",
  summary: "Detail-oriented engineering student with practical exposure to AWS Cloud through internship experience. Proficient in cloud deployment using Apache2 on EC2, S3 static hosting, and IAM configuration. Completed AWS Cloud Practitioner certification and well-versed in Linux command-line operations. Eager to build a career in Cloud and DevOps domains.",
  
  skills: [
    // Languages
    { name: "Python", category: "Languages" as const },
    { name: "Bash", category: "Languages" as const },
    { name: "HTML", category: "Languages" as const },
    { name: "CSS", category: "Languages" as const },
    { name: "Java", category: "Languages" as const },
    { name: "YAML", category: "Languages" as const },
    { name: "Groovy", category: "Languages" as const },
    { name: "DSL", category: "Languages" as const },
    // Tools
    { name: "Docker", category: "Tools" as const },
    { name: "Jenkins", category: "Tools" as const },
    { name: "Apache2", category: "Tools" as const },
    { name: "Linux CLI", category: "Tools" as const },
    { name: "VS Code", category: "Tools" as const },
    { name: "Git", category: "Tools" as const },
    // Platforms
    { name: "AWS", category: "Platforms" as const },
    { name: "Azure", category: "Platforms" as const },
    { name: "Linux (Ubuntu)", category: "Platforms" as const },
    { name: "GitHub", category: "Platforms" as const },
    { name: "Docker Hub", category: "Platforms" as const },
  ] as Skill[],
  
  experience: [
    {
      title: "Cloud Intern",
      company: "VVDN Technologies Pvt Ltd",
      location: "Gurgaon, India",
      duration: "Jun 2024 – Jul 2024",
      type: "On-site",
      responsibilities: [
        "Implemented AWS-based deployment setups including EC2 instances, S3 static hosting, and IAM role management",
        "Assisted in configuring Apache2 servers and optimizing cloud environments for efficient application hosting",
        "Contributed to cloud setup and server management using AWS EC2 and auto scaling groups",
        "Ensured efficient deployment of web applications through automation and best practices"
      ]
    }
  ] as Experience[],
  
  projects: [
    {
      title: "Jenkins CI/CD Pipeline",
      description: "Developed a comprehensive Jenkins CI/CD pipeline using Groovy to automate deployment from GitHub to Apache2 on AWS EC2.",
      technologies: ["Jenkins", "Groovy", "AWS EC2", "Apache2", "GitHub", "Webhooks"],
      highlights: [
        "Automated cloud website deployment with zero manual steps on every commit",
        "Integrated webhook for real-time updates and implemented secure master-agent automation",
        "Gained hands-on skills in pipeline scripting, containerization, and cloud-based DevOps practices"
      ],
      githubUrl: "https://github.com/Kunal061/Jenkin_Apache_CICD_static.git"
    },
    {
      title: "Cloud-Based Web Hosting using AWS",
      description: "Deployed static and dynamic web applications using AWS services with secure role-based access and monitoring.",
      technologies: ["AWS EC2", "S3", "IAM", "Apache2", "CloudWatch", "Load Balancing"],
      highlights: [
        "Configured Apache2 for dynamic content with proper security configurations",
        "Implemented load balancing and monitored server performance using CloudWatch",
        "Deployed applications with secure role-based access using IAM policies"
      ]
    }
  ] as Project[],
  
  certifications: [
    {
      name: "AWS Fundamentals",
      issuer: "Amazon Web Services",
      credentialUrl: "#"
    },
    {
      name: "Oracle Certified Foundations Associate",
      issuer: "Oracle",
      credentialUrl: "#"
    },
    {
      name: "Linux Foundation Certified System Administrator (LFS-101)",
      issuer: "Linux Foundation",
      credentialUrl: "#"
    }
  ] as Certification[],
  
  education: [
    {
      institution: "Dronacharya College of Engineering",
      degree: "Bachelor of Technology – Computer Science and Engineering",
      location: "Gurgaon, India",
      duration: "2022 – 2026",
      grade: "In Progress"
    },
    {
      institution: "Holy Cross School",
      degree: "Senior Secondary (Grade 12)",
      location: "Gurgaon, India",
      duration: "2022",
      grade: "78%"
    },
    {
      institution: "Holy Cross School",
      degree: "Secondary (Grade 10)",
      location: "Gurgaon, India",
      duration: "2020",
      grade: "74%"
    }
  ] as Education[],
  
  achievements: [
    {
      title: "AIR 2 in Aptitude Quiz",
      description: "Secured All India Rank 2 in Aptitude Quiz conducted by CodingNinja",
      link: "#"
    },
    {
      title: "Hackathon Volunteer",
      description: "Successfully volunteered in organizing DEVOLYMPUS Hackathon",
      link: "#"
    }
  ] as Achievement[]
};
