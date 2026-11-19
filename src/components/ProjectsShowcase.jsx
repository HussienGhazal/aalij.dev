import React, { useState } from 'react';
import { 
  Layers, 
  ExternalLink, 
  Maximize2, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  MessageSquare,
  Cpu,
  Smartphone,
  Server,
  Printer,
  ChevronRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

export default function ProjectsShowcase({ 
  lang, 
  t, 
  projects, 
  onOpenLightbox, 
  onRequestSimilar 
}) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: t.projects.filters.all },
    { id: 'mobile', label: t.projects.filters.mobile },
    { id: 'saas', label: t.projects.filters.saas },
    { id: 'pos', label: t.projects.filters.pos }
  ];

  const filteredProjects = projects.filter(proj => {
    if (activeFilter === 'all') return true;
    if (proj.categories && proj.categories.includes(activeFilter)) return true;
    return proj.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4">
            {t.projects.title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-light">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filterOptions.map(option => (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeFilter === option.id
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-glow-emerald'
                  : 'bg-[#111520] text-slate-400 border-white/[0.08] hover:text-white hover:border-white/[0.2]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const hasScreenshots = project.screenshots && project.screenshots.length > 0;
            const primaryScreenshot = hasScreenshots ? project.screenshots[0] : null;

            return (
              <div
                key={project.id}
                className="surface-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 border border-white/[0.08] hover:border-emerald-500/30"
              >
                <div>
                  
                  {/* Visual Proof / Screenshot or Schematic Fallback Frame */}
                  <div className="relative aspect-[16/10] bg-[#07090E] border-b border-white/[0.08] overflow-hidden">
                    {hasScreenshots ? (
                      <div 
                        onClick={() => onOpenLightbox(project, 0)}
                        className="w-full h-full cursor-pointer relative group/img overflow-hidden"
                      >
                        <img
                          src={primaryScreenshot.src}
                          alt={project.title[lang]}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090B10] via-transparent to-transparent opacity-80" />
                        
                        {/* Interactive Lightbox Overlay Pill */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold shadow-xl">
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>{t.projects.view_screenshots}</span>
                          </span>
                        </div>

                        {/* Screenshots Count Badge */}
                        <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/[0.1] text-white text-[11px] font-mono-code flex items-center gap-1.5">
                          <Maximize2 className="w-3 h-3 text-emerald-400" />
                          <span>{project.screenshots.length} {lang === 'ar' ? 'صور' : 'Screens'}</span>
                        </div>
                      </div>
                    ) : (
                      /* Clean Technical Fallback Schematic Frame */
                      <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#0B0F17] via-[#090B10] to-[#0E1422] relative">
                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#161B29] border border-white/[0.08] text-[11px] font-mono-code text-slate-300">
                            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                            <span>ARCH-SPECS // PROD</span>
                          </div>
                          <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            VERIFIED
                          </span>
                        </div>

                        <div className="space-y-2 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-[#111520] border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                              <ShieldCheck className="w-4 h-4" />
                            </div>
                            <span className="text-white font-bold text-sm">
                              {project.title[lang]}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 font-mono-code line-clamp-2">
                            {project.impact[lang]}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/[0.06]">
                          <span>{t.projects.fallback_notice}</span>
                          <span className="font-mono-code text-emerald-400">&lt;aalij.dev&gt;</span>
                        </div>
                      </div>
                    )}

                    {/* Client / Stage Tag */}
                    <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3 px-3 py-1 rounded-md bg-[#090B10]/90 backdrop-blur-md border border-white/[0.1] text-emerald-400 text-xs font-medium">
                      {project.clientTag[lang]}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    
                    {/* Header + Title */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {project.title[lang]}
                        </h3>
                        {project.domain && (
                          <a
                            href={project.domain}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-slate-400 hover:text-emerald-400 font-mono-code inline-flex items-center gap-1 transition-colors"
                            title={t.projects.live_preview}
                          >
                            <span>{lang === 'ar' ? 'النطاق' : 'Domain'}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Business Description */}
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {project.desc[lang]}
                    </p>

                    {/* Operational Impact Badge */}
                    <div className="p-3.5 rounded-xl bg-[#111624] border border-emerald-500/20 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{t.projects.metrics_label}</span>
                      </div>
                      <p className="text-slate-300 font-medium">
                        {project.impact[lang]}
                      </p>
                    </div>

                    {/* Case study metrics if available */}
                    {project.caseStudy?.metrics && (
                      <div className="text-[11px] font-mono-code text-slate-400 bg-[#090B10] px-3 py-2 rounded-lg border border-white/[0.04]">
                        <span className="text-emerald-400 font-bold">KPI: </span>
                        {project.caseStudy.metrics[lang]}
                      </div>
                    )}

                    {/* Tech Stack Chips */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs text-slate-400 font-medium block">
                        {t.projects.tech_stack}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((item, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono-code px-2 py-0.5 rounded-md bg-[#161B29] text-slate-300 border border-white/[0.06]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 border-t border-white/[0.06] mt-4">
                  
                  {/* Primary Action: Request Similar System */}
                  <button
                    onClick={() => onRequestSimilar(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-emerald-400 active:scale-95 transition-all duration-200 shadow-glow-subtle"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{t.projects.request_similar}</span>
                  </button>

                  {/* Secondary Action: Screenshots or Specs */}
                  {hasScreenshots ? (
                    <button
                      onClick={() => onOpenLightbox(project, 0)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#161B29] border border-white/[0.08] text-slate-300 hover:text-white hover:border-emerald-500/40 text-xs sm:text-sm font-medium transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.projects.view_screenshots}</span>
                    </button>
                  ) : null}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
