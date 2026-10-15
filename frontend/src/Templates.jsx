
import { useState } from 'react';
import './Templates.css';

const templates = [
  {
    id: 1,
    name: 'Modern',
    description: 'Clean layout with a bold look for modern salons.',
    style: 'modern',
    available: true,
  },
  {
    id: 2,
    name: 'Elegant',
    description: 'A premium, sophisticated look for beauty studios.',
    style: 'elegant',
    available: false,
  },
  {
    id: 3,
    name: 'Minimal',
    description: 'Simple design that keeps your services in focus.',
    style: 'minimal',
    available: false,
  },
];

function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  return (
    <div className="templates-page">
      <header className="templates-navbar">
        <a href="/" className="templates-brand">
          <span className="templates-brand-icon">S</span>
          <span>SiteMaker</span>
        </a>

        <div className="templates-breadcrumb">
          <span>Business Category</span>
          <span> / </span>
          <strong>Salon Templates</strong>
        </div>

        <button
          className="templates-back"
          onClick={() => {
            window.location.href = '/?page=category';
          }}
        >
          ← Back
        </button>
      </header>

      <main className="templates-main">
        <div className="templates-heading">
          <span className="templates-eyebrow">YOUR BUSINESS, YOUR STYLE</span>
          <h1>Choose Your Salon Template</h1>
          <p>
            Apne salon ke liye ek design chunein. Baad mein aap apna logo,
            photos, services aur contact details add kar sakte hain.
          </p>
        </div>

        <div className="templates-grid">
          {templates.map((template) => (
            <article
              key={template.id}
              className={`template-card ${
                selectedTemplate === template.id ? 'template-selected' : ''
              }`}
            >
              <div className={`template-preview ${template.style}`}>
                <div className="mock-browser-bar">
                  <span />
                  <span />
                  <span />
                  <small>YOUR SALON WEBSITE</small>
                </div>

                <div className="mock-site">
                  <div className="mock-site-nav">
                    <strong>{template.style === 'elegant' ? 'LUMIÈRE' : template.style === 'minimal' ? 'STUDIO' : 'YOUR SALON'}</strong>
                    <span>HOME&nbsp;&nbsp; ABOUT&nbsp;&nbsp; SERVICES</span>
                  </div>

                  <div className="mock-site-hero">
                    <div className="mock-site-copy">
                      <small>{template.style === 'elegant' ? 'TIMELESS BEAUTY' : 'BEAUTY & STYLE'}</small>
                      <h2>
                        {template.style === 'minimal'
                          ? 'Simply Beautiful.'
                          : template.style === 'elegant'
                            ? 'Beauty, Refined.'
                            : 'Your Beauty, Your Way.'}
                      </h2>
                      <span>Discover Our Services</span>
                    </div>
                    <div className="mock-site-photo">
                      <img
                        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
                        alt="Salon template preview"
                      />
                    </div>
                  </div>

                  <div className="mock-site-bottom">
                    <span>HAIR</span>
                    <span>SKIN</span>
                    <span>BEAUTY</span>
                  </div>
                </div>
              </div>

              <div className="template-info">
                <div className="template-title-row">
                  <h2>{template.name}</h2>
                  {template.available ? (
                    <span className="template-badge">Available</span>
                  ) : (
                    <span className="template-badge coming-soon">Coming Soon</span>
                  )}
                </div>

                <p>{template.description}</p>

                <button
                  className={
                    template.available
                      ? selectedTemplate === template.id
                        ? 'template-use selected'
                        : 'template-use'
                      : 'template-use disabled'
                  }
                  disabled={!template.available}
                  onClick={() => {
  window.location.href = '/?page=details';
}}
                >
                  {template.available ? 'Use This Template →' : 'Coming Soon'}
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="templates-note">
          You can customize your website details after choosing a template.
        </p>
      </main>

      <footer className="templates-footer">
        © {new Date().getFullYear()} SiteMaker. All rights reserved.
      </footer>
    </div>
  );
}

export default Templates;
