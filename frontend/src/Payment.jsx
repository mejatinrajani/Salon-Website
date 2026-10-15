
import './Payment.css';

function Payment() {
  return (
    <div className="payment-page">
      <div className="payment-card">
        
<button
  type="button"
  className="payment-back-button"
  onClick={() => {
    window.location.href = '?page=preview';
  }}
>
  ← Back to Preview
</button>

        <p className="payment-label">YOUR PLAN</p>

        <h1>Yearly Website Plan</h1>

        <p className="payment-description">
          Apne business ke liye professional website banayein.
        </p>

        <div className="payment-price">
          <span className="currency">₹</span>
          <span className="amount">999</span>
          <span className="duration">/ year</span>
        </div>

        <div className="payment-divider"></div>

        <h3>Plan mein kya milega?</h3>

        <ul className="payment-features">
          <li>✓ Professional business website</li>
          <li>✓ Mobile-friendly design</li>
          <li>✓ Home, About aur Contact pages</li>
          <li>✓ Gallery aur business details</li>
          <li>✓ Salon website template</li>
        </ul>

        
<button
  type="button"
  className="payment-button"
  onClick={() => {
    window.location.href = '?page=publish';
  }}
>
  Continue to Publish →
</button>


        <p className="payment-note">
          Abhi demo page hai. Real payment abhi enable nahi hai.
        </p>
      </div>
    </div>
  );
}

export default Payment;
