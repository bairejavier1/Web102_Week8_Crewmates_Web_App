import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div style={{
      backgroundColor: '#111',
      padding: '2rem 1rem',
      height: '100vh',
      width: '180px',
      borderRight: '1px solid #333',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}>
      <img
        src="https://images.wallpapersden.com/image/download/crewmate-hd-among-us_bGlpaW2UmZqaraWkpJRsa21lrWloZ2U.jpg"
        alt="Crewmate Icon"
        style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }}
      />
      <h3 style={{ color: '#B9F2FF', marginBottom: '1rem' }}>Menu</h3>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '1rem' }}>
            <Link to="/">🏠 Home</Link>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <Link to="/create">🛠️ Create a Crewmate</Link>
          </li>
          <li>
            <Link to="/gallery">🖼️ Crewmate Gallery</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
