import React from 'react';

export default function Education() {
  return (
    <section className="edu-section" id="education">
      <div className="container">
        <div className="section-label">Akademik Geçmiş</div>
        <h2 className="section-title">Eğitim</h2>

        <div className="edu-grid">

          <div className="edu-card">
            <div className="edu-degree">Lisans — Yazılım Geliştirme</div>
            <div className="edu-school">İstanbul Aydın Üniversitesi</div>
            <div className="edu-years">2020 — 2026</div>
          </div>

          <div className="edu-card">
            <div className="edu-degree">Önlisans — Web Tasarım ve Kodlama</div>
            <div className="edu-school">Anadolu Üniversitesi</div>
            <div className="edu-years">2022 — 2025</div>
          </div>

        </div>
      </div>
    </section>
  );
}
