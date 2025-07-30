import { useState } from 'react';
import { supabase } from '../lib/supabaseClient.js';

const colors = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow'];

function CreateCrewmate() {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState(colors[0]);
  const [confirmation, setConfirmation] = useState('');

  const handleCreate = async () => {
    if (!name || !speed) return;
    await supabase.from('crewmates').insert([
      { name, speed: parseFloat(speed), color }
    ]);
    setName('');
    setSpeed('');
    setColor(colors[0]);
    setConfirmation('Crewmate created successfully!');
    setTimeout(() => setConfirmation(''), 3000);
  };

  return (
    <div>
      <h2>Create a New Crewmate</h2>
      <input placeholder="Enter crewmate's name" value={name} onChange={e => setName(e.target.value)} />
      <input type="number" placeholder="Enter speed in mph" value={speed} onChange={e => setSpeed(e.target.value)} />
      <select value={color} onChange={e => setColor(e.target.value)}>
        {colors.map(c => <option key={c}>{c}</option>)}
      </select>
      <br />
      <button onClick={handleCreate}>Create Crewmate</button>
      {confirmation && <p style={{ color: 'lightgreen' }}>{confirmation}</p>}
    </div>
  );
}

export default CreateCrewmate;
