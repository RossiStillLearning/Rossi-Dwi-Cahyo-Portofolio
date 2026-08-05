import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData, skillCategories } from '../data/skills';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-mono tracking-widest text-blue-600 dark:text-blue-400 font-semibold"
          >
            Keahlian Teknis
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Skills & Teknologi <span className="text-blue-600">.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full"
          />
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'glass-card border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-500'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-transform group-hover:scale-110 shadow-sm"
                        style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                      >
                        <Icon />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-base">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-sm text-blue-600 dark:text-blue-400">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full h-2.5 bg-slate-200/70 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
