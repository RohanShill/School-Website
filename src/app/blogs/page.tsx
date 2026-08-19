'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Calendar, User, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function BlogsPage() {
  const { language } = useLanguage();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        if (data.data) setBlogs(data.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="section-shell py-12 sm:py-16">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <span className="badge-pill">
          {language === 'hi' ? 'विद्यालय समाचार एवं गतिविधियां' : 'School News & Stories'}
        </span>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy">
          {language === 'hi' ? 'शैक्षणिक लेख एवं ताज़ा अपडेट्स' : 'Campus Stories & Updates'}
        </h1>
        <p className="mt-2 text-xs sm:text-base text-slate-600">
          {language === 'hi'
            ? 'पीएम श्री मध्य विद्यालय हिरणपुर के छात्रों की उपलब्धियां, नवाचार एवं गतिविधियां'
            : 'Read the latest achievements, smart learning initiatives, and student stories'}
        </p>
      </div>

      {loading ? (
        <div className="py-16 text-center text-slate-400">
          <p className="text-sm">लोड हो रहा है (Loading stories...)</p>
        </div>
      ) : blogs.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 p-12 text-center text-slate-500">
          <BookOpen size={36} className="mx-auto mb-2 opacity-40" />
          <p className="text-sm">अभी कोई लेख उपलब्ध नहीं है।</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog._id}
              className="card-surface overflow-hidden group flex flex-col justify-between hover:shadow-lg transition duration-200"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={blog.featuredImage || '/images/school-building.jpg'}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-brand-navy/90 text-white backdrop-blur-xs px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                      {blog.category || 'News'}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2.5">
                    <span className="flex items-center gap-1">
                      <User size={12} className="text-brand-blue" />
                      {blog.author || 'Editorial'}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-brand-gold" />
                      {new Date(blog.createdAt).toLocaleDateString('hi-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-brand-navy group-hover:text-brand-blue transition leading-snug">
                    {blog.title}
                  </h2>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {blog.excerpt || blog.content}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 mt-2">
                <div className="pt-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all">
                    <span>{language === 'hi' ? 'पूरा लेख पढ़ें' : 'Read Article'}</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
