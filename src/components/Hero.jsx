import React from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Layers,
  Smartphone,
  Server,
  Printer,
  Cloud
} from 'lucide-react';

export default function Hero({ lang, t, profile }) {
  const layerIcons = [Smartphone, Server, Printer, Cloud];

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-subtle-grid"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-ambient-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Availability Badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111520] border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium shadow-glow-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>{t.hero.badge}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Primary Value Column */}
          <div className="lg:col-span-7 text-center md:text-start">
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.4] sm:leading-[1.32] mb-6"
            >
              <span className="block text-slate-400 text-lg sm:text-xl md:text-2xl font-bold mb-2.5">
                {t.hero.title_prefix}{' '}
                <span dir="ltr" className="inline-block font-mono-code text-emerald-400 font-bold">
                  &lt;{t.hero.title_tag} /&gt;
                </span>
              </span>
              <span className="bg-gradient-to-l from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {t.hero.title_highlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8 font-normal">
              {t.hero.description}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3.5 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm sm:text-base hover:bg-emerald-400 active:scale-95 transition-all duration-200 shadow-glow-emerald"
              >
                <span>{t.hero.cta_primary}</span>
                <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111520] border border-white/[0.1] text-slate-200 font-semibold text-sm sm:text-base hover:text-white hover:border-emerald-500/40 hover:bg-[#161B29] transition-all duration-200"
              >
                <span>{t.hero.cta_secondary}</span>
                <ArrowDown className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            {/* Grounded Value & Capability Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08]">
              {t.hero.trust_points.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span
                    className={`font-mono-code text-xl sm:text-2xl font-extrabold ${
                      idx % 2 === 1 ? 'text-emerald-400' : 'text-white'
                    }`}
                  >
                    {item.value}
                  </span>
                  <span className="text-xs text-slate-400 font-medium mt-1 leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Business Delivery Blueprint Card */}
          <div className="lg:col-span-5">
            <div className="surface-card rounded-2xl overflow-hidden shadow-2xl relative border border-white/[0.09]">
              {/* Card Header */}
              <div className="bg-[#111520] px-5 py-3.5 border-b border-white/[0.08] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-200">
                    {t.hero.blueprint.header}
                  </span>
                </div>
                <span className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                  {t.hero.blueprint.status}
                </span>
              </div>

              {/* Delivery Layers */}
              <div className="p-5 sm:p-6 space-y-3 bg-[#0A0D14]/95">
                {t.hero.blueprint.layers.map((layer, index) => {
                  const LayerIcon = layerIcons[index] || Layers;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#111520] border border-white/[0.06] hover:border-emerald-500/30 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <LayerIcon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h2 className="text-sm font-bold text-white leading-snug">
                            {layer.title}
                          </h2>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {layer.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Guarantee Strip */}
              <div className="px-5 py-3.5 bg-[#111520] border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-2 font-medium">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.hero.blueprint.footer_left}</span>
                </span>
                <span className="font-mono-code text-slate-400 text-[11px] shrink-0">
                  {t.hero.blueprint.footer_right}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Value Manifesto Banner */}
        <div id="philosophy" className="mt-16 pt-6 scroll-mt-24">
          <div className="surface-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 end-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 max-w-4xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-emerald-400 font-bold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{t.manifesto.tag}</span>
                </div>
                <blockquote className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed">
                  &ldquo;{t.manifesto.quote}&rdquo;
                </blockquote>
              </div>
              <div className="flex flex-col shrink-0 text-start md:text-end border-s-2 md:border-s-0 md:border-e-2 border-emerald-500/60 ps-4 md:ps-0 md:pe-4">
                <span className="font-bold text-white text-sm sm:text-base">{t.manifesto.author}</span>
                <span className="text-xs text-emerald-400/90 font-mono-code mt-1">{profile.brandDomain}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
