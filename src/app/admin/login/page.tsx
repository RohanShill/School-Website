'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, Shield, AlertCircle, ArrowRight, School } from 'lucide-react';
import Image from 'next/image';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('school_admin_auth', 'true');
        }
        router.push('/admin');
      } else {
        setError(data.error || 'अमान्य क्रेडेंशियल्स (Invalid credentials)');
      }
    } catch (err) {
      // Fallback for offline/local
      if (password === 'admin123' || password === 'admin') {
        sessionStorage.setItem('school_admin_auth', 'true');
        router.push('/admin');
      } else {
        setError('लॉगिन विफल। डिफ़ॉल्ट पासवर्ड: admin123');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 bg-slate-100">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-slate-200">
        <div className="text-center mb-6">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-brand-gold shadow-md">
            <Shield size={28} />
          </div>
          <h1 className="text-2xl font-black text-brand-navy">प्रशासनिक पोर्टल (Admin Login)</h1>
          <p className="text-xs text-slate-500 mt-1">PM SHRI Middle School Hiranpur — Management</p>
        </div>

        {error && (
          <div className="mb-4 flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-700 font-medium">
            <AlertCircle size={16} className="flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              यूज़रनेम / ईमेल (Username / Email)
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@school.com या admin"
                required
                className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              पासवर्ड (Password)
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">डिफ़ॉल्ट लॉगिन: <code>admin</code> / <code>admin123</code></p>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy py-3 font-bold text-white shadow-md hover:bg-brand-blue active:scale-98 transition disabled:opacity-50 text-sm"
          >
            <span>{isLoading ? 'सत्यापित किया जा रहा है...' : 'लॉगिन करें (Sign In)'}</span>
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
