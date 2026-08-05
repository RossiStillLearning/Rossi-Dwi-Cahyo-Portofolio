
import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiSend, FiGithub, FiLinkedin, FiInstagram, FiCode } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { profileData } from '../data/profile';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Aurora Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/30 to-indigo-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-float-delayed" />
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-[90px] pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase shadow-sm backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <HiSparkles className="w-3.5 h-3.5" />
              <span>Available for New Projects & Roles</span>
            </motion.div>

            {/* Title & Role */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Halo, saya <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400">
                  {profileData.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <FiCode className="text-blue-500" />
                <span>{profileData.role}</span>
              </h2>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {profileData.bioShort}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/25 flex items-center gap-2 group transition-all"
              >
                <span>Contact Me</span>
                <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={profileData.cvUrl}
                download="CV_ROSSI_DWI_CAHYO.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-xl glass-card text-slate-800 dark:text-slate-200 font-semibold border border-slate-300/80 dark:border-slate-700/80 hover:border-blue-500 dark:hover:border-blue-400 flex items-center gap-2 transition-all shadow-sm"
              >
                <FiDownload className="w-4 h-4 text-blue-500" />
                <span>Download CV</span>
              </motion.a>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 flex items-center gap-4 text-slate-600 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold font-mono">Ikuti Saya:</span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FiInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Image / Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4] sm:aspect-[4/5]">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-cyan-400/30 blur-xl animate-pulse-slow" />
              
              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass-panel p-3 border border-white/40 dark:border-white/10 shadow-2xl bg-slate-900/20">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-full h-full object-contain rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Stat Card (Top Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2.5 rounded-2xl border border-white/40 dark:border-white/10 shadow-lg flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-lg">
                  ⚡
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Spesialis</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white">React & Next.js</div>
                </div>
              </motion.div>

              {/* Floating Stat Card (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2.5 rounded-2xl border border-white/40 dark:border-white/10 shadow-lg flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-500 font-bold text-lg">
                  🏆
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Pengalaman</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white">{profileData.stats[0]?.value || "2+"} Tahun Tech</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
