import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, CalendarCheck } from 'lucide-react';
import heroImage from '../../Images/hero.png';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-primary-dark)',
        color: 'white',
        padding: 'clamp(4rem, 10vw, 6rem) 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
        }}
        aria-hidden
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '1rem',
            color: 'white',
            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.2,
          }}
        >
          Poultry Drugs, Vaccines, Vitamins, Antibiotics & More
        </h1>
        <p
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            marginBottom: '2rem',
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'rgba(255,255,255,0.95)',
            fontWeight: 500,
            lineHeight: 1.5,
          }}
        >
          Your trusted leader in the Ghanaian poultry and veterinary sector. Quality products and expert advice for productivity.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/catalog"
            className="btn btn-secondary"
            style={{ fontSize: '1rem', padding: '0.75rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'white' }}
          >
            <ShoppingBag size={20} strokeWidth={2} aria-hidden />
            Shop Products
          </Link>
          <Link
            to="/contact"
            className="btn"
            style={{
              fontSize: '1rem',
              padding: '0.75rem 1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <CalendarCheck size={20} strokeWidth={2} aria-hidden />
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
