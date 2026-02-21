import { Brain, ThumbsUp, ThumbsDown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const insights = [
  {
    id: 1,
    project: "Customer Analytics Dashboard",
    team: "Data Engineering",
    summary:
      "This project directly supports the Sales and Marketing teams by enabling data-driven decisions. Expected to increase lead conversion by 15% through real-time behavioral insights.",
    beneficiaries: ["Sales", "Marketing", "C-Suite"],
    impact: "high",
    status: "pending",
  },
  {
    id: 2,
    project: "Internal API Gateway",
    team: "Platform Team",
    summary:
      "Reduces inter-service latency by 40% and centralizes authentication. Critical for scaling microservices architecture as the engineering team grows.",
    beneficiaries: ["Engineering", "DevOps", "Security"],
    impact: "high",
    status: "approved",
  },
  {
    id: 3,
    project: "HR Onboarding Automation",
    team: "People Ops",
    summary:
      "Cuts onboarding time from 5 days to 1 day. Reduces HR workload by automating account provisioning, training schedules, and equipment requests.",
    beneficiaries: ["HR", "New Hires", "IT"],
    impact: "medium",
    status: "pending",
  },
  {
    id: 4,
    project: "ML Recommendation Engine",
    team: "ML & AI",
    summary:
      "Personalized recommendations could boost user engagement by 25% and increase average order value. Aligns with Q2 revenue growth targets.",
    beneficiaries: ["Product", "Sales", "Customers"],
    impact: "high",
    status: "pending",
  },
  {
    id: 5,
    project: "Employee Sentiment Analyzer",
    team: "People Ops",
    summary:
      "Provides early warning for employee burnout and disengagement. Could reduce attrition by 10% through proactive intervention based on anonymous feedback analysis.",
    beneficiaries: ["HR", "Management", "Employees"],
    impact: "medium",
    status: "approved",
  },
];

const impactColors = {
  high: "bg-success/10 text-success border-success/20",
  medium: "bg-warning/10 text-warning border-warning/20",
  low: "bg-muted text-muted-foreground border-border",
};

const AIInsightsPage = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">AI Insights</h1>
          <p className="text-muted-foreground text-sm mt-1">
            AI-generated suggestions for HR on project value and team benefits
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Sparkles className="w-4 h-4" />
          Generate New Insights
        </Button>
      </div>

      {/* Info banner */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Brain className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-sm">How AI Insights Work</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Our AI analyzes each project's tech stack, team composition, and business goals to generate
            actionable recommendations for HR. Insights highlight which departments benefit and
            estimate potential impact.
          </p>
        </div>
      </div>

      {/* Insights list */}
      <div className="space-y-4">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-all duration-200 animate-slide-up"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-card-foreground">{insight.project}</h3>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border ${impactColors[insight.impact as keyof typeof impactColors]}`}
                  >
                    {insight.impact} impact
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{insight.team}</p>
              </div>
              {insight.status === "approved" && (
                <Badge variant="secondary" className="bg-success/10 text-success border-0">
                  Approved
                </Badge>
              )}
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{insight.summary}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-medium">Benefits:</span>
                <div className="flex gap-1.5">
                  {insight.beneficiaries.map((b) => (
                    <Badge key={b} variant="secondary" className="text-xs font-normal">
                      {b}
                    </Badge>
                  ))}
                </div>
              </div>

              {insight.status === "pending" && (
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost" className="gap-1 text-success hover:text-success">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    Approve
                  </Button>
                  <Button size="sm" variant="ghost" className="gap-1 text-destructive hover:text-destructive">
                    <ThumbsDown className="w-3.5 h-3.5" />
                    Dismiss
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIInsightsPage;
