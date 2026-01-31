import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Package, ChevronRight } from 'lucide-react';
import CategoryGrid from '../components/CategoryGrid';

const CATEGORIES = [
  { id: 'drugs', title: 'Drugs & Medicines', description: 'Antibiotics, dewormers, vitamins and essential medicines for poultry and livestock health.' },
  { id: 'vaccines', title: 'Vaccines', description: 'Viral and bacterial vaccines with proper storage and handling guidance.' },
  { id: 'vitamins', title: 'Vitamins', description: 'Multivitamins and vitamin supplements for health, growth and immunity.' },
  { id: 'antibiotics', title: 'Antibiotics', description: 'Broad-spectrum antibiotics for respiratory and bacterial infections.' },
  { id: 'tools', title: 'Farm Tools', description: 'Drinkers, feeders, crates and essential farm equipment.' },
  { id: 'supplements', title: 'Supplements', description: 'Growth boosters and egg production enhancers.' },
];

const CATALOG_DATA = {
  drugs: {
    items: [
      { name: 'Antibiotics', examples: 'Broad-spectrum antibiotics for respiratory and bacterial infections.' },
      { name: 'Dewormers', examples: 'Effective deworming products for poultry and livestock.' },
      { name: 'Vitamins', examples: 'Multivitamins and vitamin supplements for health and growth.' },
      { name: 'Anticoccidials', examples: 'Coccidiosis prevention and treatment.' },
      { name: 'Pain & Anti-inflammatory', examples: 'Support recovery and comfort.' },
    ],
    extra: null,
  },
  vaccines: {
    items: [
      { name: 'Newcastle Disease Vaccine', examples: 'Live and inactivated options.' },
      { name: 'Gumboro (IBD) Vaccine', examples: 'Infectious Bursal Disease protection.' },
      { name: 'Fowl Pox Vaccine', examples: 'Prevention of fowl pox.' },
      { name: 'Marek\'s Disease Vaccine', examples: 'Administered at hatchery or day-old.' },
      { name: 'Coryza & E. coli Vaccines', examples: 'Bacterial disease prevention.' },
    ],
    extra: {
      title: 'Storage & Handling',
      content: 'Vaccines must be stored in a refrigerator (2–8°C). Keep away from light. Use within the expiry date. Follow the manufacturer\'s reconstitution and administration instructions. We provide storage guidance with every purchase.',
    },
  },
  vitamins: {
    items: [
      { name: 'Vitamin A', examples: 'Essential for vision, immunity and growth.' },
      { name: 'B Complex', examples: 'Energy metabolism and nervous system support.' },
      { name: 'Vitamin C', examples: 'Antioxidant and immune support.' },
      { name: 'Vitamin D & E', examples: 'Bone health and antioxidant protection.' },
      { name: 'Multivitamins', examples: 'Complete formulations for poultry and livestock.' },
    ],
    extra: null,
  },
  antibiotics: {
    items: [
      { name: 'Broad-spectrum', examples: 'For respiratory and bacterial infections.' },
      { name: 'Oxytetracycline', examples: 'Wide-range antibiotic for common infections.' },
      { name: 'Amoxicillin', examples: 'For bacterial infections and treatment protocols.' },
      { name: 'Tylosin & others', examples: 'Respiratory and gut health treatments.' },
    ],
    extra: {
      title: 'Usage & Advice',
      content: 'Always follow vet advice and withdrawal periods. We can advise on correct dosage and administration for your flock.',
    },
  },
  tools: {
    items: [
      { name: 'Drinkers', examples: 'Nipple and bell drinkers in various sizes.' },
      { name: 'Feeders', examples: 'Trough and round feeders for all flock sizes.' },
      { name: 'Crates & Transport', examples: 'Chick crates and transport equipment.' },
      { name: 'Brooders & Heaters', examples: 'Equipment for chick brooding.' },
      { name: 'Nets & Housing', examples: 'Basic housing and pen equipment.' },
    ],
    extra: null,
  },
  supplements: {
    items: [
      { name: 'Growth Boosters', examples: 'Promote weight gain and feed conversion.' },
      { name: 'Egg Production Enhancers', examples: 'Support laying performance and shell quality.' },
      { name: 'Liver & Kidney Support', examples: 'Detox and organ health.' },
      { name: 'Stress & Immune Support', examples: 'During vaccination or environmental stress.' },
      { name: 'Probiotics & Electrolytes', examples: 'Gut health and hydration.' },
    ],
    extra: null,
  },
};

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category')?.toLowerCase();

  const activeCategory = useMemo(() => {
    if (!categoryParam) return null;
    return CATEGORIES.find((c) => c.id === categoryParam) || null;
  }, [categoryParam]);

  const catalogContent = activeCategory && CATALOG_DATA[activeCategory.id];

  return (
    <div>
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '2.25rem' }}>Product Catalog</h1>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '1.1rem' }}>
            Poultry drugs, vaccines, vitamins, antibiotics and farm supplies
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: '2rem var(--spacing-md)' }}>
        <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
          <Link
            to="/catalog"
            className="btn"
            style={{
              backgroundColor: !categoryParam ? 'var(--color-primary)' : 'var(--color-border)',
              color: !categoryParam ? 'white' : 'var(--color-text-main)',
              textDecoration: 'none',
            }}
          >
            All
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/catalog?category=${cat.id}`}
              className="btn"
              style={{
                backgroundColor: categoryParam === cat.id ? 'var(--color-primary)' : 'var(--color-border)',
                color: categoryParam === cat.id ? 'white' : 'var(--color-text-main)',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                fontSize: '0.9rem',
              }}
            >
              {cat.title}
            </Link>
          ))}
        </div>

        {!categoryParam ? (
          <>
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Select a category above or browse our product categories below.
            </p>
            <CategoryGrid />
          </>
        ) : catalogContent ? (
          <div className="card" style={{ padding: '2.5rem', maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ marginTop: 0, color: 'var(--color-primary-dark)' }}>{activeCategory.title}</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>{activeCategory.description}</p>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>What we stock</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              {catalogContent.items.map((item, i) => (
                <li
                  key={i}
                  style={{
                    padding: '1rem',
                    marginBottom: '0.5rem',
                    backgroundColor: 'var(--color-background)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '4px solid var(--color-primary)',
                  }}
                >
                  <strong style={{ color: 'var(--color-primary-dark)' }}>{item.name}</strong>
                  <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                    {item.examples}
                  </p>
                </li>
              ))}
            </ul>

            {catalogContent.extra && (
              <div
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <h4 style={{ margin: '0 0 0.5rem 0' }}>{catalogContent.extra.title}</h4>
                <p style={{ margin: 0, opacity: 0.95 }}>{catalogContent.extra.content}</p>
              </div>
            )}

            <p style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link to="/contact" className="btn btn-primary" style={{ textDecoration: 'none', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Inquire or Order <ChevronRight size={18} strokeWidth={2} aria-hidden />
              </Link>
            </p>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: 'var(--color-text-muted)' }}>Category not found.</p>
            <Link to="/catalog" className="btn btn-primary" style={{ textDecoration: 'none', color: 'white' }}>
              View all categories
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
