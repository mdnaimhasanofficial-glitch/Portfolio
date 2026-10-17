import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Resume from './pages/Resume';
import ScrollProgressBar from './components/ScrollProgressBar';
import MovingBackground from './components/MovingBackground';
import FloatingScrollTop from './components/FloatingScrollTop';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col justify-between selection:bg-[#38BDF8]/30 selection:text-[#38BDF8] overflow-x-hidden">
        {/* Real-time Glowing Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* Ambient Moving Objects & Code Particles */}
        <MovingBackground />

        {/* Floating Scroll To Top Rocket */}
        <FloatingScrollTop />

        <Navbar />
        <div className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
