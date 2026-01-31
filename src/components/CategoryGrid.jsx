import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const categories = [
  { id: 1, title: 'Drugs & Medicines', link: '/catalog?category=drugs', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEq_J0-5-fH9D2kAeNWBqy7ZpLHAQAtPsFFg&s' },
  { id: 2, title: 'Vaccines', link: '/catalog?category=vaccines', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs78kFQqhlE6CqL2JVTsUfcyq6RH9IrxQhMA&s' },
  { id: 3, title: 'Vitamins', link: '/catalog?category=vitamins', image: 'https://www.durvet.com/wp-content/uploads/2023/07/vitamins-electrolytes-100gm-5gm-group-scaled-1.jpg' },
  { id: 4, title: 'Antibiotics', link: '/catalog?category=antibiotics', image: 'https://image.made-in-china.com/2f0j00mjdkJyiFtDoI/50-Oxytetracycline-Hydrochloride-Powder-Poultry-Anti-Diarrhea-Medicine-Antibiotics.webp' },
  { id: 5, title: 'Farm Tools', link: '/catalog?category=tools', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4TgUyGZTzP9hdMOvAkVTDYrVZR5ALXRBgg&s' },
  { id: 6, title: 'Supplements', link: '/catalog?category=supplements', image: 'https://m.media-amazon.com/images/I/71IF9A-qSTL._AC_UF1000,1000_QL80_.jpg' },
];

export default function CategoryGrid() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>
            Our Products
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            Everything you need for successful poultry farming
          </p>
        </div>

        <div
          className="category-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="card category-card"
              style={{
                padding: 0,
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className="category-card__image" style={{ height: 200, overflow: 'hidden' }}>
                <img
                  src={cat.image}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                />
              </div>
              <div style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-primary-dark)', flex: 1 }}>
                  {cat.title}
                </h3>
                <span style={{ color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center' }}>
                  View <ChevronRight size={18} strokeWidth={2} aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .category-card:hover .category-card__image img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
