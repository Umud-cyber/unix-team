import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Index from "./pages/Index";
import TeamsPage from "./pages/TeamsPage";
import ProjectsPage from "./pages/ProjectsPage";
import AIInsightsPage from "./pages/AIInsightsPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import AuditLogPage from "./pages/AuditLogPage";
import SecurityPage from "./pages/SecurityPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/ai-insights" element={<AIInsightsPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/audit-log" element={<AuditLogPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
