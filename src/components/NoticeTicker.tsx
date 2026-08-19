'use client';

import React from 'react';
import Link from 'next/link';
import { Megaphone, Plus, ChevronRight } from 'lucide-react';
import { useNotice } from '@/context/NoticeContext';
import { useLanguage } from '@/context/LanguageContext';

export default function NoticeTicker() {
  const { notices, setIsAdminModalOpen } = useNotice();
  const { language } = useLanguage();

  if (!notices || notices.length === 0) return null;

  return (
    <div className="border-b border-slate-200 bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy text-white py-2.5 px-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Left Badge */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 border border-red-500/30 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-red-300">
            <Megaphone size={12} className="text-red-400" />
            {language === 'hi' ? 'ताज़ा सूचना' : 'Flash Notice'}
          </span>
        </div>

        {/* Ticker Content */}
        <div className="overflow-hidden relative flex-1 text-xs sm:text-sm">
          <div className="flex items-center gap-8 animate-[marquee_22s_linear_infinite] whitespace-nowrap">
            {[...notices, ...notices].map((notice, idx) => (
              <Link
                key={`${notice.id}-${idx}`}
                href="/notices"
                className="inline-flex items-center gap-2 hover:text-brand-gold transition group"
              >
                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-brand-gold">
                  {notice.category}
                </span>
                <span className="font-medium text-slate-200 group-hover:underline">
                  {notice.title}
                </span>
                <span className="text-slate-500 text-xs">({notice.date})</span>
                <span className="text-slate-600 px-2">•</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Action: View All */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/notices"
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-gold hover:text-white transition"
          >
            <span>{language === 'hi' ? 'सभी सूचनाएं' : 'View All'}</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
