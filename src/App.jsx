import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollProgressBar from "./components/ScrollProgressBar";
import MovingBackground from "./components/MovingBackground";
import FloatingScrollTop from "./components/FloatingScrollTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import CustomCursor from "./components/CustomCursor";
import PageLoader from "./components/PageLoader";

// Route-level code splitting — secondary pages load on demand
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Resume = lazy(() => import("./pages/Resume"));

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 60);
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
      <div className="relative min-h-screen bg-ink text-fg flex flex-col justify-between overflow-x-hidden font-sans">
        <PageLoader />
        <CustomCursor />
        <ScrollProgressBar />
        <MovingBackground />
        <FloatingScrollTop />
        <FloatingWhatsApp />
        <ScrollToHash />
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
