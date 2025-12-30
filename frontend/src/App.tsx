import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

// Currently using bento.me style (new)
// To switch back to bento.link style, import from:
// - './pages/EditorPage' instead of './pages/EditorPageBentoMe'
// - './pages/ProfilePage' instead of './pages/ProfilePageBentoMe'
import EditorPageBentoMe from './pages/EditorPageBentoMe';
import ProfilePageBentoMe from './pages/ProfilePageBentoMe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<EditorPageBentoMe />} />
        <Route path="/p/:username" element={<ProfilePageBentoMe />} />
        {/* Legacy route for backward compatibility */}
        <Route path="/:username" element={<ProfilePageBentoMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
