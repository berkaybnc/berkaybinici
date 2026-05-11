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
            <div className="timeline-desc">
              <p>SaaS platformunun modernizasyonu ve ölçeklenebilirliği üzerine odaklandım:</p>
              <ul>
                <li>Docker multi-stage build ve standalone mimarisi kurgulayarak build sürelerini %30 optimize ettim.</li>
                <li>Tesseract OCR entegrasyonu ile fatura görsellerinden otomatik stok verisi ayıklayan AI katmanını sıfırdan inşa ettim.</li>
                <li>Cloudflare Turnstile ve Google Auth ile bot korumalı, kurumsal düzeyde bir kimlik doğrulama sistemi uyguladım.</li>
                <li>Redis entegrasyonu ile sık erişilen verilerde gecikme sürelerini minimize ettim.</li>
              </ul>
            </div>
            <div className="timeline-pills">
              <span className="timeline-pill">Docker</span>
              <span className="timeline-pill">Tesseract OCR</span>
              <span className="timeline-pill">Cloudflare</span>
              <span className="timeline-pill">Next.js</span>
              <span className="timeline-pill">Redis</span>
              <span className="timeline-pill">Zod</span>
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
            <div className="timeline-desc">
              <p>10&apos;dan fazla kurumsal müşteriye dijital dönüşüm süreçlerinde teknik liderlik sağladım:</p>
              <ul>
                <li>.NET ve Redux kullanarak karmaşık state yönetimi gerektiren yüksek performanslı web uygulamaları geliştirdim.</li>
                <li>Müşterilerin manuel iş süreçlerini otomatize eden özel API entegrasyonları ve veritabanı çözümleri tasarladım.</li>
                <li>Modern UI/UX prensiplerini uygulayarak kullanıcı etkileşim oranlarını artıran arayüzler inşa ettim.</li>
              </ul>
            </div>
            <div className="timeline-pills">
              <span className="timeline-pill">.NET</span>
              <span className="timeline-pill">Redux</span>
              <span className="timeline-pill">React</span>
              <span className="timeline-pill">TypeScript</span>
              <span className="timeline-pill">Clean Architecture</span>
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
            <div className="timeline-desc">
              <p>Yazılım topluluğunun teknik ve sosyal gelişimini yönettim:</p>
              <ul>
                <li>Teknik ekipler arası koordinasyonu sağlayarak 5+ büyük ölçekli etkinliği başarıyla tamamladım.</li>
                <li>Genç yazılımcılara kariyer ve teknik gelişim konularında mentorluk verdim.</li>
              </ul>
            </div>
            <div className="timeline-pills">
              <span className="timeline-pill">Leadership</span>
              <span className="timeline-pill">Mentoring</span>
              <span className="timeline-pill">Strategy</span>
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
            <div className="timeline-desc">
              <p>Sağlık teknolojileri üzerine veri yoğunluklu sistemler geliştirdim:</p>
              <ul>
                <li>Python ve MySQL kullanarak karmaşık ilişkisel veri modelleri ve Prisma şemaları tasarladım.</li>
                <li>Veritabanı sorgu optimizasyonları yaparak raporlama süreçlerini hızlandırdım.</li>
              </ul>
            </div>
            <div className="timeline-pills">
              <span className="timeline-pill">Python</span>
              <span className="timeline-pill">MySQL</span>
              <span className="timeline-pill">Prisma</span>
              <span className="timeline-pill">Data Modeling</span>
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
            <div className="timeline-desc">
              <p>Web ve Mobil projelerde modernizasyon süreçlerini yönettim:</p>
              <ul>
                <li>React Native ile çapraz platform mobil uygulama geliştirme süreçlerinde aktif rol aldım.</li>
                <li>Legacy WordPress altyapılarını modern Next.js mimarisine taşıyarak sayfa yüklenme hızlarını %50 artırdım.</li>
              </ul>
            </div>
            <div className="timeline-pills">
              <span className="timeline-pill">React Native</span>
              <span className="timeline-pill">Migration</span>
              <span className="timeline-pill">Performance</span>
              <span className="timeline-pill">Next.js</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
