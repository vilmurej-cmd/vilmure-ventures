'use client';

import { useEffect, useRef } from 'react';

const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA',
];

const COLORS = [
  '#06B6D4', '#3B82F6', '#8B5CF6', '#D4A843',
  '#E11D48', '#00E5FF', '#A78BFA', '#00FF94',
];

export default function KonamiEasterEgg() {
  const sequenceRef = useRef<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      sequenceRef.current.push(e.code);
      if (sequenceRef.current.length > KONAMI.length) {
        sequenceRef.current.shift();
      }
      if (sequenceRef.current.join(',') === KONAMI.join(',')) {
        triggerConfetti();
        sequenceRef.current = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerConfetti = () => {
    for (let i = 0; i < 80; i++) {
      const el = document.createElement('div');
      el.className = 'konfetti';
      el.style.left = `${Math.random() * 100}vw`;
      el.style.top = `${-10 - Math.random() * 20}px`;
      el.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      el.style.animationDelay = `${Math.random() * 0.5}s`;
      el.style.animationDuration = `${2 + Math.random() * 2}s`;
      el.style.width = `${6 + Math.random() * 8}px`;
      el.style.height = `${6 + Math.random() * 8}px`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }
  };

  return null;
}
