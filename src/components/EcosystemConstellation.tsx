'use client';

import { useState, useEffect, useCallback } from 'react';

/* ─── Suite & App Data ─── */
const suites = [
  {
    id: 'ezre',
    name: 'EZRE SUITE',
    color: '#06B6D4',
    angle: 270,       // 12 o'clock
    scrollTo: 'platforms',
    apps: [
      { name: 'EZRE OS', offset: { x: -8, y: -6 } },
      { name: 'EZRE SAFE', offset: { x: 8, y: 6 } },
    ],
  },
  {
    id: 'wellness',
    name: 'WELLNESS SUITE',
    color: '#10B981',
    angle: 321,        // ~2 o'clock
    scrollTo: 'platforms',
    apps: [
      { name: 'CLARITY', offset: { x: -10, y: -8 } },
      { name: 'GENESIS', offset: { x: 10, y: -4 } },
      { name: 'SPARK', offset: { x: -6, y: 8 } },
      { name: 'HARMONY', offset: { x: 8, y: 10 } },
    ],
  },
  {
    id: 'connection',
    name: 'CONNECTION SUITE',
    color: '#F43F5E',
    angle: 12,         // ~4 o'clock
    scrollTo: 'platforms',
    apps: [
      { name: 'KINDRED', offset: { x: -8, y: -6 } },
      { name: 'AURA', offset: { x: 8, y: -2 } },
      { name: 'GHOST WRITER', offset: { x: 0, y: 10 } },
    ],
  },
  {
    id: 'safety',
    name: 'SAFETY SUITE',
    color: '#F59E0B',
    angle: 50,         // ~5 o'clock
    scrollTo: 'platforms',
    apps: [
      { name: 'HAVEN', offset: { x: -8, y: 0 } },
      { name: 'TRUTH', offset: { x: 8, y: 0 } },
    ],
  },
  {
    id: 'empowerment',
    name: 'EMPOWERMENT SUITE',
    color: '#8B5CF6',
    angle: 140,        // ~7 o'clock
    scrollTo: 'platforms',
    apps: [
      { name: 'SCHOLAR', offset: { x: -8, y: -6 } },
      { name: 'LEVEL UP', offset: { x: 8, y: -4 } },
      { name: 'PROSPER', offset: { x: 0, y: 10 } },
    ],
  },
  {
    id: 'life',
    name: 'LIFE SUITE',
    color: '#0EA5E9',
    angle: 192,        // ~9 o'clock
    scrollTo: 'platforms',
    apps: [
      { name: 'COMMAND', offset: { x: -8, y: -6 } },
      { name: 'BRIDGE', offset: { x: 8, y: -4 } },
      { name: 'LEAF', offset: { x: 0, y: 10 } },
    ],
  },
  {
    id: 'fun',
    name: 'FUN SUITE',
    color: '#F97316',
    angle: 232,        // ~11 o'clock
    scrollTo: 'platforms',
    apps: [
      { name: 'WONDER', offset: { x: -8, y: 0 } },
      { name: 'AM I COOKED?', offset: { x: 10, y: 0 } },
    ],
  },
];

/* ─── Connection Data ─── */
const connections = [
  { from: 'ezre', to: 'safety', label: 'EZRE SAFE + HAVEN share safety DNA' },
  { from: 'ezre', to: 'life', label: 'COMMAND integrates with EZRE workflows' },
  { from: 'wellness', to: 'safety', label: 'CLARITY + HAVEN support survivors' },
  { from: 'wellness', to: 'fun', label: 'SPARK + WONDER both serve kids' },
  { from: 'connection', to: 'life', label: 'KINDRED + COMMAND + AURA serve personal growth' },
  { from: 'empowerment', to: 'life', label: 'SCHOLAR + LEVEL UP + COMMAND serve ambition' },
  { from: 'safety', to: 'empowerment', label: 'HAVEN + TRUTH both fight for fairness' },
];

/* ─── Journey Data ─── */
const journeys = [
  {
    title: 'The Fresh Start',
    path: [
      { name: 'HAVEN', color: '#A78BFA' },
      { name: 'EZRE RELOCATE', color: '#06B6D4' },
      { name: 'CLARITY', color: '#3B82F6' },
      { name: 'PROSPER', color: '#8B5CF6' },
      { name: 'HARMONY', color: '#D4A843' },
    ],
    story: 'A survivor finds safety through HAVEN. EZRE handles their relocation. CLARITY helps them understand their diagnosis. PROSPER rebuilds their financial foundation. HARMONY composes music for the healing.',
  },
  {
    title: 'The Brave Kid',
    path: [
      { name: 'SPARK', color: '#F59E0B' },
      { name: 'GENESIS', color: '#00E5FF' },
      { name: 'CLARITY', color: '#3B82F6' },
      { name: 'WONDER', color: '#7C3AED' },
      { name: 'HARMONY', color: '#D4A843' },
    ],
    story: 'A child is diagnosed and scared. SPARK makes them the hero. GENESIS helps them see inside their own body. CLARITY gives their parents answers. WONDER keeps them learning. HARMONY plays them a lullaby.',
  },
  {
    title: 'The Ambitious Agent',
    path: [
      { name: 'EZRE OS', color: '#06B6D4' },
      { name: 'COMMAND', color: '#F59E0B' },
      { name: 'LEVEL UP', color: '#8B5CF6' },
      { name: 'KINDRED', color: '#F43F5E' },
      { name: 'AURA', color: '#F43F5E' },
    ],
    story: "An agent runs their business on EZRE. COMMAND structures their day. LEVEL UP teaches negotiation. KINDRED keeps their marriage strong through 60-hour weeks. AURA asks the question that changes everything.",
  },
];

/* ─── Helpers ─── */
function polarToXY(angleDeg: number, radius: number, cx: number, cy: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

/* ─── Component ─── */
export default function EcosystemConstellation() {
  const [hoveredSuite, setHoveredSuite] = useState<string | null>(null);
  const [activeJourney, setActiveJourney] = useState(0);
  const [journeyPaused, setJourneyPaused] = useState(false);

  // Auto-rotate journeys
  useEffect(() => {
    if (journeyPaused) return;
    const timer = setInterval(() => {
      setActiveJourney((prev) => (prev + 1) % journeys.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [journeyPaused]);

  const handleSuiteClick = useCallback((scrollTo: string) => {
    const el = document.getElementById(scrollTo);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // SVG viewBox center & radius
  const cx = 350, cy = 350, orbitR = 230, nodeR = 7;

  // Precompute suite positions
  const suitePositions = suites.map((s) => ({
    ...s,
    ...polarToXY(s.angle, orbitR, cx, cy),
  }));

  const suiteMap = Object.fromEntries(suitePositions.map((s) => [s.id, s]));

  return (
    <>
      <style>{`
        /* ─── Constellation Animations ─── */
        @keyframes vv-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes vv-breathe {
          0%, 100% { r: 40; opacity: 0.12; }
          50% { r: 48; opacity: 0.06; }
        }
        @keyframes vv-breathe-outer {
          0%, 100% { r: 60; opacity: 0.06; }
          50% { r: 70; opacity: 0.03; }
        }
        @keyframes vv-orbit {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @keyframes vv-conn-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes vv-travel {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @keyframes vv-node-glow {
          0%, 100% { filter: drop-shadow(0 0 3px var(--node-color)); }
          50% { filter: drop-shadow(0 0 8px var(--node-color)); }
        }
        @keyframes vv-fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes vv-journey-fade {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .vv-constellation {
          position: relative;
          width: 700px;
          height: 700px;
          margin: 0 auto;
          animation: vv-constellation-enter 2s ease-out forwards;
        }
        @keyframes vv-constellation-enter {
          0% { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 1024px) {
          .vv-constellation { width: 500px; height: 500px; }
        }
        @media (max-width: 640px) {
          .vv-constellation { width: 350px; height: 350px; }
        }

        .vv-center-group {
          animation: vv-pulse 5s ease-in-out infinite;
          transform-origin: ${cx}px ${cy}px;
        }

        .vv-conn-line {
          animation: vv-conn-pulse 5s ease-in-out infinite;
        }

        .vv-suite-cluster {
          cursor: pointer;
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .vv-suite-cluster:hover .vv-app-node {
          transform: scale(1.15);
        }

        .vv-app-node {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .vv-journey-card {
          animation: vv-journey-fade 0.6s ease-out forwards;
        }

        .vv-journey-dot-line {
          display: flex;
          align-items: center;
          gap: 0;
          justify-content: center;
          flex-wrap: wrap;
        }
        .vv-journey-dot-item {
          display: flex;
          align-items: center;
          gap: 0;
        }
        .vv-journey-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .vv-journey-connector {
          width: 48px;
          height: 2px;
          flex-shrink: 0;
        }
        .vv-journey-name {
          font-size: 0.75rem;
          margin-top: 6px;
          text-align: center;
          letter-spacing: 0.5px;
          font-weight: 700;
        }

        @media (max-width: 640px) {
          .vv-journey-connector { width: 20px; }
          .vv-journey-dot { width: 12px; height: 12px; }
          .vv-journey-name { font-size: 0.65rem; }
        }
      `}</style>

      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-mono tracking-[0.2em] text-white/40 uppercase mb-4">// THE ECOSYSTEM</p>
            <h2
              className="text-4xl md:text-6xl font-black tracking-wide mb-6"
              style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}
            >
              14 Platforms. One Constellation.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Every platform in the Vilmure Ventures portfolio is designed to stand alone — but
              they&apos;re built to work together. One person&apos;s journey can span the entire ecosystem.
            </p>
          </div>

          {/* Constellation SVG */}
          <div className="vv-constellation">
            <svg viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                {/* Radial glow for center */}
                <radialGradient id="vv-center-glow">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
                </radialGradient>
                {/* Background glow */}
                <radialGradient id="vv-bg-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0EA5E9" stopOpacity={0.05} />
                  <stop offset="100%" stopColor="#080810" stopOpacity={0} />
                </radialGradient>
                {/* LINGUA ring gradient */}
                <linearGradient id="vv-lingua-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity={0.3} />
                  <stop offset="33%" stopColor="#8B5CF6" stopOpacity={0.3} />
                  <stop offset="66%" stopColor="#D4A843" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity={0.3} />
                </linearGradient>
              </defs>

              {/* Background */}
              <circle cx={cx} cy={cy} r="340" fill="url(#vv-bg-glow)" />

              {/* Faint star dots */}
              {Array.from({ length: 60 }).map((_, i) => (
                <circle
                  key={`star-${i}`}
                  cx={Math.random() * 700}
                  cy={Math.random() * 700}
                  r={Math.random() * 1 + 0.3}
                  fill="white"
                  opacity={Math.random() * 0.06 + 0.02}
                />
              ))}

              {/* LINGUA orbital ring */}
              <circle
                cx={cx} cy={cy} r={orbitR + 40}
                fill="none"
                stroke="url(#vv-lingua-grad)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
                opacity={0.4}
              />
              {/* LINGUA label */}
              <text
                x={cx + orbitR + 48}
                y={cy - 8}
                fill="#6366F1"
                fontSize="9"
                fontWeight="700"
                letterSpacing="2"
                opacity={0.5}
              >
                LINGUA
              </text>
              <text
                x={cx + orbitR + 48}
                y={cy + 4}
                fill="#6366F1"
                fontSize="7"
                opacity={0.35}
                letterSpacing="1"
              >
                75+ Languages
              </text>
              {/* LINGUA traveling dot */}
              <circle r="3" fill="#6366F1" opacity={0.7}>
                <animateMotion dur="30s" repeatCount="indefinite">
                  <mpath href="#vv-lingua-path" />
                </animateMotion>
              </circle>
              <circle
                id="vv-lingua-path-def"
                cx={cx} cy={cy} r={orbitR + 40}
                fill="none" stroke="none"
              />
              {/* Path for LINGUA orbit */}
              <path
                id="vv-lingua-path"
                d={`M ${cx} ${cy - (orbitR + 40)} A ${orbitR + 40} ${orbitR + 40} 0 1 1 ${cx - 0.01} ${cy - (orbitR + 40)}`}
                fill="none"
              />

              {/* Connection lines from each Suite to center */}
              {suitePositions.map((s) => (
                <line
                  key={`center-${s.id}`}
                  x1={cx} y1={cy}
                  x2={s.x} y2={s.y}
                  stroke={s.color}
                  strokeWidth="1"
                  opacity={hoveredSuite ? (hoveredSuite === s.id ? 0.5 : 0.05) : 0.15}
                  style={{ transition: 'opacity 0.3s ease' }}
                />
              ))}

              {/* Cross-suite connection lines */}
              {connections.map((conn, i) => {
                const from = suiteMap[conn.from];
                const to = suiteMap[conn.to];
                if (!from || !to) return null;
                const isHighlighted = hoveredSuite === conn.from || hoveredSuite === conn.to;
                const pathId = `vv-conn-${i}`;
                return (
                  <g key={pathId}>
                    <line
                      x1={from.x} y1={from.y}
                      x2={to.x} y2={to.y}
                      stroke={isHighlighted ? from.color : '#ffffff'}
                      strokeWidth="1"
                      className="vv-conn-line"
                      opacity={hoveredSuite ? (isHighlighted ? 0.6 : 0.03) : undefined}
                      style={{
                        animationDelay: `${i * 0.7}s`,
                        transition: 'opacity 0.3s ease',
                      }}
                    />
                    {/* Traveling dot */}
                    <path
                      id={pathId}
                      d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                      fill="none"
                    />
                    <circle
                      r="2.5"
                      fill={from.color}
                      opacity={hoveredSuite ? (isHighlighted ? 0.9 : 0.05) : 0.6}
                      style={{ transition: 'opacity 0.3s ease' }}
                    >
                      <animateMotion
                        dur={`${8 + i * 0.5}s`}
                        begin={`${i * 1.2}s`}
                        repeatCount="indefinite"
                      >
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  </g>
                );
              })}

              {/* Center Hub */}
              <g className="vv-center-group">
                <circle cx={cx} cy={cy} r="40" fill="url(#vv-center-glow)">
                  <animate attributeName="r" values="40;48;40" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx={cx} cy={cy} r="60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                  <animate attributeName="r" values="60;70;60" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx={cx} cy={cy} r="22" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <text
                  x={cx} y={cy + 1}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="white"
                  fontSize="14"
                  fontWeight="900"
                  letterSpacing="2"
                  opacity={0.9}
                >
                  VV
                </text>
              </g>

              {/* Suite Clusters */}
              {suitePositions.map((suite) => {
                const isHovered = hoveredSuite === suite.id;
                const isDimmed = hoveredSuite !== null && !isHovered;
                return (
                  <g
                    key={suite.id}
                    className="vv-suite-cluster"
                    opacity={isDimmed ? 0.25 : 1}
                    style={{ transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                    onMouseEnter={() => setHoveredSuite(suite.id)}
                    onMouseLeave={() => setHoveredSuite(null)}
                    onClick={() => handleSuiteClick(suite.scrollTo)}
                  >
                    {/* App nodes */}
                    {suite.apps.map((app, ai) => (
                      <g key={app.name} className="vv-app-node">
                        <circle
                          cx={suite.x + app.offset.x}
                          cy={suite.y + app.offset.y}
                          r={nodeR}
                          fill={`${suite.color}30`}
                          stroke={suite.color}
                          strokeWidth="1.5"
                          style={{
                            '--node-color': suite.color,
                            filter: `drop-shadow(0 0 ${isHovered ? 8 : 4}px ${suite.color})`,
                            transition: 'filter 0.3s ease',
                          } as React.CSSProperties}
                        />
                        {/* Tiny pulse */}
                        <circle
                          cx={suite.x + app.offset.x}
                          cy={suite.y + app.offset.y}
                          r={nodeR}
                          fill="none"
                          stroke={suite.color}
                          strokeWidth="0.5"
                          opacity={0.3}
                        >
                          <animate
                            attributeName="r"
                            values={`${nodeR};${nodeR + 4};${nodeR}`}
                            dur={`${3 + ai * 0.5}s`}
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.3;0;0.3"
                            dur={`${3 + ai * 0.5}s`}
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>
                    ))}
                    {/* Suite label */}
                    <text
                      x={suite.x}
                      y={suite.y + 28}
                      textAnchor="middle"
                      fill={suite.color}
                      fontSize="9"
                      fontWeight="700"
                      letterSpacing="1.5"
                      opacity={isHovered ? 1 : 0.7}
                      style={{ transition: 'opacity 0.3s ease' }}
                    >
                      {suite.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Journey Stories */}
          <div className="mt-16 max-w-2xl mx-auto">
            <p className="text-center text-sm font-mono tracking-[0.15em] text-white/30 uppercase mb-8">
              // CROSS-PLATFORM JOURNEYS
            </p>

            <div
              className="glass-panel p-8 md:p-10 rounded-2xl min-h-[220px]"
              onMouseEnter={() => setJourneyPaused(true)}
              onMouseLeave={() => setJourneyPaused(false)}
            >
              <div key={activeJourney} className="vv-journey-card">
                <h3 className="text-2xl font-bold text-white/90 mb-6">
                  &ldquo;{journeys[activeJourney].title}&rdquo;
                </h3>

                {/* Path visualization */}
                <div className="vv-journey-dot-line mb-6">
                  {journeys[activeJourney].path.map((step, i) => (
                    <div key={step.name} className="vv-journey-dot-item">
                      {i > 0 && (
                        <div
                          className="vv-journey-connector"
                          style={{ background: `linear-gradient(90deg, ${journeys[activeJourney].path[i - 1].color}, ${step.color})` }}
                        />
                      )}
                      <div className="flex flex-col items-center">
                        <div
                          className="vv-journey-dot"
                          style={{
                            background: step.color,
                            boxShadow: `0 0 12px ${step.color}60`,
                          }}
                        />
                        <span className="vv-journey-name" style={{ color: step.color }}>
                          {step.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-white/60 text-base leading-relaxed">
                  {journeys[activeJourney].story}
                </p>
              </div>
            </div>

            {/* Journey navigation dots */}
            <div className="flex justify-center gap-3 mt-6">
              {journeys.map((j, i) => (
                <button
                  key={j.title}
                  onClick={() => setActiveJourney(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === activeJourney ? 28 : 12,
                    height: 12,
                    borderRadius: 6,
                    background: i === activeJourney ? '#06B6D4' : 'rgba(255,255,255,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  aria-label={`View journey: ${j.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
