import React from 'react';
import { 
  Smartphone, 
  Server, 
  Printer, 
  Database, 
  Cpu, 
  Sparkles, 
  CheckCircle,
  ArrowRight,
  Code2,
  GitBranch
} from 'lucide-react';

export default function ServicesSection({ lang, t }) {
  const iconMap = {
    Smartphone,
    Server,
    Printer,
    Database,
    Cpu,
    Sparkles
  };

  return (
    <section id="services" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4">
            {t.services.title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-light">
            {t.services.subtitle}
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id || idx}
                className="surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle top card accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Index Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#161B29] border border-white/[0.08] flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                      <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110 duration-200" />
                    </div>
                    <span className="font-mono-code text-xs text-slate-400 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono-code px-2 py-0.5 rounded-md bg-[#161B29] text-slate-300 border border-white/[0.06] group-hover:border-emerald-500/20 group-hover:text-slate-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Full-Spectrum Engineering Ownership Callout */}
        <div className="mt-12 surface-card rounded-2xl p-6 sm:p-8 border-emerald-500/20 bg-gradient-to-r from-[#0D1118] via-[#111624] to-[#0D1118]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono-code font-bold uppercase tracking-wider">
                <GitBranch className="w-4 h-4" />
                <span>
                  {lang === 'ar' ? 'فائدة المعمارية الشاملة للعميل' : 'Client Advantage: Unified Architecture'}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {lang === 'ar'
                  ? 'لماذا يُفضّل أصحاب المشاريع المعمارية المتكاملة مع مهندس واحد؟'
                  : 'Why Enterprise Clients Rely on Unified Full-Spectrum Engineering'}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {lang === 'ar'
                  ? 'غياب الحواجز بين مبرمج الواجهات ومبرمج السيرفر ومسؤول السيرفرات. عندما يقوم مهندس واحد بتصميم قاعدة البيانات، وبرمجة الـ API، وتطبيق الموبايل، وربط عتاد الطباعة، تنعدم أخطاء التوافق، وتقل تكلفة الصيانة بنسبة 60%، وتتحقق سرعة إطلاق قياسية.'
                  : 'Zero friction between frontend, backend, and DevOps. When a single architect designs the database schema, engineers the high-concurrency API, crafts the Flutter mobile interface, and bridges physical hardware, integration drift is eliminated and deployment speed triples.'}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#161B29] border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 shadow-glow-subtle"
            >
              <span>{lang === 'ar' ? 'ناقش معمارية نظامك' : 'Discuss System Specs'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
