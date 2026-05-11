import React from 'react';
import { GraduationCap, Code, ShieldAlert, GitBranch, Lock, ScrollText, Plane } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-label">Yetkinlikler</div>
        <h2 className="section-title">Sertifikalar</h2>

        <div className="certs-grid">

          <div className="cert-card">
            <div className="cert-badge" style={{ background: '#e8f5e9' }}><GraduationCap size={24} color="#2e7d32" /></div>
            <div>
              <h4>Google AI Professional Certificate</h4>
              <p>Brainstorming, Research, Content Creation — Nisan 2026</p>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-badge" style={{ background: '#e3f2fd' }}><Code size={24} color="#1565c0" /></div>
            <div>
              <h4>Software Expertise — Full Stack Developer</h4>
              <p>Unityverse Academy</p>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-badge" style={{ background: '#fce4ec' }}><ShieldAlert size={24} color="#c2185b" /></div>
            <div>
              <h4>Introduction to Cybersecurity</h4>
              <p>Cisco — 2025</p>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-badge" style={{ background: '#fff3e0' }}><GitBranch size={24} color="#ef6c00" /></div>
            <div>
              <h4>Git &amp; GitHub Advanced Workshop</h4>
              <p>Archi&apos;s Academy + CV Mastery</p>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-badge" style={{ background: '#f3e5f5' }}><Lock size={24} color="#6a1b9a" /></div>
            <div>
              <h4>DDoS Saldırıları ve Koruma</h4>
              <p>BTK Akademi</p>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-badge" style={{ background: '#e8f5e9' }}><ScrollText size={24} color="#2e7d32" /></div>
            <div>
              <h4>JavaScript İleri Seviye</h4>
              <p>BTK Akademi</p>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-badge" style={{ background: '#e0f7fa' }}><Plane size={24} color="#00838f" /></div>
            <div>
              <h4>İHA Dron Pilotluk Sertifikası</h4>
              <p>SHGM — Sivil Havacılık Genel Müdürlüğü</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
