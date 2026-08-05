import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiAward } from 'react-icons/fi';

const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl glass-card bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl z-10 text-white"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                <FiAward className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white leading-tight">{certificate.name}</h3>
                <p className="text-xs text-slate-400 font-mono">{certificate.issuer} • {certificate.year}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Image Preview */}
          <div className="p-6 space-y-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner">
              <img
                src={certificate.image}
                alt={certificate.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Certificate Details */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold">
                Keahlian Terverifikasi:
              </div>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="flex items-center justify-between p-6 border-t border-slate-800 bg-slate-950/40">
            <span className="text-xs text-slate-400 font-mono">
              Credential ID: <span className="text-slate-200">{certificate.credentialId}</span>
            </span>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors"
              >
                Tutup
              </button>
              <a
                href={certificate.pdfUrl}
                download={`${certificate.name}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-colors"
              >
                <FiDownload className="w-4 h-4" />
                <span>Unduh Sertifikat</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
