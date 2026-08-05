import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiBookOpen, FiGlobe, FiHeart, FiCheckCircle } from 'react-icons/fi';
import { profileData } from '../data/profile';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-mono tracking-widest text-blue-600 dark:text-blue-400 font-semibold"
          >
            Mengenal Saya
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Tentang Saya <span className="text-blue-600">.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Photo & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-4 border border-slate-200/80 dark:border-slate-800 shadow-xl">
              <img
                src={profileData.avatar}
                alt={`About ${profileData.name}`}
                className="w-full h-80 sm:h-96 object-contain rounded-2xl bg-slate-900/20 p-2"
              />
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <div className="font-bold text-xl">{profileData.name}</div>
                  <div className="text-xs text-slate-300 font-mono">{profileData.role}</div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {profileData.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center hover:border-blue-500/50 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Bio & Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Bio Narrative */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FiUser className="text-blue-600" />
                <span>Biografi Singkat</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {profileData.bioLong}
              </p>
            </div>

            {/* Key Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Pendidikan */}
              <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-2 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  <div className="p-2 rounded-xl bg-blue-500/10">
                    <FiBookOpen className="w-5 h-5" />
                  </div>
                  <span>Pendidikan</span>
                </div>
                <p className="text-slate-700 dark:text-slate-200 font-medium text-sm pt-1">
                  {profileData.quickInfo.education}
                </p>
              </div>

              {/* Lokasi */}
              <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-2 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  <div className="p-2 rounded-xl bg-blue-500/10">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <span>Lokasi</span>
                </div>
                <p className="text-slate-700 dark:text-slate-200 font-medium text-sm pt-1">
                  {profileData.location}
                </p>
              </div>

              {/* Bahasa */}
              <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  <div className="p-2 rounded-xl bg-blue-500/10">
                    <FiGlobe className="w-5 h-5" />
                  </div>
                  <span>Bahasa</span>
                </div>
                <div className="space-y-1.5 pt-1">
                  {profileData.quickInfo.languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{lang.name}</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-mono">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hobi */}
              <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  <div className="p-2 rounded-xl bg-blue-500/10">
                    <FiHeart className="w-5 h-5" />
                  </div>
                  <span>Hobi & Minat</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {profileData.quickInfo.hobbies.map((hobby) => (
                    <span
                      key={hobby}
                      className="px-2.5 py-1 rounded-lg bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
