"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LavenderBadge } from "@/components/ui/lavender-badge";
import type { Project } from "@/data/projects";
import { TiltCard } from "@/components/animations";

interface ProjectCardProps {
  project: Project;
  detailed?: boolean;
}

export function ProjectCard({ project, detailed = false }: ProjectCardProps) {
  return (
    <TiltCard className="h-full">
      <Card className="group h-full flex flex-col hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50 hover:border-primary/50">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              onError={(e) => {
                console.error(`Failed to load image: ${project.image}`);
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-20">💻</span>
            </div>
          )}
        </div>
        
        <CardHeader className="pb-3">
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </CardHeader>
        
        <CardContent className="flex-grow flex flex-col">
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          {/* Key Features - Show more in detailed view */}
          {detailed && project.features && (
            <div className="mb-4 space-y-1">
              {project.features.slice(0, 2).map((feature, i) => (
                <p key={i} className="text-xs text-muted-foreground/80 flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span className="line-clamp-2">{feature}</span>
                </p>
              ))}
            </div>
          )}
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 5).map((tech) => (
              <LavenderBadge key={tech}>
                {tech}
              </LavenderBadge>
            ))}
            {project.technologies.length > 5 && (
              <LavenderBadge variant="outline">
                +{project.technologies.length - 5} more
              </LavenderBadge>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="mt-auto flex gap-2 pt-4 border-t border-border/50">
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Github className="w-4 h-4" />
                  Code
                </Button>
              </Link>
            )}
            {project.demoUrl && (
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </TiltCard>
  );
}