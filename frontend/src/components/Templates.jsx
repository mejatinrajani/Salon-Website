import { useState } from 'react';

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

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 hover:opacity-80 transition-opacity">
            <span className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-lg font-bold">S</span>
            <span>SiteMaker</span>
          </a>
          
          <div className="hidden md:flex items-center text-sm text-gray-400 font-medium">
            <span>Business Category</span>
            <span className="mx-2">/</span>
            <strong className="text-gray-900 font-semibold">Salon Templates</strong>
          </div>
        </div>

        <button
          onClick={() => {
            window.location.href = '/?page=category';
          }}
          className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all"
        >
          <span aria-hidden="true" className="group-hover:-translate-x-1 transition-transform">←</span>
          Back
        </button>
        
        {/* Mobile Breadcrumb */}
        <div className="w-full md:hidden text-xs text-gray-400 font-medium mt-2">
          <span>Business Category</span> <span className="mx-1">/</span> <strong className="text-gray-900">Salon Templates</strong>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">
            Your Business, Your Style
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Choose Your Salon Template
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Apne salon ke liye ek design chunein. Baad mein aap apna logo, photos, services aur contact details add kar sakte hain.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <article
              key={template.id}
              className={`group relative bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 flex flex-col cursor-pointer ${
                selectedTemplate === template.id
                  ? 'border-indigo-600 shadow-xl ring-4 ring-indigo-600/10'
                  : 'border-gray-100 shadow-sm hover:border-gray-300 hover:shadow-lg'
              }`}
              onClick={() => template.available && setSelectedTemplate(template.id)}
            >
              {/* Preview Window (Mock Browser) */}
              <div
                className={`p-4 transition-colors duration-300 ${
                  template.style === 'elegant' ? 'bg-[#e8ddd2]' : template.style === 'minimal' ? 'bg-[#e3e8e7]' : 'bg-gray-100'
                }`}
              >
                {/* Browser Bar */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-t-lg border-b border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <small className="ml-auto text-[8px] font-bold text-gray-400 tracking-wider">YOUR SALON WEBSITE</small>
                </div>

                {/* Mock Site Body */}
                <div
                  className={`min-h-[220px] rounded-b-lg overflow-hidden ${
                    template.style === 'elegant' ? 'bg-[#fbf4ed]' : template.style === 'minimal' ? 'bg-[#fafbf9]' : 'bg-white'
                  }`}
                >
                  {/* Mock Site Nav */}
                  <div
                    className={`flex items-center justify-between px-3 py-3 ${
                      template.style === 'elegant' ? 'text-[#6e4f43]' : template.style === 'minimal' ? 'text-[#384b47]' : 'text-gray-900'
                    }`}
                  >
                    <strong className="text-[10px] tracking-widest font-bold">
                      {template.style === 'elegant' ? 'LUMIÈRE' : template.style === 'minimal' ? 'STUDIO' : 'YOUR SALON'}
                    </strong>
                    <span className="text-[6px] tracking-widest font-medium opacity-60">HOME &nbsp; ABOUT &nbsp; SERVICES</span>
                  </div>

                  {/* Mock Site Hero */}
                  <div className="grid grid-cols-2 items-center gap-3 px-3 pb-4">
                    <div>
                      <small className="text-[7px] font-bold tracking-widest text-[#a27e69]">
                        {template.style === 'elegant' ? 'TIMELESS BEAUTY' : 'BEAUTY & STYLE'}
                      </small>
                      <h2
                        className={`mt-1.5 mb-2.5 text-lg leading-tight font-serif ${
                          template.style === 'elegant' ? 'text-[#6e4f43]' : template.style === 'minimal' ? 'text-[#384b47]' : 'text-gray-900'
                        }`}
                      >
                        {template.style === 'minimal'
                          ? 'Simply Beautiful.'
                          : template.style === 'elegant'
                          ? 'Beauty, Refined.'
                          : 'Your Beauty, Your Way.'}
                      </h2>
                      <span
                        className={`inline-block px-2 py-1 text-[7px] text-white font-medium rounded-sm ${
                          template.style === 'elegant' ? 'bg-[#9b7866]' : template.style === 'minimal' ? 'bg-[#526b63]' : 'bg-gray-900'
                        }`}
                      >
                        Discover Our Services
                      </span>
                    </div>
                    <div className="h-32 bg-[#e8dcd3] rounded-sm overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
                        alt="Salon preview"
                        className="w-full h-full object-cover grayscale-[20%]"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Mock Site Footer Categories */}
                  <div className="flex justify-around py-2.5 border-t border-black/5 text-[7px] tracking-widest font-bold text-gray-400">
                    <span>HAIR</span>
                    <span>SKIN</span>
                    <span>BEAUTY</span>
                  </div>
                </div>
              </div>

              {/* Template Info Card */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h2 className="text-xl font-bold text-gray-900">{template.name}</h2>
                  {template.available ? (
                    <span className="px-2.5 py-1 rounded-md bg-green-100 text-green-700 text-xs font-bold">
                      Available
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-500 text-xs font-bold">
                      Coming Soon
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-6 flex-1 leading-relaxed">{template.description}</p>

                <button
                  className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                    template.available
                      ? selectedTemplate === template.id
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-black text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!template.available}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click from double-firing
                    if (template.available) window.location.href = '/?page=details';
                  }}
                >
                  {template.available ? 'Use This Template →' : 'Coming Soon'}
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 font-medium">
          You can customize your website details after choosing a template.
        </p>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-gray-200 bg-white text-center">
        <span className="text-sm text-gray-500">
          © {new Date().getFullYear()} SiteMaker. All rights reserved.
        </span>
      </footer>
    </div>
  );
}