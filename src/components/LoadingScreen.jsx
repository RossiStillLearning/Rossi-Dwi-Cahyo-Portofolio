import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white select-none"
    >
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulsing ring */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-32 h-32 rounded-full border-2 border-dashed border-blue-500/50 absolute"
        />

        {/* Inner spinning gradient ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 rounded-full border-4 border-t-blue-600 border-r-blue-400 border-b-indigo-500 border-l-transparent"
        />

        {/* Center Logo/Initial */}
        <span className="absolute font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          {profileData.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-center"
      >
        <h3 className="font-semibold text-lg tracking-wide text-slate-200">
          {profileData.name} <span className="text-blue-500">.</span>
        </h3>
        <p className="text-xs text-slate-400 mt-1 font-mono tracking-widest uppercase">
          Loading Portfolio...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
