'use client';

import Link from 'next/link';
import { GraduationCap, Mail, MapPin, Phone, Heart } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-brand-navy text-slate-200 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* School Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-slate-700 bg-slate-900/60 px-3.5 py-1.5">
              <GraduationCap className="text-brand-gold" size={20} />
              <span className="text-sm sm:text-base font-bold text-white">
                {language === 'hi' ? 'पीएम श्री मध्य विद्यालय' : schoolData.school.shortName}
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              {language === 'hi'
                ? 'पीएम श्री (PM SHRI) योजना के तहत विद्यार्थियों के समग्र विकास, डिजिटल साक्षरता और नैतिक मूल्यों को समर्पित उत्कृष्ट सरकारी विद्यालय।'
                : 'Empowering young minds through values, excellence, and innovation under the PM SHRI Schools for Rising India initiative.'}
            </p>
            <div className="mt-3 text-xs text-brand-gold font-mono">
              UDISE Code: 20120104801
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm sm:text-base font-bold text-white tracking-wide">
              {language === 'hi' ? 'मुख्य पृष्ठ (Quick Links)' : 'Quick Links'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-brand-gold transition py-1 inline-block">{t('about')}</Link></li>
              <li><Link href="/academics" className="hover:text-brand-gold transition py-1 inline-block">{t('academics')}</Link></li>
              <li><Link href="/facilities" className="hover:text-brand-gold transition py-1 inline-block">{t('facilities')}</Link></li>
              <li><Link href="/notices" className="hover:text-brand-gold transition py-1 inline-block">{t('notices')}</Link></li>
            </ul>
          </div>

          {/* Admissions Links */}
          <div>
            <h3 className="mb-3 text-sm sm:text-base font-bold text-white tracking-wide">
              {language === 'hi' ? 'नामांकन (Admissions)' : 'Admissions'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><Link href="/admissions" className="hover:text-brand-gold transition py-1 inline-block">{language === 'hi' ? 'निःशुल्क नामांकन 2026' : 'Free Admission Process'}</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold transition py-1 inline-block">{language === 'hi' ? 'संपर्क व मार्गदर्शन' : 'Help Desk & Inquiry'}</Link></li>
              <li><Link href="/facilities" className="hover:text-brand-gold transition py-1 inline-block">{language === 'hi' ? 'स्मार्ट क्लास व लैब' : 'Smart Lab & Campus'}</Link></li>
            </ul>
          </div>

          {/* Contact Details (Clickable on Mobile) */}
          <div>
            <h3 className="mb-3 text-sm sm:text-base font-bold text-white tracking-wide">
              {language === 'hi' ? 'संपर्क करें (Contact)' : 'Contact'}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href={`tel:${schoolData.contact.phone}`} className="flex items-start gap-2 hover:text-brand-gold transition">
                  <Phone size={15} className="mt-0.5 text-brand-gold flex-shrink-0" />
                  <span>{schoolData.contact.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${schoolData.contact.email}`} className="flex items-start gap-2 hover:text-brand-gold transition break-all">
                  <Mail size={15} className="mt-0.5 text-brand-gold flex-shrink-0" />
                  <span>{schoolData.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-brand-gold flex-shrink-0" />
                <span>{language === 'hi' ? schoolData.school.address : schoolData.school.addressEnglish}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-5 text-xs text-slate-400 sm:flex-row">
          <p className="text-center sm:text-left">
            &copy; 2026 {schoolData.school.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/login"
              className="text-slate-400 hover:text-brand-gold transition inline-flex items-center gap-1 text-[11px]"
              title="Staff & Teacher Portal"
            >
              <span>🔒 Staff / Admin</span>
            </Link>
            <span className="text-slate-600">•</span>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 font-semibold text-brand-gold text-[11px]">
              <span>PM SHRI</span> &bull; <span>JCERT</span> &bull; <span>NEP 2020</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
