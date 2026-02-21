import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-[#0f0c29] relative overflow-hidden text-white"
    >
      {/* Subtle Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-white/60 max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          I’m open to meaningful engineering conversations —
          distributed systems, AI infrastructure, or scalable backend architecture.
        </motion.p>

        {/* Email Card */}
        <motion.a
          href="mailto:kmali4551@gmail.com"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-4 px-10 py-6 rounded-2xl 
                     bg-white/5 border border-white/10 
                     hover:border-purple-400/50 hover:bg-white/10 
                     transition-all duration-300"
        >
          <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
            <FiMail size={22} />
          </div>

          <div className="text-left">
            <p className="text-sm text-white/50 uppercase tracking-wider">
              Email
            </p>
            <p className="text-lg font-medium">
              kmali4551@gmail.com
            </p>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;