import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, BookOpen, Pill } from 'lucide-react';

const services = [
  {
    title: 'Veterinary Consultation',
    icon: Stethoscope,
    description: 'Expert advice on poultry health, disease prevention, and farm management. Build a sustainable and profitable farm with our professional guidance.',
    cta: 'Book a Visit',
    to: '/contact',
  },
  {
    title: 'Farming Resources',
    icon: BookOpen,
    description: 'Access our guides on poultry health, including vaccination schedules for broilers and layers to ensure peak performance.',
    cta: 'View Guides',
    to: '/resources',
  },
  {
    title: 'Antibiotics',
    icon: Pill,
    description: 'Quality antibiotics for respiratory and bacterial infections. Get the right product and dosage advice for your flock.',
    cta: 'Inquire Now',
    to: '/contact',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div className="text-center mb-4" style={{ maxWidth: '720px', margin: '0 auto 3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', color: 'var(--color-primary-dark)', marginBottom: '0.75rem' }}>
            Services & Resources
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            We provide the expertise and support needed to help your poultry business thrive.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card"
                style={{
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.25rem',
                }}
              >
                <div
                  className="icon-box"
                  style={{
                    width: 56,
                    height: 56,
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                  }}
                >
                  <Icon size={28} strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{service.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>
                    {service.description}
                  </p>
                </div>
                <Link
                  to={service.to}
                  className="btn btn-primary"
                  style={{ width: '100%', textDecoration: 'none', color: 'white', marginTop: 'auto' }}
                >
                  {service.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
