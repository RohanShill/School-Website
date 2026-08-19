'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Compass, HeartHandshake, Target, Building2 } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();

  const values = [
    {
      icon: Target,
      title: language === 'hi' ? 'दृष्टिकोण (Vision)' : 'Our Vision',
      description:
        language === 'hi'
          ? 'एनईपी 2020 के अंतर्गत शिक्षार्थियों, विचारकों और नैतिक नेतृत्वकर्ताओं की एक भविष्य-तैयार पीढ़ी का निर्माण करना।'
          : 'To create a future-ready generation of learners, thinkers, and ethical leaders under NEP 2020.',
    },
    {
      icon: Compass,
      title: language === 'hi' ? 'लक्ष्य (Mission)' : 'Our Mission',
      description:
        language === 'hi'
          ? 'नवाचार, आईसीटी और मूल्य-आधारित विकास के माध्यम से गुणवत्तापूर्ण, आनंददायी एवं समावेशी शिक्षा प्रदान करना।'
          : 'To deliver quality, joyful, and inclusive education through innovation, ICT, and values-based development.',
    },
    {
      icon: HeartHandshake,
      title: language === 'hi' ? 'मूल्य (Core Values)' : 'Core Values',
      description:
        language === 'hi'
          ? 'प्रत्येक छात्र में सत्यनिष्ठा, सम्मान, वैज्ञानिक दृष्टिकोण और नागरिक दायित्व की भावना को सुदृढ़ करना।'
          : 'To foster integrity, respect, scientific temper, and civic responsibility in every student.',
    },
  ];

  return (
    <div className="section-shell py-12 sm:py-16">
      {/* Page Heading */}
      <div className="mb-10 text-center">
        <span className="badge-pill">
          {language === 'hi' ? 'परिचय एवं इतिहास' : 'About Us'}
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy">
          {language === 'hi' ? schoolData.school.nameHindi : schoolData.school.name}
        </h1>
        <p className="mt-2 text-sm sm:text-base font-medium text-slate-600">
          {language === 'hi'
            ? 'पाकुड़ (झारखंड) का प्रतिष्ठित पीएम श्री आदर्श विद्यालय'
            : 'A Premier PM SHRI Model School in Pakur, Jharkhand'}
        </p>
      </div>

      {/* Legacy & Image Grid */}
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy">
              {language === 'hi' ? 'हमारी विरासत एवं परिचय' : 'Our Legacy & Profile'}
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              {language === 'hi'
                ? `पाकुड़ जिले के हिरणपुर प्रखंड में स्थापित, ${schoolData.school.nameHindi} स्कूली शिक्षा एवं साक्षरता विभाग, झारखंड सरकार द्वारा संचालित एक प्रतिष्ठित सरकारी मध्य विद्यालय है, जिसे भारत सरकार की महत्वाकांक्षी पीएम श्री (PM SHRI) योजना के तहत चयनित किया गया है।`
                : `Established as a premier institution in Pakur district, ${schoolData.school.name} is a government middle school recognized under the flagship PM SHRI (Prime Minister Schools for Rising India) scheme by the Department of School Education and Literacy, Government of Jharkhand.`}
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              {language === 'hi'
                ? 'विद्यालय में जेसीईआरटी (JCERT) एवं राष्ट्रीय शिक्षा नीति (NEP 2020) के अनुरूप शत-प्रतिशत निःशुल्क गुणवत्तापूर्ण शिक्षा, आधुनिक आईसीटी कंप्यूटर लैब, समृद्ध पुस्तकालय, विज्ञान किट्स और पौष्टिक पीएम पोषण (मध्याह्न भोजन) की उत्कृष्ट व्यवस्था उपलब्ध है।'
                : 'The school follows the JCERT curriculum aligned with NEP 2020, offering completely free, quality education with modern ICT computer labs, smart classrooms, PM POSHAN mid-day meals, and foundational literacy under NIPUN Bharat.'}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card-surface p-5 sm:p-6">
                <div className="mb-3 inline-flex rounded-xl bg-brand-blue/10 p-2.5 text-brand-blue">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-brand-navy">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface overflow-hidden p-0 rounded-3xl shadow-md min-h-[300px] relative">
          <Image
            src="/images/why-choose-us.jpg"
            alt="Campus assembly"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Administrative Profile Table */}
      <section className="mt-12 sm:mt-16 card-surface p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <Building2 className="text-brand-blue" size={24} />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy">
              {language === 'hi' ? 'सामान्य एवं प्रशासनिक विवरण' : 'Administrative & Institutional Profile'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {language === 'hi' ? 'आधिकारिक विद्यालय कोड एवं संचालन विवरण' : 'Official Institutional Details & Accreditation'}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full text-left text-xs sm:text-sm">
            <tbody className="divide-y divide-slate-200">
              <tr className="bg-slate-50">
                <td className="px-4 sm:px-5 py-3 font-bold text-brand-navy w-1/3">
                  {language === 'hi' ? 'विद्यालय का नाम' : 'School Name'}
                </td>
                <td className="px-4 sm:px-5 py-3 text-slate-700">
                  {language === 'hi' ? schoolData.school.nameHindi : schoolData.school.name}
                </td>
              </tr>
              <tr>
                <td className="px-4 sm:px-5 py-3 font-bold text-brand-navy">
                  {language === 'hi' ? 'श्रेणी' : 'Category'}
                </td>
                <td className="px-4 sm:px-5 py-3 text-slate-700">{schoolData.school.category}</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 sm:px-5 py-3 font-bold text-brand-navy">
                  {language === 'hi' ? 'प्रशासनिक विभाग' : 'Department'}
                </td>
                <td className="px-4 sm:px-5 py-3 text-slate-700">{schoolData.school.department}</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-5 py-3 font-bold text-brand-navy">
                  {language === 'hi' ? 'पाठ्यक्रम परिषद' : 'Curriculum'}
                </td>
                <td className="px-4 sm:px-5 py-3 text-slate-700">{schoolData.school.curriculum}</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 sm:px-5 py-3 font-bold text-brand-navy">UDISE+ Code</td>
                <td className="px-4 sm:px-5 py-3 font-mono font-bold text-brand-blue">{schoolData.school.udiseCode}</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-5 py-3 font-bold text-brand-navy">
                  {language === 'hi' ? 'शिक्षण माध्यम' : 'Medium of Instruction'}
                </td>
                <td className="px-4 sm:px-5 py-3 text-slate-700">{schoolData.school.medium}</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 sm:px-5 py-3 font-bold text-brand-navy">
                  {language === 'hi' ? 'फ्लैगशिप योजना' : 'Flagship Scheme'}
                </td>
                <td className="px-4 sm:px-5 py-3 font-semibold text-brand-navy">{schoolData.school.flagshipScheme}</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-5 py-3 font-bold text-brand-navy">
                  {language === 'hi' ? 'संचालन समय' : 'School Timings'}
                </td>
                <td className="px-4 sm:px-5 py-3 text-slate-700">
                  {language === 'hi' ? (
                    <div>
                      <div><strong>नियमित:</strong> {schoolData.school.timings.regular}</div>
                      <div className="mt-0.5"><strong>ग्रीष्मकालीन:</strong> {schoolData.school.timings.summer}</div>
                    </div>
                  ) : (
                    <div>
                      <div><strong>Regular:</strong> {schoolData.school.timings.regularEnglish}</div>
                      <div className="mt-0.5"><strong>Summer:</strong> {schoolData.school.timings.summerEnglish}</div>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Leadership & Faculty Showcase */}
      <section className="mt-12 sm:mt-16">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <span className="badge-pill">
            {language === 'hi' ? 'शिक्षक गण' : 'Faculty & Staff'}
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy">
            {language === 'hi' ? 'शिक्षक गण एवं शैक्षणिक नेतृत्व' : 'Our Esteemed Faculty & Mentors'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            {language === 'hi'
              ? 'पीएम श्री मॉडल के अंतर्गत 1,000+ छात्रों का भविष्य संवारते समर्पित एवं योग्य 12 शिक्षक'
              : 'Dedicated, qualified, and student-centric educators shaping the future of 1,000+ students'}
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {schoolData.faculty.map((member) => {
            const displayName = language === 'hi' ? member.nameHindi : member.name;
            const displayRole = language === 'hi' ? member.roleHindi : member.role;
            const displayQual = language === 'hi' ? member.qualificationHindi : member.qualification;
            const displaySubj = language === 'hi' ? member.subjectHindi : member.subject;
            const displayExp = language === 'hi' ? member.experienceHindi : member.experience;
            const displayBio = language === 'hi' ? member.bioHindi : member.bio;

            return (
              <div
                key={member.name}
                className="card-surface p-5 sm:p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200 border-slate-200 group hover:border-brand-blue/30"
              >
                <div>
                  {/* Avatar & Header */}
                  <div className="flex items-center gap-3.5 mb-4 pb-3.5 border-b border-slate-100">
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border-2 border-brand-blue/20 bg-slate-50 flex-shrink-0 group-hover:scale-105 transition">
                      <Image
                        src={member.image}
                        alt={displayName}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-brand-navy leading-tight group-hover:text-brand-blue transition truncate">
                        {displayName}
                      </h3>
                      <span className="inline-block rounded-full bg-brand-blue/10 px-2.5 py-0.5 text-[10px] font-bold text-brand-blue mt-1">
                        {displayRole}
                      </span>
                    </div>
                  </div>

                  {/* Badges: Qualification, Subject, Experience */}
                  <div className="space-y-2 mb-3.5 bg-slate-50 rounded-xl p-3 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-slate-400 font-semibold min-w-[70px]">
                        {language === 'hi' ? 'योग्यता:' : 'Qualification:'}
                      </span>
                      <span className="font-bold text-brand-navy">{displayQual}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-slate-400 font-semibold min-w-[70px]">
                        {language === 'hi' ? 'विषय:' : 'Subject:'}
                      </span>
                      <span className="font-semibold text-slate-700">{displaySubj}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 font-semibold min-w-[70px]">
                        {language === 'hi' ? 'दायित्व:' : 'Role:'}
                      </span>
                      <span className="font-bold text-emerald-700">{displayExp}</span>
                    </div>
                  </div>

                  {/* Short Bio */}
                  <p className="text-xs leading-relaxed text-slate-600">
                    {displayBio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Promise Banner */}
      <section className="mt-12 sm:mt-16 rounded-3xl bg-brand-navy p-6 sm:p-8 text-white shadow-soft">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
              {language === 'hi' ? 'हमारा संकल्प' : 'Our Promise'}
            </p>
            <h2 className="mt-1.5 text-xl sm:text-2xl font-bold">
              {language === 'hi'
                ? 'एक ऐसा पीएम श्री विद्यालय जहाँ प्रत्येक बच्चा सफल होता है।'
                : 'A PM SHRI School where every child succeeds.'}
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 sm:px-5 py-2.5 font-bold text-brand-navy text-xs sm:text-sm">
            <Award size={16} />
            <span>PM SHRI &bull; JCERT &bull; NEP 2020</span>
          </div>
        </div>
      </section>
    </div>
  );
}
