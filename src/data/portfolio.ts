export const personal = {
  name: 'Oscar Colan',
  fullName: 'Oscar Jeanpiero Colan Cervantes',
  role: 'Full Stack Developer',
  company: 'Consigue Ventas',
  phone: '980423135',
  email: 'oscarcolancervantes14@gmail.com',
  github: 'https://github.com/ColanCervantes-Oscar',
  linkedin: 'https://www.linkedin.com/in/colancervantes',
  avatar: '/images/mi-foto.jpg',
  avatarAlt: '/images/mi-foto-2.jpg',
  cv: '/cv-oscar-colan.pdf',
}

export const roles = [
  'Full Stack Developer',
  'React Developer',
  'Node.js Developer',
  'UI/UX Enthusiast',
]

export const badges = [
  { icon: '🎓', text: 'Ing. Sistemas — UNJFSC' },
  { icon: '📍', text: 'Huaral, Lima — Perú' },
  { icon: '🎂', text: '24 años' },
  { icon: '💼', text: 'Disponible para proyectos' },
  { icon: '🌐', text: 'Español · Inglés intermedio' },
]

export const badgesEn = [
  { icon: '🎓', text: 'Systems Eng. — UNJFSC' },
  { icon: '📍', text: 'Huaral, Lima — Peru' },
  { icon: '🎂', text: '24 years old' },
  { icon: '💼', text: 'Available for projects' },
  { icon: '🌐', text: 'Spanish · Intermediate English' },
]

export const stats = [
  { num: '5+', labelEs: 'Proyectos en producción', labelEn: 'Projects in production' },
  { num: '1+', labelEs: 'Años de experiencia',     labelEn: 'Years of experience' },
  { num: '1+', labelEs: 'Industrias atendidas',    labelEn: 'Industries served' },
  { num: '∞',  labelEs: 'Ganas de aprender',       labelEn: 'Eagerness to learn' },
]

export interface Experience {
  images?: string[]
  company: string
  logo: string
  roleEs: string
  roleEn: string
  period: string
  locationEs: string
  locationEn: string
  summaryEs: string
  summaryEn: string
  detailEs: string[]
  detailEn: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Consigue Ventas',
    logo: '/images/marcas/consigueventas.png',
    roleEs: 'Líder de Desarrollo Web',
    roleEn: 'Web Development Lead',
    period: '2023 — Presente',
    locationEs: 'Lima, Perú · Remoto',
    locationEn: 'Lima, Peru · Remote',
    summaryEs: 'Lidero el área de desarrollo web gestionando múltiples marcas digitales en producción.',
    summaryEn: 'Lead the web development area managing multiple digital brands in production.',
    detailEs: [
      'Desarrollo y mantenimiento de 5+ sitios web en producción con React y Node.js.',
      'Gestión de equipo de desarrolladores y coordinación directa con clientes.',
      'Administración de infraestructura de hosting, dominios y servidores VPS.',
      'Implementación de estrategias SEO y optimización de rendimiento web.',
    ],
    detailEn: [
      'Development and maintenance of 5+ production websites with React and Node.js.',
      'Team management and direct client coordination.',
      'Hosting infrastructure, domain and VPS server administration.',
      'SEO strategy implementation and web performance optimization.',
    ],
    images: [
    '/images/exp/consigueventas-1.jpg',
    '/images/exp/consigueventas-2.jpg',
    '/images/exp/consigueventas-3.jpg',
    '/images/exp/consigueventas-4.jpg',
  ],
    tags: ['React', 'Node.js', 'PHP', 'MySQL', 'VPS'],
  },
  {
    company: 'UNJFSC',
    logo: '/images/marcas/unjfsc.png',
    roleEs: 'Bachiller en Ingeniería de Sistemas',
    roleEn: 'Bachelor in Systems Engineering',
    period: '2020 — 2025',
    locationEs: 'Huacho, Lima · Presencial',
    locationEn: 'Huacho, Lima · On-site',
    summaryEs: 'Formación académica en ingeniería de sistemas con enfoque en desarrollo de software.',
    summaryEn: 'Academic training in systems engineering focused on software development.',
    detailEs: [
      'Desarrollo de proyectos de software con Python, Java y bases de datos relacionales.',
      'Participación en proyectos de investigación y desarrollo tecnológico.',
      'Especialización en desarrollo web y arquitectura de sistemas.',
      'Egresado con mención en desarrollo de software — 2025.',
    ],
    detailEn: [
      'Software project development with Python, Java and relational databases.',
      'Participation in technology research and development projects.',
      'Specialization in web development and systems architecture.',
      'Graduated with mention in software development — 2025.',
    ],
    images: [
    '/images/exp/unjfsc-1.jpg',
    '/images/exp/unjfsc-2.jpg',
  ],
    tags: ['Python', 'Java', 'MySQL', 'Algoritmos', 'POO'],
  },
]

export interface Testimonial {
  name: string
  role: string
  company: string
  linkedin: string
  photo: string
  textEs: string
  textEn: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Nombre Apellido',
    role: 'CEO',
    company: 'Consigue Ventas',
    linkedin: 'https://linkedin.com',
    photo: '/images/testimonials/persona1.jpg',
    textEs: 'Oscar es un desarrollador excepcional. Su capacidad para resolver problemas complejos y entregar proyectos de alta calidad en tiempo récord lo hace invaluable para cualquier equipo.',
    textEn: 'Oscar is an exceptional developer. His ability to solve complex problems and deliver high-quality projects in record time makes him invaluable to any team.',
  },
  {
    name: 'Nombre Apellido',
    role: 'Project Manager',
    company: 'Empresa XYZ',
    linkedin: 'https://linkedin.com',
    photo: '/images/testimonials/persona2.jpg',
    textEs: 'Trabajar con Oscar fue una experiencia increíble. Su profesionalismo, creatividad y dominio técnico superaron todas nuestras expectativas.',
    textEn: 'Working with Oscar was an incredible experience. His professionalism, creativity and technical mastery exceeded all our expectations.',
  },
  {
    name: 'Nombre Apellido',
    role: 'CTO',
    company: 'Startup ABC',
    linkedin: 'https://linkedin.com',
    photo: '/images/testimonials/persona3.jpg',
    textEs: 'Recomiendo ampliamente a Oscar. Tiene una visión clara del producto, comunica muy bien con el equipo y siempre busca la mejor solución técnica.',
    textEn: 'I strongly recommend Oscar. He has a clear product vision, communicates very well with the team and always looks for the best technical solution.',
  },
]

export interface Brand {
  name: string
  url: string
  descriptionEs: string
  descriptionEn: string
  tags: string[]
  logo: string
  color: string
}

export const brands: Brand[] = [
  { name:'Effetha', url:'https://effetha.com/', descriptionEs:'Plataforma digital — diseño, desarrollo y SEO completo.', descriptionEn:'Digital platform — full design, development and SEO.', tags:['React','Node.js','SEO'], logo:'/images/marcas/effetha.png', color:'#63b3ed' },
  { name:'Consigue Ventas', url:'https://consigueventas.com/', descriptionEs:'Agencia digital especializada en ventas online.', descriptionEn:'Digital agency specialized in online sales.', tags:['React','Marketing','CRM'], logo:'/images/marcas/consigueventas.png', color:'#76e4a7' },
  { name:'TICorp Perú', url:'https://ticorperu.net/', descriptionEs:'Soluciones tecnológicas corporativas para Perú.', descriptionEn:'Corporate tech solutions for Peru.', tags:['TypeScript','Node.js','AWS'], logo:'/images/marcas/ticorperu.png', color:'#f6ad55' },
  { name:'Kare Salud Renal', url:'https://karesaludrenal.com/', descriptionEs:'Plataforma de salud digital enfocada en riñones.', descriptionEn:'Digital health platform focused on renal care.', tags:['React','Accesibilidad'], logo:'/images/marcas/kare.png', color:'#fc8181' },
  { name:'PV Electrónica', url:'https://pvelectronica.consigueventas.com/', descriptionEs:'E-commerce de electrónica bajo Consigue Ventas.', descriptionEn:'Electronics e-commerce under Consigue Ventas.', tags:['E-commerce','React'], logo:'/images/marcas/pvelectronica.png', color:'#b794f4' },
]

export interface SkillGroup {
  category: string
  items: { name: string; level: number; icon: string }[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name:'React',      level:85, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name:'TypeScript', level:75, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name:'HTML5',      level:92, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name:'CSS3',       level:90, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name:'Tailwind',   level:80, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name:'Node.js', level:80, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name:'Python',  level:78, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name:'Java',    level:70, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name:'PHP',     level:72, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    ],
  },
  {
    category: 'Bases de datos',
    items: [
      { name:'MySQL',      level:82, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name:'PostgreSQL', level:70, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name:'MongoDB',    level:68, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name:'Firebase',   level:65, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name:'Git',    level:88, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name:'Docker', level:55, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name:'Figma',  level:68, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name:'Vite',   level:85, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    ],
  },
]

export const t = {
  es: {
    nav: { about:'Sobre mí', skills:'Habilidades', projects:'Proyectos', experience:'Experiencia', testimonials:'Testimonios', contact:'Contacto' },
    hero: { greeting:'// Hola, soy', cta1:'Ver proyectos', cta2:'Contáctame', at:'@ en', cv:'Descargar CV' },
    about: {
      label:'Sobre mí', tagline:'Apasionado por el desarrollo web',
      title:'Construyo experiencias\ndigitales que impactan',
      p1:'Soy Oscar Jeanpiero Colan Cervantes, desarrollador Full Stack de Huaral, Perú, con 24 años y bachiller en Ingeniería de Sistemas en la UNJFSC (2025). Mi pasión por el desarrollo web nació al ver cómo el código puede transformar ideas en productos reales.',
      p2:'Me especializo en interfaces intuitivas con React y soluciones backend con Node.js y PHP. Lidero el área de desarrollo web en una agencia digital gestionando equipo, clientes e infraestructura en producción.',
      p3:'Me mantengo en constante aprendizaje y disfruto colaborar con otros desarrolladores para seguir creciendo.',
      cta1:'Hablemos', cta2:'GitHub ↗',
    },
    skills: { label:'Stack & Habilidades' },
    experience: { label:'Experiencia', showMore:'Ver más', showLess:'Ver menos' },
    projects: { label:'Marcas & Proyectos', title:'Trabajo en', subtitle:'Marcas digitales que desarrollo y mantengo.', visit:'visitar ↗' },
    testimonials: { label:'Recomendaciones', title:'Lo que dicen\nde mí' },
    contact: {
      label:'Contacto', title:'¿Tienes un proyecto\nen mente?',
      subtitle:'Estoy disponible para proyectos freelance y colaboraciones. Te respondo en menos de 24h.',
      form: { name:'Nombre', namePh:'Tu nombre', email:'Correo', emailPh:'tu@correo.com', subject:'Asunto', subjectPh:'¿En qué puedo ayudarte?', message:'Mensaje', messagePh:'Cuéntame sobre tu proyecto...', send:'Enviar mensaje', sending:'Enviando...', success:'¡Mensaje enviado con éxito!', error:'Error al enviar. Intenta de nuevo.' },
    },
    footer:'Diseñado y construido por',
  },
  en: {
    nav: { about:'About', skills:'Skills', projects:'Projects', experience:'Experience', testimonials:'Testimonials', contact:'Contact' },
    hero: { greeting:"// Hi, I'm", cta1:'See projects', cta2:'Contact me', at:'@ at', cv:'Download CV' },
    about: {
      label:'About me', tagline:'Passionate about web development',
      title:'I build digital\nexperiences that matter',
      p1:"I'm Oscar Jeanpiero Colan Cervantes, a Full Stack developer from Huaral, Peru, 24 years old, Systems Engineering graduate from UNJFSC (2025). My passion for web dev was born seeing how code turns ideas into real products.",
      p2:'I specialize in intuitive React interfaces and backend solutions with Node.js and PHP. I lead the web dev area at a digital agency managing team, clients and production infrastructure.',
      p3:'I stay in constant learning and enjoy collaborating with other developers to keep growing.',
      cta1:"Let's talk", cta2:'GitHub ↗',
    },
    skills: { label:'Stack & Skills' },
    experience: { label:'Experience', showMore:'Show more', showLess:'Show less' },
    projects: { label:'Brands & Projects', title:'Work at', subtitle:'Digital brands I develop and maintain.', visit:'visit ↗' },
    testimonials: { label:'Testimonials', title:'What people\nsay about me' },
    contact: {
      label:'Contact', title:'Got a project\nin mind?',
      subtitle:"I'm available for freelance projects and collaborations. I'll reply within 24h.",
      form: { name:'Name', namePh:'Your name', email:'Email', emailPh:'you@email.com', subject:'Subject', subjectPh:'How can I help you?', message:'Message', messagePh:'Tell me about your project...', send:'Send message', sending:'Sending...', success:'Message sent successfully!', error:'Error sending. Please try again.' },
    },
    footer:'Designed and built by',
  },
}
