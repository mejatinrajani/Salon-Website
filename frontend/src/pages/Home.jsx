import { useState } from 'react';
import Auth from './Auth.jsx';

const categories = [
  {
    name: 'Salon',
    description: 'Create a beautiful website for your salon or beauty studio.',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    active: true,
  },
  {
    name: 'Gym & Fitness',
    description: 'Showcase your gym, fitness programs and facilities.',
    status: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    active: false,
  },
  {
    name: 'Coaching',
    description: 'Build an online presence for your coaching institute.',
    status: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    active: false,
  },
];

export default function Home() {
  const [showAuth, setShowAuth] = useState(false);

  if (showAuth) {
    return <Auth />;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900">
          <span className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-lg font-bold">S</span>
          <span>SiteMaker</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-black transition-colors">Home</a>
          <a href="#categories" className="hover:text-black transition-colors">Templates</a>
          <a href="#how-it-works" className="hover:text-black transition-colors">How It Works</a>
        </nav>

        <button
          onClick={() => setShowAuth(true)}
          className="px-5 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-all"
        >
          Login
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16" id="home">
          <div className="flex-1 space-y-8">
            <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">
              Your Business, Your Website
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-gray-900">
              Apne Business Ki Website <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Khud Banayein.</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Bina coding ke apne business ki professional website banayein. Apna design chunein, details bharein aur online apni pehchaan banayein.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowAuth(true)}
                className="px-8 py-4 text-base font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Started <span aria-hidden="true">→</span>
              </button>
              <a href="#categories" className="px-6 py-4 text-base font-medium text-gray-600 hover:text-indigo-600 transition-colors">
                Explore Examples
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-1"><span className="text-green-500">✓</span> No coding required</span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1"><span className="text-green-500">✓</span> Simple setup</span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex-1 relative w-full max-w-2xl mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
            
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
              {/* macOS style Window Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-medium text-gray-400 mx-auto pr-8">Website Preview</span>
              </div>

              <div className="relative aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1100&q=85"
                  alt="Modern salon interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-xs font-bold tracking-widest text-indigo-400 mb-2">BEAUTY & STYLE</span>
                  <h2 className="text-3xl font-bold mb-2">Your Salon Name</h2>
                  <p className="text-gray-300">Beauty begins with you.</p>
                  <button className="mt-4 px-6 py-2 border border-white/50 rounded-full text-sm hover:bg-white hover:text-black transition-colors w-max backdrop-blur-sm">
                    Discover Our Services
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center px-6 py-4 bg-gray-50 text-xs font-medium text-gray-500">
                <span>✦ Your brand</span>
                <span>✦ Your style</span>
                <span>✦ Your website</span>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold">✓</span>
              <div>
                <strong className="block text-sm font-bold text-gray-900">Ready in minutes</strong>
                <p className="text-xs text-gray-500">Just fill in the blanks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto" id="categories">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">Made For Your Business</span>
            <h2 className="text-4xl font-bold text-gray-900">Har Business Ke Liye Website</h2>
            <p className="text-gray-600 text-lg">Apne business ki category chunein aur apni website banane ki shuruaat karein.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <article
                key={category.name}
                className={`group relative bg-white rounded-3xl overflow-hidden border ${category.active ? 'border-indigo-100 shadow-lg' : 'border-gray-100 shadow-sm'} hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={category.image}
                    alt={`${category.name} website example`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md shadow-sm ${category.active ? 'bg-green-500 text-white' : 'bg-white/90 text-gray-900'}`}>
                    {category.status}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-8 flex-1">{category.description}</p>

                  <button
                    disabled={!category.active}
                    onClick={() => setShowAuth(true)}
                    className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                      category.active
                        ? 'bg-black text-white hover:bg-gray-800 hover:shadow-md'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {category.active ? 'Create Website →' : 'Coming Soon'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-black text-white px-6" id="how-it-works">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <span className="text-sm font-bold tracking-widest text-indigo-400 uppercase">Get Started In Simple Steps</span>
              <h2 className="text-4xl font-bold">Website Banana Hua Aasaan</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center md:text-left relative">
              {/* Optional connecting line for large screens */}
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800" />
              
              {[
                { step: '01', title: 'Choose a Template', desc: 'Apne business ke liye pasand ka design chunein.' },
                { step: '02', title: 'Add Your Details', desc: 'Apna naam, photos, services aur contact details bharein.' },
                { step: '03', title: 'Publish Your Website', desc: 'Preview check karein aur ready hone par turant publish karein.' }
              ].map((item) => (
                <div key={item.step} className="relative z-10 space-y-4 bg-black md:bg-transparent p-6 md:p-0 rounded-2xl">
                  <span className="inline-block text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-800 mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="#home" className="flex items-center gap-2 text-lg font-bold text-gray-900">
            <span className="flex items-center justify-center w-6 h-6 bg-black text-white rounded font-bold text-xs">S</span>
            <span>SiteMaker</span>
          </a>
          <p className="text-sm text-gray-500">Simple websites for growing businesses.</p>
          <span className="text-sm text-gray-400">© {new Date().getFullYear()} SiteMaker</span>
        </div>
      </footer>
    </div>
  );
}