import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

const RESOURCES = [
  {
    id: 'vaccination-broilers',
    title: 'Vaccination Schedule for Broilers',
    category: 'Poultry Health',
    summary: 'A practical guide to vaccinating broiler chickens from day-old to market age.',
    content: (
      <>
        <p>Broilers need a few key vaccines to stay healthy. Below is a typical schedule. Always follow your vet’s advice and product labels.</p>
        <ul>
          <li><strong>Day 1 (at hatchery):</strong> Marek’s disease vaccine (usually done at hatchery).</li>
          <li><strong>Day 7–10:</strong> Newcastle Disease (ND) + Infectious Bursal Disease (Gumboro) – first dose.</li>
          <li><strong>Day 14–18:</strong> Second dose of ND and Gumboro if using a two-dose programme.</li>
          <li><strong>Day 21–28:</strong> Fowl Pox (if recommended in your area).</li>
        </ul>
        <p>Use clean equipment, correct dose and storage (2–8°C). Avoid stress around vaccination days. We can advise on the right vaccines and timing for your flock.</p>
      </>
    ),
  },
  {
    id: 'vaccination-layers',
    title: 'Vaccination Schedule for Layers',
    category: 'Poultry Health',
    summary: 'Essential vaccines for layer pullets and laying hens.',
    content: (
      <>
        <p>Layers benefit from a full vaccination programme in the rearing phase so they are protected before lay.</p>
        <ul>
          <li><strong>Day 1:</strong> Marek’s (at hatchery).</li>
          <li><strong>Weeks 1–2:</strong> Newcastle + Gumboro (IBD).</li>
          <li><strong>Weeks 3–4:</strong> Second dose ND + IBD; consider Fowl Pox.</li>
          <li><strong>Weeks 6–8:</strong> Coryza, E. coli or other bacterial vaccines if recommended.</li>
          <li><strong>Before lay:</strong> Booster ND and any other vaccines as per your vet’s plan.</li>
        </ul>
        <p>Keep vaccination records and stick to the schedule. We stock the vaccines and can guide you on storage and administration.</p>
      </>
    ),
  },
  {
    id: 'brooding-tips',
    title: 'Brooding Tips for Day Old Chicks',
    category: 'Farm Management',
    summary: 'How to give day-old chicks a strong start with heat, feed and water.',
    content: (
      <>
        <p>Good brooding reduces mortality and sets chicks up for growth.</p>
        <ul>
          <li><strong>Temperature:</strong> 32–35°C under the brooder for the first week, then reduce by about 2–3°C per week. Watch chick behaviour – if they huddle, add heat; if they move away, reduce it.</li>
          <li><strong>Feed & water:</strong> Provide starter feed and clean water from day one. Use chick drinkers and feeders so they can access easily.</li>
          <li><strong>Space:</strong> Avoid overcrowding. Allow enough brooder space and later floor space as they grow.</li>
          <li><strong>Hygiene:</strong> Clean and disinfect the house before placement. Keep litter dry and replace when necessary.</li>
        </ul>
        <p>We supply day-old chicks, brooders, feeders, drinkers and starter feed. Ask us for advice tailored to your setup.</p>
      </>
    ),
  },
  {
    id: 'consultation',
    title: 'Vet Consultation & Farm Visits',
    category: 'Services',
    summary: 'How to book a vet visit or consultation for your farm.',
    content: (
      <>
        <p>We offer veterinary advice and can arrange farm visits for vaccination, disease investigation and general health checks.</p>
        <ul>
          <li><strong>In-shop:</strong> Visit us at Asonaba Goil Station (Oduom), Kumasi, for product advice and basic consultation.</li>
          <li><strong>Phone/WhatsApp:</strong> Call <a href="tel:0243111149" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>0243111149</a> or message us on <a href="https://wa.me/233243111149" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>WhatsApp</a> to describe your issue or book a visit.</li>
          <li><strong>Farm visits:</strong> For vaccination programmes, disease outbreaks or herd health plans, we can schedule a visit. Contact us to discuss timing and cost.</li>
        </ul>
        <p>For urgent illness or high mortality, contact us as soon as possible so we can advise or arrange a visit.</p>
      </>
    ),
  },
];

export default function Resources() {
  const [openId, setOpenId] = useState(null);

  return (
    <div>
      <section className="page-header" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <BookOpen size={40} strokeWidth={1.5} style={{ opacity: 0.9 }} aria-hidden />
          <h1 style={{ margin: 0, fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Farming Tips & Resources</h1>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '1rem' }}>
            Vaccination schedules, brooding tips and consultation info
          </p>
        </div>
      </section>

      <div className="container section" style={{ maxWidth: 800, margin: '0 auto' }}>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', textAlign: 'center', lineHeight: 1.6 }}>
          Practical guides for poultry health and farm operations. For specific advice, visit our shop or <Link to="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>contact us</Link>.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {RESOURCES.map((resource) => (
            <div key={resource.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <button
                type="button"
                onClick={() => setOpenId(openId === resource.id ? null : resource.id)}
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  textAlign: 'left',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                }}
                aria-expanded={openId === resource.id}
              >
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{resource.category}</span>
                  <h3 style={{ margin: '0.25rem 0 0 0', fontSize: '1.1rem', color: 'var(--color-primary-dark)' }}>{resource.title}</h3>
                  <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{resource.summary}</p>
                </div>
                <span style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }} aria-hidden>
                  {openId === resource.id ? <ChevronUp size={24} strokeWidth={2} /> : <ChevronDown size={24} strokeWidth={2} />}
                </span>
              </button>
              {openId === resource.id && (
                <div style={{ padding: '0 1.5rem 1.5rem', borderTop: '1px solid var(--color-border)' }}>
                  <div style={{ paddingTop: '1rem', color: 'var(--color-text-main)', lineHeight: 1.7 }}>
                    {resource.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
