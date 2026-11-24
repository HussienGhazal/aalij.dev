import React, { useState, useEffect } from 'react';
import { Globe, ArrowUpRight, Menu, X, Terminal, MessageSquare } from 'lucide-react';

export default function Navbar({ lang, setLang, t, profile }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const navLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#workflow', label: t.nav.workflow },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090B10]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Identity / Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 select-none focus:outline-none"
            aria-label="aalij.dev home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#111520] border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors shadow-glow-subtle">
              <Terminal className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span
                  dir="ltr"
                  className="inline-flex items-center font-mono-code font-bold text-lg tracking-tight text-white group-hover:text-emerald-300 transition-colors"
                >
                  <span className="text-emerald-400">&lt;</span>
                  <span>aalij.dev</span>
                  <span className="text-emerald-400">/&gt;</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                {lang === 'ar' ? 'حسين غزال • هندسة برمجية متكاملة' : 'Hussien Ghazal • Systems Engineering'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary navigation'}
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#111520]/80 border border-white/[0.06] backdrop-blur-md"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Lang Toggle + Start Project CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-[#111520] border border-white/[0.08] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono-code">{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111520] border border-white/[0.08] text-emerald-400 hover:border-emerald-500/40 hover:bg-[#161B29] transition-colors"
              title={lang === 'ar' ? 'مراسلة واتساب مباشرة' : 'Direct WhatsApp Chat'}
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 active:scale-95 transition-all duration-200 shadow-glow-emerald"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
            </a>
          </div>

          {/* Mobile Menu Button & Mobile Lang Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="p-2 text-xs font-semibold rounded-lg bg-[#111520] border border-white/[0.08] text-emerald-400 flex items-center gap-1"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-mono-code">{lang === 'ar' ? 'EN' : 'ع'}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#111520] border border-white/[0.08] text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090B10]/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-3 pb-6">
          <nav aria-label={lang === 'ar' ? 'قائمة الجوال' : 'Mobile navigation'} className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-200 hover:bg-white/[0.05] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/[0.06] mt-2 grid grid-cols-1 gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-glow-emerald"
              >
                <span>{t.nav.cta}</span>
                <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
              </a>
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold rounded-lg bg-[#111520] border border-white/[0.08] text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span dir="ltr">{profile.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
