import { Shield, CheckCircle2, AlertTriangle, Lock, Key, Eye, FileCheck } from "lucide-react";

const securityItems = [
  {
    title: "Role-Based Access Control (RBAC)",
    description: "Admin, Manager, and Member roles with granular permissions for teams, projects, and data access.",
    status: "active",
    icon: Key,
  },
  {
    title: "Data Encryption",
    description: "AES-256 encryption at rest and TLS 1.3 for all data in transit. Database-level encryption enabled.",
    status: "active",
    icon: Lock,
  },
  {
    title: "Secure Authentication",
    description: "OAuth 2.0, MFA support via authenticator apps, and session management with automatic expiry.",
    status: "active",
    icon: Shield,
  },
  {
    title: "Audit Logging",
    description: "Comprehensive audit trail for all user actions, data access, and administrative changes.",
    status: "active",
    icon: Eye,
  },
  {
    title: "Compliance & Data Protection",
    description: "GDPR and SOC2 compliant data handling with configurable retention policies and data export.",
    status: "review",
    icon: FileCheck,
  },
  {
    title: "Risk & Incident Management",
    description: "Automated threat detection, incident response workflows, and vulnerability scanning.",
    status: "review",
    icon: AlertTriangle,
  },
];

const SecurityPage = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Security</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Platform security configuration and compliance status
        </p>
      </div>

      {/* Security Score */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full border-4 border-success flex items-center justify-center">
            <span className="text-2xl font-bold text-success">94%</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Security Score</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Your platform meets 94% of security best practices. 2 items need review.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {securityItems.map((item) => (
          <div
            key={item.title}
            className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  item.status === "active"
                    ? "bg-success/10 text-success"
                    : "bg-warning/10 text-warning"
                }`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-card-foreground text-sm">{item.title}</h3>
                  {item.status === "active" ? (
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-warning" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityPage;
