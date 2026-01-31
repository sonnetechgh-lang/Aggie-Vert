import React from 'react';
import { MapPin, Phone, MessageCircle, Send } from 'lucide-react';

const iconBoxBase = {
  width: 48,
  height: 48,
  borderRadius: 'var(--radius-lg)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

export default function ContactSection() {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Contact Details */}
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '0.75rem', color: 'var(--color-primary-dark)' }}>
              Get In Touch
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Have questions or need expert advice? Contact us or visit our shop at Asonaba Goil Station.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ ...iconBoxBase, backgroundColor: 'var(--color-primary)', color: 'white' }}>
                  <MapPin size={22} strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>Location</h4>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                    Asonaba Goil Station (Oduom), Kumasi, Ghana
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ ...iconBoxBase, backgroundColor: 'var(--color-secondary)', color: 'white' }}>
                  <Phone size={22} strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>Phone</h4>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>0243111149</p>
                  <a href="tel:0243111149" className="btn btn-primary" style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.875rem', textDecoration: 'none', color: 'white' }}>
                    Click to Call
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ ...iconBoxBase, backgroundColor: '#25D366', color: 'white' }}>
                  <MessageCircle size={22} strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>WhatsApp</h4>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Direct chat for quick ordering</p>
                  <a
                    href="https://wa.me/233243111149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ marginTop: '0.5rem', backgroundColor: '#25D366', color: 'white', padding: '0.5rem 1rem', fontSize: '0.875rem', textDecoration: 'none' }}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Map */}
          <div className="card" style={{ padding: '1.75rem' }}>
            <h3 style={{ marginBottom: '1.25rem', fontSize: '1.25rem' }}>Send an Inquiry</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                <input type="text" placeholder="Your Name" className="input" required aria-label="Your name" />
                <input type="email" placeholder="Email Address" className="input" required aria-label="Email" />
              </div>
              <input type="text" placeholder="Subject" className="input" required aria-label="Subject" />
              <textarea placeholder="Your Message" rows={4} className="input" required aria-label="Message" style={{ resize: 'vertical', minHeight: 100 }} />
              <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 1.25rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Send size={18} strokeWidth={2} aria-hidden />
                Submit Inquiry
              </button>
            </form>

            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ marginBottom: '0.75rem', fontSize: '1rem' }}>Find Us on the Map</h4>
              <div style={{ height: 220, borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'var(--color-border)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3323049103847!2d-1.5583!3d6.6853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDEnMDcuMSJOIDHCsDMzJzI5LjkiVw!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Aggie Veterinary Consult Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
