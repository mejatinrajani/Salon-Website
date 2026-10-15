

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
import './WebsiteDetails.css';


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


function SortableGalleryPhoto({
  photo,
  index,
  onRemove,
}) {
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
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="gallery-photo-item"
    >
      <button
        type="button"
        className="gallery-drag-handle"
        {...attributes}
        {...listeners}
        aria-label={`Drag ${photo.name} to reorder`}
        title="Drag to reorder"
      >
        ⠿
      </button>

      <img
        src={photo.url || URL.createObjectURL(photo)}
        alt={photo.name}
        className="gallery-photo-thumbnail"
      />

      <span className="gallery-photo-name">
        {photo.name}
      </span>

      <button
        type="button"
        className="gallery-remove-button"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
}



function WebsiteDetails() {
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
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleGalleryDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    setGalleryPhotos((items) => {
      const oldIndex = items.findIndex(
        (photo, index) => `${photo.name}-${index}` === active.id
      );

      const newIndex = items.findIndex(
        (photo, index) => `${photo.name}-${index}` === over.id
      );

      if (oldIndex < 0 || newIndex < 0) {
        return items;
      }

      return arrayMove(items, oldIndex, newIndex);
    });

    setSaved(false);
  };


const handleSave = async () => {
  try {
    const galleryPhotoData = await Promise.all(
      galleryPhotos.map(async (photo) => {
        // Agar photo pehle se saved hai, toh use dobara convert nahi karna
        if (photo.url) {
          return photo;
        }

        // Nayi photo ko save karne ke liye convert karo
        return new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = () => {
            resolve({
              name: photo.name,
              url: reader.result,
            });
          };

          reader.onerror = () => {
            reject(
              new Error(`Photo read nahi hui: ${photo.name}`)
            );
          };

          reader.readAsDataURL(photo);
        });
      })
    );

    const websiteData = {
      salonName,
      tagline,
      logoName,
      logoPreview,
      pages,
      galleryPhotos: galleryPhotoData,
    };

    sessionStorage.setItem(
      'siteMakerSalonDetails',
      JSON.stringify(websiteData)
    );

    setSaved(true);
    return true;
  } catch (error) {
    console.error('Save error:', error);
    alert(
      'Photos save nahi hui. Kam photos select karke dobara try karein.'
    );
    return false;
  }
};


  return (
    <div className="editor-page">
      <header className="editor-topbar">
        <a href="/" className="editor-brand">
          <span className="editor-brand-icon">S</span>
          <span>SiteMaker</span>
        </a>

        <div className="editor-topbar-center">
          <span className="editor-status-dot" />
          Website Editor
        </div>

       
<div className="editor-topbar-actions">
  <button
    type="button"
    className="editor-back-button"
    onClick={() => {
      window.location.href = '/?page=templates';
    }}
  >
    Back
  </button>

  <button
    type="button"
    className="editor-save-button"
    onClick={handleSave}
  >
    Save Details
  </button>

  {/* YAHAN NAYA BUTTON ADD KARO */}
  <button
    type="button"
    className="editor-preview-button"
   
onClick={async () => {
  await handleSave();
  window.location.href = '/?page=preview';
}}

  >
    Preview Website →
  </button>

</div>
</header>


      <div className="editor-workspace">
        <aside className="editor-sidebar">
          <div className="editor-sidebar-heading">
            <span className="editor-small-label">YOUR WEBSITE</span>
            <h2>Website Pages</h2>
          </div>

          <div className="editor-page-list">
            {Object.keys(pages).map((page) => (
              <button
                type="button"
                key={page}
                className={
                  activePage === page
                    ? 'editor-page-link active'
                    : 'editor-page-link'
                }
                onClick={() => setActivePage(page)}
              >
                <span className="editor-page-icon">
                  {pageIcons[page]}
                </span>
                <span>{page}</span>
                <span className="editor-page-arrow">›</span>
              </button>
            ))}
          </div>

          <div className="editor-sidebar-tip">
            <strong>Quick tip</strong>
            <p>
              Har page select karke uska text edit karein. Save
              Details dabana na bhoolein.
            </p>
          </div>
        </aside>

        <main className="editor-main">
          <div className="editor-heading">
            <div>
              <span className="editor-small-label">
                WEBSITE CUSTOMIZATION
              </span>
              <h1>Edit {activePage} Page</h1>
              <p>
                Apni website ke is page ka content customize karein.
              </p>
            </div>
            <span className="editor-page-count">
              {Object.keys(pages).indexOf(activePage) + 1} /{' '}
              {Object.keys(pages).length}
            </span>
          </div>

          <section className="editor-card">
            <div className="editor-card-heading">
              <div>
                <h2>Business Information</h2>
                <p>Ye details aapki website par use hongi.</p>
              </div>
            </div>

            <div className="editor-field">
              <label htmlFor="editorSalonName">Salon Name</label>
              <input
                id="editorSalonName"
                value={salonName}
                onChange={(event) => {
                  setSalonName(event.target.value);
                  setSaved(false);
                }}
                placeholder="e.g. Glow Beauty Salon"
              />
            </div>

            <div className="editor-field">
              <label htmlFor="editorTagline">Business Tagline</label>
              <input
                id="editorTagline"
                value={tagline}
                onChange={(event) => {
                  setTagline(event.target.value);
                  setSaved(false);
                }}
                placeholder="e.g. Your Beauty, Our Passion"
              />
            </div>

          
<div className="editor-field">
  <label htmlFor="editorLogo">Salon Logo</label>

  
<input
  id="editorLogo"
  type="file"
  accept="image/*"
  onChange={(event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setLogoName(file.name);

    const reader = new FileReader();

    reader.onload = () => {
      setLogoPreview(reader.result);
    };

    reader.readAsDataURL(file);

    setSaved(false);
  }}
/>


  {logoName && (
    <span className="editor-file-name">
      Selected: {logoName}
    </span>
  )}

  {logoPreview && (
    <div className="editor-logo-preview">
      <img src={logoPreview} alt="Salon logo preview" />
    </div>
  )}
</div>

          </section>

          <section className="editor-card">
            <div className="editor-card-heading">
              <div>
                <h2>{activePage} Content</h2>
                <p>
                  Neeche ki details change karne par sirf{' '}
                  {activePage} page ka content update hoga.
                </p>
              </div>
            </div>

            <div className="editor-field">
              <label htmlFor="editorTitle">Page Heading</label>
              <input
                id="editorTitle"
                value={pages[activePage].title}
                onChange={(event) =>
                  updatePage('title', event.target.value)
                }
                placeholder="Enter page heading"
              />
            </div>

            <div className="editor-field">
              <label htmlFor="editorSubtitle">Subheading</label>
              <input
                id="editorSubtitle"
                value={pages[activePage].subtitle}
                onChange={(event) =>
                  updatePage('subtitle', event.target.value)
                }
                placeholder="Enter a short description"
              />
            </div>

            <div className="editor-field">
              <label htmlFor="editorDescription">
                {activePage === 'Gallery'
                  ? 'Gallery Description / Photo Notes'
                  : 'Page Text'}
              </label>
              <textarea
                id="editorDescription"
                rows="6"
                value={pages[activePage].description}
                onChange={(event) =>
                  updatePage('description', event.target.value)
                }
                placeholder="Write your website content here..."
              />
            </div>


            {activePage === 'Gallery' && (
              <div className="editor-field">
                <label htmlFor="galleryPhotos">
                  Upload Salon Photos
                </label>

                <input
                  id="galleryPhotos"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(event) => {
                    const files = Array.from(
                      event.target.files || []
                    );

                    setGalleryPhotos((previous) => [
                      ...previous,
                      ...files,
                    ]);

                    setSaved(false);
                    event.target.value = '';
                  }}
                />

                {galleryPhotos.length > 0 && (
                  <div>
                    

<DndContext
  sensors={sensors}
  collisionDetection={closestCenter}
  onDragEnd={handleGalleryDragEnd}
>
  <SortableContext
    items={galleryPhotos.map(
      (photo, index) => `${photo.name}-${index}`
    )}
    strategy={verticalListSortingStrategy}
  >
    {galleryPhotos.map((photo, index) => (
      <SortableGalleryPhoto
        key={`${photo.name}-${index}`}
        photo={photo}
        index={index}
        onRemove={() => {
          setGalleryPhotos((previous) =>
            previous.filter((_, i) => i !== index)
          );
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


          </section>

          <div className="editor-bottom-actions">
            <button
              type="button"
              className="editor-previous-button"
              disabled={activePage === 'Home'}
              onClick={() => {
                const pageNames = Object.keys(pages);
                const currentIndex = pageNames.indexOf(activePage);
                setActivePage(pageNames[currentIndex - 1]);
              }}
            >
              ← Previous Page
            </button>

            <button
              type="button"
              className="editor-next-button"
              disabled={
                activePage ===
                Object.keys(pages)[Object.keys(pages).length - 1]
              }
              onClick={() => {
                const pageNames = Object.keys(pages);
                const currentIndex = pageNames.indexOf(activePage);
                setActivePage(pageNames[currentIndex + 1]);
              }}
            >
              Next Page →
            </button>
          </div>

          {saved && (
            <div className="editor-saved-message" role="status">
              ✓ Details saved in this browser session.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default WebsiteDetails;
