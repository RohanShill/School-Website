'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MapPin, Globe, Sparkles, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { schoolData } from '@/data/schoolData';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about' },
    { label: t('academics'), href: '/academics' },
    { label: t('facilities'), href: '/facilities' },
    { label: t('notices'), href: '/notices' },
    { label: t('blogs'), href: '/blogs' },
    { label: t('admissions'), href: '/admissions' },
    { label: t('contact'), href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full max-w-full overflow-x-clip border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
      {/* Top Header Bar with Contacts, Location & Language Switcher */}
      <div className="w-full border-b border-slate-700/40 bg-brand-navy text-xs text-slate-200">
        <div className="mx-auto flex max-w-7xl w-full items-center justify-between px-3 sm:px-6 py-2 gap-2">
          {/* Quick Call & Email (Clickable on Phone) */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs min-w-0">
            <a
              href={`tel:${schoolData.school.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-brand-gold transition flex-shrink-0"
              title="Call School"
            >
              <Phone size={13} className="text-brand-gold" />
              <span className="hidden xs:inline">{schoolData.school.phone}</span>
              <span className="xs:hidden">Call</span>
            </a>
            <a
              href={`mailto:${schoolData.school.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-brand-gold transition truncate"
              title="Email School"
            >
              <Mail size={13} className="text-brand-gold flex-shrink-0" />
              <span className="truncate">{schoolData.school.email}</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400 flex-shrink-0">
              <MapPin size={12} className="text-brand-gold" />
              {language === 'hi' ? 'पाकुड़, झारखंड' : 'Pakur, Jharkhand'}
            </span>
          </div>

          {/* Language Switcher Pill */}
          <div className="inline-flex items-center gap-1 rounded-full bg-white/10 p-0.5 border border-white/20 text-[11px] sm:text-xs flex-shrink-0">
            <span className="pl-1.5 pr-0.5 text-slate-300 flex items-center">
              <Globe size={12} className="text-brand-gold" />
            </span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-0.5 rounded-full font-semibold transition-all duration-200 ${
                language === 'en'
                  ? 'bg-brand-gold text-brand-navy shadow-xs font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Switch to English"
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLanguage('hi')}
              className={`px-2.5 py-0.5 rounded-full font-semibold transition-all duration-200 ${
                language === 'hi'
                  ? 'bg-brand-gold text-brand-navy shadow-xs font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
              aria-label="हिंदी में बदलें"
            >
              हिन्दी
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="mx-auto flex max-w-7xl w-full items-center justify-between px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group flex-1 min-w-0 pr-2">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border border-slate-200 bg-white shadow-xs flex-shrink-0 group-hover:scale-105 transition">
            <Image src="/images/logo.png" alt="School Logo" fill className="object-contain p-1" priority />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs sm:text-base font-bold tracking-tight text-brand-navy leading-tight line-clamp-1 group-hover:text-brand-blue transition">
              {language === 'hi' ? schoolData.school.nameHindi : schoolData.school.name}
            </div>
            <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 truncate">
              {language === 'hi' ? 'राजकीय उत्क्रमित मध्य विद्यालय • UDISE: 20120104801' : 'PM SHRI School • UDISE: 20120104801'}
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActive ? 'text-brand-blue font-bold border-b-2 border-brand-blue pb-0.5' : 'text-slate-700 hover:text-brand-blue'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/admissions"
            className="rounded-full bg-brand-blue px-4.5 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-brand-royal hover:shadow-md"
          >
            {t('applyNow')}
          </Link>
        </div>

        {/* Mobile menu hamburger button */}
        <button
          type="button"
          aria-label="Toggle mobile menu"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-brand-navy hover:bg-slate-100 lg:hidden ml-2 flex-shrink-0"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={22} className="text-brand-navy" /> : <Menu size={22} className="text-brand-navy" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu (Full animated slide) */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white/98 shadow-xl lg:hidden max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 py-4">
            {/* Mobile Language Switcher Quick Bar */}
            <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 border border-slate-100 mb-2">
              <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                <Globe size={14} className="text-brand-blue" />
                {language === 'hi' ? 'भाषा / Language' : 'Select Language'}
              </span>
              <div className="inline-flex items-center rounded-full bg-white p-0.5 border border-slate-200 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                    language === 'en' ? 'bg-brand-blue text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('hi')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                    language === 'hi' ? 'bg-brand-blue text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  हिन्दी
                </button>
              </div>
            </div>

            {/* Mobile Nav Links */}
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-slate-100 text-brand-navy font-bold shadow-2xs'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-brand-navy" />}
                    <span>{item.label}</span>
                  </span>
                  <ChevronRight size={15} className={isActive ? 'text-brand-navy' : 'text-slate-400'} />
                </Link>
              );
            })}

            {/* Mobile Actions: Call & Apply */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="/admissions"
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-4 py-3 text-center text-sm font-bold text-white shadow-md active:scale-98 transition"
                onClick={() => setIsOpen(false)}
              >
                <Sparkles size={16} className="text-brand-gold" />
                <span>{t('applyNow')} (सत्र 2026-27)</span>
              </Link>
              <a
                href={`tel:${schoolData.school.phone}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-center text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                <Phone size={14} className="text-brand-blue" />
                <span>हेल्पलाइन: {schoolData.school.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
