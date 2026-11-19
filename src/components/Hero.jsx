import React from 'react';
import { ArrowDown, MessageSquare, Terminal, CheckCircle2, Shield, Activity, Cpu, Layers } from 'lucide-react';

export default function Hero({ lang, t, profile }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-subtle-grid">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-ambient-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Availability Badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111520] border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium shadow-glow-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.hero.badge}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Copy & CTAs */}
          <div className="lg:col-span-7 text-center md:text-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.25] sm:leading-[1.2] mb-6">
              <span className="block text-slate-400 text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                {t.hero.title_prefix} <span className="font-mono-code text-emerald-400">&lt;{t.hero.title_tag} /&gt;</span>
              </span>
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                {t.hero.title_highlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8 font-light">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm sm:text-base hover:bg-emerald-400 active:scale-95 transition-all duration-200 shadow-glow-emerald"
              >
                <Terminal className="w-4 h-4" />
                <span>{t.hero.cta_primary}</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111520] border border-white/[0.09] text-slate-200 font-semibold text-sm sm:text-base hover:text-white hover:border-emerald-500/40 hover:bg-[#161B29] transition-all duration-200"
              >
                <span>{t.hero.cta_secondary}</span>
                <ArrowDown className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            {/* Hard Value Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08]">
              <div className="flex flex-col">
                <span className="font-mono-code text-2xl sm:text-3xl font-extrabold text-white">12+</span>
                <span className="text-xs text-slate-400 font-medium mt-1">{t.hero.stats_systems}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono-code text-2xl sm:text-3xl font-extrabold text-emerald-400">&lt;15ms</span>
                <span className="text-xs text-slate-400 font-medium mt-1">{t.hero.stats_latency}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono-code text-2xl sm:text-3xl font-extrabold text-white">100%</span>
                <span className="text-xs text-slate-400 font-medium mt-1">{t.hero.stats_ownership}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono-code text-2xl sm:text-3xl font-extrabold text-emerald-400">0%</span>
                <span className="text-xs text-slate-400 font-medium mt-1">{lang === 'ar' ? 'أخطاء قيود مالية' : 'Ledger Desync'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Terminal / System Spotlight */}
          <div className="lg:col-span-5">
            <div className="surface-card rounded-2xl overflow-hidden shadow-2xl relative">
              {/* Window Header */}
              <div className="bg-[#111520] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>aalij-core.engine // active</span>
                </div>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  PROD-LIVE
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono-code text-xs text-slate-300 space-y-3.5 leading-relaxed bg-[#0A0D14]/90">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-slate-400">
                  <span>ENDPOINT: https://aalij.dev</span>
                  <span className="text-emerald-400 font-semibold">200 OK</span>
                </div>

                <div className="space-y-1.5 text-[11px] sm:text-xs">
                  <p className="text-slate-400">
                    <span className="text-emerald-400">$</span> inspect --architecture full-stack
                  </p>
                  <p className="text-slate-300">
                    <span className="text-emerald-400">✓</span> <strong className="text-white">Mobile Tier:</strong> Flutter (Clean Arch / BLoC / SQLite Offline)
                  </p>
                  <p className="text-slate-300">
                    <span className="text-emerald-400">✓</span> <strong className="text-white">Cloud Backend:</strong> Go (Golang) + Laravel Livewire SaaS
                  </p>
                  <p className="text-slate-300">
                    <span className="text-emerald-400">✓</span> <strong className="text-white">Hardware Bridge:</strong> Python / Linux CUPS Silent HTTP Spool
                  </p>
                  <p className="text-slate-300">
                    <span className="text-emerald-400">✓</span> <strong className="text-white">Data Consistency:</strong> PostgreSQL ACID + Redis Mutex Locks
                  </p>
                  <p className="text-slate-300">
                    <span className="text-emerald-400">✓</span> <strong className="text-white">Edge Infra:</strong> Docker Containers, Traefik Reverse Proxy
                  </p>
                </div>

                {/* Live Real-time Simulation Status Box */}
                <div className="mt-4 p-3.5 rounded-xl bg-[#111520] border border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Concurrency Engine</span>
                    </span>
                    <span className="text-emerald-400 font-bold">11.2ms Avg</span>
                  </div>
                  <div className="w-full bg-[#1A2234] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-[88%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                    <span>Double-Entry Ledger</span>
                    <span className="text-emerald-400 font-semibold">Protected</span>
                  </div>
                </div>

                <div className="pt-2 text-slate-400 text-[11px] flex items-center gap-1">
                  <span className="text-emerald-400">❯</span>
                  <span>ready for client deployment</span>
                  <span className="w-2 h-3.5 bg-emerald-400 animate-cursor inline-block" />
                </div>
              </div>

              {/* Bottom Quick Card */}
              <div className="px-5 py-3.5 bg-[#111520] border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'ar' ? 'ضمان سلامة المعمارية' : 'Architectural Resilience'}</span>
                </span>
                <span className="font-mono-code text-slate-400 text-[11px]">Hussien Ghazal</span>
              </div>
            </div>
          </div>

        </div>

        {/* Engineering Manifesto Banner */}
        <div id="philosophy" className="mt-20 pt-8 border-t border-white/[0.08] scroll-mt-24">
          <div className="surface-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 max-w-4xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-emerald-400 font-bold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{t.manifesto.tag}</span>
                </div>
                <blockquote className="text-base sm:text-lg md:text-xl font-medium text-slate-200 italic leading-relaxed">
                  "{t.manifesto.quote}"
                </blockquote>
              </div>
              <div className="flex flex-col shrink-0 text-start md:text-end border-s-2 md:border-s-0 md:border-e-2 border-emerald-500/60 ps-4 md:ps-0 md:pe-4">
                <span className="font-bold text-white text-sm sm:text-base">{t.manifesto.author}</span>
                <span className="text-xs text-slate-400 font-mono-code">Full-Spectrum Architect</span>
                <span className="text-xs text-emerald-400/90 font-mono-code mt-0.5">{profile.brandDomain}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
