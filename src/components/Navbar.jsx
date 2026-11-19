import React, { useState, useEffect } from 'react';
import { Globe, MessageSquare, Menu, X, ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';

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
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const navLinks = [
    { href: '#philosophy', label: t.nav.philosophy },
    { href: '#services', label: t.nav.services },
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
        <div className="flex items-center justify-between">
          
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
              <div className="flex items-center gap-1.5 font-mono-code font-bold text-lg tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                <span className="text-emerald-400">&lt;</span>
                <span>aalij.dev</span>
                <span className="text-emerald-400">/&gt;</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                {lang === 'ar' ? 'حسين غزال | معالجة الأنظمة' : 'Hussien Ghazal | Systems Arch'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#111520]/80 border border-white/[0.06] backdrop-blur-md">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Lang Toggle + WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-[#111520] border border-white/[0.08] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono-code">{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            {/* Direct WhatsApp Action Button */}
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 active:scale-95 transition-all duration-200 shadow-glow-emerald"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950/20" />
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Button & Mobile Lang Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 text-xs font-semibold rounded-lg bg-[#111520] border border-white/[0.08] text-emerald-400 flex items-center gap-1"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-mono-code">{lang === 'ar' ? 'EN' : 'ع'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#111520] border border-white/[0.08] text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090B10]/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-200 hover:bg-white/[0.05] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/[0.06] mt-2">
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-lg bg-emerald-500 text-slate-950 font-medium hover:bg-emerald-400 transition-colors shadow-glow-emerald"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.nav.cta} (+963 949 359 837)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
