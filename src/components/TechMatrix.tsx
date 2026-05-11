import React from 'react';
import { Monitor, Database, Bot, Shield, Gauge, Wrench } from 'lucide-react';

export default function TechMatrix() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">Teknik Yetkinlikler</div>
        <h2 className="section-title">Skills Matrix</h2>

        <div className="skills-grid">

          <div className="skill-category">
            <div className="skill-category-header">
              <div className="skill-icon-wrap" style={{ background: '#e8f5e9' }}><Monitor size={24} color="var(--accent)" /></div>
              <h3>Frontend &amp; Mobile</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag tag-dark">React 19</span>
              <span className="skill-tag tag-dark">Next.js</span>
              <span className="skill-tag tag-green">App Router</span>
              <span className="skill-tag tag-dark">TypeScript</span>
              <span className="skill-tag tag-border">React Native</span>
              <span className="skill-tag tag-border">TanStack Query</span>
              <span className="skill-tag tag-green">Framer Motion</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-category-header">
              <div className="skill-icon-wrap" style={{ background: '#e8eaf6' }}><Database size={24} color="#3f51b5" /></div>
              <h3>Backend &amp; Database</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag tag-dark">Node.js</span>
              <span className="skill-tag tag-dark">Prisma ORM</span>
              <span className="skill-tag tag-green">PostgreSQL</span>
              <span className="skill-tag tag-border">MySQL</span>
              <span className="skill-tag tag-border">Redis · ioredis</span>
              <span className="skill-tag tag-dark">PocketBase</span>
              <span className="skill-tag tag-border">Python</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-category-header">
              <div className="skill-icon-wrap" style={{ background: '#fff3e0' }}><Bot size={24} color="#e65100" /></div>
              <h3>AI &amp; Imaging</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag tag-dark">Tesseract OCR</span>
              <span className="skill-tag tag-green">Google AI Spec</span>
              <span className="skill-tag tag-border">Sharp Image Proc.</span>
              <span className="skill-tag tag-dark">AI Research</span>
              <span className="skill-tag tag-border">Content Creation AI</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-category-header">
              <div className="skill-icon-wrap" style={{ background: '#fce4ec' }}><Shield size={24} color="#c2185b" /></div>
              <h3>Security &amp; Infra</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag tag-dark">Docker</span>
              <span className="skill-tag tag-green">Cloudflare Turnstile</span>
              <span className="skill-tag tag-border">Edge Security</span>
              <span className="skill-tag tag-dark">JWT / Google Auth</span>
              <span className="skill-tag tag-border">DDoS Protection</span>
              <span className="skill-tag tag-green">CI/CD Optimized</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-category-header">
              <div className="skill-icon-wrap" style={{ background: '#e1f5fe' }}><Gauge size={24} color="#0277bd" /></div>
              <h3>Testing &amp; Performance</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag tag-dark">k6 Perf. Testing</span>
              <span className="skill-tag tag-green">Playwright E2E</span>
              <span className="skill-tag tag-dark">Zod Validation</span>
              <span className="skill-tag tag-border">Multi-stage Build</span>
              <span className="skill-tag tag-border">Standalone Build</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-category-header">
              <div className="skill-icon-wrap" style={{ background: '#f3e5f5' }}><Wrench size={24} color="#7b1fa2" /></div>
              <h3>Professional Tools</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag tag-dark">Git / GitHub</span>
              <span className="skill-tag tag-green">Vercel</span>
              <span className="skill-tag tag-border">Google Cloud Run</span>
              <span className="skill-tag tag-dark">Figma</span>
              <span className="skill-tag tag-border">Linux · Ubuntu</span>
              <span className="skill-tag tag-green">Redux</span>
              <span className="skill-tag tag-border">.NET</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
