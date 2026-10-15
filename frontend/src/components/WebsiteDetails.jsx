import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const initialPages = {
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
    description: 'Add your salon photos to show your work to customers.',
  },
  Contact: {
    title: 'Get In Touch',
    subtitle: 'We would love to hear from you.',
    description: 'Phone: +91 98765 43210\nEmail: hello@yoursalon.com\nAddress: Your salon address',
  },
  'Privacy Policy': {
    title: 'Privacy Policy',
    subtitle: 'Your privacy matters to us.',
    description: 'Explain how your salon collects and uses customer information.',
  },
  'Terms & Conditions': {
    title: 'Terms & Conditions',
    subtitle: 'Our website terms.',
    description: 'Add the terms and conditions for using your salon website.',
  },
};

const pageIcons = {
  Home: '⌂',
  About: '▤',
  Services: '✂',
  Gallery: '▧',
  Contact: '☎',
  'Privacy Policy': '♧',
  'Terms & Conditions': '≡',
};

// Drag and Drop Gallery Item Component
function SortableGalleryPhoto({ photo, index, onRemove }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: `${photo.name}-${index}` });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-3 p-3 mb-3 border bg-white rounded-xl shadow-sm transition-shadow ${
        isDragging ? 'border-indigo-500 shadow-md' : 'border-gray-200'
      }`}
    >
      <button
        type="button"
        className="cursor-grab active:cursor-grabbing p-2 text-gray-400 hover:text-gray-600 transition-colors"
        {...attributes}
        {...listeners}
        aria-label={`Drag ${photo.name} to reorder`}
        title="Drag to reorder"
      >
        <span className="text-xl">⠿</span>
      </button>

      <img
        src={photo.url || URL.createObjectURL(photo)}
        alt={photo.name}
        className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-lg bg-gray-100 flex-shrink-0"
      />

      <span className="flex-1 min-w-0 truncate text-sm font-medium text-gray-700">
        {photo.name}
      </span>

      <button
        type="button"
        className="px-3 py-1.5 text-xs font-semibold text-red-600 bg-red-50 border border-red-100 rounded-lg hover:bg-red-600 hover:text-white transition-colors flex-shrink-0"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
}

// Main Editor Component
export default function WebsiteDetails() {
  const [activePage, setActivePage] = useState('Home');
  const [salonName, setSalonName] = useState('');
  const [tagline, setTagline] = useState('');
  
  const [logoPreview, setLogoPreview] = useState(() => {
    try {
      const saved = sessionStorage.getItem('siteMakerSalonDetails');
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.logoPreview || '';
      }
    } catch (error) {
      console.error('Could not load saved logo:', error);
    }
    return '';
  });

  const [pages, setPages] = useState(initialPages);
  const [logoName, setLogoName] = useState('');
  const [saved, setSaved] = useState(false);

  const [galleryPhotos, setGalleryPhotos] = useState(() => {
    try {
      const saved = sessionStorage.getItem('siteMakerSalonDetails');
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.galleryPhotos || [];
      }
    } catch (error) {
      console.error('Could not load saved gallery photos:', error);
    }
    return [];
  });

  const updatePage = (field, value) => {
    setPages((previous) => ({
      ...previous,
      [activePage]: {
        ...previous[activePage],
        [field]: value,
      },
    }));
    setSaved(false);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  const handleGalleryDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setGalleryPhotos((items) => {
      const oldIndex = items.findIndex(
        (photo, index) => `${photo.name}-${index}` === active.id
      );
      const newIndex = items.findIndex(
        (photo, index) => `${photo.name}-${index}` === over.id
      );
      if (oldIndex < 0 || newIndex < 0) return items;
      return arrayMove(items, oldIndex, newIndex);
    });
    setSaved(false);
  };

  const handleSave = async () => {
    try {
      const galleryPhotoData = await Promise.all(
        galleryPhotos.map(async (photo) => {
          if (photo.url) return photo;
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve({ name: photo.name, url: reader.result });
            reader.onerror = () => reject(new Error(`Photo read nahi hui: ${photo.name}`));
            reader.readAsDataURL(photo);
          });
        })
      );

      const websiteData = { salonName, tagline, logoName, logoPreview, pages, galleryPhotos: galleryPhotoData };
      sessionStorage.setItem('siteMakerSalonDetails', JSON.stringify(websiteData));
      
      setSaved(true);
      return true;
    } catch (error) {
      console.error('Save error:', error);
      alert('Photos save nahi hui. Kam photos select karke dobara try karein.');
      return false;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Topbar */}
      <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 px-4 md:px-6 py-3 md:py-4 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <a href="/" className="flex items-center gap-2 text-lg md:text-xl font-bold tracking-tight text-gray-900 hover:opacity-80 transition-opacity">
          <span className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-lg font-bold">S</span>
          <span className="hidden sm:inline">SiteMaker</span>
        </a>

        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-500">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Website Editor
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
            onClick={() => window.location.href = '/?page=templates'}
          >
            Back
          </button>
          
          <button
            type="button"
            className="px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-700 transition-all shadow-sm active:scale-[0.98]"
            onClick={handleSave}
          >
            Save Details
          </button>

          <button
            type="button"
            className="px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-white bg-black border border-black rounded-lg hover:bg-gray-800 transition-all shadow-md active:scale-[0.98] flex items-center gap-1.5"
            onClick={async () => {
              await handleSave();
              window.location.href = '/?page=preview';
            }}
          >
            Preview <span className="hidden sm:inline">Website</span> →
          </button>
        </div>
      </header>

      {/* Editor Workspace */}
      <div className="flex-1 flex flex-col md:flex-row w-full max-w-[1400px] mx-auto">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0 bg-white border-b md:border-b-0 md:border-r border-gray-200 flex flex-col p-4 md:p-6">
          <div className="mb-6">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Your Website</span>
            <h2 className="text-lg font-bold text-gray-900 mt-1">Website Pages</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
            {Object.keys(pages).map((page) => (
              <button
                type="button"
                key={page}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left w-full ${
                  activePage === page
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-100 shadow-sm'
                    : 'text-gray-600 border border-transparent hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setActivePage(page)}
              >
                <span className={`text-lg w-5 text-center ${activePage === page ? 'text-indigo-600' : 'text-gray-400'}`}>
                  {pageIcons[page]}
                </span>
                <span className="flex-1">{page}</span>
                <span className="hidden md:inline text-gray-400">›</span>
              </button>
            ))}
          </div>

          <div className="mt-6 md:mt-auto p-4 rounded-xl bg-indigo-50/50 border border-indigo-100">
            <strong className="text-xs text-indigo-700 font-bold block mb-1">Quick tip</strong>
            <p className="text-xs text-gray-600 leading-relaxed">
              Har page select karke uska text edit karein. Save Details dabana na bhoolein.
            </p>
          </div>
        </aside>

        {/* Main Editor Area */}
        <main className="flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Website Customization</span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">Edit {activePage} Page</h1>
              <p className="text-sm text-gray-500 mt-1">Apni website ke is page ka content customize karein.</p>
            </div>
            <div className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 shadow-sm w-max">
              {Object.keys(pages).indexOf(activePage) + 1} / {Object.keys(pages).length}
            </div>
          </div>

          {/* Business Info Card */}
          <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-8 shadow-sm mb-6">
            <div className="mb-6 border-b border-gray-100 pb-4">
              <h2 className="text-lg font-bold text-gray-900">Business Information</h2>
              <p className="text-sm text-gray-500">Ye details aapki website par use hongi.</p>
            </div>

            <div className="space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="editorSalonName" className="block text-sm font-bold text-gray-700">Salon Name</label>
                <input
                  id="editorSalonName"
                  value={salonName}
                  onChange={(e) => { setSalonName(e.target.value); setSaved(false); }}
                  placeholder="e.g. Glow Beauty Salon"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all outline-none text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="editorTagline" className="block text-sm font-bold text-gray-700">Business Tagline</label>
                <input
                  id="editorTagline"
                  value={tagline}
                  onChange={(e) => { setTagline(e.target.value); setSaved(false); }}
                  placeholder="e.g. Your Beauty, Our Passion"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all outline-none text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="editorLogo" className="block text-sm font-bold text-gray-700">Salon Logo</label>
                <input
                  id="editorLogo"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setLogoName(file.name);
                    const reader = new FileReader();
                    reader.onload = () => setLogoPreview(reader.result);
                    reader.readAsDataURL(file);
                    setSaved(false);
                  }}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer border border-gray-200 rounded-xl bg-gray-50 p-1.5"
                />
                
                {logoName && <span className="block text-xs text-gray-500 mt-2">Selected: {logoName}</span>}
                {logoPreview && (
                  <div className="mt-4 p-4 border border-gray-100 rounded-xl bg-gray-50 w-max">
                    <img src={logoPreview} alt="Logo preview" className="max-h-20 object-contain rounded" />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Page Content Card */}
          <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-8 shadow-sm mb-6">
            <div className="mb-6 border-b border-gray-100 pb-4">
              <h2 className="text-lg font-bold text-gray-900">{activePage} Content</h2>
              <p className="text-sm text-gray-500">Neeche ki details change karne par sirf {activePage} page ka content update hoga.</p>
            </div>

            <div className="space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="editorTitle" className="block text-sm font-bold text-gray-700">Page Heading</label>
                <input
                  id="editorTitle"
                  value={pages[activePage].title}
                  onChange={(e) => updatePage('title', e.target.value)}
                  placeholder="Enter page heading"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all outline-none text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="editorSubtitle" className="block text-sm font-bold text-gray-700">Subheading</label>
                <input
                  id="editorSubtitle"
                  value={pages[activePage].subtitle}
                  onChange={(e) => updatePage('subtitle', e.target.value)}
                  placeholder="Enter a short description"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all outline-none text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="editorDescription" className="block text-sm font-bold text-gray-700">
                  {activePage === 'Gallery' ? 'Gallery Description / Photo Notes' : 'Page Text'}
                </label>
                <textarea
                  id="editorDescription"
                  rows="6"
                  value={pages[activePage].description}
                  onChange={(e) => updatePage('description', e.target.value)}
                  placeholder="Write your website content here..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all outline-none text-sm resize-y min-h-[120px] leading-relaxed"
                />
              </div>

              {activePage === 'Gallery' && (
                <div className="space-y-1.5 pt-4 border-t border-gray-100">
                  <label htmlFor="galleryPhotos" className="block text-sm font-bold text-gray-700">
                    Upload Salon Photos
                  </label>
                  <input
                    id="galleryPhotos"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      setGalleryPhotos((prev) => [...prev, ...files]);
                      setSaved(false);
                      e.target.value = '';
                    }}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer border border-gray-200 rounded-xl bg-gray-50 p-1.5"
                  />

                  {galleryPhotos.length > 0 && (
                    <div className="mt-6">
                      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleGalleryDragEnd}>
                        <SortableContext items={galleryPhotos.map((photo, index) => `${photo.name}-${index}`)} strategy={verticalListSortingStrategy}>
                          {galleryPhotos.map((photo, index) => (
                            <SortableGalleryPhoto
                              key={`${photo.name}-${index}`}
                              photo={photo}
                              index={index}
                              onRemove={() => {
                                setGalleryPhotos((prev) => prev.filter((_, i) => i !== index));
                                setSaved(false);
                              }}
                            />
                          ))}
                        </SortableContext>
                      </DndContext>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* Bottom Actions */}
          <div className="flex justify-between items-center mt-8">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all ${
                activePage === 'Home' 
                  ? 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              disabled={activePage === 'Home'}
              onClick={() => {
                const pageNames = Object.keys(pages);
                setActivePage(pageNames[pageNames.indexOf(activePage) - 1]);
              }}
            >
              ← Previous Page
            </button>

            <button
              type="button"
              className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all ${
                activePage === Object.keys(pages)[Object.keys(pages).length - 1]
                  ? 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              disabled={activePage === Object.keys(pages)[Object.keys(pages).length - 1]}
              onClick={() => {
                const pageNames = Object.keys(pages);
                setActivePage(pageNames[pageNames.indexOf(activePage) + 1]);
              }}
            >
              Next Page →
            </button>
          </div>

          {/* Success Message */}
          {saved && (
            <div className="mt-8 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-semibold flex items-center gap-2 animate-pulse-once">
              <span className="flex items-center justify-center w-5 h-5 bg-green-500 text-white rounded-full text-xs">✓</span>
              Details saved in this browser session.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}