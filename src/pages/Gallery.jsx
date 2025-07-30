import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient.js';
import CrewmateCard from '../components/CrewmateCard.jsx';

function Gallery() {
  const [crewmates, setCrewmates] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 Add loading state

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data } = await supabase.from('crewmates').select('*');
      setCrewmates(data || []);
      setLoading(false); // 👈 Mark loading complete
    };
    fetchCrewmates();
  }, []);

  return (
    <div>
      <h2>Your Crewmate Gallery!</h2>
      {loading ? (
        <p>Loading crewmates...</p> // 👈 Prevents premature empty state message
      ) : crewmates.length === 0 ? (
        <p>You haven't made a crewmate yet!</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '1rem'
          }}
        >
          {crewmates.map(c => <CrewmateCard key={c.id} crewmate={c} />)}
        </div>
      )}
    </div>
  );
}

export default Gallery;
