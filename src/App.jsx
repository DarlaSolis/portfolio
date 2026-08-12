import { useState } from 'react';
import Welcome from './components/Welcome';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './components/Contact';
import Others from './pages/Others';
import ProjectDetail from './pages/ProjectDetail';
import { ProjectModalProvider } from './context/ProjectModalContext';
import './styles/global.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <ProjectModalProvider>
      {showWelcome && <Welcome onFinish={() => setShowWelcome(false)} />}

      <div className="pixel-grid-layer" />
      <div className="grain-layer" />
      <div className="scanlines" />
      <AmbientBackground />

      <Navbar />

      {/* Página de corrido profesional */}
      <main className="page-transition">
        <Home />
        <About />
        <Projects />
        <Others />
        <Contact />
      </main>

      <ProjectDetail />
    </ProjectModalProvider>
  );
}

export default App;