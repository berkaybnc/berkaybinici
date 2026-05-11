import React from 'react';

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-label">Kariyer</div>
        <h2 className="section-title">Profesyonel Deneyim</h2>

        <div className="timeline">

          <div className="timeline-item active">
            <div className="timeline-dot"></div>
            <div className="timeline-meta">
              <span className="timeline-date">Ocak 2025 — Günümüz</span>
              <span className="timeline-badge">Yarı Zamanlı</span>
              <span className="timeline-badge">Aktif</span>
            </div>
            <div className="timeline-role">Full Stack Engineer</div>
            <div className="timeline-company">dakikQ — SaaS Platform</div>
            <p className="timeline-desc">
              SaaS platformu için Docker multi-stage build ve standalone mimarisi kurgulayarak build sürelerini ve imaj boyutlarını optimize ettim. Tesseract OCR entegrasyonu ile fatura görsellerinden otomatik stok verisi çıkaran AI katmanını inşa ettim. Cloudflare Turnstile ve Google Auth ile bot korumalı, güvenli bir kimlik doğrulama sistemi uyguladım.
            </p>
            <div className="timeline-pills">
              <span className="timeline-pill">Docker</span>
              <span className="timeline-pill">Tesseract OCR</span>
              <span className="timeline-pill">Cloudflare</span>
              <span className="timeline-pill">Google Auth</span>
              <span className="timeline-pill">Next.js</span>
              <span className="timeline-pill">Redis</span>
            </div>
          </div>

          <div className="timeline-item active">
            <div className="timeline-dot"></div>
            <div className="timeline-meta">
              <span className="timeline-date">Şubat 2024 — Günümüz</span>
              <span className="timeline-badge">Freelance</span>
              <span className="timeline-badge">Aktif</span>
            </div>
            <div className="timeline-role">Independent Developer</div>
            <div className="timeline-company">Freelance — Bağımsız</div>
            <p className="timeline-desc">
              10+ kurumsal müşteriye .NET, Redux ve modern web teknolojileriyle uçtan uca dijital dönüşüm çözümleri sundum. Farklı sektörlerdeki müşteriler için özelleştirilmiş web uygulamaları, API entegrasyonları ve performans optimizasyonları gerçekleştirdim.
            </p>
            <div className="timeline-pills">
              <span className="timeline-pill">.NET</span>
              <span className="timeline-pill">Redux</span>
              <span className="timeline-pill">React</span>
              <span className="timeline-pill">TypeScript</span>
              <span className="timeline-pill">10+ Müşteri</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-meta">
              <span className="timeline-date">Eylül 2025 — Mart 2026</span>
              <span className="timeline-badge">Gönüllü</span>
            </div>
            <div className="timeline-role">Organizasyon Danışmanı</div>
            <div className="timeline-company">IAU CodeVerse Club</div>
            <p className="timeline-desc">
              Teknoloji topluluğu için sosyal medya ve etkinlik stratejilerini yönettim, teknik ekipler arası koordinasyonu sağladım. Yazılım öğrencilerine mentorluk yaparak kariyer gelişimlerine katkı sağladım.
            </p>
            <div className="timeline-pills">
              <span className="timeline-pill">Liderlik</span>
              <span className="timeline-pill">Etkinlik Yönetimi</span>
              <span className="timeline-pill">Mentorluk</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-meta">
              <span className="timeline-date">Ocak 2025 — Haziran 2025</span>
              <span className="timeline-badge">Staj</span>
            </div>
            <div className="timeline-role">Software Developer Intern</div>
            <div className="timeline-company">Okatan Sağlık Arge A.Ş.</div>
            <p className="timeline-desc">
              Python ve MySQL kullanarak büyük yerleşim yerleri için karmaşık veri modellerine sahip yönetim sistemleri geliştirdim. Prisma ilişkisel yapısını kullanarak ölçeklenebilir veritabanı şemaları tasarladım.
            </p>
            <div className="timeline-pills">
              <span className="timeline-pill">Python</span>
              <span className="timeline-pill">MySQL</span>
              <span className="timeline-pill">Prisma</span>
              <span className="timeline-pill">Veri Modelleme</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-meta">
              <span className="timeline-date">Eylül 2024 — Mart 2025</span>
              <span className="timeline-badge">Staj</span>
            </div>
            <div className="timeline-role">Software Developer Intern</div>
            <div className="timeline-company">INVENTRA</div>
            <p className="timeline-desc">
              React Native ile mobil uygulama geliştirme süreçlerini yönettim. Legacy WordPress yapılarını modern, performanslı HTML/CSS/JS koduna dönüştürerek web uygulamalarının hız ve kullanıcı deneyimini önemli ölçüde iyileştirdim.
            </p>
            <div className="timeline-pills">
              <span className="timeline-pill">React Native</span>
              <span className="timeline-pill">WordPress Migration</span>
              <span className="timeline-pill">HTML/CSS/JS</span>
              <span className="timeline-pill">Mobil</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
