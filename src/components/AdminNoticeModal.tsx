'use client';

import React, { useState } from 'react';
import { X, PlusCircle, Trash2, AlertCircle, CheckCircle2, Shield, BellRing, RefreshCw } from 'lucide-react';
import { useNotice } from '@/context/NoticeContext';
import { NoticeCategory } from '@/data/schoolData';

const categories: NoticeCategory[] = ['Academics', 'Events', 'Examinations', 'Administrative'];

export default function AdminNoticeModal() {
  const {
    notices,
    addNotice,
    deleteNotice,
    resetToDefaults,
    isAdminModalOpen,
    setIsAdminModalOpen,
  } = useNotice();

  const [activeTab, setActiveTab] = useState<'add' | 'manage'>('add');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<NoticeCategory>('Academics');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  if (!isAdminModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('कृपया शीर्षक और विवरण दोनों भरें (Please fill Title & Description)');
      return;
    }

    addNotice({
      title: title.trim(),
      category,
      date: date.trim() || new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      description: description.trim(),
      pdfUrl: pdfUrl.trim() || '#',
      isUrgent,
      isNew: true,
    });

    setSuccessMessage('सूचना सफलतापूर्वक जोड़ी गई! (Notice posted successfully)');
    setTitle('');
    setDescription('');
    setDate('');
    setPdfUrl('');
    setIsUrgent(false);

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
              <Shield size={22} />
            </div>
            <div>
              <h2 className="text-xl font-black text-brand-navy">विद्यालय सूचना प्रबंधन (Notice Admin)</h2>
              <p className="text-xs text-slate-500">Add, Update or Remove Official Notices & Announcements</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsAdminModalOpen(false)}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="mt-5 flex rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setActiveTab('add')}
            className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs sm:text-sm font-semibold transition ${
              activeTab === 'add' ? 'bg-white text-brand-navy shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <PlusCircle size={16} className="text-brand-blue" /> + नया नोटिस जोड़ें (Add New)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('manage')}
            className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs sm:text-sm font-semibold transition ${
              activeTab === 'manage' ? 'bg-white text-brand-navy shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BellRing size={16} className="text-brand-gold" /> सक्रिय नोटिस देखें/हटाएं ({notices.length})
          </button>
        </div>

        {successMessage && (
          <div className="mt-4 flex items-center gap-2 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-sm font-medium text-emerald-800">
            <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Tab 1: Add New Notice Form */}
        {activeTab === 'add' && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                सूचना का शीर्षक / Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="उदा. कक्षा 8वीं अर्धवार्षिक परीक्षा समय-सारणी"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  श्रेणी / Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as NoticeCategory)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  तारीख / सत्र (Date/Session)
                </label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="उदा. 25 मार्च 2026 या सत्र 2026-27"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                विस्तृत विवरण / Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                placeholder="सूचना का पूरा विवरण लिखें..."
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                PDF लिंक / अटैचमेंट URL (वैकल्पिक)
              </label>
              <input
                type="text"
                value={pdfUrl}
                onChange={(e) => setPdfUrl(e.target.value)}
                placeholder="उदा. https://drive.google.com/... या #"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-amber-50/70 border border-amber-200/80 p-3.5">
              <input
                type="checkbox"
                id="urgent-check"
                checked={isUrgent}
                onChange={(e) => setIsUrgent(e.target.checked)}
                className="h-4 w-4 rounded text-red-600 focus:ring-red-500"
              />
              <label htmlFor="urgent-check" className="text-xs font-semibold text-amber-900 cursor-pointer">
                अति-आवश्यक सूचना (Mark as Urgent / Flash Announcement)
              </label>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsAdminModalOpen(false)}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100"
              >
                रद्द करें (Cancel)
              </button>
              <button
                type="submit"
                className="rounded-full bg-brand-blue px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-brand-royal transition"
              >
                सूचना प्रकाशित करें (Publish Notice)
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Manage Existing Notices */}
        {activeTab === 'manage' && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                कुल सूचनाएं ({notices.length})
              </span>
              <button
                type="button"
                onClick={resetToDefaults}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-brand-blue"
              >
                <RefreshCw size={13} /> डिफ़ॉल्ट डेटा रीसेट करें
              </button>
            </div>

            <div className="max-h-[380px] space-y-3 overflow-y-auto pr-1">
              {notices.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-white hover:shadow-sm"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-brand-navy/10 px-2 py-0.5 text-[10px] font-bold text-brand-navy">
                        {item.category}
                      </span>
                      {item.isUrgent && (
                        <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600 animate-pulse">
                          Urgent
                        </span>
                      )}
                      <span className="text-xs text-slate-500">{item.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-brand-navy">{item.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{item.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`क्या आप इस सूचना को हटाना चाहते हैं?\n"${item.title}"`)) {
                        deleteNotice(item.id);
                      }
                    }}
                    className="flex-shrink-0 rounded-xl p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 transition"
                    title="Delete Notice"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
