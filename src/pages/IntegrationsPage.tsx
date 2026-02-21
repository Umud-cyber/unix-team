import { FileSpreadsheet, Link2, CheckCircle2, AlertCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const integrations = [
  {
    name: "Google Sheets",
    description: "Import and sync team data from Google Sheets. Auto-updates project metadata.",
    icon: "📊",
    connected: true,
    lastSync: "2 hours ago",
  },
  {
    name: "Google Docs",
    description: "Connect project documentation and specs from Google Docs for AI analysis.",
    icon: "📄",
    connected: true,
    lastSync: "5 hours ago",
  },
  {
    name: "Microsoft Excel",
    description: "Import project data and team rosters from Excel files and OneDrive.",
    icon: "📗",
    connected: false,
    lastSync: null,
  },
  {
    name: "GitHub",
    description: "Connect GitHub organizations to automatically track repositories and contributors.",
    icon: "🐙",
    connected: true,
    lastSync: "30 minutes ago",
  },
  {
    name: "Slack",
    description: "Receive notifications and AI insights directly in your Slack channels.",
    icon: "💬",
    connected: false,
    lastSync: null,
  },
  {
    name: "Jira",
    description: "Sync project tasks and sprint data for comprehensive project tracking.",
    icon: "🎯",
    connected: false,
    lastSync: null,
  },
];

const IntegrationsPage = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Integrations</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Connect Excel, Google Docs, GitHub, and more
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Plus className="w-4 h-4" />
          Request Integration
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-all duration-200 animate-slide-up"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{integration.icon}</span>
                <div>
                  <h3 className="font-semibold text-card-foreground">{integration.name}</h3>
                  {integration.connected ? (
                    <span className="text-xs text-success flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Connected
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Not connected
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>

            <div className="flex items-center justify-between">
              {integration.lastSync && (
                <span className="text-xs text-muted-foreground">Synced {integration.lastSync}</span>
              )}
              <Button
                size="sm"
                variant={integration.connected ? "outline" : "default"}
                className="ml-auto gap-1.5"
              >
                <Link2 className="w-3.5 h-3.5" />
                {integration.connected ? "Configure" : "Connect"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationsPage;
