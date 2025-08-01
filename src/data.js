//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaPhone as FaPhoneAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
} from 'react-icons/fa';


// companies icons
// import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
// import UpworkBrandIcon from './assets/img/brands/upwork.png';
// import FiverBrandIcon from './assets/img/brands/fiverr.png';
// import BehanceBrandIcon from './assets/img/brands/behance.png';
// import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/booki.png';
import Project2 from './assets/img/projects/nina.png';
import Project3 from './assets/img/projects/kasa.png';
import Project4 from './assets/img/projects/sophie.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nodejs.png';
import SkillImg6 from './assets/img/skills/git.png';
import SkillImg7 from './assets/img/skills/figma.png';
import SkillImg8 from './assets/img/skills/pythonlogo.jpeg';
import SkillImg9 from './assets/img/skills/Rlogo.jpeg';
import SkillImg10 from './assets/img/skills/SQLlogo.png';
import SkillImg11 from './assets/img/skills/BASHlogo.png'; 


// navigation
export const navigation = [
  {
    name: 'accueil',
    href: 'accueil',
  },
  {
    name: 'à propos',
    href: 'à-propos', // Anchor to match the id in Apropos.js
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/nabil-mahel-a509a1377/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/nabilmhl123',
  },
];

// companies
// export const brands = [
//   {
//     img: FreelancerBrandIcon,
//     href: '',
//   },
//   {
//     img: UpworkBrandIcon,
//     href: '',
//   },
//   {
//     img: FiverBrandIcon,
//     href: '',
//   },
//   {
//     img: BehanceBrandIcon,
//     href: '',
//   },
//   {
//     img: DribbbleBrandIcon,
//     href: '',
//   },
// ];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Site Booki',
    category: 'Développement Web',
    issues: 'Problèmes de mise en page responsive et de compatibilité entre navigateurs.',
    solutions: 'Utilisation de Flexbox pour la mise en page responsive et des préfixes CSS pour la compatibilité des navigateurs.',
    skills: 'HTML, CSS',
    codeLink: 'https://github.com/nabilmhl123/nabilmhl23'
  },
  {
    id: '2',
    image: Project2,
    name: 'Portfolio Nina Carducci',
    category: 'Autres',
    issues: 'Optimisation des performances, SEO et accessibilité.',
    solutions: 'Optimisation des images, utilisation de balises sémantiques et de bonnes pratiques pour le SEO et l\'accessibilité.',
    skills: 'HTML, Performance Optimization, SEO, Accessibility',
    codeLink: 'https://github.com/nabilmhl123/Projet4'
  },
  {
    id: '3',
    image: Project3,
    name: 'Kasa',
    category: 'React, JS',
    issues: 'Gestion de l\'état global de l\'application et des routes dynamiques.',
    solutions: 'Utilisation de Redux pour la gestion de l\'état et de React Router pour les routes dynamiques.',
    skills: 'React, Redux, CSS, React Router',
    codeLink: 'https://github.com/nabilmhl123/Projet5'
  },
  {
    id: '4',
    image: Project4,
    name: 'Site Sophie bluel',
    category: 'React, JS',
    issues: 'Intégration d\'une API externe et gestion des erreurs.',
    solutions: 'Utilisation de try/catch pour la gestion des erreurs et d\'Axios pour l\'intégration API.',
    skills: 'HTML, JavaScript, API integration, Error Handling',
    codeLink: 'https://github.com/nabilmhl123/Projet3.1'
  },
];

// projects
export const projectsNav = [
  {
    name: 'Tous',
  },
  {
    name: 'React, JS',
  },
  {
    name: 'Développement Web',
  },
  {
    name: 'Autres',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Alternance en Data & IA',
    description:
      "Je suis actuellement à la recherche d’une alternance dans le domaine de la Data et de l’Intelligence Artificielle dans le cadre de mon Bachelor. Mon objectif : appliquer mes connaissances en data science, machine learning et développement pour résoudre des problèmes concrets.",
  },
  {
    icon: <FiSettings />,
    name: 'Compétences techniques',
    description:
      "J’ai une double compétence en développement web (React, Node.js) et analyse de données (Python, Pandas, SQL, Jupyter). Je suis à l’aise autant avec les interfaces utilisateurs qu’avec la manipulation et la visualisation de données.",
  },
  {
    icon: <FiPenTool />,
    name: 'Ce que je peux apporter',
    description:
      "Autonome, curieux et rigoureux, je m’intègre facilement à une équipe. J’apporte une vision technique polyvalente, capable de naviguer entre développement front, back, et data. Toujours motivé à apprendre et à m’adapter aux enjeux des entreprises.",
  },
  {
    icon: <FiTag />,
    name: 'Objectif de l’alternance',
    description:
      "Mettre en pratique mes apprentissages académiques dans un environnement réel, monter en compétence sur des projets data / IA, et contribuer activement à la réussite de votre entreprise.",
  },
];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Des Questions?',
    subtitle: '👇',
    description: 'nabilmhl-dev@outlook.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Localisation',
    subtitle: 'Paris, France',
    description: 'Service de qualité',
  },
];
