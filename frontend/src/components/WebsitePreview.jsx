import { useState } from 'react';

const defaultPages = {
  Home: {
    title: 'Your Beauty, Your Way',
    subtitle: 'Discover your beauty with us.',
    description: 'Welcome to our salon. We are here to help you look and feel your best.',
  },
  About: {
    title: 'About Our Salon',
    subtitle: 'Beauty, care and confidence.',
    description: 'Tell your customers about your salon, your team and your experience.',
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
    description: 'Phone: +91 98765 43210\nEmail: hello@yoursalon.com\nAddress: Your salon address',
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

export default function WebsitePreview() {
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

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-gray-900 selection:bg-indigo-500 selection:text-white pb-24">
      
      {/* Editor Toolbar */}
      <div className="max-w-6xl mx-auto mb-6 flex items-center justify-between">
        <div>
          <span className="block text-xs font-bold tracking-widest text-indigo-600 uppercase mb-1">
            SiteMaker
          </span>
          <strong className="text-xl font-bold tracking-tight text-gray-900">Website Preview</strong>
        </div>

        <button
          type="button"
          onClick={() => window.location.href = '/?page=details'}
          className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-all shadow-sm"
        >
          <span aria-hidden="true" className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Editor
        </button>
      </div>

      {/* Browser Chrome Header */}
      <div className="max-w-6xl mx-auto bg-white border border-gray-200 border-b-0 rounded-t-2xl flex items-center gap-4 px-4 py-3 shadow-lg">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 max-w-md bg-gray-100 rounded-md px-4 py-1.5 text-xs text-gray-500 font-medium truncate">
          yourwebsite.sitemaker.in
        </div>
        <span className="hidden sm:block text-[10px] font-bold tracking-widest text-indigo-400 uppercase ml-auto">
          Live Preview
        </span>
      </div>

      {/* The Previewed Website */}
      <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-b-2xl shadow-2xl overflow-hidden flex flex-col min-h-[700px]">
        
        {/* Salon Header */}
        <header className="px-6 py-5 md:px-12 border-b border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#salon-home"
            className="flex items-center gap-3 text-xl font-bold text-gray-900 tracking-tight"
            onClick={(e) => { e.preventDefault(); setActivePage('Home'); }}
          >
            {website.logoPreview ? (
              <img src={website.logoPreview} alt={`${salonName} logo`} className="w-12 h-12 object-contain rounded-lg" />
            ) : (
              <span className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-lg font-serif italic text-xl">
                {salonName.charAt(0).toUpperCase()}
              </span>
            )}
            <span>{salonName}</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-2">
            {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((name) => (
              <button
                type="button"
                key={name}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  activePage === name ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
                onClick={() => setActivePage(name)}
              >
                {name}
              </button>
            ))}
          </nav>
        </header>

        {/* Salon Main Content */}
        <main className="flex-1 flex flex-col">
          {activePage === 'Home' ? (
            <section className="flex-1 grid md:grid-cols-2 gap-12 items-center p-8 md:p-16">
              <div className="max-w-lg">
                <span className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
                  Welcome to {salonName}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                  {page.title || tagline}
                </h1>
                <p className="text-xl text-gray-600 font-medium mb-4">
                  {page.subtitle || tagline}
                </p>
                <p className="text-gray-500 leading-relaxed mb-8 whitespace-pre-line">
                  {page.description}
                </p>
                <button
                  type="button"
                  className="px-8 py-4 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] w-max"
                  onClick={() => setActivePage('Contact')}
                >
                  Book Appointment <span>→</span>
                </button>
              </div>

              <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85"
                  alt="Beautiful salon interior"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                  <span className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                    Your Beauty Destination
                  </span>
                  <strong className="text-lg font-bold text-gray-900">{tagline}</strong>
                </div>
              </div>
            </section>
          ) : (
            <section className="flex-1 p-8 md:p-16 text-center max-w-4xl mx-auto w-full">
              <span className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">{salonName}</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">{page.title}</h1>
              <p className="text-xl text-gray-600 font-medium mb-8">{page.subtitle}</p>
              
              <div className="text-gray-500 leading-relaxed max-w-2xl mx-auto space-y-4">
                {page.description.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>

              {activePage === 'Gallery' && (
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {galleryPhotos.length > 0 ? (
                    galleryPhotos.map((photo, index) => (
                      <div key={`${photo.name}-${index}`} className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100 group">
                        <img src={photo.url} alt={photo.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full max-w-2xl mx-auto">
                      <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100 mb-4">
                        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85" alt="Salon gallery example" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-sm font-medium text-gray-500">Abhi apni salon photos upload karein.</p>
                    </div>
                  )}
                </div>
              )}

              {activePage === 'Contact' && (
                <form
                  className="mt-12 max-w-lg mx-auto bg-white p-8 rounded-3xl border border-gray-100 shadow-xl text-left"
                  onSubmit={(event) => {
                    event.preventDefault();
                    alert('Thank you! Your message has been submitted successfully.');
                    event.currentTarget.reset();
                  }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Contact Us</h2>
                  <p className="text-sm text-gray-500 mb-8 text-center">Have a question or want to book an appointment? Send us a message.</p>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label htmlFor="visitor-name" className="block text-sm font-bold text-gray-700">Full Name</label>
                      <input id="visitor-name" name="name" type="text" placeholder="Enter your full name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all outline-none text-sm" />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="visitor-phone" className="block text-sm font-bold text-gray-700">Phone Number</label>
                      <input id="visitor-phone" name="phone" type="tel" placeholder="Enter your phone number" required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all outline-none text-sm" />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="visitor-email" className="block text-sm font-bold text-gray-700">Email Address</label>
                      <input id="visitor-email" name="email" type="email" placeholder="Enter your email address" required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all outline-none text-sm" />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="visitor-message" className="block text-sm font-bold text-gray-700">Message</label>
                      <textarea id="visitor-message" name="message" placeholder="Write your message here..." rows={4} required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all outline-none text-sm resize-y" />
                    </div>

                    <button type="submit" className="w-full py-4 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98] mt-4">
                      Send Message <span>→</span>
                    </button>
                  </div>
                </form>
              )}
            </section>
          )}
        </main>

        {/* Salon Footer */}
        <footer className="px-6 py-8 md:px-12 border-t border-gray-100 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <strong className="text-lg font-bold text-gray-900 block mb-1">{salonName}</strong>
            <p className="text-sm text-gray-500">{tagline}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-500">
            {['Privacy Policy', 'Terms & Conditions'].map((name) => (
              <button
                type="button"
                key={name}
                className="hover:text-gray-900 transition-colors"
                onClick={() => setActivePage(name)}
              >
                {name}
              </button>
            ))}
          </div>

          <p className="text-xs font-medium text-gray-400 w-full md:w-auto text-center md:text-right border-t md:border-none border-gray-200 pt-6 md:pt-0">
            © {new Date().getFullYear()} {salonName}. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Floating Payment Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-200 z-50 flex flex-col sm:flex-row items-center justify-center gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <span className="text-sm font-medium text-gray-500 hidden sm:block">
          This is a preview. Your website is not published yet.
        </span>
        <button
          type="button"
          className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]"
          onClick={() => window.location.href = '?page=payment'}
        >
          Continue to Payment <span>→</span>
        </button>
      </div>
    </div>
  );
}