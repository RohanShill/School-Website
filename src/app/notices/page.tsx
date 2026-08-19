'use client';

import { useMemo, useState } from 'react';
import { Download, FileText, PlusCircle, Search, Sparkles, Clock, Trash2 } from 'lucide-react';
import { NoticeCategory } from '@/data/schoolData';
import { useNotice } from '@/context/NoticeContext';
import { useLanguage } from '@/context/LanguageContext';

const categories: Array<'All' | NoticeCategory> = [
  'All',
  'Academics',
  'Events',
  'Examinations',
  'Administrative',
];

export default function NoticesPage() {
  const { notices, setIsAdminModalOpen, deleteNotice } = useNotice();
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'All' | NoticeCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchCategory = selectedCategory === 'All' || notice.category === selectedCategory;
      const matchQuery =
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [notices, selectedCategory, searchQuery]);

  return (
    <div className="section-shell py-16">
      {/* Page Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <span className="badge-pill border-brand-blue/20 bg-brand-blue/10 text-brand-blue">
          {language === 'hi' ? 'सूचना पट्ट एवं परिपत्र' : 'Circulars & Notices'}
        </span>
        <h1 className="mt-4 text-4xl font-black text-brand-navy md:text-5xl">
          {language === 'hi' ? 'नवीनतम सूचनाएं एवं घोषणाएं' : 'Latest School Announcements'}
        </h1>
        <p className="mt-3 text-slate-600 text-base">
          {language === 'hi'
            ? 'पीएम श्री मध्य विद्यालय हिरणपुर (बालक), पाकुड़ — आधिकारिक सूचना पट्ट'
            : 'PM SHRI Middle School Hiranpur (Boys), Pakur — Official Digital Notice Board'}
        </p>
      </div>

      {/* Control Bar: Search, Category Filters, and Admin Button */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'सूचना खोजें (उदा. परीक्षा, नामांकन)...' : 'Search notices (e.g. exams, admissions)...'}
            className="w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm shadow-xs focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="mb-8 flex flex-wrap gap-2.5">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition ${
              selectedCategory === category
                ? 'bg-brand-blue text-white shadow-md'
                : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            {category === 'All' && (language === 'hi' ? 'सभी सूचनाएं (All)' : 'All Notices')}
            {category === 'Academics' && (language === 'hi' ? 'शैक्षणिक (Academics)' : 'Academics')}
            {category === 'Events' && (language === 'hi' ? 'कार्यक्रम व खेल (Events)' : 'Events')}
            {category === 'Examinations' && (language === 'hi' ? 'परीक्षा (Exams)' : 'Examinations')}
            {category === 'Administrative' && (language === 'hi' ? 'प्रशासनिक (Admin)' : 'Administrative')}
          </button>
        ))}
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
            <FileText size={40} className="mx-auto mb-3 opacity-40 text-slate-400" />
            <p className="text-base font-semibold">कोई सूचना उपलब्ध नहीं है</p>
            <p className="text-xs text-slate-400 mt-1">कृपया सर्च टर्म बदलें या एडमिन बटन से नया नोटिस जोड़ें।</p>
          </div>
        ) : (
          filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="card-surface group flex flex-col gap-5 p-6 transition-all duration-200 hover:border-brand-blue/30 hover:shadow-lg md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition">
                  <FileText size={22} />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-brand-navy/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-navy">
                      {notice.category}
                    </span>
                    {notice.isUrgent && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-0.5 text-[10px] font-bold text-red-600 animate-pulse">
                        <Sparkles size={10} /> अति-आवश्यक
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                      <Clock size={12} /> {notice.date}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition">
                    {notice.title}
                  </h2>
                  <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
                    {notice.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end md:self-center flex-shrink-0">
                <a
                  href={notice.pdfUrl || '#'}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-brand-blue transition"
                >
                  <Download size={14} />
                  <span>{language === 'hi' ? 'डाउनलोड / देखें' : 'Download Notice'}</span>
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
