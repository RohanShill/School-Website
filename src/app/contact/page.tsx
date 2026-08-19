'use client';

import { Clock3, Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { schoolData } from '@/data/schoolData';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const contactCards = [
    {
      icon: Phone,
      title: language === 'hi' ? 'फोन नंबर (Call Us)' : 'Call Us',
      value: schoolData.contact.phone,
      action: `tel:${schoolData.contact.phone}`,
      actionText: language === 'hi' ? 'कॉल करें' : 'Call Now',
    },
    {
      icon: Mail,
      title: language === 'hi' ? 'ईमेल (Email)' : 'Email',
      value: schoolData.contact.email,
      action: `mailto:${schoolData.contact.email}`,
      actionText: language === 'hi' ? 'ईमेल भेजें' : 'Send Email',
    },
    {
      icon: Clock3,
      title: language === 'hi' ? 'संचालन समय (Hours)' : 'School Hours',
      value: schoolData.contact.hours,
      action: null,
      actionText: null,
    },
    {
      icon: MapPin,
      title: language === 'hi' ? 'पता (Location)' : 'Address',
      value: language === 'hi' ? schoolData.contact.address : schoolData.contact.addressEnglish,
      action: 'https://maps.google.com/?q=Hiranpur,+Pakur,+Jharkhand',
      actionText: language === 'hi' ? 'दिशा देखें (Maps)' : 'View Map',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="section-shell py-12 sm:py-16">
      <div className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
        <span className="badge-pill">{language === 'hi' ? 'संपर्क केंद्र' : 'Contact Us'}</span>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy">
          {language === 'hi' ? 'हमसे संपर्क करें' : "We'd love to hear from you"}
        </h1>
        <p className="mt-2 text-xs sm:text-base text-slate-600">
          {language === 'hi'
            ? 'पीएम श्री मध्य विद्यालय हिरणपुर (बालक), पाकुड़, झारखंड — पिन 816104'
            : 'PM SHRI Middle School Hiranpur (Boys), Pakur, Jharkhand — 816104'}
        </p>
      </div>

      {/* 4 Contact Cards (Click-to-Call on Mobile) */}
      <div className="grid gap-3.5 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {contactCards.map(({ icon: Icon, title, value, action, actionText }) => (
          <div key={title} className="card-surface p-5 sm:p-6 text-center flex flex-col justify-between">
            <div>
              <div className="mx-auto mb-3 inline-flex rounded-xl bg-brand-blue/10 p-3 text-brand-blue">
                <Icon size={22} />
              </div>
              <h2 className="text-sm sm:text-base font-bold text-brand-navy">{title}</h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 break-words">{value}</p>
            </div>
            {action && (
              <div className="mt-4 pt-3 border-t border-slate-100">
                <a
                  href={action}
                  target={action.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy px-4 py-1.5 text-xs font-bold text-white hover:bg-brand-blue active:scale-95 transition"
                >
                  <Icon size={12} />
                  <span>{actionText}</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Message Form & Map */}
      <section className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card-surface p-5 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy">
            {language === 'hi' ? 'संदेश भेजें / पूछताछ' : 'Send us a message'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-5">
            {language === 'hi'
              ? 'प्रवेश, छात्रवृत्ति या अन्य किसी भी जानकारी के लिए हमें लिखें'
              : 'Feel free to reach out for admissions, schemes, or general queries'}
          </p>

          {submitted ? (
            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center">
              <CheckCircle2 size={40} className="mx-auto text-emerald-600 mb-2" />
              <h4 className="text-base font-bold text-emerald-900">
                {language === 'hi' ? 'संदेश सफलतापूर्वक भेजा गया!' : 'Message Sent Successfully!'}
              </h4>
              <p className="text-xs text-emerald-700 mt-1">
                {language === 'hi' ? 'हम जल्द ही आपसे संपर्क करेंगे।' : 'We will get back to you shortly.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {language === 'hi' ? 'पूरा नाम' : 'Full Name'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder={language === 'hi' ? 'आपका नाम' : 'Your name'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {language === 'hi' ? 'मोबाइल नंबर' : 'Phone Number'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="+91..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  {language === 'hi' ? 'ईमेल (वैकल्पिक)' : 'Email (Optional)'}
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  {language === 'hi' ? 'संदेश' : 'Message'} <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  placeholder={language === 'hi' ? 'अपना संदेश लिखें...' : 'How can we help?'}
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-brand-royal active:scale-95 transition"
              >
                <Send size={14} />
                <span>{language === 'hi' ? 'संदेश भेजें (Submit Enquiry)' : 'Submit Enquiry'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Responsive Map Container */}
        <div className="card-surface overflow-hidden p-0 h-72 sm:h-96 lg:h-full min-h-[300px] relative">
          <iframe
            title="School location map"
            src="https://www.google.com/maps?q=Hiranpur,+Pakur,+Jharkhand&z=14&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
