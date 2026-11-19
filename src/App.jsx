import React, { useState, useEffect } from 'react';
import { BRAND_DATA } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import ScreenshotLightbox from './components/ScreenshotLightbox';
import ContactSection from './components/ContactSection';
import { Terminal, Shield, ArrowUp, MessageSquare, Mail } from 'lucide-react';

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function App() {
  const [lang, setLang] = useState('ar');
  const [activeLightboxProject, setActiveLightboxProject] = useState(null);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);
  const [selectedInquiryProject, setSelectedInquiryProject] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const t = BRAND_DATA.i18n[lang];
  const profile = BRAND_DATA.profile;
  const projects = BRAND_DATA.projects;

  // Sync document html lang & dir dynamically
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') {
      document.body.classList.remove('font-en');
      document.body.classList.add('font-ar');
    } else {
      document.body.classList.remove('font-ar');
      document.body.classList.add('font-en');
    }
  }, [lang]);

  // Scroll to top indicator
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleOpenLightbox = (project, initialIndex = 0) => {
    setActiveLightboxProject(project);
    setLightboxInitialIndex(initialIndex);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxProject(null);
  };

  const handleRequestSimilar = (project) => {
    setSelectedInquiryProject(project);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090B10] text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Top Sticky Header */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        profile={profile} 
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero & Engineering Philosophy */}
        <Hero 
          lang={lang} 
          t={t} 
          profile={profile} 
        />

        {/* 2. Core Capabilities & Architectural Pillars */}
        <ServicesSection 
          lang={lang} 
          t={t} 
        />

        {/* 3. Verified Production Systems Showcase */}
        <ProjectsShowcase 
          lang={lang} 
          t={t} 
          projects={projects}
          onOpenLightbox={handleOpenLightbox}
          onRequestSimilar={handleRequestSimilar}
        />

        {/* 4. Client Inquiry Builder & Direct Contact */}
        <ContactSection 
          lang={lang} 
          t={t} 
          profile={profile} 
          selectedProject={selectedInquiryProject}
          setSelectedProject={setSelectedInquiryProject}
          projects={projects}
        />
      </main>

      {/* Screenshot Lightbox Modal */}
      {activeLightboxProject && (
        <ScreenshotLightbox 
          project={activeLightboxProject}
          initialIndex={lightboxInitialIndex}
          onClose={handleCloseLightbox}
          onRequestSimilar={handleRequestSimilar}
          lang={lang}
          t={t}
        />
      )}

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-30 p-3 rounded-full bg-[#111520]/90 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 border border-white/[0.1] shadow-2xl transition-all duration-200 active:scale-95"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Calm, Authoritative Footer */}
      <footer className="bg-[#06080C] border-t border-white/[0.08] py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
            
            {/* Brand Logo & Motto */}
            <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-1">
              <div className="flex items-center gap-2 font-mono-code font-bold text-white text-lg">
                <span className="text-emerald-400">&lt;</span>
                <span>aalij.dev</span>
                <span className="text-emerald-400">/&gt;</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                {t.footer.brand_tag}
              </p>
            </div>

            {/* Quick Links / Socials */}
            <div className="flex items-center gap-3">
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#111520] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="w-9 h-9 rounded-lg bg-[#111520] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#111520] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#111520] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Bottom Copyright & Guarantee */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-start">
            <div>
              {t.footer.rights.replace('{year}', new Date().getFullYear())}
            </div>
            <div className="flex items-center gap-2 font-mono-code text-[11px] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span>{t.footer.motto}</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
