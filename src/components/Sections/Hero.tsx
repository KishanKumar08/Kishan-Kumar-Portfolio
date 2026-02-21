import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FiDownload,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode
} from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.png';
import profileImg from '@/assets/kishan.jpeg';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Software Engineer',
    'AI Engineer',
    'Specialized in Backend & AI Systems'
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/KishanKumar08', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kishan-kumar08/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:kmali4551@gmail.com', label: 'Email' },
    { icon: FiCode, href: 'https://leetcode.com/u/kishan141/', label: 'LeetCode' }
  ];

  // Stable particles (no rerender randomness)
  const particles = useMemo(
    () =>
      Array.from({ length: 25 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 2,
      })),
    []
  );

  // Typewriter
  useEffect(() => {
    const currentWord = texts[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 90);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/kishan.pdf';
    link.download = 'Kishan_Kumar_Resume.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-start lg:items-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
            }}
            animate={{
              y: [-10, 10],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-24 lg:pt-0">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left */}
          <div className="text-center lg:text-left max-w-2xl">
            <span className="inline-block px-5 py-2 text-sm font-semibold text-white bg-white/10 rounded-full border border-white/20 backdrop-blur-md mb-6">
              Software Engineer (Backend & AI Systems)
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-poppins mb-4 tracking-tight leading-tight">
              Kishan Kumar
            </h1>

            <div className="text-xl sm:text-2xl text-white/80 mb-8">
              <span className="border-r-2 border-white pr-2 animate-blink">
                {currentText}
              </span>
            </div>

            <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Backend & AI Engineer designing scalable distributed systems and production LLM pipelines.
              Architected event-driven services with idempotent processing and async workflows,
              achieving 3× throughput gains and 56% latency reduction.
              Experienced in building cost-optimized, fault-tolerant systems with strong emphasis on system design and performance engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="group shadow-xl hover:shadow-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 transition-transform"
              >
                <FiDownload className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>

              <Button
                onClick={scrollToProjects}
                variant="outline"
                size="lg"
                className="group border-white text-white hover:border-pink-500 hover:text-pink-400 hover:scale-105 transition-transform"
              >
                View Projects
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-5">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white p-3 border border-white/20 bg-white/5 backdrop-blur-lg rounded-full hover:bg-white/10 transition-all"
                  aria-label={label}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
              <img
                src={profileImg}
                alt="Kishan Kumar"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;