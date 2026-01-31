import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../Logo/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/catalog', label: 'Catalog' },
    { to: '/resources', label: 'Resources' },
  ];

  return (
    <nav className="navbar" style={{ backgroundColor: 'var(--color-surface)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '72px' }}>
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-primary-dark)', textDecoration: 'none' }} aria-label="Aggie Vet Home">
          <img src={logo} alt="" style={{ height: '48px', width: 'auto' }} />
          <span>Aggie Veterinary Consult</span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className="nav-link" style={{ fontSize: '0.95rem' }}>
              {label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ textDecoration: 'none', color: 'white', padding: '0.5rem 1.25rem', fontSize: '0.95rem' }}>
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            borderRadius: 'var(--radius-md)',
            color: 'var(--color-text-main)',
          }}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-surface)',
            padding: '1rem',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="nav-link"
              style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '1rem' }}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary"
            style={{ textAlign: 'center', marginTop: '0.5rem', padding: '0.75rem' }}
          >
            Contact Us
          </Link>
        </div>
      )}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
