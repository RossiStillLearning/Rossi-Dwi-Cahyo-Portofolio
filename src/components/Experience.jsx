import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-mono tracking-widest text-blue-600 dark:text-blue-400 font-semibold"
          >
            Karir & Organisasi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Pengalaman Kerja <span className="text-blue-600">.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-slate-300 dark:to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40 ring-4 ring-slate-50 dark:ring-slate-900">
                    <FiBriefcase className="w-4 h-4" />
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-10' : 'md:pr-10'}`}>
                    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl">
                      
                      {/* Meta header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs font-semibold font-mono flex items-center gap-1.5">
                          <FiCalendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                          <FiMapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                        {exp.company} <span className="text-slate-400 font-normal">({exp.type})</span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements List */}
                      <div className="space-y-2 border-t border-slate-200/60 dark:border-slate-800/80 pt-4">
                        {exp.achievements.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            <FiCheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
