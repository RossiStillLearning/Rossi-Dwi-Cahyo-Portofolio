import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiTag } from 'react-icons/fi';
import { projectsData, projectCategories } from '../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-mono tracking-widest text-blue-600 dark:text-blue-400 font-semibold"
          >
            Portofolio Terpilih
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Project Karya <span className="text-blue-600">.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'glass-card border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
              >
                {/* Project Image & Overlay */}
                <div className="relative overflow-hidden aspect-video bg-slate-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-wider">
                      {project.status}
                    </span>
                  </div>

                  {/* Quick Action Overlay Buttons */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repo"
                      className="p-2.5 rounded-xl bg-slate-900/90 text-white hover:bg-blue-600 transition-colors backdrop-blur-md border border-white/10"
                    >
                      <FiGithub className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-md border border-blue-400/30"
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-blue-500/10 dark:bg-blue-400/10 text-blue-700 dark:text-blue-300 text-xs font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
