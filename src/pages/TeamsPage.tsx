import { Users, Github, Mail, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const teams = [
  {
    name: "Data Engineering",
    lead: "Alex Johnson",
    members: 8,
    projects: 5,
    description: "Building data pipelines and analytics infrastructure",
    tags: ["Python", "Spark", "BigQuery"],
    avatarBg: "bg-info/20 text-info",
  },
  {
    name: "Platform Team",
    lead: "Sarah Chen",
    members: 6,
    projects: 3,
    description: "Core infrastructure, DevOps, and platform services",
    tags: ["Go", "K8s", "Terraform"],
    avatarBg: "bg-primary/20 text-primary",
  },
  {
    name: "People Ops",
    lead: "Marcus Williams",
    members: 4,
    projects: 2,
    description: "HR tooling, onboarding automation, and culture initiatives",
    tags: ["Node.js", "Zapier"],
    avatarBg: "bg-warning/20 text-warning",
  },
  {
    name: "Security",
    lead: "Priya Patel",
    members: 5,
    projects: 4,
    description: "Security compliance, vulnerability scanning, and incident response",
    tags: ["Python", "AWS", "SOC2"],
    avatarBg: "bg-destructive/20 text-destructive",
  },
  {
    name: "Frontend Guild",
    lead: "James Kim",
    members: 10,
    projects: 7,
    description: "Design system, web applications, and frontend architecture",
    tags: ["React", "TypeScript", "Figma"],
    avatarBg: "bg-success/20 text-success",
  },
  {
    name: "ML & AI",
    lead: "Elena Rodriguez",
    members: 6,
    projects: 4,
    description: "Machine learning models, NLP services, and AI research",
    tags: ["Python", "PyTorch", "LLMs"],
    avatarBg: "bg-accent/20 text-accent",
  },
];

const TeamsPage = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Teams</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your organization's teams and members</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Team
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <div
            key={team.name}
            className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 animate-slide-up group cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${team.avatarBg}`}>
                <Users className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {team.name}
                </h3>
                <p className="text-xs text-muted-foreground">Led by {team.lead}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{team.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {team.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs font-normal">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-3 border-t border-border">
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                {team.members} members
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5" />
                {team.projects} projects
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
