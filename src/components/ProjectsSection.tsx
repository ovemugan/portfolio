import React from 'react';
import { Project } from '../types';
import { ExternalLink, Terminal, Cpu, Network, BarChart3, CheckSquare, Utensils } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  const getProjectIcon = (type?: string) => {
    switch (type) {
      case 'terminal':
        return <Terminal className="w-3.5 h-3.5 text-[#a23e16]" />;
      case 'vision':
        return <Cpu className="w-3.5 h-3.5 text-[#a23e16]" />;
      case 'network':
        return <Network className="w-3.5 h-3.5 text-[#a23e16]" />;
      case 'analytics':
        return <BarChart3 className="w-3.5 h-3.5 text-[#a23e16]" />;
      case 'kanban':
        return <CheckSquare className="w-3.5 h-3.5 text-[#a23e16]" />;
      case 'nutrition':
        return <Utensils className="w-3.5 h-3.5 text-[#a23e16]" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="featured-projects"
      className="w-full bg-[#f8f3e7] py-12 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 my-6 md:my-8 border-y border-black/5"
    >
      <div className="w-full max-w-[1500px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#a23e16] font-mono-code text-xs font-bold mb-1.5">
              <span>03 // PRODUCTION ARTIFACTS &amp; CODEBASES</span>
              <span className="h-px w-8 bg-[#a23e16] inline-block"></span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight">
              Featured Engineering Work
            </h2>
          </div>
          <p className="font-inter text-sm sm:text-base text-[#444748] max-w-md leading-relaxed">
            Full-stack platforms, lightweight operating experiments, and applied computer vision
            pipelines engineered for verifiable impact.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`bg-[#fef9ed] p-5 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 group ${
                project.borderColor === 'border-secondary'
                  ? 'border-t-2 border-[#a23e16]'
                  : 'border-t-2 border-black'
              }`}
            >
              <div>
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between mb-3 text-[#444748] font-mono-code text-[11px] sm:text-xs">
                  <span className="text-[#a23e16] font-bold">{project.num}</span>
                  <span className="uppercase tracking-wider">{project.category}</span>
                </div>

                {/* Title */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-black group-hover:text-[#a23e16] transition-colors">
                    {project.title}
                  </h3>
                  {getProjectIcon(project.deepDive.interactiveType)}
                </div>

                {/* Summary */}
                <p className="font-inter text-sm text-[#444748] mb-5 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Technology Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#e7e2d7] text-[#1d1c15] font-mono-code text-[10px] sm:text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links & Action Triggers */}
                {project.id === 'sccl-network' ? (
                  <div className="pt-3 border-t border-black/5 flex items-center justify-between text-[#858383] font-mono-code text-[11px]">
                    <span className="uppercase tracking-wider">ENTERPRISE INTERNSHIP</span>
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="px-2.5 py-1 text-[#a23e16] hover:underline font-bold uppercase tracking-wider"
                    >
                      DETAILS
                    </button>
                  </div>
                ) : (
                  <div className="pt-3 border-t border-black/5 flex items-center justify-between gap-2">
                    {project.linkUrl && (
                      <a
                        href={project.linkUrl}
                        target={project.isExternal ? '_blank' : '_self'}
                        rel={project.isExternal ? 'noopener noreferrer' : ''}
                        className="font-inter text-xs uppercase text-black hover:text-[#a23e16] flex items-center gap-1.5 transition-colors font-bold tracking-wider py-1.5"
                      >
                        <span>{project.linkText || 'VIEW REPO'}</span>
                        {/* GitHub SVG icon */}
                        <svg
                          className="w-4 h-4 shrink-0 fill-current opacity-85"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                        </svg>
                        <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                      </a>
                    )}

                    {/* View website button: Opens live deployment URL if available */}
                    {!project.hideWebsiteButton && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-[#e7e2d7]/80 hover:bg-[#a23e16] hover:text-white text-[#1d1c15] font-mono-code text-[11px] uppercase font-bold tracking-wider transition-colors min-h-[36px] flex items-center gap-1"
                      >
                        <span>VIEW WEBSITE</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
