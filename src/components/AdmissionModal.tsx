'use client';

import { useState } from 'react';
import { X, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AdmissionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 2500);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-navy shadow-md transition hover:scale-[1.02] active:scale-95 text-center"
      >
        {language === 'hi' ? 'कैंपस विजिट / पूछताछ बुक करें' : 'Book a Campus Visit'}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-white p-5 sm:p-7 shadow-2xl">
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="badge-pill border-brand-blue/20 bg-brand-blue/10 text-brand-blue text-[10px]">
                  {language === 'hi' ? 'सत्र 2026-27 नामांकन' : 'Admissions 2026-27'}
                </span>
                <h3 className="mt-1 text-lg sm:text-xl font-black text-brand-navy">
                  {language === 'hi' ? 'नामांकन पूछताछ फॉर्म' : 'Admission Inquiry Form'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 size={48} className="mx-auto text-emerald-500 mb-3" />
                <h4 className="text-lg font-bold text-brand-navy">
                  {language === 'hi' ? 'पूछताछ दर्ज हो गई!' : 'Inquiry Submitted!'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {language === 'hi'
                    ? 'विद्यालय प्रशासन शीघ्र ही आपसे संपर्क करेगा।'
                    : 'School administration will contact you shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {language === 'hi' ? 'छात्र का नाम' : 'Student Name'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder={language === 'hi' ? 'छात्र का पूरा नाम' : 'Enter full name'}
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      {language === 'hi' ? 'कक्षा' : 'Grade / Class'} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    >
                      <option>Class 1 (कक्षा 1)</option>
                      <option>Class 2 (कक्षा 2)</option>
                      <option>Class 3 (कक्षा 3)</option>
                      <option>Class 4 (कक्षा 4)</option>
                      <option>Class 5 (कक्षा 5)</option>
                      <option>Class 6 (कक्षा 6)</option>
                      <option>Class 7 (कक्षा 7)</option>
                      <option>Class 8 (कक्षा 8)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      {language === 'hi' ? 'अभिभावक फोन' : 'Parent Contact'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="+91..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {language === 'hi' ? 'ग्राम / पता' : 'Village / Address'}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder={language === 'hi' ? 'हिरणपुर या नजदीकी गांव' : 'Hiranpur or nearby area'}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {language === 'hi' ? 'संदेश / प्रश्न (वैकल्पिक)' : 'Message (Optional)'}
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs sm:text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder={language === 'hi' ? 'पूर्व विद्यालय का नाम, कोई विशेष आवश्यकता आदि।' : 'Any notes or questions...'}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-brand-blue py-3 font-bold text-white shadow-md transition hover:bg-brand-royal active:scale-98 text-xs sm:text-sm"
                  >
                    {language === 'hi' ? 'पूछताछ सबमिट करें (Submit)' : 'Submit Inquiry'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
