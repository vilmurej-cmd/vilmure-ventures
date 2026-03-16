'use client';

const RAYS = [
  { color: '#06B6D4', delay: '0s' },
  { color: '#3B82F6', delay: '0.1s' },
  { color: '#8B5CF6', delay: '0.2s' },
  { color: '#D4A843', delay: '0.3s' },
  { color: '#E11D48', delay: '0.4s' },
  { color: '#00E5FF', delay: '0.5s' },
  { color: '#A78BFA', delay: '0.6s' },
  { color: '#00FF94', delay: '0.7s' },
];

export default function Prism() {
  return (
    <div className="prism-container mx-auto my-12">
      <div className="prism-input-light" />
      <div className="prism-shape" />
      <div className="prism-output-spectrum">
        {RAYS.map((ray, i) => (
          <div
            key={i}
            className="prism-ray"
            style={{
              backgroundColor: ray.color,
              animationDelay: ray.delay,
              width: `${60 + i * 8}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
