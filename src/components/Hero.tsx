'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Smartphone } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="hero" style={{ padding: 0, position: 'relative' }}>
      <div className="bg-circle bg-circle-1" style={{ position: 'absolute' }}></div>

      <div className="hero-left">
        <div className="hero-badge">Müsait &amp; İşbirliğine Açık</div>
        <h1 className="hero-name">
          Berkay<br />
          <span>Binici</span>
        </h1>
        <p className="hero-title">
          Full Stack Engineer · AI &amp; Performance odaklı. Modern web ekosisteminde ölçeklenebilir, güvenli ve verimli ürünler inşa ediyorum.
        </p>

        <div className="hero-contacts">
          <a href="mailto:berkay133181@gmail.com" className="hero-contact-item">
            <div className="contact-icon"><Mail size={16} /></div>
            berkay133181@gmail.com
          </a>
          <a href="tel:+905525491705" className="hero-contact-item">
            <div className="contact-icon"><Smartphone size={16} /></div>
            +90 552 549 17 05
          </a>
          <a href="https://linkedin.com/in/berkay-binici-7586411b2" target="_blank" rel="noopener noreferrer" className="hero-contact-item">
            <div className="contact-icon"><LinkedinIcon size={16} /></div>
            linkedin.com/in/berkay-binici
          </a>
          <a href="https://github.com/berkaybnc" target="_blank" rel="noopener noreferrer" className="hero-contact-item">
            <div className="contact-icon"><GithubIcon size={16} /></div>
            github.com/berkaybnc
          </a>
        </div>

        <div className="hero-ctas">
          <a href="#contact" className="btn-primary">İletişime Geç →</a>
          <a href="#experience" className="btn-secondary">Deneyimlerim</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="bg-circle-1" style={{ position: 'absolute', opacity: 0.3, borderRadius: '50%', width: '400px', height: '400px', background: '#d8f3dc', right: '-80px', bottom: 0 }}></div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-bg"></div>
          <Image
            src="/berkay binici cv görsel.jpeg"
            alt="Berkay Binici"
            className="hero-photo"
            width={380}
            height={506}
            priority
            style={{ display: imageError ? 'none' : 'block', height: 'auto', position: 'relative', zIndex: 2 }}
            onError={() => setImageError(true)}
          />
          <div className="photo-fallback" style={{ display: imageError ? 'flex' : 'none', width: '100%', aspectRatio: '3/4', borderRadius: '24px 24px 0 0', background: 'var(--accent-light)', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '5rem', color: 'var(--accent)', opacity: 0.4 }}>BB</div>
          </div>

          <div className="hero-stat-card left">
            <div className="stat-number">5+</div>
            <div className="stat-label">Yıl Deneyim</div>
          </div>

          <div className="hero-stat-card bottom">
            <div className="stat-number">10+</div>
            <div className="stat-label">Kurumsal Proje</div>
          </div>
        </div>
      </div>
    </section>
  );
}
