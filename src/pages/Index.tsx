import { useState } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Skills from '@/components/Sections/Skills';
import Projects from '@/components/Sections/Projects';
import Contact from '@/components/Sections/Contact';
import ScrollHandler from '@/components/ScrollHandler';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <div className="min-h-screen bg-background font-inter">
        <ScrollHandler onSectionChange={setActiveSection} />
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;