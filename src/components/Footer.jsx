import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const footerIconStyle = { flexShrink: 0, color: 'var(--color-primary)', marginTop: 2 };

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-text-main)', color: 'var(--color-background)', padding: '3rem 0 1.5rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
        {/* Brand */}
        <div>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
            Aggie Veterinary Consult
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Your trusted partner in poultry health and management. Quality drugs, vaccines, and expert advice.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link to="/catalog" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', textDecoration: 'none' }}>Our Products</Link></li>
            <li><Link to="/" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', textDecoration: 'none' }}>Home & Services</Link></li>
            <li><Link to="/resources" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', textDecoration: 'none' }}>Farming Tips</Link></li>
            <li><Link to="/contact" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', textDecoration: 'none' }}>Contact & Location</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>Contact Us</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <MapPin size={18} style={footerIconStyle} aria-hidden />
              <span>Asonaba Goil Station, Oduom, Kumasi</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <Phone size={18} style={footerIconStyle} aria-hidden />
              <a href="tel:0243111149" style={{ color: 'inherit', textDecoration: 'none' }}>0243111149</a>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <Mail size={18} style={footerIconStyle} aria-hidden />
              <a href="mailto:aggievet@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>aggievet@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '2.5rem', paddingTop: '1.25rem', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
        &copy; {new Date().getFullYear()} Aggie Veterinary Consult. All rights reserved.
      </div>
    </footer>
  );
}
