const categories = [
  {
    name: 'Salon & Beauty',
    description: 'Create a professional website for your salon or beauty studio.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    available: true,
    label: 'Available Now',
  },
  {
    name: 'Gym & Fitness',
    description: 'Showcase your gym, trainers, facilities and fitness programs.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    available: false,
    label: 'Coming Soon',
  },
  {
    name: 'Coaching Institute',
    description: 'Build an online presence for your coaching institute.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    available: false,
    label: 'Coming Soon',
  },
];

export default function Category() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <a href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 hover:opacity-80 transition-opacity">
          <span className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-lg font-bold">S</span>
          <span>SiteMaker</span>
        </a>

        <button
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
          onClick={() => alert('Logout functionality will be added later.')}
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">
            Let's Get Started
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Choose Your Business Category
          </h1>
          <p className="text-lg text-gray-600">
            Apne business ki category chunein. Hum aapke liye website banane ka process simple rakhenge.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <article
              key={category.name}
              className={`group relative bg-white rounded-3xl overflow-hidden border ${
                category.available ? 'border-indigo-100 shadow-lg' : 'border-gray-100 shadow-sm'
              } hover:shadow-xl transition-all duration-300 flex flex-col`}
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md shadow-sm ${
                    category.available ? 'bg-green-100 text-green-800' : 'bg-white/90 text-gray-600'
                  }`}
                >
                  {category.label}
                </span>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h2>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed">{category.description}</p>

                <button
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                    category.available
                      ? 'bg-black text-white hover:bg-gray-800 hover:shadow-md active:scale-[0.98]'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!category.available}
                  onClick={() => {
                    window.location.href = '/?page=templates';
                  }}
                >
                  {category.available ? `Choose ${category.name.split(' ')[0]} →` : 'Coming Soon'}
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 font-medium">
          Need help? You can choose another category when it becomes available.
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