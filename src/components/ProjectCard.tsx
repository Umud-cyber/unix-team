import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  name: string;
  team: string;
  description: string;
  githubUrl?: string;
  status: "active" | "completed" | "planning";
  tags: string[];
}

const statusStyles = {
  active: "bg-success/10 text-success border-success/20",
  completed: "bg-info/10 text-info border-info/20",
  planning: "bg-warning/10 text-warning border-warning/20",
};

const ProjectCard = ({ name, team, description, githubUrl, status, tags }: ProjectCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 animate-slide-up group">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">{team}</p>
        </div>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-normal">
            {tag}
          </Badge>
        ))}
      </div>

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>View Repository</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
