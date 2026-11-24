import React, { useState } from 'react';
import {
  Layers,
  ExternalLink,
  Maximize2,
  CheckCircle2,
  MessageSquare,
  Cpu,
  ShieldCheck,
  Target,
  Wrench,
  TrendingUp
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

  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (proj.categories && proj.categories.includes(activeFilter)) return true;
    return proj.category === activeFilter;
  });

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 md:py-28 relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.projects.badge}</span>
          </div>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4"
          >
            {t.projects.title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Filters Bar */}
        <div
          role="tablist"
          aria-label={lang === 'ar' ? 'تصنيف المشاريع' : 'Project categories'}
          className="flex flex-wrap items-center justify-center gap-2 mb-14"
        >
          {filterOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === option.id}
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

        {/* Projects Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const hasScreenshots = project.screenshots && project.screenshots.length > 0;
            const primaryScreenshot = hasScreenshots ? project.screenshots[0] : null;
            const isContainFit = primaryScreenshot?.fit === 'contain';

            return (
              <article
                key={project.id}
                className="surface-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 border border-white/[0.08] hover:border-emerald-500/30"
              >
                <div>
                  {/* Visual Proof Frame */}
                  <div className="relative aspect-[16/10] bg-[#07090E] border-b border-white/[0.08] overflow-hidden">
                    {hasScreenshots ? (
                      <div
                        onClick={() => onOpenLightbox(project, 0)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onOpenLightbox(project, 0);
                          }
                        }}
                        aria-label={`${t.projects.view_screenshots}: ${project.title[lang]}`}
                        className={`w-full h-full cursor-pointer relative group/img overflow-hidden ${
                          isContainFit
                            ? 'p-6 flex items-center justify-center bg-gradient-to-br from-[#0B101A] via-[#090B10] to-[#0E1525]'
                            : ''
                        }`}
                      >
                        <img
                          src={primaryScreenshot.src}
                          alt={project.title[lang]}
                          className={`transition-transform duration-500 group-hover/img:scale-105 ${
                            isContainFit
                              ? 'max-w-full max-h-full object-contain rounded-lg shadow-xl'
                              : 'w-full h-full object-cover object-center'
                          }`}
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090B10]/85 via-transparent to-transparent pointer-events-none" />

                        {/* Hover Lightbox Pill */}
                        <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold shadow-xl">
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>{t.projects.view_screenshots}</span>
                          </span>
                        </div>

                        {/* Screenshots Count Badge */}
                        <div className="absolute top-3 end-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/[0.12] text-white text-[11px] font-mono-code flex items-center gap-1.5">
                          <Maximize2 className="w-3 h-3 text-emerald-400" />
                          <span>
                            {project.screenshots.length} {lang === 'ar' ? 'لقطات' : 'Screens'}
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Clean Technical Fallback Blueprint */
                      <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#0B0F17] via-[#090B10] to-[#0E1422] relative">
                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#161B29] border border-white/[0.08] text-[11px] font-mono-code text-slate-300">
                            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                            <span>SYSTEM CASE STUDY</span>
                          </div>
                          <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            {project.live ? t.projects.status_live : t.projects.status_ready}
                          </span>
                        </div>

                        <div className="space-y-2 py-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-lg bg-[#111520] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                              <ShieldCheck className="w-4 h-4" />
                            </div>
                            <span className="text-white font-bold text-sm sm:text-base">
                              {project.title[lang]}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                            {project.outcome[lang]}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/[0.06]">
                          <span>{t.projects.fallback_notice}</span>
                          <span dir="ltr" className="inline-block font-mono-code text-emerald-400">&lt;aalij.dev /&gt;</span>
                        </div>
                      </div>
                    )}

                    {/* Production Status Badge (Top Start) */}
                    {hasScreenshots && (
                      <div className="absolute top-3 start-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#090B10]/85 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{project.live ? t.projects.status_live : t.projects.status_ready}</span>
                      </div>
                    )}

                    {/* Client / Scope Tag (Bottom Start) */}
                    <div className="absolute bottom-3 start-3 px-3 py-1 rounded-md bg-[#090B10]/90 backdrop-blur-md border border-white/[0.1] text-slate-200 text-xs font-medium">
                      {project.clientTag[lang]}
                    </div>
                  </div>

                  {/* Case Study Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Title & Optional Live URL */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                        {project.title[lang]}
                      </h3>
                      {project.domain && (
                        <a
                          href={project.domain}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-xs text-emerald-400 hover:text-emerald-300 font-mono-code inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 transition-colors"
                          title={t.projects.live_preview}
                        >
                          <span>{t.projects.live_preview}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    {/* Structured 3-Step Case Study: Problem -> Solution -> Outcome */}
                    <div className="space-y-3">
                      {/* 1. Problem / Business Need */}
                      <div className="p-3.5 rounded-xl bg-[#111520] border border-white/[0.06] space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                          <Target className="w-3.5 h-3.5 shrink-0" />
                          <span>{t.projects.labels.problem}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {project.problem[lang]}
                        </p>
                      </div>

                      {/* 2. Implemented Solution */}
                      <div className="p-3.5 rounded-xl bg-[#111520] border border-white/[0.06] space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300">
                          <Wrench className="w-3.5 h-3.5 shrink-0" />
                          <span>{t.projects.labels.solution}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {project.solution[lang]}
                        </p>
                      </div>

                      {/* 3. Final Business Outcome */}
                      <div className="p-3.5 rounded-xl bg-[#0F1B1A] border border-emerald-500/25 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                          <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                          <span>{t.projects.labels.outcome}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                          {project.outcome[lang]}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs text-slate-400 font-medium block">
                        {t.projects.labels.stack}
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
                <div className="px-6 pb-6 pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 border-t border-white/[0.06] mt-2">
                  <button
                    type="button"
                    onClick={() => onRequestSimilar(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-emerald-400 active:scale-95 transition-all duration-200 shadow-glow-subtle"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{t.projects.request_similar}</span>
                  </button>

                  {hasScreenshots && (
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(project, 0)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#161B29] border border-white/[0.08] text-slate-300 hover:text-white hover:border-emerald-500/40 text-xs sm:text-sm font-medium transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.projects.view_screenshots}</span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
