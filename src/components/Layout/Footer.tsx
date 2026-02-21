import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/KishanKumar08', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/kishan-kumar08', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:kmali4551@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0f0c29] text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold font-poppins mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Kishan Kumar
            </h3>
            {/* <p className="text-white/70">Building exceptional digital experiences</p> */}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:shadow-[0_0_12px_rgba(236,72,153,0.6)] transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll to Top & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right space-y-4"
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full border-white/20 text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={20} />
            </Button>
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Kishan Kumar. All rights reserved.
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-1 mt-8 mx-auto max-w-sm bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-full"
        />
      </div>
    </footer>
  );
};

export default Footer;
