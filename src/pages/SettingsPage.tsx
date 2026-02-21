import { Settings, User, Bell, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Settings</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Manage your account and platform preferences
        </p>
      </div>

      {/* Profile */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <User className="w-4 h-4 text-muted-foreground" />
          <h2 className="font-semibold text-foreground text-sm">Profile</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="you@company.com" type="email" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Input id="role" placeholder="e.g. Engineering Manager" />
        </div>
        <Button size="sm">Save Changes</Button>
      </div>

      {/* Notifications */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <h2 className="font-semibold text-foreground text-sm">Notifications</h2>
        </div>
        <div className="space-y-3">
          {["AI insight recommendations", "Team activity alerts", "Security notifications", "Integration sync status"].map(
            (label) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{label}</span>
                <Switch />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
