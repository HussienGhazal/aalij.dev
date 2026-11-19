import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, MessageSquare, Download } from 'lucide-react';

export default function ScreenshotLightbox({ 
  project, 
  initialIndex = 0, 
  onClose, 
  onRequestSimilar, 
  lang, 
  t 
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const screenshots = project?.screenshots || [];
  const total = screenshots.length;

  const currentScreenshot = screenshots[currentIndex];

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        // In RTL, ArrowRight naturally navigates according to user expectation
        lang === 'ar' ? handlePrev() : handleNext();
      } else if (e.key === 'ArrowLeft') {
        lang === 'ar' ? handleNext() : handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, handleNext, handlePrev, lang]);

  if (!project || total === 0) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl h-full max-h-[94vh] mx-auto p-4 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Bar: Title, Count, and Close Button */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.1] text-white">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">
                {project.title[lang]}
              </h4>
              <span className="text-xs text-slate-400 font-mono-code">
                {t.lightbox.slide_info.replace('{current}', currentIndex + 1).replace('{total}', total)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white transition-colors"
              title={t.lightbox.close}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center: Image Viewport with Next/Prev Controls */}
        <div className="relative flex-1 flex items-center justify-center my-3 overflow-hidden">
          
          {/* Main Image */}
          <div className="relative max-w-full max-h-[70vh] rounded-xl overflow-hidden border border-white/[0.1] shadow-2xl bg-[#090B10]">
            <img
              src={currentScreenshot?.src}
              alt={currentScreenshot?.caption?.[lang] || project.title[lang]}
              className="max-w-full max-h-[70vh] object-contain mx-auto select-none"
            />
          </div>

          {/* Navigation Arrows */}
          {total > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-emerald-500 hover:text-slate-950 text-white border border-white/[0.15] transition-all duration-200 active:scale-95"
                title={t.lightbox.prev}
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-emerald-500 hover:text-slate-950 text-white border border-white/[0.15] transition-all duration-200 active:scale-95"
                title={t.lightbox.next}
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

        </div>

        {/* Bottom Bar: Caption + Thumbnails + Direct Conversion CTA */}
        <div className="pt-3 border-t border-white/[0.1] space-y-3">
          
          {/* Caption */}
          {currentScreenshot?.caption && (
            <p className="text-center text-xs sm:text-sm text-slate-300 font-medium">
              {currentScreenshot.caption[lang]}
            </p>
          )}

          {/* Thumbnail Strip / Switcher */}
          {total > 1 && (
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-1">
              {screenshots.map((shot, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    currentIndex === idx 
                      ? 'border-emerald-400 scale-105 shadow-glow-emerald' 
                      : 'border-white/[0.2] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={shot.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* In-Lightbox Quick Conversion Action */}
          <div className="flex justify-center pt-1">
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-emerald-400 transition-all duration-200 shadow-glow-emerald"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.lightbox.request_cta}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
