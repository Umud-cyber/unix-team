import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const allProjects = [
  {
    name: "Customer Analytics Dashboard",
    team: "Data Engineering",
    description: "Real-time analytics dashboard for tracking customer behavior and engagement metrics across all platforms.",
    githubUrl: "https://github.com/org/analytics-dash",
    status: "active" as const,
    tags: ["React", "Python", "BigQuery"],
  },
  {
    name: "Internal API Gateway",
    team: "Platform Team",
    description: "Centralized API gateway for microservices communication with rate limiting and authentication.",
    githubUrl: "https://github.com/org/api-gateway",
    status: "active" as const,
    tags: ["Go", "Docker", "K8s"],
  },
  {
    name: "HR Onboarding Automation",
    team: "People Ops",
    description: "Automated onboarding workflow integrating Slack, Google Workspace, and HRIS systems.",
    status: "planning" as const,
    tags: ["Node.js", "Zapier"],
  },
  {
    name: "Security Compliance Toolkit",
    team: "Security",
    description: "Automated compliance checking for SOC2 and GDPR across all services.",
    githubUrl: "https://github.com/org/compliance-kit",
    status: "completed" as const,
    tags: ["Python", "AWS", "Terraform"],
  },
  {
    name: "Design System v3",
    team: "Frontend Guild",
    description: "Next-generation design system with accessible components and theming support.",
    githubUrl: "https://github.com/org/design-system",
    status: "active" as const,
    tags: ["React", "TypeScript", "Storybook"],
  },
  {
    name: "ML Recommendation Engine",
    team: "ML & AI",
    description: "Personalized product recommendation engine using collaborative filtering and deep learning.",
    githubUrl: "https://github.com/org/rec-engine",
    status: "active" as const,
    tags: ["Python", "PyTorch", "Redis"],
  },
  {
    name: "Cost Optimization Bot",
    team: "Platform Team",
    description: "Automated cloud cost analysis and optimization recommendations for AWS and GCP resources.",
    githubUrl: "https://github.com/org/cost-bot",
    status: "completed" as const,
    tags: ["Python", "AWS", "GCP"],
  },
  {
    name: "Employee Sentiment Analyzer",
    team: "People Ops",
    description: "NLP-powered tool analyzing employee feedback for sentiment and key themes.",
    status: "planning" as const,
    tags: ["Python", "NLP", "React"],
  },
];

const ProjectsPage = () => {
  const [search, setSearch] = useState("");

  const filtered = allProjects.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.team.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Projects</h1>
          <p className="text-muted-foreground text-sm mt-1">
            All team projects with GitHub integrations
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Project
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search projects, teams, or tags..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <p>No projects found matching "{search}"</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
