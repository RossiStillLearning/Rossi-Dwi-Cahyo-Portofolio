import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from 'react-icons/fi';
import { profileData } from '../data/profile';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-slate-100/40 dark:bg-slate-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
          <div className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <span>{profileData.name}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="text-xs font-mono font-normal text-slate-500">2026 Edition</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {profileData.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white transition-colors"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white transition-colors"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href={profileData.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="p-2.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white transition-colors"
          >
            <FiInstagram className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Quick Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 text-xs font-semibold transition-colors"
          >
            <span>Back To Top</span>
            <FiArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
