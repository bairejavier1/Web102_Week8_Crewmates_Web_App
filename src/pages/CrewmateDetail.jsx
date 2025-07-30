import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient.js';
import { slugify } from '../lib/slugify.js';

function CrewmateDetail() {
  const { slug } = useParams();
  const [crewmate, setCrewmate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const nameQuery = slug.replace(/-/g, ' ').toLowerCase();

      const { data } = await supabase
        .from('crewmates')
        .select('*')
        .ilike('name', nameQuery)
        .single();

      setCrewmate(data);
      setLoading(false);
    };
    fetchData();
  }, [slug]);

  if (loading) return <p>Loading crewmate info...</p>;
  if (!crewmate) return <p>Crewmate not found.</p>;

  return (
    <div>
      <h2>Crewmate Details</h2>
      <img
        src="https://images.wallpapersden.com/image/download/crewmate-among-us_bGhqZWqUmZqaraWkpJRmbmdlrWZlbWU.jpg"
        alt="Crewmate"
        style={{ width: '250px', borderRadius: '12px', marginBottom: '1rem' }}
      />
      <p><strong>Name:</strong> {crewmate.name}</p>
      <p><strong>Speed:</strong> {crewmate.speed} mph</p>
      <p><strong>Color:</strong> {crewmate.color}</p>
      <p><strong>Created:</strong> {new Date(crewmate.created_at).toLocaleString()}</p>

      <Link to={`/edit/${slugify(crewmate.name)}`}>
        <button style={{ marginTop: '1rem' }}>Edit This Crewmate</button>
      </Link>
    </div>
  );
}

export default CrewmateDetail;
