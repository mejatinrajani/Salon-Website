
import { useState } from 'react';
import './WebsitePreview.css';

const defaultPages = {
  Home: {
    title: 'Your Beauty, Your Way',
    subtitle: 'Discover your beauty with us.',
    description:
      'Welcome to our salon. We are here to help you look and feel your best.',
  },
  About: {
    title: 'About Our Salon',
    subtitle: 'Beauty, care and confidence.',
    description:
      'Tell your customers about your salon, your team and your experience.',
  },
  Services: {
    title: 'Our Services',
    subtitle: 'Something special for everyone.',
    description: 'Haircut - ₹300\nFacial - ₹800\nHair Styling - ₹500',
  },
  Gallery: {
    title: 'Our Gallery',
    subtitle: 'Take a look at our work.',
    description: 'Explore our salon and beauty work.',
  },
  Contact: {
    title: 'Get In Touch',
    subtitle: 'We would love to hear from you.',
    description:
      'Phone: +91 98765 43210\nEmail: hello@yoursalon.com\nAddress: Your salon address',
  },
  'Privacy Policy': {
    title: 'Privacy Policy',
    subtitle: 'Your privacy matters to us.',
    description: 'Add your salon privacy policy here.',
  },
  'Terms & Conditions': {
    title: 'Terms & Conditions',
    subtitle: 'Our website terms.',
    description: 'Add your salon terms and conditions here.',
  },
};

function WebsitePreview() {
  const [website, setWebsite] = useState(() => {
    try {
      const saved = sessionStorage.getItem('siteMakerSalonDetails');

      if (saved) {
        const parsed = JSON.parse(saved);

        
return {
  salonName: parsed.salonName || '',
  tagline: parsed.tagline || '',
  logoPreview: parsed.logoPreview || '',
  pages: { ...defaultPages, ...(parsed.pages || {}) },
  galleryPhotos: parsed.galleryPhotos || [],
};

      }
    } catch (error) {
      console.error('Could not load website details:', error);
    }

    return {
      salonName: '',
      tagline: '',
      pages: defaultPages,
    };
  });

  const [activePage, setActivePage] = useState('Home');
const galleryPhotos = website.galleryPhotos || [];


  const page = website.pages[activePage] || defaultPages.Home;
  const salonName = website.salonName.trim() || 'Your Beauty Salon';
  const tagline = website.tagline.trim() || 'Your Beauty, Your Way';

  const goToEditor = () => {
    window.location.href = '/?page=details';
  };

  return (
    <div className="preview-page">
      <div className="preview-toolbar">
        <div>
          <span className="preview-toolbar-label">SITEMAKER</span>
          <strong>Website Preview</strong>
        </div>

        <button type="button" onClick={goToEditor}>
          ← Back to Editor
        </button>
      </div>

      <div className="preview-browser">
        <div className="preview-browser-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="preview-address">
          yourwebsite.sitemaker.in
        </div>
        <span className="preview-demo-label">PREVIEW</span>
      </div>

      <div className="salon-website">
        <header className="salon-header">
          <a
            href="#salon-home"
            className="salon-brand"
            onClick={(event) => {
              event.preventDefault();
              setActivePage('Home');
            }}
          >
            
{website.logoPreview ? (
  <img
    src={website.logoPreview}
    alt={`${salonName} logo`}
    className="salon-brand-logo"
  />
) : (
  <span className="salon-brand-mark">S</span>
)}

            <span>{salonName}</span>
          </a>

          <nav className="salon-navigation">
            {['Home', 'About', 'Services', 'Gallery', 'Contact'].map(
              (name) => (
                <button
                  type="button"
                  key={name}
                  className={activePage === name ? 'selected' : ''}
                  onClick={() => setActivePage(name)}
                >
                  {name}
                </button>
              )
            )}
          </nav>
        </header>

        <main>
          {activePage === 'Home' ? (
            <section className="salon-hero" id="salon-home">
              <div className="salon-hero-content">
                <span className="salon-eyebrow">
                  WELCOME TO {salonName.toUpperCase()}
                </span>

                <h1>{page.title || tagline}</h1>

                <p className="salon-hero-subtitle">
                  {page.subtitle || tagline}
                </p>

                <p className="salon-hero-description">
                  {page.description}
                </p>

                <button
                  type="button"
                  className="salon-hero-button"
                  onClick={() => setActivePage('Contact')}
                >
                  Contact Us
                  <span>→</span>
                </button>
              </div>

              <div className="salon-hero-image">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85"
                  alt="Beautiful salon interior"
                />
                <div className="salon-image-note">
                  <span>YOUR BEAUTY DESTINATION</span>
                  <strong>{tagline}</strong>
                </div>
              </div>
            </section>
          ) : (
            <section className="salon-inner-page">
              <span className="salon-eyebrow">{salonName}</span>
              <h1>{page.title}</h1>
              <p className="salon-inner-subtitle">{page.subtitle}</p>
              <div className="salon-inner-description">
                {page.description.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>

              
{activePage === 'Gallery' && (
  <div className="salon-gallery-grid">
    {galleryPhotos.length > 0 ? (
      galleryPhotos.map((photo, index) => (
        <div className="salon-gallery-item" key={`${photo.name}-${index}`}>
          <img src={photo.url} alt={photo.name} />
        </div>
      ))
    ) : (
      <div className="salon-gallery-image">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85"
          alt="Salon gallery example"
        />
        <p>Abhi apni salon photos upload karein.</p>
      </div>
    )}
  </div>
)}


              
{activePage === 'Contact' && (
  <form
    className="salon-contact-form"
    onSubmit={(event) => {
      event.preventDefault();
      alert('Thank you! Your message has been submitted successfully.');
      event.currentTarget.reset();
    }}
  >
    <h2>Contact Us</h2>
    <p>Have a question or want to book an appointment? Send us a message.</p>

    <label htmlFor="visitor-name">Full Name</label>
    <input
      id="visitor-name"
      name="name"
      type="text"
      placeholder="Enter your full name"
      required
    />

    <label htmlFor="visitor-phone">Phone Number</label>
    <input
      id="visitor-phone"
      name="phone"
      type="tel"
      placeholder="Enter your phone number"
      required
    />

    <label htmlFor="visitor-email">Email Address</label>
    <input
      id="visitor-email"
      name="email"
      type="email"
      placeholder="Enter your email address"
      required
    />

    <label htmlFor="visitor-message">Message</label>
    <textarea
      id="visitor-message"
      name="message"
      placeholder="Write your message here..."
      rows={5}
      required
    />

    <button type="submit" className="salon-hero-button">
      Send Message <span>→</span>
    </button>
  </form>
)}

            </section>
          )}
        </main>

        <footer className="salon-footer">
          <div>
            <strong>{salonName}</strong>
            <p>{tagline}</p>
          </div>

          <div className="salon-footer-links">
            {['Privacy Policy', 'Terms & Conditions'].map((name) => (
              <button
                type="button"
                key={name}
                onClick={() => setActivePage(name)}
              >
                {name}
              </button>
            ))}
          </div>

          <p className="salon-copyright">
            © {new Date().getFullYear()} {salonName}. All rights reserved.
          </p>
        </footer>
      </div>

      <div className="preview-bottom-note">
        This is a preview. Your website is not published yet.
      </div>
     
<div className="preview-payment-action">
  <button
    type="button"
    className="salon-hero-button"
    onClick={() => {
      window.location.href = '?page=payment';
    }}
  >
    Continue to Payment <span>→</span>
  </button>
</div>

    </div>
  );
}

export default WebsitePreview;
