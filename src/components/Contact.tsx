import React from 'react';
import { Smartphone, MapPin } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>Bana Ulaşın</div>
        <h2 className="section-title">Birlikte bir şeyler<br />inşa edelim.</h2>

        <a href="mailto:berkay133181@gmail.com" className="contact-email">
          berkay133181@gmail.com
        </a>

        <div className="contact-links">
          <a href="https://linkedin.com/in/berkay-binici-7586411b2" target="_blank" rel="noopener noreferrer" className="contact-link">
            <LinkedinIcon size={18} style={{ display: 'inline', marginRight: '6px' }} /> LinkedIn
          </a>
          <a href="https://github.com/berkaybnc" target="_blank" rel="noopener noreferrer" className="contact-link">
            <GithubIcon size={18} style={{ display: 'inline', marginRight: '6px' }} /> GitHub
          </a>
          <a href="tel:+905525491705" className="contact-link">
            <Smartphone size={18} style={{ display: 'inline', marginRight: '6px' }} /> +90 552 549 17 05
          </a>
        </div>

        <p className="contact-location" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <MapPin size={18} /> İstanbul, Türkiye — Uzaktan çalışmaya açık
        </p>
      </div>
    </section>
  );
}
