'use client';

import { useState, useEffect } from 'react';

export interface AppData {
  name: string;
  icon: string;
  summary: string;
  accentColor: string;
  status: 'live' | 'testflight' | 'coming-soon';
  features?: string[];
  builtFor?: string;
  suiteName: string;
}

const statusConfig = {
  live: { dot: '#10B981', text: '#10B981', label: 'LIVE' },
  testflight: { dot: '#3B82F6', text: '#3B82F6', label: 'TESTFLIGHT' },
  'coming-soon': { dot: '#6B7280', text: '#6B7280', label: 'COMING SOON' },
};

/* ─── Modal ─── */
function AppModal({ app, onClose }: { app: AppData; onClose: () => void }) {
  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const status = statusConfig[app.status];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl p-8 overflow-y-auto max-h-[90vh]"
        style={{
          background: '#0F172A',
          border: `1px solid ${app.accentColor}30`,
          boxShadow: `0 0 40px ${app.accentColor}15`,
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Status badge */}
        <div className="flex items-center gap-1.5 mb-4">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: status.dot, boxShadow: `0 0 6px ${status.dot}` }}
          />
          <span className="text-xs font-semibold tracking-wider" style={{ color: status.text }}>
            {status.label}
          </span>
        </div>

        {/* Icon + Name */}
        <div className="text-4xl mb-2">{app.icon}</div>
        <h2 className="text-2xl font-bold text-white mb-1">{app.name}</h2>
        <div className="text-sm font-medium mb-4" style={{ color: app.accentColor }}>
          {app.suiteName}
        </div>

        {/* Summary */}
        <p className="text-gray-300 mb-6 leading-relaxed">{app.summary}</p>

        {/* Features */}
        {app.features && app.features.length > 0 && (
          <div className="mb-6">
            {app.features.map((f) => (
              <div key={f} className="flex items-center gap-2 mb-2">
                <span style={{ color: app.accentColor }}>✓</span>
                <span className="text-gray-400 text-sm">{f}</span>
              </div>
            ))}
          </div>
        )}

        {/* App Store badge */}
        <div className="flex items-center justify-center gap-3 p-4 rounded-xl"
          style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(51,65,85,1)' }}
        >
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.5 4.7 9.56C5.55 8.1 7.13 7.17 8.82 7.15C10.1 7.13 11.32 8.01 12.11 8.01C12.89 8.01 14.37 6.95 15.92 7.11C16.57 7.14 18.39 7.38 19.56 9.07C19.47 9.13 17.29 10.37 17.31 13.02C17.34 16.19 20.05 17.27 20.08 17.28C20.05 17.34 19.67 18.72 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
          </svg>
          <div>
            <div className="text-xs text-gray-400">Coming Soon to the</div>
            <div className="text-lg font-semibold text-white">App Store</div>
          </div>
        </div>

        {/* Dedication */}
        {app.builtFor && (
          <p className="text-center text-xs text-gray-500 mt-4 italic">{app.builtFor}</p>
        )}
      </div>
    </div>
  );
}

/* ─── Card ─── */
export default function AppCard({ app }: { app: AppData }) {
  const [showModal, setShowModal] = useState(false);
  const status = statusConfig[app.status];

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="relative p-6 rounded-xl cursor-pointer transition-all duration-300 group"
        style={{
          background: '#1E293B',
          border: `1px solid ${app.accentColor}20`,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = `${app.accentColor}50`;
          el.style.boxShadow = `0 4px 20px ${app.accentColor}15`;
          el.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = `${app.accentColor}20`;
          el.style.boxShadow = 'none';
          el.style.transform = 'translateY(0)';
        }}
      >
        {/* Status badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: status.dot, boxShadow: `0 0 4px ${status.dot}` }}
          />
          <span className="text-[10px] font-semibold tracking-wider" style={{ color: status.text }}>
            {status.label}
          </span>
        </div>

        {/* Icon */}
        <div className="text-2xl mb-3">{app.icon}</div>

        {/* Name */}
        <h3 className="text-white font-bold text-lg mb-2">{app.name}</h3>

        {/* Summary — 2 line clamp */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{app.summary}</p>
      </div>

      {showModal && <AppModal app={app} onClose={() => setShowModal(false)} />}
    </>
  );
}
