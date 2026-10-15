
import './Category.css';

const categories = [
  {
    name: 'Salon & Beauty',
    description:
      'Create a professional website for your salon or beauty studio.',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    available: true,
    label: 'Available Now',
  },
  {
    name: 'Gym & Fitness',
    description:
      'Showcase your gym, trainers, facilities and fitness programs.',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    available: false,
    label: 'Coming Soon',
  },
  {
    name: 'Coaching Institute',
    description:
      'Build an online presence for your coaching institute.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    available: false,
    label: 'Coming Soon',
  },
];

function Category() {
  return (
    <div className="category-page">
      <header className="category-navbar">
        <a href="/" className="category-brand">
          <span className="category-brand-icon">S</span>
          <span>SiteMaker</span>
        </a>

        <button
          className="category-logout"
          onClick={() =>
            alert('Logout functionality will be added later.')
          }
        >
          Logout
        </button>
      </header>

      <main className="category-main">
        <div className="category-welcome">
          <span className="category-eyebrow">
            LET'S GET STARTED
          </span>

          <h1>Choose Your Business Category</h1>

          <p>
            Apne business ki category chunein. Hum aapke liye
            website banane ka process simple rakhenge.
          </p>
        </div>

        <div className="category-options">
          {categories.map((category) => (
            <article
              className="business-card"
              key={category.name}
            >
              <div className="business-card-image">
                <img
                  src={category.image}
                  alt={category.name}
                />

                <span
                  className={
                    category.available
                      ? 'business-status available'
                      : 'business-status'
                  }
                >
                  {category.label}
                </span>
              </div>

              <div className="business-card-content">
                <h2>{category.name}</h2>
                <p>{category.description}</p>

                <button
                  className={
                    category.available
                      ? 'business-select'
                      : 'business-select disabled'
                  }
                  disabled={!category.available}
                  onClick={() => {
                    window.location.href = '/?page=templates';
                  }}
                >
                  {category.available
                    ? 'Choose Salon →'
                    : 'Coming Soon'}
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="category-help">
          Need help? You can choose another category when it
          becomes available.
        </p>
      </main>

      <footer className="category-footer">
        © {new Date().getFullYear()} SiteMaker. All rights reserved.
      </footer>
    </div>
  );
}

export default Category;
