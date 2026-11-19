import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Send, 
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Check,
  RotateCcw
} from 'lucide-react';

// Custom pixel-perfect brand icons (standard feather SVG spec)
const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function ContactSection({ 
  lang, 
  t, 
  profile, 
  selectedProject, 
  setSelectedProject, 
  projects 
}) {
  const [selectedService, setSelectedService] = useState('full');
  const [notes, setNotes] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync selected service if a project is clicked
  useEffect(() => {
    if (selectedProject) {
      if (selectedProject.category === 'mobile') setSelectedService('mobile');
      else if (selectedProject.category === 'saas') setSelectedService('saas');
      else if (selectedProject.category === 'pos') setSelectedService('pos');
    }
  }, [selectedProject]);

  const serviceOptions = [
    { id: 'mobile', label: t.contact.service_options.mobile },
    { id: 'saas', label: t.contact.service_options.saas },
    { id: 'pos', label: t.contact.service_options.pos },
    { id: 'infra', label: t.contact.service_options.infra },
    { id: 'full', label: t.contact.service_options.full }
  ];

  const getFormattedMessage = () => {
    const serviceLabel = serviceOptions.find(s => s.id === selectedService)?.label || selectedService;
    const refTitle = selectedProject ? selectedProject.title[lang] : (lang === 'ar' ? 'بدون نظام مرجعي محدد' : 'Custom Architecture');

    if (lang === 'ar') {
      return `السلام عليكم أستاذ حسين،
أرغب في الاستفسار عن بناء ومعالجة نظام جديد عبر aalij.dev:

• نوع المنظومة: ${serviceLabel}
• المشروع المرجعي: ${refTitle}
${notes.trim() ? `• تفاصيل إضافية: ${notes.trim()}` : '• أرجو التواصل لمناقشة متطلبات المشروع والتفاصيل التقنية.'}

بانتظار ردكم الكريم.`;
    } else {
      return `Hello Hussien,
I would like to inquire about building and architecting a system via aalij.dev:

• System Type: ${serviceLabel}
• Reference System: ${refTitle}
${notes.trim() ? `• Notes: ${notes.trim()}` : '• Please reach out to discuss technical requirements.'}

Looking forward to your engineering response.`;
    }
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(getFormattedMessage());
    const url = `https://wa.me/963949359837?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      lang === 'ar' 
        ? `طلب استشارة ونظام برمجي — aalij.dev (${selectedProject ? selectedProject.title[lang] : 'مشروع جديد'})` 
        : `System Inquiry — aalij.dev (${selectedProject ? selectedProject.title[lang] : 'New Project'})`
    );
    const body = encodeURIComponent(getFormattedMessage());
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-light">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Content Layout: Direct Channels (Left) + Inquiry Builder (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Official Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="surface-card rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  {t.contact.direct_channels}
                </h3>
                <p className="text-xs text-slate-400">
                  {lang === 'ar' ? 'تواصل مباشر مع المهندس المسؤول فورياً:' : 'Direct channels with the systems architect:'}
                </p>
              </div>

              {/* Channel Items */}
              <div className="space-y-3">
                
                {/* WhatsApp */}
                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#161B29] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#1A2234] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">WhatsApp</span>
                      <span className="text-sm font-bold text-white font-mono-code" dir="ltr">
                        {profile.phone}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* Email */}
                <div className="p-3.5 rounded-xl bg-[#161B29] border border-white/[0.08] hover:border-emerald-500/40 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Email</span>
                      <a 
                        href={`mailto:${profile.email}`} 
                        className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 font-mono-code transition-colors"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-1.5 rounded-md bg-white/[0.06] hover:bg-emerald-500 hover:text-slate-950 text-slate-300 text-xs transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <span className="text-[10px] px-1 font-mono-code">{lang === 'ar' ? 'نسخ' : 'Copy'}</span>}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#161B29] border border-white/[0.08] hover:border-blue-500/40 hover:bg-[#1A2234] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">LinkedIn</span>
                      <span className="text-sm font-semibold text-white">
                        Hussien Ghazal
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#161B29] border border-white/[0.08] hover:border-purple-500/40 hover:bg-[#1A2234] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                      <GitHubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">GitHub</span>
                      <span className="text-sm font-semibold text-white font-mono-code">
                        @HussienGhazal
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-colors" />
                </a>

              </div>

              {/* Location & Remote Availability */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{profile.location[lang]}</span>
              </div>

              {/* Engineering Response Guarantee */}
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-medium leading-relaxed">
                {t.contact.guarantee}
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Inquiry Builder */}
          <div className="lg:col-span-7">
            <div className="surface-card rounded-2xl p-6 sm:p-8 space-y-6 border border-white/[0.09] shadow-2xl">
              
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {t.contact.form_title}
                </h3>
                <p className="text-xs text-slate-400 font-light">
                  {t.contact.form_desc}
                </p>
              </div>

              {/* Active Reference Project Banner (if selected) */}
              {selectedProject && (
                <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-between text-xs animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-white">
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-emerald-300 font-semibold block">
                        {lang === 'ar' ? 'تم اختيار نظام مرجعي من المعرض:' : 'Reference system attached:'}
                      </span>
                      <span className="font-bold text-white">{selectedProject.title[lang]}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-md hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                    title="Clear reference"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{lang === 'ar' ? 'إلغاء' : 'Reset'}</span>
                  </button>
                </div>
              )}

              {/* Step 1: System Service Type Selector */}
              <div className="space-y-2.5">
                <label className="text-xs font-semibold text-slate-300 block">
                  {t.contact.service_label}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map(option => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedService(option.id)}
                      className={`p-3 rounded-xl text-xs font-medium text-start transition-all border ${
                        selectedService === option.id
                          ? 'bg-emerald-500/15 border-emerald-500 text-white font-bold shadow-glow-subtle'
                          : 'bg-[#161B29] border-white/[0.06] text-slate-300 hover:border-white/[0.15]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Reference Project Selector (if not already set) */}
              <div className="space-y-2">
                <label htmlFor="reference-project-select" className="text-xs font-semibold text-slate-300 block">
                  {t.contact.ref_label}
                </label>
                <select
                  id="reference-project-select"
                  name="referenceProject"
                  value={selectedProject?.id || ''}
                  onChange={(e) => {
                    const p = projects.find(item => item.id === e.target.value);
                    setSelectedProject(p || null);
                  }}
                  className="w-full bg-[#161B29] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500/60"
                >
                  <option value="">{t.contact.ref_placeholder}</option>
                  {projects.map(proj => (
                    <option key={proj.id} value={proj.id}>
                      {proj.title[lang]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Additional Notes / Scope */}
              <div className="space-y-2">
                <label htmlFor="inquiry-notes-textarea" className="text-xs font-semibold text-slate-300 block">
                  {t.contact.notes_label}
                </label>
                <textarea
                  id="inquiry-notes-textarea"
                  name="inquiryNotes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.contact.notes_placeholder}
                  className="w-full bg-[#161B29] border border-white/[0.08] rounded-xl px-4 py-3 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/60 transition-colors"
                />
              </div>

              {/* Quick Message Preview */}
              <div className="p-3.5 rounded-xl bg-[#090B10] border border-white/[0.06] text-[11px] font-mono-code text-slate-400 space-y-1">
                <div className="flex items-center justify-between text-slate-400 font-bold">
                  <span>{lang === 'ar' ? 'معاينة نص الرسالة المنسقة:' : 'Inquiry Message Preview:'}</span>
                  <span className="text-emerald-400">READY</span>
                </div>
                <p className="line-clamp-2 text-slate-300 whitespace-pre-line">
                  {getFormattedMessage()}
                </p>
              </div>

              {/* Dual Action Buttons (WhatsApp + Email) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                
                {/* Instant WhatsApp Dispatch */}
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm active:scale-95 transition-all shadow-glow-emerald"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.contact.btn_whatsapp}</span>
                </button>

                {/* Instant Email Dispatch */}
                <button
                  type="button"
                  onClick={handleEmailSend}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#161B29] hover:bg-[#1D2538] border border-white/[0.1] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm active:scale-95 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>{t.contact.btn_email}</span>
                </button>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
