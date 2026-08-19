'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  Calendar,
  Download,
  FileText,
  PlusCircle,
  ArrowRight,
  Sparkles,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { useNotice } from '@/context/NoticeContext';
import { useLanguage } from '@/context/LanguageContext';
import { NoticeCategory } from '@/data/schoolData';

const categories: Array<'All' | NoticeCategory> = [
  'All',
  'Academics',
  'Events',
  'Examinations',
  'Administrative',
];

const upcomingEvents = [
  {
    title: 'सत्र 2026-27 निःशुल्क नामांकन प्रक्रिया',
    titleEn: 'Academic Session 2026-27 Free Admissions',
    date: 'प्रारंभ (Ongoing)',
    tag: 'Admissions',
    accent: 'bg-emerald-100 text-emerald-800',
  },
  {
    title: 'त्रैमासिक ICT कंप्यूटर प्रैक्टिकल टेस्ट',
    titleEn: 'Quarterly ICT Practical Assessment',
    date: 'मार्च 2026',
    tag: 'Exam',
    accent: 'bg-blue-100 text-blue-800',
  },
  {
    title: 'अभिभावक-शिक्षक बैठक (PTM & SMC Meet)',
    titleEn: 'Parent-Teacher & SMC Meeting',
    date: 'अंतिम शनिवार',
    tag: 'Meeting',
    accent: 'bg-amber-100 text-amber-800',
  },
  {
    title: 'राष्ट्रीय कृमि मुक्ति दिवस एवं स्वास्थ्य जांच',
    titleEn: 'National Deworming & Health Camp',
    date: 'आगामी माह',
    tag: 'Health',
    accent: 'bg-purple-100 text-purple-800',
  },
];

export default function HomeNoticeBoard() {
  const { notices, setIsAdminModalOpen } = useNotice();
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'All' | NoticeCategory>('All');

  const filteredNotices = useMemo(() => {
    if (selectedCategory === 'All') return notices.slice(0, 5);
    return notices.filter((n) => n.category === selectedCategory).slice(0, 5);
  }, [notices, selectedCategory]);

  return (
    <section className="py-10 sm:py-16 bg-slate-50 border-y border-slate-200 w-full max-w-full overflow-hidden">
      <div className="section-shell w-full max-w-full overflow-hidden">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10 flex flex-col justify-between gap-3.5 md:flex-row md:items-end">
          <div className="min-w-0 flex-1">
            <span className="badge-pill border-brand-blue/20 bg-brand-blue/10 text-brand-blue flex items-center gap-1.5 w-max">
              <Bell size={13} className="text-brand-blue animate-bounce" />
              {language === 'hi' ? 'सूचना पट्ट एवं घोषणाएं' : 'School Notice Board'}
            </span>
            <h2 className="mt-2.5 sm:mt-3 text-xl sm:text-3xl lg:text-4xl font-black text-brand-navy leading-snug break-words">
              {language === 'hi' ? 'महत्वपूर्ण सूचनाएं एवं आगामी गतिविधियां' : 'Latest Circulars & School Events'}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              {language === 'hi'
                ? 'पीएम श्री मध्य विद्यालय हिरणपुर के सभी प्रशासनिक व शैक्षणिक अपडेट'
                : 'Stay updated with official notifications, schedules, and circulars'}
            </p>
          </div>

          <div className="flex items-center flex-shrink-0">
            <Link
              href="/notices"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white hover:bg-brand-blue transition shadow-2xs"
            >
              <span>{language === 'hi' ? 'सभी सूचनाएं देखें' : 'View All Notices'}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* 2-Column Grid: Notice Board (Left) & Upcoming Events (Right) */}
        <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] w-full max-w-full">
          {/* Left Column: Interactive Notice Board */}
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-3.5 sm:p-6 shadow-soft w-full max-w-full overflow-hidden">
            {/* Category Filter Pills (Smooth Mobile Horizontal Scroll) */}
            <div className="mb-4 flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 border-b border-slate-100 pb-3 w-full max-w-full touch-scroll">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-shrink-0 rounded-full px-3 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold transition ${
                    selectedCategory === cat
                      ? 'bg-brand-blue text-white shadow-xs font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat === 'All' && (language === 'hi' ? 'सभी (All)' : 'All')}
                  {cat === 'Academics' && (language === 'hi' ? 'शैक्षणिक' : 'Academics')}
                  {cat === 'Events' && (language === 'hi' ? 'इवेंट्स' : 'Events')}
                  {cat === 'Examinations' && (language === 'hi' ? 'परीक्षा' : 'Exams')}
                  {cat === 'Administrative' && (language === 'hi' ? 'प्रशासनिक' : 'Admin')}
                </button>
              ))}
            </div>

            {/* Notice Items List */}
            <div className="space-y-3 sm:space-y-4 w-full">
              {filteredNotices.length === 0 ? (
                <div className="py-10 text-center text-slate-500">
                  <FileText size={30} className="mx-auto mb-2 opacity-40" />
                  <p className="text-xs sm:text-sm">इस श्रेणी में कोई नोटिस नहीं मिला।</p>
                </div>
              ) : (
                filteredNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className="group relative rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-50/70 p-3 sm:p-4 transition-all duration-200 hover:border-brand-blue/30 hover:bg-white hover:shadow-md w-full overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-3 w-full min-w-0">
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <span className="rounded-full bg-brand-navy/10 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-navy flex-shrink-0">
                            {notice.category}
                          </span>
                          {notice.isUrgent && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-red-600 animate-pulse flex-shrink-0">
                              <Sparkles size={9} /> अति-आवश्यक
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-slate-500 flex-shrink-0">
                            <Clock size={11} /> {notice.date}
                          </span>
                        </div>

                        <h3 className="text-xs sm:text-base font-bold text-brand-navy group-hover:text-brand-blue transition leading-snug break-words">
                          {notice.title}
                        </h3>

                        <p className="text-[11px] sm:text-xs leading-relaxed text-slate-600 line-clamp-2 break-words">
                          {notice.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0 pt-0.5 sm:pt-0 self-start sm:self-auto">
                        <a
                          href={notice.pdfUrl || '#'}
                          className="inline-flex items-center gap-1.5 rounded-lg sm:rounded-xl border border-slate-200 bg-white px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-brand-navy shadow-2xs hover:bg-brand-blue hover:text-white transition active:scale-95"
                        >
                          <Download size={12} />
                          <span>PDF / View</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Column: Upcoming Events & Quick Calendar */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-full overflow-hidden">
            {/* Events Card */}
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-3.5 sm:p-6 shadow-soft w-full overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-brand-gold/20 text-brand-navy flex-shrink-0">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-brand-navy">
                      {language === 'hi' ? 'आगामी गतिविधियां' : 'Upcoming Key Events'}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500">
                      {language === 'hi' ? 'महत्वपूर्ण तिथियां एवं कार्यक्रम' : 'Calendar Highlights'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-2.5 w-full">
                {upcomingEvents.map((evt, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 sm:gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-2 sm:p-2.5 hover:bg-slate-100/80 transition w-full min-w-0"
                  >
                    <div className="flex flex-col items-center justify-center rounded-lg bg-white border border-slate-200 px-1.5 py-1 text-center min-w-[40px] sm:min-w-[44px] flex-shrink-0">
                      <span className="text-[8px] sm:text-[9px] font-bold text-brand-blue uppercase">{evt.tag}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[11px] sm:text-xs font-bold text-brand-navy leading-tight break-words">
                        {language === 'hi' ? evt.title : evt.titleEn}
                      </h4>
                      <p className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5">{evt.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Helpline Box */}
            <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-navy to-slate-900 p-4 sm:p-6 text-white shadow-soft w-full overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gold text-brand-navy flex-shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                    {language === 'hi' ? 'नामांकन व सहायता हेल्पलाइन' : 'Admissions & Help Desk'}
                  </h4>
                  <p className="text-[11px] text-slate-300 truncate">
                    {language === 'hi' ? 'कक्षा 1 से 8 में निःशुल्क नामांकन' : 'Contact for Free Admissions'}
                  </p>
                </div>
              </div>
              <div className="mt-3.5 pt-3.5 border-t border-white/10 flex items-center justify-between gap-2">
                <span className="text-[10px] sm:text-[11px] text-brand-gold font-semibold truncate">UDISE: 20120104801</span>
                <Link
                  href="/admissions"
                  className="rounded-full bg-brand-gold px-3 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold text-brand-navy hover:bg-yellow-400 active:scale-95 transition flex-shrink-0"
                >
                  {language === 'hi' ? 'आवेदन करें' : 'Apply Now'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
