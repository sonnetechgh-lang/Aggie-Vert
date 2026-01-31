import React from 'react';
import { Star, Users, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

const testimonials = [
  { name: 'John Mensah', role: 'Broiler Farmer', text: 'The best place to get vaccines in Kumasi. Their storage handling is exceptional.' },
  { name: 'Ama Serwaa', role: 'Egg Producer', text: 'Their supplements helped increase my egg production significantly. Very knowledgeable staff.' },
  { name: 'Kofi Adu', role: 'Livestock Keeper', text: 'Affordable and genuine drugs. I highly recommend Aggie Vet to every farmer.' },
];

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="section" style={{ backgroundColor: '#F0FDF4' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>
                About Aggie Veterinary Consult
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text-main)', marginBottom: '1rem' }}>
                Aggie Veterinary Consult is a specialized veterinary pharmacy and farm supply store focused on poultry health and management.
                Located at Asonaba Goil Station in Oduom, Kumasi, we provide a comprehensive range of animal health products.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
                Our mission is to support local farmers with quality, affordable veterinary products and expert advice for the health and productivity of their livestock.
              </p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="icon-box" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <Users size={22} strokeWidth={2} aria-hidden />
                  </div>
                  <div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', display: 'block' }}>500+</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Happy Farmers</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="icon-box" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <ShieldCheck size={22} strokeWidth={2} aria-hidden />
                  </div>
                  <div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', display: 'block' }}>100%</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Quality Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/3/2019/02/13125320/meds-on-shelf-400x240.jpg"
                alt="Aggie Vet Shop"
                style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <CategoryGrid />

      <ServicesSection />

      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem', color: 'var(--color-primary-dark)', textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            What Farmers Say
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="card" style={{ textAlign: 'left', padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: '1rem', color: 'var(--color-secondary)' }} aria-hidden>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '1.25rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--color-primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1rem',
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-primary-dark)' }}>{t.name}</h5>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
