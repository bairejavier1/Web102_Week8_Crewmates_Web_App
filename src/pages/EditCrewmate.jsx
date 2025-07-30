import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient.js';

const colors = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow'];

function EditCrewmate() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState(colors[0]);
  const [feedback, setFeedback] = useState('');
  const [id, setId] = useState(null); // ✅ Needed for update/delete

  useEffect(() => {
    const loadData = async () => {
      const nameQuery = slug.replace(/-/g, ' ').toLowerCase();

      const { data } = await supabase
        .from('crewmates')
        .select('*')
        .ilike('name', nameQuery)
        .single();

      if (data) {
        setName(data.name);
        setSpeed(data.speed);
        setColor(data.color);
        setId(data.id);
      }
    };
    loadData();
  }, [slug]);

  const handleUpdate = async () => {
    await supabase.from('crewmates').update({
      name,
      speed: parseFloat(speed),
      color,
    }).eq('id', id);
    setFeedback('Crewmate updated!');
    setTimeout(() => {
      setFeedback('');
      navigate('/gallery');
    }, 1000);
  };

  const handleDelete = async () => {
    await supabase.from('crewmates').delete().eq('id', id);
    setFeedback('Crewmate deleted.');
    setTimeout(() => {
      setFeedback('');
      navigate('/gallery');
    }, 1000);
  };

  return (
    <div>
      <h2>Edit Your Crewmate</h2>
      <p>Update info for <strong>{name}</strong>: {speed} mph, {color}</p>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="number" placeholder="Speed in mph" value={speed} onChange={e => setSpeed(e.target.value)} />
      <select value={color} onChange={e => setColor(e.target.value)}>
        {colors.map(c => <option key={c}>{c}</option>)}
      </select>
      <br />
      <button onClick={handleUpdate}>Save Changes</button>
      <button onClick={handleDelete} style={{ marginLeft: '1rem', backgroundColor: '#c0392b' }}>Delete Crewmate</button>
      {feedback && <p style={{ color: 'lightgreen', marginTop: '1rem' }}>{feedback}</p>}
    </div>
  );
}

export default EditCrewmate;
