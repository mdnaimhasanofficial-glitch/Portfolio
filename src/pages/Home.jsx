import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <main>
      <Hero />
      <ScrollReveal delay={100} direction="up">
        <AboutMe />
      </ScrollReveal>
      <ScrollReveal delay={100} direction="up">
        <Skills />
      </ScrollReveal>
      <ScrollReveal delay={100} direction="up">
        <Projects />
      </ScrollReveal>
      <ScrollReveal delay={100} direction="up">
        <Education />
      </ScrollReveal>
      <ScrollReveal delay={100} direction="up">
        <Experience />
      </ScrollReveal>
      <ScrollReveal delay={100} direction="up">
        <Contact />
      </ScrollReveal>
    </main>
  );
};

export default Home;
