export const personal = {
  name: 'Oscar Colan',
  fullName: 'Oscar Jeanpiero Colan Cervantes',
  role: 'Web Developer - SEO - Optimización',
  company: 'Consigue Ventas',
  phone: '+51 904231351',
  email: 'oscarcolancervantes14@gmail.com',
  github: 'https://github.com/ColanCervantes-Oscar',
  linkedin: 'https://www.linkedin.com/in/colancervantes',
  avatar: '/images/mi-foto.jpg',
  //avatarAlt: '/images/mi-foto.jpg',
  cv: '/cv-oscar-colan.pdf',
}

export const roles = [
  'Web Developer',
  'WordPress & Elementor Specialist',
  'SEO & Web Optimization',
  'Digital Experience Enthusiast',
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
  { num: '3+', labelEs: 'Industrias atendidas',    labelEn: 'Industries served' },
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
    logo: '/images/marcas/colabordor.jpg',
    roleEs: 'Desarrollador Web',
    roleEn: 'Web Developer',
    period: 'Enero 2025 — Enero 2026',
    locationEs: 'Lima, Perú · Remoto',
    locationEn: 'Lima, Peru · Remote',
    summaryEs: 'Participé en el desarrollo y optimización de sitios web enfocados en conversión y posicionamiento SEO.',
    summaryEn: 'Contributed to the development and optimization of websites focused on conversion and SEO performance.',
    detailEs: [
      'Desarrollo y mantenimiento de sitios web (landing pages, one page y e-commerce).',
      'Implementación de soluciones en WordPress utilizando Elementor y WooCommerce.',
      'Optimización de velocidad de carga, rendimiento y diseño responsive.',
      'Aplicación de buenas prácticas SEO para mejorar la visibilidad en buscadores.',
      'Coordinación con el equipo para la implementación de mejoras en proyectos web.',
    ],
    detailEn: [
      'Development and maintenance of websites (landing pages, one-page sites, and e-commerce).',
      'Implementation of solutions in WordPress using Elementor and WooCommerce.',
      'Optimization of loading speed, performance, and responsive design.',
      'Application of SEO best practices to improve search engine visibility.',
      'Collaboration with the team to implement improvements in web projects.',
    ],
    images: [
      //'/images/exp/consigueventas-1.jpg',
    ],
    tags: ['WordPress', 'Elementor', 'WooCommerce', 'SEO', 'HTML', 'CSS'],
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
    //'/images/exp/unjfsc-1.jpg',
    //'/images/exp/unjfsc-2.jpg',
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
    name: 'Martín Alonso Andrés Puertas Cuadros',
    role: 'Líder de Tecnología',
    company: 'Consigue Ventas',
    linkedin: 'https://www.linkedin.com/in/martin-alonso-andres-puertas-cuadros/',
    photo: '/images/testimonials/Persona1.webp',
    textEs: 'Es grato para mí recomendar a Oscar Jeanpiero Colan Cervantes, con quien tuve la oportunidad de trabajar en Consigue Ventas bajo mi supervisión dentro del área tecnológica. Durante su desempeño como desarrollador web, demostró tener sólidos conocimientos en WordPress, así como en la implementación de soluciones orientadas a la optimización de sitios web, tanto a nivel técnico como estratégico.\n\nOscar participó activamente en el desarrollo de landing pages, páginas one page y tiendas online, aportando no solo desde la ejecución, sino también proponiendo mejoras enfocadas en rendimiento, experiencia de usuario y posicionamiento SEO. Destaco su capacidad para comprender los requerimientos del negocio y traducirlos en soluciones funcionales y bien estructuradas.\n\nAdemás, mantuvo una comunicación constante y efectiva con el equipo, mostrando disposición para aprender, adaptarse y colaborar en distintos proyectos. Su compromiso y responsabilidad le permitieron cumplir con los objetivos planteados dentro de los plazos establecidos.\n\nMás allá de sus habilidades técnicas, es una persona respetuosa, proactiva y con una actitud positiva frente a los retos. Sin duda, considero que Oscar puede aportar valor a cualquier equipo que busque un perfil enfocado en desarrollo web y optimización digital.',
    textEn: 'I am pleased to recommend Oscar Jeanpiero Colan Cervantes, with whom I had the opportunity to work at Consigue Ventas under my supervision in the technology area. During his time as a web developer, he demonstrated solid knowledge in WordPress and in implementing solutions focused on website optimization, both technically and strategically.\n\nOscar actively contributed to the development of landing pages, one-page sites, and e-commerce platforms, bringing value not only through execution but also by proposing improvements in performance, user experience, and SEO positioning. I highlight his ability to understand business requirements and translate them into functional and well-structured solutions.\n\nHe also maintained clear and effective communication with the team, showing a strong willingness to learn, adapt, and collaborate across projects. His commitment and responsibility allowed him to consistently meet project goals within deadlines.\n\nBeyond his technical skills, Oscar is respectful, proactive, and maintains a positive attitude when facing challenges. I am confident he will be a valuable addition to any team focused on web development and digital optimization.',
  },
  {
    name: 'Maria Trigoso Loza',
    role: 'Líder de Talento Humano',
    company: 'Consigue Ventas',
    linkedin: 'https://www.linkedin.com/in/maria-trigoso-loza-a22748265/',
    photo: '/images/testimonials/Persona2.webp',
    textEs: 'Tuve la oportunidad de trabajar con Oscar durante su etapa en Consigue Ventas, donde se desempeñó como desarrollador web. Destacó por su responsabilidad, compromiso y buena disposición para trabajar en equipo.\n\nA lo largo de los proyectos, demostró habilidades en el desarrollo de páginas web y optimización SEO, aportando ideas para mejorar la visibilidad y el rendimiento de los sitios. Además, mantuvo una comunicación clara con sus compañeros y mostró interés constante por aprender y mejorar.\n\nEs un profesional con buena actitud y enfoque en resultados, cualidades que le permiten adaptarse y aportar valor en distintos entornos de trabajo.',
    textEn: 'I had the opportunity to work with Oscar during his time at Consigue Ventas, where he worked as a web developer. He stood out for his responsibility, commitment, and strong teamwork skills.\n\nThroughout different projects, he demonstrated abilities in web development and SEO optimization, contributing ideas to improve website visibility and performance. He also maintained clear communication with his teammates and showed a constant interest in learning and improving.\n\nHe is a professional with a positive attitude and a results-oriented mindset, qualities that allow him to adapt and add value in different work environments.',
  },
  {
    name: 'Brenda Nicole Tasayco Saravia',
    role: 'Líder de Talento Humano',
    company: 'Consigue Ventas',
    linkedin: 'https://www.linkedin.com/in/brenda-nicole/',
    photo: '/images/testimonials/Persona3.webp',
    textEs: 'Recomiendo a Oscar por su desempeño y compromiso durante su trabajo en Consigue Ventas. Es una persona responsable, organizada y con buena disposición para asumir nuevos retos.\n\nEn su rol como desarrollador web, participó en la creación y optimización de diferentes páginas, mostrando atención al detalle y enfoque en la calidad del trabajo. Además, supo integrarse bien al equipo y mantener una comunicación respetuosa y efectiva.\n\nEs un profesional que busca seguir creciendo y mejorando constantemente, lo cual es muy valioso en entornos dinámicos.',
    textEn: 'I recommend Oscar for his performance and commitment during his time at Consigue Ventas. He is a responsible, organized person with a strong willingness to take on new challenges.\n\nIn his role as a web developer, he contributed to the creation and optimization of various websites, showing attention to detail and a focus on quality. He also integrated well into the team and maintained respectful and effective communication.\n\nHe is a professional who is constantly looking to grow and improve, which is highly valuable in dynamic work environments.',
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
  { name:'Effetha', url:'https://effetha.com/', descriptionEs:'Plataforma digital — diseño, desarrollo y SEO completo.', descriptionEn:'Digital platform — full design, development and SEO.', tags:['Wordpress','Elementor','SEO'], logo:'/images/marcas/effetha.png', color:'#63b3ed' },
  { name:'Consigue Ventas', url:'https://consigueventas.com/', descriptionEs:'Agencia digital especializada en ventas online.', descriptionEn:'Digital agency specialized in online sales.', tags: ['WordPress', 'Marketing Digital', 'E-commerce'], logo:'/images/marcas/consigueventas.png', color:'#76e4a7' },
  { name:'TICorp Perú', url:'https://ticorperu.net/', descriptionEs:'Soluciones tecnológicas corporativas para Perú.', descriptionEn:'Corporate tech solutions for Peru.', tags:['WordPress', 'Elementor', 'SEO'], logo:'/images/marcas/ticorperu.png', color:'#f6ad55' },
  { name:'Kare Salud Renal', url:'https://karesaludrenal.com/', descriptionEs:'Plataforma de salud digital enfocada en riñones.', descriptionEn:'Digital health platform focused on renal care.', tags:['WordPress', 'Elementor', 'Salud Digital'], logo:'/images/marcas/kare.png', color:'#fc8181' },
  { name:'PV Electrónica', url:'https://pvelectronica.consigueventas.com/', descriptionEs:'E-commerce de electrónica bajo Consigue Ventas.', descriptionEn:'Electronics e-commerce under Consigue Ventas.', tags:['E-commerce', 'WooCommerce', 'WordPress'], logo:'/images/marcas/pvelectronica.png', color:'#b794f4' },
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
    category: 'Databases',
    items: [
      { name:'MySQL',        level:82, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name:'SQL Server',   level:78, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name:'Oracle DB',    level:70, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name:'SQLite',       level:72, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name:'WordPress',   level:90, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { name:'Elementor',   level:88, icon:'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/elementor.svg' },
      { name:'WooCommerce', level:85, icon:'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/woocommerce.svg' },
      { name:'Figma',       level:68, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name:'Google Analytics', level:75, icon:'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googleanalytics.svg' },
      { name:'Git',         level:88, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
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
