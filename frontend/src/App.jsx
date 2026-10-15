import { useState } from 'react';
import './App.css';
import Auth from './Auth.jsx';
import Category from './Category.jsx';
import Templates from './Templates.jsx';
import WebsiteDetails from './WebsiteDetails.jsx';
import WebsitePreview from './WebsitePreview.jsx';
import Payment from './Payment.jsx';
import Publish from './Publish.jsx';


const categories = [
  {
    name: 'Salon',
    description: 'Create a beautiful website for your salon or beauty studio.',
    status: 'Available',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    name: 'Gym & Fitness',
    description: 'Showcase your gym, fitness programs and facilities.',
    status: 'Coming Soon',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    active: false,
  },
  {
    name: 'Coaching',
    description: 'Build an online presence for your coaching institute.',
    status: 'Coming Soon',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    active: false,
  },
];

function App() {
  const [showAuth, setShowAuth] = useState(false);

const page = new URLSearchParams(window.location.search).get('page');
if (page === 'preview') {
  return <WebsitePreview />;
}
if (page === 'payment') {
  return <Payment />;
}
if (page === 'publish') {
  return <Publish />;
}

if (page === 'details') {
  return <WebsiteDetails />;
}
if (page === 'templates') {
  return <Templates />;
}

if (page === 'category') {
  return <Category />;
}

  if (showAuth) {
    return <Auth />;
  }

  const handleGetStarted = () => {
    document.getElementById('categories')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">S</span>
          <span>SiteMaker</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Templates</a>
          <a href="#how-it-works">How It Works</a>
        </nav>

        
<button
  className="login-button"
  onClick={() => setShowAuth(true)}
>
  Login
</button>

      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              YOUR BUSINESS, YOUR WEBSITE
            </span>

            <h1>
              Apne Business Ki Website
              <span> Khud Banayein.</span>
            </h1>

            <p>
              Bina coding ke apne business ki professional website banayein.
              Apna design chunein, details bharein aur online apni pehchaan
              banayein.
            </p>

            <div className="hero-actions">
              
<button
  className="primary-button"
  onClick={() => setShowAuth(true)}
>
  Get Started <span aria-hidden="true">→</span>
</button>


              <a className="text-button" href="#categories">
                Explore Examples
              </a>
            </div>

            <div className="hero-note">
              <span className="check-mark">✓</span>
              No coding required
              <span className="note-divider">•</span>
              Simple setup
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="preview-window">
              <div className="window-bar">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="window-label">Website Preview</span>
              </div>

              <div className="salon-preview">
                <img
                  className="salon-image"
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1100&q=85"
                  alt="Modern salon interior"
                />

                <div className="salon-overlay">
                  <span className="salon-label">BEAUTY & STYLE</span>
                  <h2>Your Salon Name</h2>
                  <p>Beauty begins with you.</p>
                  <span className="sample-button">Discover Our Services</span>
                </div>
              </div>

              <div className="preview-footer">
                <span>✦ Your brand</span>
                <span>✦ Your style</span>
                <span>✦ Your website</span>
              </div>
            </div>

            <div className="floating-card">
              <span className="floating-icon">✓</span>
              <div>
                <strong>Simple setup</strong>
                <p>No coding needed</p>
              </div>
            </div>
          </div>
        </section>

        <section className="categories-section" id="categories">
          <div className="section-heading">
            <span className="eyebrow">MADE FOR YOUR BUSINESS</span>
            <h2>Har Business Ke Liye Website</h2>
            <p>
              Apne business ki category chunein aur apni website banane ki
              shuruaat karein.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <article
                className={`category-card ${
                  category.active ? 'category-active' : ''
                }`}
                key={category.name}
              >
                <div className="category-image-wrap">
                  <img
                    src={category.image}
                    alt={`${category.name} website example`}
                    className="category-image"
                    loading="lazy"
                  />
                  <span
                    className={`status-badge ${
                      category.active ? 'status-available' : ''
                    }`}
                  >
                    {category.status}
                  </span>
                </div>

                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>

                  <button
                    className={
                      category.active
                        ? 'category-button'
                        : 'category-button category-button-disabled'
                    }
                    disabled={!category.active}
                   onClick={() => setShowAuth(true)}
                  >
                    {category.active ? 'Create Website →' : 'Coming Soon'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <span className="eyebrow">GET STARTED IN SIMPLE STEPS</span>
          <h2>Website Banana Hua Aasaan</h2>

          <div className="steps-grid">
            <div className="step-item">
              <span className="step-number">01</span>
              <h3>Choose a Template</h3>
              <p>Apne business ke liye pasand ka design chunein.</p>
            </div>

            <div className="step-item">
              <span className="step-number">02</span>
              <h3>Add Your Details</h3>
              <p>Apna naam, photos, services aur contact details bharein.</p>
            </div>

            <div className="step-item">
              <span className="step-number">03</span>
              <h3>Publish Your Website</h3>
              <p>Preview check karein aur ready hone par publish karein.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-icon">S</span>
          <span>SiteMaker</span>
        </a>
        <p>Simple websites for growing businesses.</p>
        <span className="copyright">
          © {new Date().getFullYear()} SiteMaker
        </span>
      </footer>
    </div>
  );
}

export default App;
