import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import React, { useState, useEffect, useRef } from 'react'
import {
  Cpu,
  Globe,
  Zap,
  Layers,
  MessageCircle,
  Terminal,
  ShieldCheck,
  Smartphone,
  Server,
  Printer,
  Network,
  Database,
  Bot,
  PlayCircle,
  Play,
  Code2,
  Coins,
  Sparkles,
  FileCode,
  Copy,
  Check,
  CheckCheck,
  ShoppingBag,
  FileText,
  Utensils,
  GraduationCap,
  Stethoscope,
  Mail,
  X,
  Phone,
  MapPin,
  ExternalLink,
  Search,
  AlertTriangle,
  TrendingUp,
  Menu,
} from 'lucide-react'
import BRAND_DATA from './data/brandData'

function App() {
  const [count, setCount] = useState(0)
// Icon dictionary helper
const PROJECT_ICONS = {
  sparkles: Sparkles,
  coins: Coins,
  printer: Printer,
  'shopping-bag': ShoppingBag,
  network: Network,
  'file-text': FileText,
  'shield-check': ShieldCheck,
  utensils: Utensils,
  'graduation-cap': GraduationCap,
}

export default function App() {
  const [lang, setLang] = useState('ar')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Terminal state
  const [terminalCmd, setTerminalCmd] = useState(
    'ready to architect and cure your next system'
  )

  // Simulator state
  const [currentSimTab, setCurrentSimTab] = useState(0)
  const [isSimRunning, setIsSimRunning] = useState(false)
  const [simStep, setSimStep] = useState(0)
  const [simStatus, setSimStatus] = useState('STANDBY')
  const [simLogs, setSimLogs] = useState([])
  const [showSimCode, setShowSimCode] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)
  const simIntervalRef = useRef(null)

  // Projects filter & modal state
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  // Diagnosis form state
  const [diagCapabilities, setDiagCapabilities] = useState([
    'تطبيق موبايل Flutter متقدم',
  ])
  const [diagScope, setDiagScope] = useState('بناء منظومة كاملة من الصفر')
  const [diagNotes, setDiagNotes] = useState('')

  const t = BRAND_DATA.i18n[lang]
  const currentSimData = BRAND_DATA.simulator[currentSimTab]

  // Update HTML direction and language attribute
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  // Language switch handler
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))
  }

  // Switch simulator tab handler
  const handleSwitchSimTab = (index) => {
    if (simIntervalRef.current) clearInterval(simIntervalRef.current)
    setCurrentSimTab(index)
    setIsSimRunning(false)
    setSimStep(0)
    setSimStatus('STANDBY')
    setSimLogs([])
  }

  // Terminal quick checks
  const handleTerminalAction = (type) => {
    if (type === 'perf') {
      setTerminalCmd(
        'perf --benchmark: P99 latency = 4.2ms | Max Concurrency = 25,000 req/sec'
      )
    } else if (type === 'sec') {
      setTerminalCmd(
        'security --audit: 0 vulnerabilities found | Zero-Trust & AES-256 Verified'
      )
    } else {
      setTerminalCmd('ready to architect and cure your next system')
    }
  }

  // Simulator playback runner
  const runSimulation = () => {
    if (isSimRunning) return
    setIsSimRunning(true)
    setSimStatus('PROCESSING')
    setSimStep(0)
    setSimLogs([])

    let step = 0
    const logs = currentSimData.logs
    simIntervalRef.current = setInterval(() => {
      if (step < 4) {
        setSimStep(step + 1)
        const log1 = logs[step * 2] || ''
        const log2 = logs[step * 2 + 1] || ''
        setSimLogs((prev) => [...prev, log1, log2].filter(Boolean))
        step++
      } else {
        clearInterval(simIntervalRef.current)
        setSimStatus('COMPLETED (200 OK)')
        if (logs[8]) {
          setSimLogs((prev) => [...prev, logs[8]])
        }
        setIsSimRunning(false)
      }
    }, 550)
  }

  // Copy code helper
  const copyCode = () => {
    navigator.clipboard.writeText(currentSimData.code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2500)
  }

  // Diagnostic checkbox toggle
  const toggleCapability = (val) => {
    setDiagCapabilities((prev) =>
      prev.includes(val) ? prev.filter((c) => c !== val) : [...prev, val]
    )
  }

  // Dispatch to WhatsApp
  const handleDispatchWhatsApp = () => {
    const isAr = lang === 'ar'
    const caps = diagCapabilities.length > 0 ? diagCapabilities : ['هندسة نظام متكامل']
    const notes = diagNotes.trim() || (isAr ? 'لا توجد ملاحظات إضافية' : 'No additional notes')

    let msg = ''
    if (isAr) {
      msg = `مرحباً مهندس حسين (aalij.dev)،\n\nأرغب بمناقشة مشروع جديد وفق التشخيص التالي:\n\n`
      msg += `📌 المكونات المطلوبة:\n${caps.map((c) => `• ${c}`).join('\n')}\n\n`
      msg += `🎯 نطاق العمل:\n• ${diagScope}\n\n`
      msg += `📝 نبذة عن المشروع:\n${notes}\n\n`
      msg += `يرجى التواصل لمناقشة المعمارية وخطة التنفيذ.`
    } else {
      msg = `Hello Engineer Hussien (aalij.dev),\n\nI would like to discuss a new project with the following architectural specifications:\n\n`
      msg += `📌 Required Capabilities:\n${caps.map((c) => `• ${c}`).join('\n')}\n\n`
      msg += `🎯 Engagement Scope:\n• ${diagScope}\n\n`
      msg += `📝 Project Summary:\n${notes}\n\n`
      msg += `Looking forward to discussing the architecture and execution plan.`
    }

    const encoded = encodeURIComponent(msg)
    window.open(`https://wa.me/963949359837?text=${encoded}`, '_blank')
  }

  // Dispatch to Email
  const handleDispatchEmail = () => {
    const isAr = lang === 'ar'
    const caps = diagCapabilities.length > 0 ? diagCapabilities : ['هندسة نظام متكامل']
    const notes = diagNotes.trim() || (isAr ? 'لا توجد ملاحظات إضافية' : 'No additional notes')

    const subject = encodeURIComponent(
      isAr
        ? 'طلب معالجة وهندسة مشروع جديد — aalij.dev'
        : 'New System Architecture Request — aalij.dev'
    )

    let body = ''
    if (isAr) {
      body = `السيد المهندس حسين غزال المحترم،\n\nتحية طيبة،\n\nأود استشارتكم في بناء وتشييد المنظومة التالية:\n\nالمكونات التقنية المطلوبة:\n${caps
        .map((c) => `- ${c}`)
        .join('\n')}\n\nنطاق العمل:\n- ${diagScope}\n\nنبذة وتفاصيل المشروع:\n${notes}\n\nمع فائق الشكر والتقدير،`
    } else {
      body = `Dear Engineer Hussien Ghazal,\n\nI would like to consult with you on engineering the following system:\n\nRequired Technical Components:\n${caps
        .map((c) => `- ${c}`)
        .join('\n')}\n\nProject Scope:\n- ${diagScope}\n\nProject Details:\n${notes}\n\nBest regards,`
    }

    const encodedBody = encodeURIComponent(body)
    window.location.href = `mailto:hussien.ghazal98@gmail.com?subject=${subject}&body=${encodedBody}`
  }

  // Filtered projects
  const filteredProjects = BRAND_DATA.projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  )

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
    <div className="bg-brand-dark text-slate-100 min-h-screen relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Top Ambient Glow Elements */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-60 right-10 w-80 h-80 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-[45rem] left-10 w-96 h-96 bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-10" />

      {/* ========================================================================= */}
      {/* SECTION 1: GLASSMORPHIC STICKY NAVBAR */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand & Name */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Cpu className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono-code text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  &lt;aalij.dev /&gt;
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <span className="text-xs text-brand-textMuted tracking-wider font-medium">
                {lang === 'ar'
                  ? 'معالجة وهندسة الأنظمة | Systems Processing'
                  : 'Systems Processing & Full-Spectrum Engineering'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 text-sm font-medium text-slate-300 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.08]">
            <a
              href="#philosophy"
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all"
            >
              {t.nav_philosophy}
            </a>
            <a
              href="#capabilities"
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all"
            >
              {t.nav_capabilities}
            </a>
            <a
              href="#simulator"
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>{t.nav_simulator}</span>
            </a>
            <a
              href="#projects"
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all"
            >
              {t.nav_projects}
            </a>
            <a
              href="#diagnostic"
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all"
            >
              {t.nav_contact}
            </a>
          </nav>

          {/* Right Actions & Language Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-emerald-500/40 bg-white/[0.02] hover:bg-white/[0.06] text-xs font-semibold text-slate-200 transition-all duration-200"
            >
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'ar' ? 'English / EN' : 'عربي / AR'}</span>
            </button>

            <a
              href="#diagnostic"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-brand-dark font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <Zap className="w-4 h-4 fill-brand-dark" />
              <span>{t.nav_cta}</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-4 bg-brand-card border-b border-white/10 space-y-2">
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            >
              {t.nav_philosophy}
            </a>
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            >
              {t.nav_capabilities}
            </a>
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            >
              {t.nav_simulator}
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            >
              {t.nav_projects}
            </a>
            <a
              href="#diagnostic"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-emerald-400 font-semibold"
            >
              {t.nav_contact}
            </a>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* SECTION 2: HIGH-IMPACT HERO + TERMINAL & MANIFESTO */}
      {/* ========================================================================= */}
      <section id="philosophy" className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Column 1: Verbal Brand Identity */}
            <div className="lg:col-span-7 flex flex-col items-start text-start">
              {/* Pulsing Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>{t.hero_badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.25] sm:leading-[1.2] mb-6">
                <span>{t.hero_title_prefix}</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  {t.hero_title_highlight}
                </span>
              </h1>

              {/* Tagline */}
              <p
                className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal"
                dangerouslySetInnerHTML={{ __html: t.hero_tagline }}
              />

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-9 backdrop-blur-sm">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono text-emerald-400">
                    +13
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                    {t.metric_systems}
                  </span>
                </div>
                <div className="flex flex-col border-x border-white/10 px-2 sm:px-4">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono text-cyan-400">
                    &lt;15ms
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                    {t.metric_latency}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono text-teal-300">
                    100%
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                    {t.metric_ownership}
                  </span>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-brand-dark font-extrabold text-sm shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all transform hover:-translate-y-0.5"
                >
                  <Layers className="w-4 h-4" />
                  <span>{t.hero_explore_btn}</span>
                </a>
                <a
                  href="https://wa.me/963949359837?text=مرحباً%20مهندس%20حسين،%20اطلعت%20على%20منصة%20aalij.dev%20وأرغب%20بمناقشة%20مشروع%20جديد."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-emerald-500/30 hover:border-emerald-400 bg-white/[0.03] hover:bg-emerald-500/10 text-emerald-300 hover:text-white font-bold text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{t.hero_whatsapp_btn}</span>
                </a>
              </div>
            </div>

            {/* Column 2: Interactive Terminal Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-[#070B12]/90 shadow-2xl overflow-hidden shadow-emerald-950/30 backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>hussien@aalij.dev: ~</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-emerald-400 uppercase">SYS_ACTIVE</span>
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-5 font-mono-code text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-3.5 min-h-[360px] select-text">
                  <div className="text-slate-500 font-mono">// System Architecture & Diagnostics Runtime</div>
                  <div className="text-emerald-400 flex items-center gap-2">
                    <span className="text-cyan-400">$</span> aalij --inspect-stack --full-spectrum
                  </div>

                  <div className="space-y-1.5 pt-1 text-slate-300">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>[MOBILE CORE]</span>
                      <span className="text-emerald-400 font-semibold">[Flutter/Dart 60-120fps] OK</span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4 border-l border-white/10">
                      Clean Architecture, MVVM, Offline-First SQLite
                    </div>

                    <div className="flex items-center justify-between text-slate-400 pt-1">
                      <span>[CLOUD BACKEND]</span>
                      <span className="text-emerald-400 font-semibold">[Go (Golang) + Laravel] OK</span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4 border-l border-white/10">
                      Multi-Tenant SaaS, PostgreSQL Pool, Redis Cache
                    </div>

                    <div className="flex items-center justify-between text-slate-400 pt-1">
                      <span>[HARDWARE / POS]</span>
                      <span className="text-cyan-300 font-semibold">[CUPS / Python Bridges] OK</span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4 border-l border-white/10">
                      Silent Cloud Printing, ESC/POS, RS-485 / CAN
                    </div>

                    <div className="flex items-center justify-between text-slate-400 pt-1">
                      <span>[DEVOPS & NET]</span>
                      <span className="text-emerald-400 font-semibold">[Linux / Traefik / VPN] SECURE</span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4 border-l border-white/10">
                      Ubuntu VPS, Docker, WireGuard, Xray REALITY
                    </div>
                  </div>

                  <div className="pt-2 text-cyan-300">
                    <span className="text-slate-500">Processing Verdict:</span> Systems operating with zero single
                    points of failure (0-SPOF).
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-slate-400">
                    <span>
                      Current Latency: <span className="text-emerald-400 font-bold">4.2ms</span>
                    </span>
                    <span>
                      Uptime: <span className="text-emerald-400 font-bold">99.98%</span>
                    </span>
                  </div>

                  <div className="pt-1 flex items-center gap-2 text-emerald-400">
                    <span className="text-cyan-400">$</span>
                    <span>{terminalCmd}</span>
                    <span className="terminal-cursor" />
                  </div>
                </div>

                {/* Terminal Quick Check Buttons */}
                <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-slate-500">Interactive quick checks:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleTerminalAction('perf')}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-300 border border-white/5 transition-all"
                    >
                      perf()
                    </button>
                    <button
                      onClick={() => handleTerminalAction('sec')}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/5 transition-all"
                    >
                      security()
                    </button>
                    <button
                      onClick={() => handleTerminalAction('reset')}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 border border-white/5 transition-all"
                    >
                      reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ENGINEERING MANIFESTO BANNER */}
          <div className="mt-16 lg:mt-24 relative rounded-3xl p-8 sm:p-10 lg:p-12 overflow-hidden border border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 via-[#0C121D]/90 to-brand-dark shadow-[0_0_50px_rgba(16,185,129,0.06)]">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex items-start gap-5 max-w-4xl">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-bold mb-2">
                    {t.manifesto_heading}
                  </div>
                  <blockquote className="text-base sm:text-xl lg:text-2xl font-bold text-white leading-relaxed">
                    {t.manifesto_quote}
                  </blockquote>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end shrink-0 gap-2 text-start md:text-end border-t md:border-t-0 md:border-r rtl:md:border-r-0 rtl:md:border-l border-white/10 pt-4 md:pt-0 pr-0 rtl:pr-0 rtl:md:pl-6 ltr:md:pr-6">
                <span className="text-base font-extrabold text-white">{t.author_name}</span>
                <span className="text-xs text-brand-textMuted font-medium">{t.author_title}</span>
                <span className="text-xs text-emerald-400/90 font-mono">{t.author_location}</span>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
      {/* ========================================================================= */}
      {/* SECTION 3: FULL-SPECTRUM TECHNICAL CAPABILITIES (BENTO GRID) */}
      {/* ========================================================================= */}
      <section id="capabilities" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>{t.cap_badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {t.cap_title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">{t.cap_subtitle}</p>
          </div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
          {/* 6-Card Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Flutter */}
            <div className="glass-card rounded-3xl p-7 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">
                    60-120 FPS
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {t.cap_1_title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{t.cap_1_desc}</p>
              </div>
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Flutter / Dart
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Clean Architecture
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Offline-First SQLite
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  BLoC & MVVM
                </span>
              </div>
            </div>

            {/* Card 2: High Concurrency Go & Laravel */}
            <div className="glass-card rounded-3xl p-7 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <Server className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                    &lt;15ms Response
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-3">
                  {t.cap_2_title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{t.cap_2_desc}</p>
              </div>
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">Go (Golang)</span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Laravel & Livewire
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Multi-Tenant SaaS
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  C# Enterprise
                </span>
              </div>
            </div>

            {/* Card 3: Hardware & POS */}
            <div className="glass-card rounded-3xl p-7 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                    <Printer className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/25">
                    Direct POS Bridge
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                  {t.cap_3_title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{t.cap_3_desc}</p>
              </div>
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Silent Printing CUPS
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Python Local Bridge
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Android TV & ADB
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  CAN / RS-485 IoT
                </span>
              </div>
            </div>

            {/* Card 4: DevOps & Linux */}
            <div className="glass-card rounded-3xl p-7 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                    <Network className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/25">
                    Zero-Trust Network
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-3">
                  {t.cap_4_title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{t.cap_4_desc}</p>
              </div>
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Linux VPS / Ubuntu
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Docker & Traefik
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  WireGuard & REALITY
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Bash Automation
                </span>
              </div>
            </div>

            {/* Card 5: Databases & Caching */}
            <div className="glass-card rounded-3xl p-7 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                    <Database className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/25">
                    ACID Compliance
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors mb-3">
                  {t.cap_5_title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{t.cap_5_desc}</p>
              </div>
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">PostgreSQL</span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Redis In-Memory
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Query Indexing
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Deadlock Prevention
                </span>
              </div>
            </div>

            {/* Card 6: AI & Sockets */}
            <div className="glass-card rounded-3xl p-7 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/25">
                    Real-Time Sync
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-3">
                  {t.cap_6_title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{t.cap_6_desc}</p>
              </div>
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Vision AI Inference
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  WebSockets Pub/Sub
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Geo-Tracking
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono">
                  Event-Driven Arch
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: INTERACTIVE ARCHITECTURE & PROCESSING SIMULATOR */}
      {/* ========================================================================= */}
      <section id="simulator" className="py-20 lg:py-28 relative bg-[#06080D]/60 border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono font-semibold mb-3">
                <PlayCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.sim_badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{t.sim_title}</h2>
              <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">{t.sim_subtitle}</p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={runSimulation}
                disabled={isSimRunning}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-brand-dark font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all transform hover:scale-[1.02]"
              >
                <Play className="w-4 h-4 fill-brand-dark" />
                <span>{isSimRunning ? (lang === 'ar' ? 'جاري المعالجة...' : 'Executing...') : t.sim_run_btn}</span>
              </button>
              <button
                onClick={() => setShowSimCode(!showSimCode)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 hover:border-emerald-500/30 bg-white/[0.03] hover:bg-white/[0.06] text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all"
              >
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>{showSimCode ? (lang === 'ar' ? 'عرض مسار المعالجة' : 'View Pipeline Trace') : t.sim_view_code_btn}</span>
              </button>
            </div>
          </div>

          {/* 3 Tab Buttons */}
          <div className="flex border-b border-white/10 gap-2 overflow-x-auto pb-px mb-8 scrollbar-none">
            <button
              onClick={() => handleSwitchSimTab(0)}
              className={`px-5 py-3 text-sm flex items-center gap-2.5 whitespace-nowrap transition-all border-b-2 ${
                currentSimTab === 0
                  ? 'border-emerald-400 text-emerald-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200 font-semibold'
              }`}
            >
              <Coins className="w-4 h-4" />
              <span>{t.sim_tab_1}</span>
            </button>
            <button
              onClick={() => handleSwitchSimTab(1)}
              className={`px-5 py-3 text-sm flex items-center gap-2.5 whitespace-nowrap transition-all border-b-2 ${
                currentSimTab === 1
                  ? 'border-emerald-400 text-emerald-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200 font-semibold'
              }`}
            >
              <Printer className="w-4 h-4" />
              <span>{t.sim_tab_2}</span>
            </button>
            <button
              onClick={() => handleSwitchSimTab(2)}
              className={`px-5 py-3 text-sm flex items-center gap-2.5 whitespace-nowrap transition-all border-b-2 ${
                currentSimTab === 2
                  ? 'border-emerald-400 text-emerald-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200 font-semibold'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.sim_tab_3}</span>
            </button>
          </div>

          {/* Simulator Playground */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            {/* Info Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">{currentSimData.title[lang]}</h4>
                  <p className="text-xs text-slate-400">{currentSimData.desc[lang]}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">
                  Latency:{' '}
                  <span className="text-emerald-400 font-bold">{currentSimData.latency}</span>
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Status:{' '}
                  <span
                    className={`font-bold ${
                      simStatus.includes('COMPLETED')
                        ? 'text-emerald-400'
                        : simStatus === 'PROCESSING'
                        ? 'text-cyan-400 animate-pulse'
                        : 'text-slate-400'
                    }`}
                  >
                    {simStatus}
                  </span>
                </span>
              </div>
            </div>

            {/* Pipeline View */}
            {!showSimCode ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  {currentSimData.nodes.map((node, idx) => {
                    const isPassed = simStep > idx + 1
                    const isCurrent = simStep === idx + 1
                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl border transition-all duration-300 ${
                          isCurrent
                            ? 'bg-emerald-500/10 border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                            : isPassed
                            ? 'bg-white/[0.04] border-emerald-500/30'
                            : 'bg-white/[0.02] border-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-mono text-slate-500 font-bold">
                            STAGE 0{idx + 1}
                          </span>
                          <div
                            className={`w-2 h-2 rounded-full transition-all ${
                              isCurrent
                                ? 'bg-emerald-400 animate-ping'
                                : isPassed
                                ? 'bg-emerald-400'
                                : 'bg-slate-600'
                            }`}
                          />
                        </div>
                        <div className="text-sm font-bold text-white mb-1">{node.title[lang]}</div>
                        <div className="text-xs text-slate-400">{node.desc[lang]}</div>
                        <div className="mt-3 text-[11px] font-mono text-slate-500">{node.time}</div>
                      </div>
                    )
                  })}
                </div>

                {/* Live Log Terminal */}
                <div className="rounded-2xl bg-[#07090F] border border-white/10 p-4 font-mono-code text-xs text-slate-300">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-500 mb-2">
                    <span>[LIVE EXECUTION TRACE LOG]</span>
                    <span>{isSimRunning ? 'TRACING...' : simStatus}</span>
                  </div>
                  <div className="space-y-1 text-slate-400 max-h-36 overflow-y-auto">
                    {simLogs.length === 0 ? (
                      <div className="text-slate-600">
                        &gt; Waiting for execution trigger... Click "{t.sim_run_btn}" to benchmark.
                      </div>
                    ) : (
                      simLogs.map((log, i) => (
                        <div
                          key={i}
                          className={
                            i === simLogs.length - 1
                              ? 'text-cyan-300 font-bold'
                              : i % 2 === 0
                              ? 'text-emerald-300'
                              : 'text-slate-300'
                          }
                        >
                          {log}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Code View */
              <div>
                <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-t-2xl font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-emerald-400" />
                    <span>{currentSimData.filename}</span>
                  </div>
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? (lang === 'ar' ? 'تم النسخ!' : 'Copied!') : lang === 'ar' ? 'نسخ الكود' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="p-5 bg-[#05070B] border-x border-b border-white/10 rounded-b-2xl font-mono-code text-xs sm:text-[13px] text-emerald-300 overflow-x-auto leading-relaxed max-h-[420px] select-text">
                  <code>{currentSimData.code}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: COMPLETE PRODUCTION SYSTEMS SHOWCASE */}
      {/* ========================================================================= */}
      <section id="projects" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono font-semibold mb-3">
                <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.proj_badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {t.proj_title}
              </h2>
              <p className="mt-3 text-slate-400 text-base max-w-2xl">{t.proj_subtitle}</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm transition-all ${
                  activeFilter === 'all'
                    ? 'font-bold bg-emerald-500 text-brand-dark'
                    : 'font-semibold border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {t.filter_all}
              </button>
              <button
                onClick={() => setActiveFilter('mobile')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm transition-all ${
                  activeFilter === 'mobile'
                    ? 'font-bold bg-emerald-500 text-brand-dark'
                    : 'font-semibold border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {t.filter_mobile}
              </button>
              <button
                onClick={() => setActiveFilter('cloud')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm transition-all ${
                  activeFilter === 'cloud'
                    ? 'font-bold bg-emerald-500 text-brand-dark'
                    : 'font-semibold border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {t.filter_cloud}
              </button>
              <button
                onClick={() => setActiveFilter('pos')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm transition-all ${
                  activeFilter === 'pos'
                    ? 'font-bold bg-emerald-500 text-brand-dark'
                    : 'font-semibold border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {t.filter_pos}
              </button>
            </div>
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((proj) => {
              const IconComponent = PROJECT_ICONS[proj.icon] || Cpu
              return (
                <div
                  key={proj.id}
                  className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  <div>
                    {/* Top Impact Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{proj.impact[lang]}</span>
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Domain */}
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {proj.title[lang]}
                      </h3>
                      {proj.domain && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline mt-0.5"
                        >
                          <ExternalLink className="w-3 h-3" /> {proj.domain}
                        </a>
                      )}
                    </div>

                    {/* Subsystems Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.subSystems.map((sub, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">{proj.desc[lang]}</p>
                  </div>

                  {/* Bottom: Stack & Modal trigger */}
                  <div>
                    <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 mb-5">
                      {proj.stack.slice(0, 4).map((st, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5"
                        >
                          {st}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-white/10 hover:border-emerald-500/40 bg-white/[0.02] hover:bg-emerald-500/10 text-xs sm:text-sm font-bold text-slate-200 hover:text-emerald-300 transition-all"
                    >
                      <Search className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.view_case_study}</span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: SMART PROJECT DIAGNOSIS & DIRECT DISPATCHER */}
      {/* ========================================================================= */}
      <section id="diagnostic" className="py-20 lg:py-28 relative bg-[#070A11] border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono font-semibold mb-3">
              <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.diag_badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {t.diag_title}
            </h2>
            <p className="mt-4 text-slate-400 text-base">{t.diag_subtitle}</p>
          </div>

          {/* Diagnostic Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.06)]">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              {/* Step 1: Capabilities */}
              <div>
                <label className="block text-sm sm:text-base font-bold text-white mb-3">
                  {t.diag_step1_label}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { key: 'diag_opt_flutter', val: 'تطبيق موبايل Flutter متقدم' },
                    { key: 'diag_opt_saas', val: 'نظام سحابي Multi-Tenant SaaS' },
                    { key: 'diag_opt_pos', val: 'نقاط بيع وطباعة صامتة POS' },
                    { key: 'diag_opt_devops', val: 'إدارة سيرفرات وشبكات DevOps' },
                    { key: 'diag_opt_consult', val: 'استشارة وحل اختناقات معمارية' },
                    { key: 'diag_opt_ai', val: 'دمج ذكاء اصطناعي وأنظمة لحظية' },
                  ].map((item) => {
                    const isChecked = diagCapabilities.includes(item.val)
                    return (
                      <label
                        key={item.key}
                        onClick={() => toggleCapability(item.val)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isChecked
                            ? 'border-emerald-500/40 bg-emerald-500/10'
                            : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          readOnly
                          className="accent-emerald-500 w-4 h-4 rounded"
                        />
                        <span className="text-xs sm:text-sm font-medium text-slate-200">{t[item.key]}</span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* Step 2: Scope */}
              <div>
                <label className="block text-sm sm:text-base font-bold text-white mb-3">
                  {t.diag_step2_label}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { key: 'diag_scope_greenfield', val: 'بناء منظومة كاملة من الصفر' },
                    { key: 'diag_scope_refactor', val: 'تطوير ومعالجة وتوسيع نظام قائم' },
                    { key: 'diag_scope_partnership', val: 'استشارة هندسية وشراكة تقنية مستمرة' },
                  ].map((item) => {
                    const isSelected = diagScope === item.val
                    return (
                      <label
                        key={item.key}
                        onClick={() => setDiagScope(item.val)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-emerald-500/40 bg-emerald-500/10'
                            : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="scope"
                          checked={isSelected}
                          readOnly
                          className="accent-emerald-500 w-4 h-4"
                        />
                        <span
                          className={`text-xs sm:text-sm ${
                            isSelected ? 'font-semibold text-white' : 'font-medium text-slate-200'
                          }`}
                        >
                          {t[item.key]}
                        </span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* Step 3: Project Notes */}
              <div>
                <label htmlFor="project-notes" className="block text-sm sm:text-base font-bold text-white mb-2">
                  {t.diag_step3_label}
                </label>
                <textarea
                  id="project-notes"
                  rows={4}
                  value={diagNotes}
                  onChange={(e) => setDiagNotes(e.target.value)}
                  className="w-full rounded-2xl bg-[#090D15] border border-white/10 focus:border-emerald-400 p-4 text-sm text-slate-200 focus:outline-none transition-colors"
                  placeholder={
                    lang === 'ar'
                      ? 'مثال: نرغب ببناء تطبيق طلب وجبات وتوصيل مع شاشات تحضير للمطابخ وطباعة صامتة للفواتير وتطبيق للسائقين...'
                      : 'e.g. We need a food ordering & dispatch platform with kitchen screens, silent invoice printing and driver tracking...'
                  }
                />
              </div>

              {/* Action Buttons: WhatsApp & Email */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="button"
                  onClick={handleDispatchWhatsApp}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-brand-dark font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all transform hover:-translate-y-0.5"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  <MessageCircle className="w-5 h-5 fill-brand-dark" />
                  <span>{t.diag_send_whatsapp}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDispatchEmail}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 bg-white/[0.03] hover:bg-white/[0.07] text-white font-bold text-sm sm:text-base transition-all"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span>{t.diag_send_email}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
      {/* ========================================================================= */}
      {/* CASE STUDY MODAL DIALOG */}
      {/* ========================================================================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-dark/80 backdrop-blur-xl transition-all">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl bg-[#0B0F17]/95">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start gap-4 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  {React.createElement(PROJECT_ICONS[selectedProject.icon] || Cpu, {
                    className: 'w-6 h-6',
                  })}
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                    <span>{lang === 'ar' ? 'دراسة المعمارية والحلول' : 'ARCHITECTURAL CASE STUDY'}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title[lang]}</h3>
                  {selectedProject.domain && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1 mt-1"
                    >
                      <ExternalLink className="w-3 h-3" /> {selectedProject.domain}
                    </a>
                  )}
                </div>
              </div>

              {/* Challenge */}
              <div className="rounded-2xl p-4 bg-rose-500/5 border border-rose-500/20">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>
                    {lang === 'ar'
                      ? 'المشكلة والتعقيد الذي تم علاجه (The Bottleneck Cured):'
                      : 'The Operational Bottleneck Cured:'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.caseStudy.challenge[lang]}
                </p>
              </div>

              {/* Solution */}
              <div className="rounded-2xl p-4 bg-emerald-500/5 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1.5">
                  <Cpu className="w-4 h-4" />
                  <span>
                    {lang === 'ar'
                      ? 'الحل المعماري والتنفيذ التقني (Architectural Cure):'
                      : 'Architectural Engineering Solution:'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.caseStudy.solution[lang]}
                </p>
              </div>

              {/* Metrics */}
              <div className="rounded-2xl p-4 bg-white/[0.02] border border-white/10">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>
                    {lang === 'ar'
                      ? 'النتائج والأثر الميداني (Key Impact Metrics):'
                      : 'Engineering Impact Metrics:'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-mono text-emerald-300 font-semibold">
                  {selectedProject.caseStudy.metrics[lang]}
                </p>
              </div>

              {/* Stack */}
              <div>
                <div className="text-xs font-mono text-slate-400 mb-2">
                  {lang === 'ar' ? 'المكدس البرمجي المستخدم:' : 'Technologies Utilized:'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((st, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 text-slate-200 border border-white/10"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Action */}
              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors"
                >
                  {t.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* FOOTER */}
      {/* ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#05070B] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
            {/* Left Brand */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono-code text-2xl font-bold text-white tracking-tight">&lt;aalij.dev /&gt;</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">{t.footer_brand_desc}</p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://wa.me/963949359837"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 border border-white/10 flex items-center justify-center text-slate-300 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hussien-ghazal-548813286"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/10 flex items-center justify-center text-slate-300 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.65 1.66 1.66 0 0 0 1.65-1.65c0-.92-.74-1.66-1.65-1.66Z" />
                  </svg>
                </a>
                <a
                  href="mailto:hussien.ghazal98@gmail.com"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 border border-white/10 flex items-center justify-center text-slate-300 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Middle Nav */}
            <div className="md:col-span-3 space-y-3">
              <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                {t.footer_nav_title}
              </div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#philosophy" className="hover:text-emerald-400 transition-colors">
                    {t.nav_philosophy}
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="hover:text-emerald-400 transition-colors">
                    {t.nav_capabilities}
                  </a>
                </li>
                <li>
                  <a href="#simulator" className="hover:text-emerald-400 transition-colors">
                    {t.nav_simulator}
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-emerald-400 transition-colors">
                    {t.nav_projects}
                  </a>
                </li>
                <li>
                  <a href="#diagnostic" className="hover:text-emerald-400 transition-colors">
                    {t.nav_contact}
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Contact */}
            <div className="md:col-span-3 space-y-3">
              <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                {t.footer_contact_title}
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="mailto:hussien.ghazal98@gmail.com" className="hover:text-white transition-colors font-mono">
                    hussien.ghazal98@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="https://wa.me/963949359837" className="hover:text-white transition-colors font-mono" dir="ltr">
                    +963 949 359 837
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.author_location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2025-2026 <strong className="text-slate-400">aalij.dev</strong> | {t.author_name}. All rights reserved.
            </div>
            <div className="flex items-center gap-2 font-mono">
              <span>Engineered with Zero-SPOF Precision</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
