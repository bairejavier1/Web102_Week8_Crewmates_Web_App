import { Link } from 'react-router-dom';
import { slugify } from '../lib/slugify.js';

function CrewmateCard({ crewmate }) {
  const slug = slugify(crewmate.name);

  return (
    <div style={{ width: '200px', textAlign: 'center' }}>
      <Link
        to={`/crewmate/${slug}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '1rem',
          transition: 'transform 0.2s',
          cursor: 'pointer',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <img
          src="https://images.wallpapersden.com/image/download/crewmate-among-us_bGhqZWqUmZqaraWkpJRmbmdlrWZlbWU.jpg"
          alt="Crewmate"
          style={{ width: '100%', borderRadius: '8px', marginBottom: '0.5rem' }}
        />
        <h4>{crewmate.name}</h4>
        <p>Speed: {crewmate.speed} mph</p>
        <p>Color: {crewmate.color}</p>
      </Link>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
        <Link to={`/edit/${slug}`}>
          <button>Edit</button>
        </Link>
        <Link to={`/crewmate/${slug}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default CrewmateCard;
