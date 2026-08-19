'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Bell,
  BookOpen,
  Calendar,
  Upload,
  PlusCircle,
  Trash2,
  CheckCircle2,
  AlertCircle,
  FileText,
  Image as ImageIcon,
  Copy,
  LogOut,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { NoticeCategory } from '@/data/schoolData';

type ActiveTab = 'notices' | 'blogs' | 'events' | 'media';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ActiveTab>('notices');
  const [authChecked, setAuthChecked] = useState(false);

  // Notices state
  const [notices, setNotices] = useState<any[]>([]);
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeCategory, setNoticeCategory] = useState<NoticeCategory>('Academics');
  const [noticeDesc, setNoticeDesc] = useState('');
  const [noticeDate, setNoticeDate] = useState('');
  const [noticePdfUrl, setNoticePdfUrl] = useState('');
  const [noticeIsUrgent, setNoticeIsUrgent] = useState(false);

  // Blogs state
  const [blogs, setBlogs] = useState<any[]>([]);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogExcerpt, setBlogExcerpt] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogImage, setBlogImage] = useState('');
  const [blogAuthor, setBlogAuthor] = useState('');

  // Events state
  const [events, setEvents] = useState<any[]>([]);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [eventDesc, setEventDesc] = useState('');

  // File upload state
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    // Check auth
    if (typeof window !== 'undefined') {
      const isAuth = sessionStorage.getItem('school_admin_auth');
      if (!isAuth) {
        router.push('/admin/login');
        return;
      }
      setAuthChecked(true);
    }

    // Load initial data
    loadNotices();
    loadBlogs();
    loadEvents();
  }, [router]);

  const loadNotices = async () => {
    try {
      const res = await fetch('/api/notices');
      const data = await res.json();
      if (data.data) setNotices(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const loadBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      if (data.data) setBlogs(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const loadEvents = async () => {
    try {
      const res = await fetch('/api/events');
      const data = await res.json();
      if (data.data) setEvents(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  // Generic file uploader
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, targetField?: 'notice' | 'blog' | 'media') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', 'school-website');

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success && data.url) {
        setUploadedUrl(data.url);
        if (targetField === 'notice') setNoticePdfUrl(data.url);
        if (targetField === 'blog') setBlogImage(data.url);
        setSuccessMsg('फाइल सफलतापूर्वक अपलोड हुई (File uploaded successfully!)');
        setTimeout(() => setSuccessMsg(''), 4000);
      } else {
        alert('Upload failed: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      console.error(err);
      alert('Upload error occurred');
    } finally {
      setIsUploading(false);
    }
  };

  // Notice Submit
  const handleCreateNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/notices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: noticeTitle,
          category: noticeCategory,
          description: noticeDesc,
          date: noticeDate || new Date().toLocaleDateString('hi-IN'),
          pdfUrl: noticePdfUrl || '#',
          isUrgent: noticeIsUrgent,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg('सूचना प्रकाशित कर दी गई (Notice posted)!');
        setNoticeTitle('');
        setNoticeDesc('');
        setNoticeDate('');
        setNoticePdfUrl('');
        setNoticeIsUrgent(false);
        loadNotices();
        setTimeout(() => setSuccessMsg(''), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Blog Submit
  const handleCreateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: blogTitle,
          excerpt: blogExcerpt,
          content: blogContent,
          featuredImage: blogImage || '/images/school-building.jpg',
          author: blogAuthor || 'School Admin',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg('ब्लॉग/समाचार प्रकाशित हो गया (Blog published)!');
        setBlogTitle('');
        setBlogExcerpt('');
        setBlogContent('');
        setBlogImage('');
        setBlogAuthor('');
        loadBlogs();
        setTimeout(() => setSuccessMsg(''), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Event Submit
  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: eventTitle,
          date: eventDate,
          venue: eventVenue || 'School Campus',
          description: eventDesc,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg('इवेंट सफलतापूर्वक जोड़ा गया (Event scheduled)!');
        setEventTitle('');
        setEventDate('');
        setEventVenue('');
        setEventDesc('');
        loadEvents();
        setTimeout(() => setSuccessMsg(''), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('school_admin_auth');
    }
    router.push('/admin/login');
  };

  if (!authChecked) return null;

  return (
    <div className="min-h-screen bg-slate-100 pb-16">
      {/* Admin Header */}
      <header className="bg-brand-navy text-white px-4 sm:px-8 py-4 shadow-md sticky top-0 z-40">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              PM SHRI Hiranpur &bull; Portal
            </span>
            <h1 className="text-lg sm:text-xl font-black">प्रशासनिक डैशबोर्ड (Admin Dashboard)</h1>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold hover:bg-white/20 transition"
            >
              <span>वेबसाइट देखें</span>
              <ExternalLink size={13} />
            </a>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-full bg-red-600/80 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-red-600 transition"
            >
              <LogOut size={13} />
              <span>लॉगआउट</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-6">
        {/* Success Alert */}
        {successMsg && (
          <div className="mb-6 flex items-center gap-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-sm font-semibold text-emerald-800 shadow-sm animate-in fade-in">
            <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="mb-6 flex overflow-x-auto no-scrollbar gap-2 rounded-2xl bg-white p-1.5 shadow-sm border border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab('notices')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition whitespace-nowrap ${
              activeTab === 'notices' ? 'bg-brand-blue text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Bell size={16} />
            <span>सूचना पट्ट (Notices) ({notices.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('blogs')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition whitespace-nowrap ${
              activeTab === 'blogs' ? 'bg-brand-blue text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <BookOpen size={16} />
            <span>ब्लॉग व समाचार (Blogs) ({blogs.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('events')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition whitespace-nowrap ${
              activeTab === 'events' ? 'bg-brand-blue text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Calendar size={16} />
            <span>इवेंट्स (Events) ({events.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('media')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition whitespace-nowrap ${
              activeTab === 'media' ? 'bg-brand-blue text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Upload size={16} />
            <span>फाइल व PDF अपलोडर (Cloudinary)</span>
          </button>
        </div>

        {/* Tab 1: Notices Manager */}
        {activeTab === 'notices' && (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Add Notice Form */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
              <h2 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                <PlusCircle size={18} className="text-brand-blue" />
                <span>नया नोटिस प्रकाशित करें (Add Notice)</span>
              </h2>

              <form onSubmit={handleCreateNotice} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    शीर्षक / Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={noticeTitle}
                    onChange={(e) => setNoticeTitle(e.target.value)}
                    placeholder="उदा. अर्धवार्षिक परीक्षा समय-सारणी 2026"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-blue"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      श्रेणी / Category
                    </label>
                    <select
                      value={noticeCategory}
                      onChange={(e) => setNoticeCategory(e.target.value as NoticeCategory)}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-blue"
                    >
                      <option value="Academics">Academics (शैक्षणिक)</option>
                      <option value="Events">Events (इवेंट्स)</option>
                      <option value="Examinations">Examinations (परीक्षा)</option>
                      <option value="Administrative">Administrative (प्रशासनिक)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      तारीख / सत्र
                    </label>
                    <input
                      type="text"
                      value={noticeDate}
                      onChange={(e) => setNoticeDate(e.target.value)}
                      placeholder="उदा. 25 मार्च 2026"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    विवरण / Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={noticeDesc}
                    onChange={(e) => setNoticeDesc(e.target.value)}
                    placeholder="सूचना का संपूर्ण विवरण लिखें..."
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-brand-blue"
                  />
                </div>

                {/* PDF / File Attachment Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    PDF या इमेज अटैच करें (Cloudinary)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="file"
                      accept=".pdf,image/*"
                      onChange={(e) => handleFileUpload(e, 'notice')}
                      className="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-brand-blue/10 file:text-brand-blue hover:file:bg-brand-blue/20"
                    />
                  </div>
                  {noticePdfUrl && noticePdfUrl !== '#' && (
                    <p className="text-[11px] text-emerald-600 mt-1 font-mono truncate">
                      ✓ Attached: {noticePdfUrl}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2.5 rounded-xl bg-amber-50 border border-amber-200 p-3">
                  <input
                    type="checkbox"
                    id="urgent-box"
                    checked={noticeIsUrgent}
                    onChange={(e) => setNoticeIsUrgent(e.target.checked)}
                    className="h-4 w-4 rounded text-red-600"
                  />
                  <label htmlFor="urgent-box" className="text-xs font-semibold text-amber-900 cursor-pointer">
                    अति-आवश्यक सूचना (Urgent Flash Notice)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-blue py-3 font-bold text-white shadow-md hover:bg-brand-royal transition text-xs sm:text-sm"
                >
                  सूचना प्रकाशित करें (Publish Notice)
                </button>
              </form>
            </div>

            {/* Existing Notices List */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
              <h3 className="text-base font-bold text-brand-navy mb-4">सक्रिय सूचनाएं ({notices.length})</h3>
              <div className="space-y-3 max-h-[540px] overflow-y-auto pr-1">
                {notices.map((item) => (
                  <div
                    key={item._id || item.id}
                    className="flex items-start justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3.5 hover:bg-white hover:shadow-2xs transition"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-full bg-brand-navy/10 px-2 py-0.5 text-[9px] font-bold text-brand-navy">
                          {item.category}
                        </span>
                        {item.isUrgent && (
                          <span className="rounded-full bg-red-100 px-2 py-0.5 text-[9px] font-bold text-red-600">
                            Urgent
                          </span>
                        )}
                        <span className="text-[10px] text-slate-400">{item.date}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-brand-navy leading-snug">{item.title}</h4>
                      <p className="text-xs text-slate-600 line-clamp-2">{item.description}</p>
                    </div>
                    <button
                      type="button"
                      onClick={async () => {
                        if (confirm(`क्या आप "${item.title}" हटाना चाहते हैं?`)) {
                          await fetch(`/api/notices/${item._id || item.id}`, { method: 'DELETE' });
                          loadNotices();
                        }
                      }}
                      className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Blogs Manager */}
        {activeTab === 'blogs' && (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
              <h2 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-brand-blue" />
                <span>नया ब्लॉग/लेख लिखें (Write Blog/Article)</span>
              </h2>

              <form onSubmit={handleCreateBlog} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    शीर्षक / Blog Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    placeholder="उदा. स्मार्ट क्लासरूम से बच्चों के पठन-पाठन में नई क्रांति"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    संक्षिप्त विवरण / Excerpt
                  </label>
                  <input
                    type="text"
                    value={blogExcerpt}
                    onChange={(e) => setBlogExcerpt(e.target.value)}
                    placeholder="1-2 लाइनों में मुख्य सारांश"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    कवर इमेज / Featured Image (Cloudinary)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'blog')}
                    className="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-brand-blue/10 file:text-brand-blue hover:file:bg-brand-blue/20"
                  />
                  {blogImage && (
                    <p className="text-[11px] text-emerald-600 mt-1 font-mono truncate">✓ Image: {blogImage}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    लेखक का नाम / Author
                  </label>
                  <input
                    type="text"
                    value={blogAuthor}
                    onChange={(e) => setBlogAuthor(e.target.value)}
                    placeholder="उदा. श्री विजय कुमार सिंह (प्रधानाध्यापक)"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    पूरा लेख / Article Content <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                    placeholder="पूरा लेख यहाँ लिखें..."
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-brand-blue"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-blue py-3 font-bold text-white shadow-md hover:bg-brand-royal transition text-xs sm:text-sm"
                >
                  ब्लॉग प्रकाशित करें (Publish Blog)
                </button>
              </form>
            </div>

            {/* Published Blogs List */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
              <h3 className="text-base font-bold text-brand-navy mb-4">प्रकाशित लेख ({blogs.length})</h3>
              <div className="space-y-3 max-h-[540px] overflow-y-auto pr-1">
                {blogs.map((b) => (
                  <div
                    key={b._id}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4 hover:bg-white transition"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="rounded-full bg-brand-gold/20 px-2 py-0.5 text-[9px] font-bold text-brand-navy uppercase">
                          {b.category || 'News'}
                        </span>
                        <h4 className="text-sm font-bold text-brand-navy mt-1 leading-snug">{b.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">लेखक: {b.author}</p>
                      </div>
                      <button
                        type="button"
                        onClick={async () => {
                          if (confirm(`क्या आप "${b.title}" हटाना चाहते हैं?`)) {
                            await fetch(`/api/blogs/${b._id}`, { method: 'DELETE' });
                            loadBlogs();
                          }
                        }}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Events Manager */}
        {activeTab === 'events' && (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
              <h2 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-brand-blue" />
                <span>नया इवेंट जोड़ें (Schedule Event)</span>
              </h2>

              <form onSubmit={handleCreateEvent} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    इवेंट का नाम / Event Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    placeholder="उदा. वार्षिक खेलकूद एवं योग प्रतियोगिता"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-blue"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      तारीख / Date
                    </label>
                    <input
                      required
                      type="text"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      placeholder="उदा. 15 अप्रैल 2026"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      स्थान / Venue
                    </label>
                    <input
                      type="text"
                      value={eventVenue}
                      onChange={(e) => setEventVenue(e.target.value)}
                      placeholder="विद्यालय खेल मैदान"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    विवरण / Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={eventDesc}
                    onChange={(e) => setEventDesc(e.target.value)}
                    placeholder="इवेंट के बारे में विवरण लिखें..."
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-brand-blue"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-blue py-3 font-bold text-white shadow-md hover:bg-brand-royal transition text-xs sm:text-sm"
                >
                  इवेंट शेड्यूल करें (Save Event)
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
              <h3 className="text-base font-bold text-brand-navy mb-4">आगामी इवेंट्स ({events.length})</h3>
              <div className="space-y-3 max-h-[540px] overflow-y-auto pr-1">
                {events.map((ev) => (
                  <div key={ev._id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-bold text-brand-blue">{ev.date}</span>
                        <h4 className="text-sm font-bold text-brand-navy mt-0.5">{ev.title}</h4>
                        <p className="text-xs text-slate-500">स्थान: {ev.venue}</p>
                      </div>
                      <button
                        type="button"
                        onClick={async () => {
                          if (confirm(`क्या आप "${ev.title}" हटाना चाहते हैं?`)) {
                            await fetch(`/api/events/${ev._id}`, { method: 'DELETE' });
                            loadEvents();
                          }
                        }}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Cloudinary Media Uploader */}
        {activeTab === 'media' && (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm max-w-2xl mx-auto text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
              <Upload size={32} />
            </div>
            <h2 className="text-xl font-bold text-brand-navy">क्लाउड मीडिया एवं PDF अपलोडर (Cloudinary)</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
              तस्वीरें (JPG, PNG) या डॉक्यूमेंट (PDF) सीधे Cloudinary पर अपलोड करें और उसका URL कॉपी करें।
            </p>

            <label className="mx-auto flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-2xl p-8 cursor-pointer hover:border-brand-blue hover:bg-slate-50 transition">
              <ImageIcon size={36} className="text-slate-400 mb-2" />
              <span className="text-sm font-bold text-brand-navy">
                {isUploading ? 'अपलोड हो रहा है (Uploading...)' : 'फाइल चुनें (Click to Upload)'}
              </span>
              <span className="text-xs text-slate-400 mt-1">PDF, JPG, PNG up to 10MB</span>
              <input
                type="file"
                disabled={isUploading}
                accept=".pdf,image/*"
                onChange={(e) => handleFileUpload(e, 'media')}
                className="hidden"
              />
            </label>

            {uploadedUrl && (
              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  अपलोड किया गया URL (Cloudinary Link):
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={uploadedUrl}
                    className="w-full rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs font-mono text-slate-700"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(uploadedUrl);
                      alert('URL क्लिपबोर्ड पर कॉपी हो गया!');
                    }}
                    className="rounded-lg bg-brand-navy px-3 py-2 text-xs font-bold text-white hover:bg-brand-blue flex items-center gap-1"
                  >
                    <Copy size={13} />
                    <span>Copy</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
