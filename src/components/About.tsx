import React from 'react';
import { Zap, Bot, ShieldCheck, AppWindow } from 'lucide-react';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-label">Hakkımda</div>
        <div className="about-grid">
          <div>
            <h2 className="section-title">Teknik derinlik.<br />Gerçek çözümler.</h2>
            <div className="about-text">
              <p>
                Akademik eğitimimi <span className="highlight">5 yıllık kesintisiz saha tecrübesiyle</span> harmanlayan, teknik derinliği yüksek bir Full Stack Mühendisim. Modern web ekosisteminde Next.js ve React 19 ile ölçeklenebilir yapılar kuruyor, Docker ve Redis ile performans optimizasyonlarını bizzat yönetiyorum.
              </p>
              <p>
                <span className="highlight">Google AI Professional Certificate</span> ve Tesseract OCR entegrasyonu tecrübemle yapay zekayı iş problemlerini çözen mimari bir katman olarak uyguluyorum. Siber güvenlik ve bulut entegrasyonundaki farkındalığımı, k6 performans testleri ve Zod şema doğrulamalarıyla destekleyerek uçtan uca güvenilir ürünler geliştiriyorum.
              </p>
              <p>
                İstanbul merkezli çalışıyor, hem yerel hem uzak projeler için müsaitim.
              </p>
            </div>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-icon"><Zap size={20} /></div>
              <h4>Performans</h4>
              <p>k6 testleri, Redis caching, Docker multi-stage optimizasyon.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon"><Bot size={20} /></div>
              <h4>Yapay Zeka</h4>
              <p>OCR entegrasyonu, AI mimari katmanı, Google AI sertifikası.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon"><ShieldCheck size={20} /></div>
              <h4>Güvenlik</h4>
              <p>Cloudflare, JWT auth, DDoS koruması, Cisco siber güvenlik.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon"><AppWindow size={20} /></div>
              <h4>Full Stack</h4>
              <p>React Native&apos;den backend&apos;e, mobil&apos;den cloud&apos;a tam kapsam.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
