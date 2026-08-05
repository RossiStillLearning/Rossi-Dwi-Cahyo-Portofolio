import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiVite, 
  SiRedux, 
  SiNodedotjs, 
  SiExpress, 
  SiPhp,
  SiLaravel,
  SiPython, 
  SiGraphql, 
  SiFlutter, 
  SiReact as SiReactNative, 
  SiFigma, 
  SiFramer, 
  SiMysql,
  SiPostgresql, 
  SiMongodb, 
  SiFirebase, 
  SiGit, 
  SiDocker, 
  SiVercel, 
  SiWebpack,
  SiPostman
} from 'react-icons/si';
import { FaCode, FaPaintBrush, FaServer, FaMobileAlt, FaDatabase, FaTools } from 'react-icons/fa';

export const skillCategories = [
  { id: 'all', name: 'Semua Skill', icon: FaCode },
  { id: 'frontend', name: 'Frontend', icon: FaCode },
  { id: 'backend', name: 'Backend', icon: FaServer },
  { id: 'mobile', name: 'Mobile', icon: FaMobileAlt },
  { id: 'uiux', name: 'UI/UX', icon: FaPaintBrush },
  { id: 'database', name: 'Database', icon: FaDatabase },
  { id: 'tools', name: 'Tools', icon: FaTools },
];

export const skillsData = [
  // Frontend
  { name: 'React.js', percentage: 95, category: 'frontend', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', percentage: 90, category: 'frontend', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', percentage: 88, category: 'frontend', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', percentage: 96, category: 'frontend', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Vite / Webpack', percentage: 85, category: 'frontend', icon: SiVite, color: '#646CFF' },
  { name: 'Redux / Zustand', percentage: 88, category: 'frontend', icon: SiRedux, color: '#764ABC' },

  // Backend
  { name: 'PHP', percentage: 88, category: 'backend', icon: SiPhp, color: '#777BB4' },
  { name: 'Laravel', percentage: 90, category: 'backend', icon: SiLaravel, color: '#FF2D20' },
  { name: 'Node.js', percentage: 85, category: 'backend', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', percentage: 82, category: 'backend', icon: SiExpress, color: '#000000' },
  { name: 'Python (FastAPI)', percentage: 78, category: 'backend', icon: SiPython, color: '#3776AB' },
  { name: 'REST & GraphQL', percentage: 84, category: 'backend', icon: SiGraphql, color: '#E10098' },

  // Mobile
  { name: 'React Native', percentage: 82, category: 'mobile', icon: SiReactNative, color: '#61DAFB' },
  { name: 'Flutter', percentage: 75, category: 'mobile', icon: SiFlutter, color: '#02569B' },

  // UI/UX
  { name: 'Figma & Design System', percentage: 92, category: 'uiux', icon: SiFigma, color: '#F24E1E' },
  { name: 'Framer Motion / UX', percentage: 90, category: 'uiux', icon: SiFramer, color: '#0055FF' },

  // Database
  { name: 'MySQL', percentage: 90, category: 'database', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', percentage: 80, category: 'database', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', percentage: 82, category: 'database', icon: SiMongodb, color: '#47A248' },
  { name: 'Firebase / Supabase', percentage: 88, category: 'database', icon: SiFirebase, color: '#FFCA28' },

  // Tools
  { name: 'Git & GitHub', percentage: 94, category: 'tools', icon: SiGit, color: '#F05032' },
  { name: 'Docker', percentage: 76, category: 'tools', icon: SiDocker, color: '#2496ED' },
  { name: 'Vercel / CI/CD', percentage: 90, category: 'tools', icon: SiVercel, color: '#000000' },
  { name: 'Postman', percentage: 88, category: 'tools', icon: SiPostman, color: '#FF6C37' },
];
