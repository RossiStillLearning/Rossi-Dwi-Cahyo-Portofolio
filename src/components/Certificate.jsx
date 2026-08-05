import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiDownload, FiCalendar } from 'react-icons/fi';
import { certificatesData } from '../data/certificates';
import CertificateModal from './CertificateModal';

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificate" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-mono tracking-widest text-blue-600 dark:text-blue-400 font-semibold"
          >
            Lisensi & Sertifikasi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Sertifikat Profesional <span className="text-blue-600">.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full"
          />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl flex flex-col sm:flex-row"
            >
              {/* Certificate Image Thumbnail */}
              <div className="sm:w-2/5 relative bg-slate-900 overflow-hidden aspect-video sm:aspect-auto">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Certificate Content */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs">
                    <FiCalendar className="w-3.5 h-3.5" />
                    <span>{cert.year}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs font-medium">
                    Penerbit: <span className="text-slate-800 dark:text-slate-200 font-semibold">{cert.issuer}</span>
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-colors"
                  >
                    <FiEye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>
                  <a
                    href={cert.pdfUrl}
                    download={`${cert.name}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-blue-600 border border-slate-300 dark:border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <FiDownload className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal Component */}
        {selectedCert && (
          <CertificateModal
            certificate={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}

      </div>
    </section>
  );
};

export default Certificate;
