import React from 'react';
import { MapPin } from 'lucide-react';
import ContactSection from '../components/ContactSection';

export default function Contact() {
  return (
    <div>
      <section className="page-header" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={40} strokeWidth={1.5} style={{ opacity: 0.9 }} aria-hidden />
          <h1 style={{ margin: 0, fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Contact & Location</h1>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '1rem' }}>
            Find us at Asonaba Goil Station (Oduom), Kumasi — call or WhatsApp for orders
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
