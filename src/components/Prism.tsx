'use client';

const RAYS = [
  { color: '#06B6D4', delay: '0s' },
  { color: '#3B82F6', delay: '0.15s' },
  { color: '#8B5CF6', delay: '0.3s' },
  { color: '#D4A843', delay: '0.45s' },
  { color: '#E11D48', delay: '0.6s' },
  { color: '#00E5FF', delay: '0.75s' },
  { color: '#A78BFA', delay: '0.9s' },
  { color: '#00FF94', delay: '1.05s' },
];

export default function Prism() {
  return (
    <div className="prism-container mx-auto my-12">
      {/* Glow behind the prism */}
      <div className="prism-glow" />

      {/* Input white light beam */}
      <div className="prism-input-light" />

      {/* The glass prism triangle */}
      <div className="prism-shape" />

      {/* Output spectrum rays */}
      <div className="prism-output-spectrum">
        {RAYS.map((ray, i) => (
          <div
            key={i}
            className="prism-ray"
            style={{
              backgroundColor: ray.color,
              animationDelay: ray.delay,
              width: `${80 + i * 12}px`,
              boxShadow: `0 0 8px ${ray.color}88, 0 0 20px ${ray.color}44`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
