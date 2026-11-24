import React from 'react';
import {
  Smartphone,
  Server,
  Printer,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Code2,
  ClipboardList,
  Rocket,
  Layers
} from 'lucide-react';

export default function ServicesSection({ lang, t }) {
  const serviceIconMap = {
    Smartphone,
    Server,
    Printer,
    Cloud
  };

  const workflowIconMap = {
    ClipboardList,
    Code2,
    Rocket
  };

  return (
    <>
      {/* 1. Core Services Section */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="py-20 md:py-24 relative scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>{t.services.badge}</span>
            </div>
            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4"
            >
              {t.services.title}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              {t.services.subtitle}
            </p>
          </div>

          {/* 4 Business-Aligned Services Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.services.items.map((service, idx) => {
              const IconComponent = serviceIconMap[service.icon] || Code2;
              return (
                <article
                  key={service.id || idx}
                  className="surface-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#161B29] border border-white/[0.08] flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                        <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110 duration-200" />
                      </div>
                      <span className="font-mono-code text-xs text-slate-400 font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {service.desc}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Clear Business Deliverable */}
                    <div className="p-3 rounded-xl bg-[#111624] border border-emerald-500/20 flex items-start gap-2.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-emerald-400 font-semibold me-1">
                          {t.services.deliverable_label}
                        </span>
                        <span className="text-slate-200 font-medium">{service.deliverable}</span>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono-code px-2.5 py-0.5 rounded-md bg-[#161B29] text-slate-300 border border-white/[0.06] group-hover:border-emerald-500/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Clear 3-Step Workflow Section */}
      <section
        id="workflow"
        aria-labelledby="workflow-heading"
        className="py-16 md:py-24 relative scroll-mt-20 border-y border-white/[0.06] bg-[#0B0E16]/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Workflow Header */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <ClipboardList className="w-3.5 h-3.5" />
              <span>{t.workflow.badge}</span>
            </div>
            <h2
              id="workflow-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4"
            >
              {t.workflow.title}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {t.workflow.subtitle}
            </p>
          </div>

          {/* 3 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {t.workflow.steps.map((step, index) => {
              const StepIcon = workflowIconMap[step.icon] || Code2;
              const isLast = index === t.workflow.steps.length - 1;
              return (
                <article
                  key={step.number}
                  className="surface-card rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between border border-white/[0.08]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <span className="font-mono-code text-2xl font-black text-emerald-400/30 select-none">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {!isLast && (
                    <div className="hidden md:flex items-center justify-center absolute top-1/2 -end-4 -translate-y-1/2 w-7 h-7 rounded-full bg-[#111520] border border-emerald-500/30 text-emerald-400 z-20 shadow-lg">
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Workflow Bottom Conversion CTA */}
          <div className="mt-10 surface-card rounded-2xl p-6 sm:p-8 border-emerald-500/20 bg-gradient-to-r from-[#0D1118] via-[#111624] to-[#0D1118]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-start">
              <p className="text-base sm:text-lg font-bold text-white">
                {t.workflow.cta_prompt}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 shadow-glow-emerald"
              >
                <span>{t.workflow.cta_btn}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
