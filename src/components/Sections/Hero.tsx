import React, { useState, useEffect } from 'react';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 12 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl w-full px-4 flex flex-col lg:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left - Text Section */}
        <div className="text-center lg:text-left max-w-2xl">
          <motion.div variants={itemVariants} className="mb-5">
            <span className="inline-block px-5 py-2 text-sm font-semibold text-white bg-white/10 rounded-full border border-white/20 backdrop-blur-md">
              Software Engineer (Backend & AI Systems)
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl font-bold font-poppins mb-4 tracking-tight leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            <span className="text-white">Kishan Kumar</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl sm:text-3xl text-white/80 mb-8 h-12 tracking-wide"
          >
            <span className="border-r-2 border-white pr-2 animate-blink">
              {currentText}
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-white/70 max-w-xl mx-auto lg:mx-0 mb-10"
          >
            Backend & AI Engineer designing scalable distributed systems and production LLM pipelines. Architected event-driven
            services with idempotent processing and async workflows, achieving 3× throughput gains and 56% latency reduction.
            Experienced in building cost-optimized, fault-tolerant systems with strong emphasis on system design and performance
            engineering.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
          >
            <Button
              onClick={handleDownloadResume}
              variant="hero"
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
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start space-x-5"
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="text-white p-3 border border-white/20 bg-white/5 backdrop-blur-lg rounded-full hover:bg-white/10 transition-all"
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right - Image Section */}
        <motion.div
          className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-lg"
          variants={itemVariants}
        >
          <img
            src={profileImg}
            alt="Kishan Kumar"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={floatingVariants}
        animate="animate"
      >
        <div className="flex flex-col items-center space-y-1 text-white/50">
          <span className="text-xs font-semibold uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start">
            <motion.div
              className="w-1 h-3 bg-white/50 rounded-full mt-1"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;