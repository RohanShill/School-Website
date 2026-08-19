'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Building2, Medal, School, ShieldCheck, Sparkles, Trophy, CheckCircle, GraduationCap } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import NoticeTicker from '@/components/NoticeTicker';
import HomeNoticeBoard from '@/components/HomeNoticeBoard';
import { useLanguage } from '@/context/LanguageContext';

const featureCards = [
  { icon: School, title: 'Smart Learning', titleHi: 'स्मार्ट क्लासरूम एवं BaLA', description: 'Digital audio-visual classrooms and activity-based learning under PM SHRI.' },
  { icon: BookOpen, title: 'ICT Computer Lab', titleHi: 'ICT कंप्यूटर शिक्षा', description: 'Hands-on practicals on 10+ computers with broadband internet.' },
  { icon: ShieldCheck, title: 'Safe & Inclusive', titleHi: 'सुरक्षित एवं सुसज्जित परिसर', description: 'Boundary wall, CCTV, clean running water, and dedicated Bal Sansad.' },
  { icon: Trophy, title: 'Holistic Growth', titleHi: 'पोषण, खेलकूद एवं कला', description: 'Nutritious PM POSHAN mid-day meals, sports ground, and cultural events.' },
];

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0">
          <Image src="/images/school-building.jpg" alt="School building" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-hero-pattern" />
        </div>
        <div className="section-shell relative grid min-h-[65vh] sm:min-h-[70vh] items-center gap-8 sm:gap-10 py-12 sm:py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="badge-pill border-white/20 bg-white/10 text-white text-[11px] sm:text-xs">
              {language === 'hi' ? 'पीएम श्री राजकीय मध्य विद्यालय' : 'PM SHRI Government School'}
            </span>
            <h1 className="mt-4 sm:mt-6 max-w-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              {language === 'hi'
                ? 'गुणवत्तापूर्ण शिक्षा, डिजिटल कौशल एवं संस्कार'
                : 'Building bright futures through values, knowledge, and innovation.'}
            </h1>
            <p className="mt-3.5 sm:mt-5 max-w-xl text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">
              {language === 'hi'
                ? 'पीएम श्री मध्य विद्यालय हिरणपुर (बालक) में कक्षा 1 से 8 तक शत-प्रतिशत निःशुल्क, आधुनिक एवं सर्वांगीण शिक्षा दी जाती है।'
                : `At ${schoolData.school.name}, we blend rigorous academics with character education, ICT literacy, and a vibrant learning community.`}
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/admissions"
                className="rounded-full bg-brand-gold px-6 py-3 text-center text-sm font-bold text-brand-navy shadow-md transition hover:scale-[1.02] active:scale-95"
              >
                {language === 'hi' ? 'निःशुल्क नामांकन 2026' : 'Enroll Now (Session 2026)'}
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 active:scale-95"
              >
                {language === 'hi' ? 'विद्यालय परिचय' : 'Learn More'}
              </Link>
            </div>
          </div>

          {/* Quick Highlight Card */}
          <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-white/10 p-5 sm:p-6 shadow-soft backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-200 font-semibold">
                  {language === 'hi' ? 'नवीन सत्र सूचना' : 'Admission Highlights'}
                </p>
                <h2 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                  {language === 'hi' ? 'शत-प्रतिशत निःशुल्क नामांकन' : '100% Free Admissions'}
                </h2>
              </div>
              <Medal className="text-brand-gold" size={28} />
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl sm:rounded-2xl bg-white/5 p-3.5 sm:p-4">
                <p className="text-xs text-slate-200">{language === 'hi' ? 'सत्र' : 'Academic Session'}</p>
                <p className="mt-0.5 text-xl sm:text-2xl font-bold text-white">2026 - 2027</p>
              </div>
              <div className="rounded-xl sm:rounded-2xl bg-white/5 p-3.5 sm:p-4">
                <p className="text-xs text-slate-200">{language === 'hi' ? 'कक्षाएं' : 'Classes Offered'}</p>
                <p className="mt-0.5 text-base sm:text-lg font-semibold text-white">
                  {language === 'hi' ? 'कक्षा 1 से 8 (JCERT & NEP 2020)' : 'Classes I to VIII (Hindi Medium)'}
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/admissions"
                  className="block w-full text-center rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-navy shadow-md transition hover:scale-[1.02] active:scale-95"
                >
                  {language === 'hi' ? 'नामांकन प्रक्रिया एवं विवरण देखें' : 'View Admission Process'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Flash Announcement Ticker */}
      <NoticeTicker />

      {/* Stats Section (2 cols on mobile, 4 on desktop) */}
      <section className="py-12 sm:py-16">
        <div className="section-shell">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="badge-pill">{language === 'hi' ? 'उपलब्धियां' : 'Highlights'}</span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy">
                {language === 'hi' ? 'विद्यालय एक नज़र में' : 'Progress that speaks for itself'}
              </h2>
            </div>
            <Link href="/about" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-blue hover:underline">
              {language === 'hi' ? 'विस्तृत परिचय देखें' : 'See our story'} <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3.5 sm:gap-6 xl:grid-cols-4">
            {schoolData.stats.map((stat) => (
              <div key={stat.label} className="card-surface p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black text-brand-blue">
                  {stat.value}<span className="text-xl sm:text-2xl text-brand-gold">{stat.suffix || ''}</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm font-medium text-slate-600 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Notice Board & Events Section */}
      <HomeNoticeBoard />

      {/* Why Parents Choose Us Section */}
      <section className="bg-slate-100 py-12 sm:py-16">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-center">
            <div className="card-surface overflow-hidden p-0 h-72 sm:h-96 lg:h-full min-h-[320px] relative rounded-3xl shadow-md group">
              <Image
                src="/images/why-choose-us.jpg"
                alt="School Assembly and Flag Hoisting at PM SHRI Middle School Hiranpur"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={85}
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="rounded-full bg-brand-gold text-brand-navy px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                  {language === 'hi' ? 'दैनिक प्रार्थना सभा एवं अनुशासन' : 'Morning Assembly & Discipline'}
                </span>
                <p className="mt-1.5 text-xs text-slate-200 font-medium">
                  {language === 'hi' ? 'पीएम श्री मध्य विद्यालय हिरणपुर का अनुशासित परिसर' : 'Vibrant, patriotic campus life at PM SHRI Hiranpur'}
                </p>
              </div>
            </div>
            <div>
              <span className="badge-pill">{language === 'hi' ? 'अभिभावकों का विश्वास' : 'Why Parents Choose Us'}</span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy leading-snug">
                {language === 'hi'
                  ? 'आधुनिक तकनीक, कुशल शिक्षक एवं सुरक्षित वातावरण'
                  : 'A campus designed for curiosity, confidence, and care'}
              </h2>
              <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2">
                {featureCards.map(({ icon: Icon, title, titleHi, description }) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-2xs">
                    <div className="mb-3 inline-flex rounded-xl bg-brand-blue/10 p-2.5 text-brand-blue">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-brand-navy">
                      {language === 'hi' ? titleHi : title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="bg-brand-navy py-12 sm:py-16 text-white">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="badge-pill border-white/20 bg-white/10 text-white">
              {language === 'hi' ? 'प्रधानाध्यापक संदेश' : "Principal's Message"}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold leading-snug">
              {language === 'hi'
                ? 'हमारा संकल्प: हर बच्चे का सर्वांगीण विकास'
                : 'A school is more than academic achievement'}
            </h2>
            <blockquote className="mt-4 sm:mt-6 border-l-4 border-brand-gold pl-4 text-sm sm:text-base leading-relaxed text-slate-200">
              {language === 'hi'
                ? '“हमारा उद्देश्य प्रत्येक छात्र को संस्कार, आधुनिक ज्ञान और आत्मविश्वास से समृद्ध करना है ताकि वे राष्ट्र निर्माण में अपना योगदान दे सकें।”'
                : '“Our mission is to empower every child with values, imagination, and confidence — so they grow into responsible citizens and compassionate leaders.”'}
            </blockquote>
            <div className="mt-6 flex items-center gap-3.5">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-brand-gold text-base sm:text-lg font-bold text-brand-navy">
                VK
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base">{schoolData.school.principal}</p>
                <p className="text-xs text-slate-300">
                  {language === 'hi' ? 'प्रधानाध्यापक / हेडमास्टर' : 'Principal'}
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface overflow-hidden border-white/10 bg-white/5 p-0 text-white h-60 sm:h-72 relative">
            <Image src="/images/school-building.jpg" alt="School" fill className="object-cover opacity-90" />
          </div>
        </div>
      </section>

      {/* Facilities & Academics Overview */}
      <section className="py-12 sm:py-16">
        <div className="section-shell">
          <div className="mb-8">
            <span className="badge-pill">{language === 'hi' ? 'सुविधाएं' : 'Facilities'}</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-navy md:text-4xl">
              {language === 'hi' ? 'आधुनिक विद्यालय परिसर एवं सुविधाएं' : 'A comprehensive learning ecosystem'}
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {schoolData.facilities.slice(0, 4).map((facility) => (
              <div key={facility.title} className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-soft">
                <div className="relative h-40 sm:h-44">
                  <Image src={facility.image} alt={facility.title} fill className="object-cover" />
                </div>
                <div className="p-4 sm:p-5">
                  <div className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${facility.accent}`}>{facility.title}</div>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/academics" className="rounded-full bg-brand-blue px-6 py-2.5 text-center text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-brand-royal transition">
              {language === 'hi' ? 'पाठ्यक्रम व शिक्षण देखें' : 'Explore Academics'}
            </Link>
            <Link href="/facilities" className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-center text-xs sm:text-sm font-bold text-brand-navy shadow-xs hover:bg-slate-50 transition">
              {language === 'hi' ? 'सभी सुविधाएं देखें' : 'View Campus Facilities'}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Teachers & Leadership Showcase */}
      <section className="py-12 sm:py-16 bg-slate-100 border-t border-slate-200">
        <div className="section-shell">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="badge-pill">{language === 'hi' ? 'शिक्षक गण' : 'Faculty & Mentors'}</span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy">
                {language === 'hi' ? 'हमारे अनुभवी एवं समर्पित शिक्षक' : 'Our Qualified Educators & Mentors'}
              </h2>
            </div>
            <Link href="/about" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-blue hover:underline">
              {language === 'hi' ? 'सभी 12 शिक्षकों का परिचय देखें' : 'View Full Faculty Team'} <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {schoolData.faculty.slice(0, 3).map((teacher) => {
              const displayName = language === 'hi' ? teacher.nameHindi : teacher.name;
              const displayRole = language === 'hi' ? teacher.roleHindi : teacher.role;
              const displayQual = language === 'hi' ? teacher.qualificationHindi : teacher.qualification;
              const displaySubj = language === 'hi' ? teacher.subjectHindi : teacher.subject;
              const displayExp = language === 'hi' ? teacher.experienceHindi : teacher.experience;

              return (
                <div key={teacher.name} className="card-surface p-5 hover:shadow-md transition">
                  <div className="flex items-center gap-3.5 pb-3 border-b border-slate-100 mb-3">
                    <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-brand-blue/20 bg-slate-50 flex-shrink-0">
                      <Image src={teacher.image} alt={displayName} fill className="object-contain p-1" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-brand-navy truncate">{displayName}</h3>
                      <p className="text-xs text-brand-blue font-semibold truncate">{displayRole}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div>
                      <span className="font-semibold text-slate-400">
                        {language === 'hi' ? 'योग्यता: ' : 'Qualification: '}
                      </span>
                      <span className="font-bold text-brand-navy">{displayQual}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-400">
                        {language === 'hi' ? 'विषय: ' : 'Subject: '}
                      </span>
                      <span className="font-medium text-slate-700">{displaySubj}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-400">
                        {language === 'hi' ? 'दायित्व: ' : 'Role: '}
                      </span>
                      <span className="font-bold text-emerald-700">{displayExp}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
