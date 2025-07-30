import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Home from './pages/Home.jsx';
import CreateCrewmate from './pages/CreateCrewmate.jsx';
import Gallery from './pages/Gallery.jsx';
import EditCrewmate from './pages/EditCrewmate.jsx';
import CrewmateDetail from './pages/CrewmateDetail.jsx';

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/edit/:slug" element={<EditCrewmate />} /> {/* Updated */}
          <Route path="/crewmate/:slug" element={<CrewmateDetail />} /> {/* Updated */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
