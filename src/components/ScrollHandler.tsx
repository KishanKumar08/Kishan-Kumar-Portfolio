import React, { useEffect } from 'react';

interface ScrollHandlerProps {
  onSectionChange: (section: string) => void;
}

const ScrollHandler: React.FC<ScrollHandlerProps> = ({ onSectionChange }) => {

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;

      // Update scroll progress indicator
      const progressBar = document.querySelector('.scroll-indicator') as HTMLElement;
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress / 100})`;
      }

      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const threshold = window.innerHeight * 0.3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom >= threshold) {
            onSectionChange(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSectionChange]);

  return null;
};

export default ScrollHandler;