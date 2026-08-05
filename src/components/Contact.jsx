import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend, FiGithub, FiLinkedin, FiInstagram, FiMessageSquare, FiMapPin } from 'react-icons/fi';
import confetti from 'canvas-confetti';
import { profileData } from '../data/profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    alert("Terima kasih telah menghubungi saya. Pesan Anda telah diterima!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-mono tracking-widest text-blue-600 dark:text-blue-400 font-semibold"
          >
            Hubungi Saya
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Mari Berkolaborasi <span className="text-blue-600">.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                Punya Proyek Impian atau Peluang Kerjasama?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Saya selalu terbuka untuk berdiskusi tentang proyek aplikasi web baru, ide kreatif, atau kesempatan bergabung dalam tim Anda.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                
                {/* Email */}
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-blue-500 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    <FiMail />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Email</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {profileData.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={profileData.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-blue-500 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    <FiPhone />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">WhatsApp</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      {profileData.phone}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-xl">
                    <FiMapPin />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Domisili</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {profileData.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800">
                <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-3">
                  Media Sosial:
                </div>
                <div className="flex gap-3">
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={profileData.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <FiInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FiMessageSquare className="text-blue-600" />
                <span>Kirim Pesan</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Nama */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase font-mono text-slate-700 dark:text-slate-300">
                    Nama Lengkap <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase font-mono text-slate-700 dark:text-slate-300">
                    Alamat Email <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase font-mono text-slate-700 dark:text-slate-300">
                  Subjek Pesan <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Judul atau topik diskusi..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase font-mono text-slate-700 dark:text-slate-300">
                  Pesan Anda <span className="text-blue-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan detail pesan atau pertanyaan Anda di sini..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <FiSend className="w-5 h-5" />
                <span>Kirim Pesan</span>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
