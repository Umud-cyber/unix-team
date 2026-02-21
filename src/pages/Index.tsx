import { Users, FolderGit2, Brain, Shield, FileSpreadsheet, Activity, TrendingUp } from "lucide-react";
import StatCard from "@/components/StatCard";
import ProjectCard from "@/components/ProjectCard";

const recentProjects = [
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
    description: "Centralized API gateway for microservices communication with rate limiting and auth.",
    githubUrl: "https://github.com/org/api-gateway",
    status: "active" as const,
    tags: ["Go", "Docker", "K8s"],
  },
  {
    name: "HR Onboarding Automation",
    team: "People Ops",
    description: "Automated onboarding workflow that integrates with Slack, Google Workspace, and HRIS.",
    status: "planning" as const,
    tags: ["Node.js", "Zapier"],
  },
  {
    name: "Security Compliance Toolkit",
    team: "Security",
    description: "Automated compliance checking for SOC2 and GDPR across all company services.",
    githubUrl: "https://github.com/org/compliance-kit",
    status: "completed" as const,
    tags: ["Python", "AWS", "Terraform"],
  },
];

const recentActivity = [
  { action: "Project created", detail: "Customer Analytics Dashboard by Data Engineering", time: "2 hours ago" },
  { action: "Team updated", detail: "3 new members added to Platform Team", time: "5 hours ago" },
  { action: "AI Insight", detail: "API Gateway project recommended for Sales team integration", time: "1 day ago" },
  { action: "Audit event", detail: "Admin role granted to sarah@company.com", time: "1 day ago" },
  { action: "Integration", detail: "Google Sheets connected by Data Engineering", time: "2 days ago" },
];

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Overview of teams, projects, and platform activity
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Teams"
          value={12}
          change="+2 this month"
          trend="up"
          icon={<Users className="w-5 h-5" />}
        />
        <StatCard
          title="Active Projects"
          value={34}
          change="+5 this week"
          trend="up"
          icon={<FolderGit2 className="w-5 h-5" />}
        />
        <StatCard
          title="AI Suggestions"
          value={18}
          change="6 pending review"
          trend="neutral"
          icon={<Brain className="w-5 h-5" />}
        />
        <StatCard
          title="Security Score"
          value="94%"
          change="+3% improvement"
          trend="up"
          icon={<Shield className="w-5 h-5" />}
        />
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Recent Projects</h2>
            <a href="/projects" className="text-sm text-primary hover:underline">
              View all
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentProjects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
          <div className="bg-card rounded-xl border border-border shadow-sm divide-y divide-border">
            {recentActivity.map((item, i) => (
              <div key={i} className="p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-card-foreground">{item.action}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.detail}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
