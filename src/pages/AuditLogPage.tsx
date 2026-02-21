import { Activity, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const auditEvents = [
  { id: 1, action: "user.login", user: "alex@company.com", detail: "Successful login via OAuth", timestamp: "2026-02-21 14:32:00", severity: "info" },
  { id: 2, action: "role.changed", user: "admin@company.com", detail: "Granted admin role to sarah@company.com", timestamp: "2026-02-21 13:15:00", severity: "warning" },
  { id: 3, action: "project.created", user: "james@company.com", detail: "Created project 'Design System v3'", timestamp: "2026-02-21 11:48:00", severity: "info" },
  { id: 4, action: "integration.connected", user: "priya@company.com", detail: "Connected GitHub organization", timestamp: "2026-02-21 10:22:00", severity: "info" },
  { id: 5, action: "data.exported", user: "marcus@company.com", detail: "Exported team report as CSV", timestamp: "2026-02-21 09:05:00", severity: "info" },
  { id: 6, action: "auth.failed", user: "unknown@external.com", detail: "Failed login attempt (invalid credentials)", timestamp: "2026-02-20 23:41:00", severity: "error" },
  { id: 7, action: "policy.updated", user: "admin@company.com", detail: "Updated data retention policy to 90 days", timestamp: "2026-02-20 16:30:00", severity: "warning" },
  { id: 8, action: "team.deleted", user: "admin@company.com", detail: "Archived team 'Legacy Backend'", timestamp: "2026-02-20 14:12:00", severity: "warning" },
  { id: 9, action: "mfa.enabled", user: "elena@company.com", detail: "Enabled MFA via authenticator app", timestamp: "2026-02-20 11:55:00", severity: "info" },
  { id: 10, action: "user.invited", user: "sarah@company.com", detail: "Invited new-hire@company.com to Platform Team", timestamp: "2026-02-20 09:33:00", severity: "info" },
];

const severityStyles = {
  info: "bg-info/10 text-info",
  warning: "bg-warning/10 text-warning",
  error: "bg-destructive/10 text-destructive",
};

const AuditLogPage = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Audit Log</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Activity monitoring and security events
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </div>

      <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Action</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">User</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Detail</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Severity</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {auditEvents.map((event) => (
                <tr key={event.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded text-foreground">
                      {event.action}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{event.user}</td>
                  <td className="px-4 py-3 text-sm text-foreground max-w-xs truncate">{event.detail}</td>
                  <td className="px-4 py-3">
                    <Badge
                      variant="secondary"
                      className={`text-xs ${severityStyles[event.severity as keyof typeof severityStyles]}`}
                    >
                      {event.severity}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground font-mono">{event.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditLogPage;
