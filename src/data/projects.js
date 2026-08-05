import deteksiUnggasImg from '../assets/foto/deteksi-unggas.png';
import feCitynestImg from '../assets/foto/fe-citynest.png';
import gomadiunImg from '../assets/foto/gomadiun.png';

export const projectCategories = [
  { id: 'all', name: 'Semua Project' },
  { id: 'frontend', name: 'Frontend Web' },
  { id: 'fullstack', name: 'Fullstack App' },
  { id: 'mobile', name: 'Mobile App' },
  { id: 'uiux', name: 'UI/UX Design' },
];

export const projectsData = [
  {
    id: 'deteksi-unggas',
    title: 'Web Sistem Deteksi Penyakit Unggas Berbasis CNN',
    description: 'Website Sistem Deteksi Penyakit Unggas adalah aplikasi berbasis web yang dirancang khusus untuk membantu peternak dalam mendeteksi penyakit pada unggas secara otomatis menggunakan teknologi Convolutional Neural Network (CNN). Dengan mengunggah foto kotoran unggas, sistem akan menganalisis citra tersebut dan menampilkan hasil prediksi jenis penyakit beserta tingkat keyakinan (confidence level).',
    thumbnail: deteksiUnggasImg,
    category: 'fullstack',
    status: 'Featured',
    technologies: ['Python', 'Tailwind CSS', 'Flask', 'TypeScript', 'CNN', 'MySQL'],
    github: 'https://github.com/RossiStillLearning/V3923018_ROSSI-DWI-CAHYO_UAS_Deteksi-Penyakit-Unggas.git',
    demo: 'https://example.com',
    featured: true,
  },
  {
    id: 'fe-citynest',
    title: 'CityNest',
    description: 'Platform digital yang mengintegrasikan inisiatif untuk memastikan akses perumahan yang layak, pelestarian warisan budaya dan alam, serta mendorong urbanisasi yang inklusif dan berkelanjutan. Sistem ini dirancang untuk memfasilitasi kolaborasi antara pemerintah, masyarakat, dan pemangku kepentingan lainnya dalam mencapai tujuan pembangunan kota yang berkelanjutan.',
    thumbnail: feCitynestImg,
    category: 'frontend',
    status: 'Completed',
    technologies: ['React.js', 'Bootstrap CSS'],
    github: 'https://github.com/RossiStillLearning/FE_Citynest.git',
    demo: 'https://example.com',
    featured: true,
  },
  {
    id: 'gomadiun',
    title: 'GoMadiun',
    description: 'GoMadiun adalah sebuah platform sistem informasi pariwisata berbasis web yang berfungsi sebagai panduan wisata terpadu untuk wilayah Madiun. Sistem ini merupakan produk mandiri yang dapat diakses melalui berbagai peramban web modern di perangkat desktop maupun seluler.',
    thumbnail: gomadiunImg,
    category: 'fullstack',
    status: 'Completed',
    technologies: ['React.js', 'Express.js'],
    github: 'https://github.com/dimsy1/gomadiun3.git',
    demo: 'https://example.com',
    featured: true,
  },
];
