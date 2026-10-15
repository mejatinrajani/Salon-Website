
import './Publish.css';

function Publish() {
  return (
    <div className="publish-page">
      <div className="publish-card">
        <div className="publish-icon">🚀</div>

        <p className="publish-label">ALMOST THERE!</p>

        <h1>Publish Your Website</h1>

        <p className="publish-description">
          Aapki website ready hone wali hai! Publish karne se pehle
          apni details aur preview ek baar check kar lein.
        </p>

        <div className="publish-summary">
          <div className="publish-status">
            <span className="status-dot"></span>
            Website preview ready
          </div>

          <p>
            <strong>Plan:</strong> Yearly Website Plan
          </p>

          <p>
            <strong>Price:</strong> ₹999/year
          </p>
        </div>

        <button
          type="button"
          className="publish-button"
          onClick={() =>
            alert('Website publishing backend baad mein add karenge.')
          }
        >
          Publish Website →
        </button>

<button
  type="button"
  className="publish-back-button"
  onClick={() => {
    window.location.href = '?page=preview';
  }}
>
  ← Back to Preview
</button>

        <p className="publish-note">
          Demo only — abhi website publicly publish nahi hui hai.
        </p>
      </div>
    </div>
  );
}

export default Publish;
