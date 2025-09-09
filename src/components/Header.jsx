import React, { useState, useEffect } from 'react';

export function BrandIcon({ size = 28, stroke = 3, color = '#2A6AF4' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
      <path d="M24 12 L12 32 L24 52" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 12 L52 32 L40 52" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky">
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <BrandIcon />
          <span style={{ fontWeight: 800, fontSize: 18 }}>moliseke</span>
        </div>
        {isMobile ? (
          <div style={{ position: 'relative' }}>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" stroke="#2A6AF4" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            {menuOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  background: '#fff',
                  padding: '8px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                <nav aria-label="Primary" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a href="#services">Services</a>
                  <a href="#why">Why us</a>
                  <a href="#approach">Approach</a>
                  <a href="#regions">Regions</a>
                  <a href="#contact">Contact</a>
                </nav>
                <a href="mailto:info@moliseke.com" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Contact
                </a>
              </div>
            )}
          </div>
        ) : (
          <>
            <nav aria-label="Primary">
              <a href="#services">Services</a>
              <a href="#why">Why us</a>
              <a href="#approach">Approach</a>
              <a href="#regions">Regions</a>
              <a href="#contact">Contact</a>
            </nav>
            <a href="mailto:info@moliseke.com" className="btn btn-primary">
              Contact
            </a>
          </>
        )}
      </div>
    </header>
  );
}
