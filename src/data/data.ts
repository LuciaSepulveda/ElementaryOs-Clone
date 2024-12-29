import { Program, Project, Social } from "../types/types"

export const programs: Program[] = [
  {
    name: "User",
    img: "/developer.png",
    open: true,
    maximized: false,
    minimized: false,
  },
  {
    name: "Projects",
    img: "/layout1.png",
    open: false,
    maximized: false,
    minimized: false,
  },
  {
    name: "Contact",
    img: "/smartphone1.png",
    open: false,
    maximized: false,
    minimized: false,
  },
  {
    name: "Wallpapers",
    img: "/display1.png",
    open: false,
    maximized: false,
    minimized: false,
  },
  {
    name: "Work",
    img: "/work.png",
    open: false,
    maximized: false,
    minimized: false,
  },
]

export const projects: Project[] = [
  {
    name: "Open Syllabus",
    demo: "https://opensyllabus.org/",
    description: "Sitio principal de Open Syllabus",
    img: "/openSyllabus.png",
    techs: ["Next", "Typescript", "Styled components"],
    genosha: true,
  },
  {
    name: "Open Syllabus Analytics",
    demo: "https://analytics.opensyllabus.org/",
    description:
      "Herramientas para entender la curricula en la educación superior",
    img: "/openSyllabusAnalytics.png",
    techs: ["Next", "Typescript", "Styled components"],
    genosha: true,
  },
  {
    name: "Open Syllabus Course Matcher",
    demo: "https://coursematcher.opensyllabus.org/",
    description:
      "Busca posibles coincidencias entre clases de catálogos de cursos",
    img: "/openSyllabusCourse.png",
    techs: ["Next", "Typescript", "Tailwind"],
    genosha: true,
  },
  {
    name: "Open Syllabus Blog",
    demo: "https://blog.opensyllabus.org/",
    description: "Noticias de Open Syllabus",
    img: "/openSyllabusBlog.png",
    techs: ["Docusaurus", "Javascript", "Sass"],
    genosha: true,
  },
  {
    name: "Juicios de lesa humanidad",
    demo: "http://www.juiciosdelesahumanidad.ar/",
    description:
      "Sitio de datos interactivos de los juicios de lesa humanidad argentinos",
    img: "/juicioslesa.png",
    techs: ["Next", "Styled components", "Typescript"],
    genosha: true,
  },
  {
    name: "Genosha",
    demo: "https://front.dev.genosha.com.ar/",
    description: "Sitio web de Genosha",
    img: "/genosha.png",
    techs: ["Next", "Styled components", "Three.js"],
    genosha: true,
  },
  {
    name: "ABTM",
    github: "https://github.com/LuciaSepulveda/ABTM",
    demo: "https://abtm.vercel.app/",
    description: "Web para la Asociación Bahiense de Tenis de Mesa",
    img: "/ABTM.png",
    techs: ["Next", "Strapi", "Chakra-UI"],
  },
  {
    name: "App Spot",
    github: "https://github.com/LuciaSepulveda/AppSpot",
    demo: "https://app-spot.vercel.app/",
    description: "Web que muestra tus artistas y canciones favoritas.",
    img: "/spotApp.png",
    techs: ["Next", "Typescript", "Chakra-UI"],
  },
  {
    name: "Detection Hands",
    github: "https://github.com/LuciaSepulveda/detection-hands",
    demo: "https://detection-hands.vercel.app",
    description: "Web que detecta los movimientos de tu mano.",
    img: "/detectionHands.gif",
    techs: ["Next", "Three.js", "Tensor flow"],
  },
  {
    name: "Sambuche App",
    github: "https://github.com/LuciaSepulveda/Sambuche-App",
    demo: "https://sambuche.netlify.app/",
    description: "Aplicación que simula el armado de un pedido de sandwich",
    img: "/sambuche.png",
    techs: ["React", "Typescript", "Chakra-UI"],
  },
  {
    name: "Basement Challenge",
    github: "https://github.com/LuciaSepulveda/Basement-Challenge",
    demo: "https://basement-challenge-ls.vercel.app/",
    description: "Aplicación que simula una tienda",
    img: "/basementChallenge.png",
    techs: ["Next", "Tailwind"],
  },
  {
    name: "Aerolab Challenge",
    github: "https://github.com/LuciaSepulveda/Challenge-Aerolab",
    demo: "https://aerolabchallenge.web.app/",
    description: "Tienda de productos basada en puntos.",
    img: "/aerolab.png",
    techs: ["React", "Typescript", "Chakra-UI"],
  },
  {
    name: "Softvision Challenge",
    github: "https://github.com/LuciaSepulveda/Softvision-Challenge",
    demo: "https://cognizant-softvision-challenge.netlify.app/",
    description: "Aplicación que simula a Trello",
    img: "/softvision.png",
    techs: ["React", "Typescript", "Chakra-UI"],
  },
  {
    name: "BlackBox Vision Challenge",
    img: "/blackbox-vision.png",
    github: "https://github.com/LuciaSepulveda/BlackBox-Vision-challenge",
    demo: "https://quizbox-vision.web.app/",
    description: "Juego de preguntas y respuestas",
    techs: ["React", "Typescript", "Chakra-UI"],
  },
]

export const projectsEn: Project[] = [
  {
    name: "Open Syllabus",
    demo: "https://opensyllabus.org/",
    description: "Open Syllabus website",
    img: "/openSyllabus.png",
    techs: ["Next", "Typescript", "Styled components"],
    genosha: true,
  },
  {
    name: "Open Syllabus Analytics",
    demo: "https://analytics.opensyllabus.org/",
    description:
      "Pro tools for understanding the curriculum in higher education",
    img: "/openSyllabusAnalytics.png",
    techs: ["Next", "Typescript", "Styled components"],
    genosha: true,
  },
  {
    name: "Open Syllabus Course Matcher",
    demo: "https://coursematcher.opensyllabus.org/",
    description: "Scores possible matches between classes in course catalogs",
    img: "/openSyllabusCourse.png",
    techs: ["Next", "Typescript", "Tailwind"],
    genosha: true,
  },
  {
    name: "Open Syllabus Blog",
    demo: "https://blog.opensyllabus.org/",
    description: "News and data stories from Open Syllabus",
    img: "/openSyllabusBlog.png",
    techs: ["Docusaurus", "Javascript", "Sass"],
    genosha: true,
  },
  {
    name: "Juicios de lesa humanidad",
    demo: "http://www.juiciosdelesahumanidad.ar/",
    description:
      "Website of interactive data of argentinian trials against humanity",
    img: "/juicioslesa.png",
    techs: ["Next", "Styled components", "Typescript"],
    genosha: true,
  },
  {
    name: "Genosha",
    demo: "https://front.dev.genosha.com.ar/",
    description: "Genosha website",
    img: "/genosha.png",
    techs: ["Next", "Styled components", "Three.js"],
    genosha: true,
  },
  {
    name: "ABTM",
    github: "https://github.com/LuciaSepulveda/ABTM",
    demo: "https://abtm.vercel.app/",
    description: "Website for Asociación Bahiense de Tenis de Mesa.",
    img: "/ABTM.png",
    techs: ["Next", "Strapi", "Chakra-UI"],
  },
  {
    name: "App Spot",
    github: "https://github.com/LuciaSepulveda/AppSpot",
    demo: "https://app-spot.vercel.app/",
    description: "Site which show your artists and tracks favorites.",
    img: "/spotApp.png",
    techs: ["Next", "Typescript", "Chakra-UI"],
  },
  {
    name: "Detection Hands",
    github: "https://github.com/LuciaSepulveda/detection-hands",
    demo: "https://detection-hands.vercel.app",
    description: "Site that detects the movements of your hand.",
    img: "/detectionHands.gif",
    techs: ["Next", "Three.js", "Tensor flow"],
  },
  {
    name: "Sambuche App",
    github: "https://github.com/LuciaSepulveda/Sambuche-App",
    demo: "https://sambuche.netlify.app/",
    description: "Site that simulates the prepare of a sandwich.",
    img: "/sambuche.png",
    techs: ["React", "Typescript", "Chakra-UI"],
  },
  {
    name: "Basement Challenge",
    github: "https://github.com/LuciaSepulveda/Basement-Challenge",
    demo: "https://basement-challenge-ls.vercel.app/",
    description: "Site that simulates a store",
    img: "/basementChallenge.png",
    techs: ["Next", "Tailwind"],
  },
  {
    name: "Aerolab Challenge",
    github: "https://github.com/LuciaSepulveda/Challenge-Aerolab",
    demo: "https://aerolabchallenge.web.app/",
    description: "Site of a store based on points.",
    img: "/aerolab.png",
    techs: ["React", "Typescript", "Chakra-UI"],
  },
  {
    name: "Softvision Challenge",
    github: "https://github.com/LuciaSepulveda/Softvision-Challenge",
    demo: "https://cognizant-softvision-challenge.netlify.app/",
    description: "Site that simulates Trello.",
    img: "/softvision.png",
    techs: ["React", "Typescript", "Chakra-UI"],
  },
  {
    name: "BlackBox Vision Challenge",
    img: "/blackbox-vision.png",
    github: "https://github.com/LuciaSepulveda/BlackBox-Vision-challenge",
    demo: "https://quizbox-vision.web.app/",
    description: "Game of questions and answers.",
    techs: ["React", "Typescript", "Chakra-UI"],
  },
]

export const social: Social[] = [
  {
    name: "Github",
    link: "https://github.com/LuciaSepulveda",
    logo: "/github.png",
  },
  {
    name: "Email",
    link: "mailto:luciabsep18@gmail.com",
    logo: "/mailbox.png",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/lucia-sepulveda/",
    logo: "/linkedin.png",
  },
]

export const techs: string[] = [
  "React",
  "Next",
  "Typescript",
  "Javascript",
  "React Testing Library",
  "HTML",
  "CSS",
  "Chakra UI",
  "Styled Components",
  "Tailwind",
  "Framer motion",
  "Sass",
  "Three.js",
  "Java",
  "POO",
  "Estructuras de datos",
]

export const techsEn: string[] = [
  "React",
  "Next",
  "Typescript",
  "Javascript",
  "React Testing Library",
  "HTML",
  "CSS",
  "Chakra UI",
  "Styled Components",
  "Tailwind",
  "Framer motion",
  "Sass",
  "Three.js",
  "Java",
  "OOP",
  "Data structures",
]

export const info: string[] = [
  "Desarrolladora frontend",
  "Con tres años de experiencia",
  "Vivo en Bahía Blanca, Buenos Aires",
]

export const infoEn: string[] = [
  "Frontend developer",
  "With three years of experience",
  "I'm from Bahia Blanca, Buenos Aires",
]

export const wallpapers: string[] = [
  "/fondo1.jpg",
  "/fondo2.jpg",
  "/fondo3.jpg",
  "/fondo4.jpg",
  "/fondo5.jpg",
  "/fondo6.jpg",
]

export const work = [
  {
    position: "Software Developer",
    company: "Mercado Libre",
    date: "Febrero 2024 - Actualidad",
    description: [
      "Formo parte de un equipo frontend que trabaja principalmente con React y Typescript.",
    ],
  },
  {
    position: "Desarrolladora Frontend Junior",
    company: "Genosha",
    date: "Abril 2022 - Enero 2024",
    description: [
      "Participación en proyectos desarrollados con React, Next.js, Typescript, Styled Components, Tailwind, Sass y Three.js",
      "Trabajo en equipo junto a diseñadores, project manager y desarrolladores para entregar aplicaciones web funcionales y visualmente atractivas.",
      "Traducción de conceptos de diseño y wireframes en interfaces de usuario responsive e interactivas.",
      "Integración de API para permitir la recuperación y manipulación dinámica de datos.",
      "Implementación de accesibilidad en distintos sitios: Colaboración con diseñadores para implementar patrones de diseño accesibles. Optimización de la estructura, la semántica y la navegación de la página para mejorar la compatibilidad con lectores de pantalla y navegación mediante teclado.",
      "Participación activa en metodologías de desarrollo ágil, asistiendo a reuniones generalmente semanales.",
    ],
  },
  {
    position: "Desarrolladora Frontend Trainee",
    company: "Genosha",
    date: "Enero 2022 - Marzo 2022",
    description: [
      "Participación en un proyecto desarrollado con Next.js, React, Typescript, HTML, CSS y Styled Components.",
    ],
  },
]

export const workEn = [
  {
    position: "Software Developer",
    company: "Mercado Libre",
    date: "February 2024 - Preset",
    description: [
      "I'm part of a frontend team working primarily with React and Typescript.",
    ],
  },
  {
    position: "Junior Frontend",
    company: "Genosha",
    date: "April 2022 - January 2024",
    description: [
      "Development of websites using Next.js, React, Typescript, HTML, CSS, Javascript, Styled Components, Tailwind, Sass and Three.js.",
      "Collaborated closely with designers, project managers and developers to deliver highly functional and visually appealing web.",
      "Translated design concepts and wireframes into responsive and interactive user interfaces.",
      "Integrated APIs enabling dynamic data retrieval and manipulation.",
      "Implementation of accessibility in different sites: Collaboration with designers to implement accessible design patterns. Optimization of page structure, semantics and navigation to improve compatibility with screen readers and keyboard navigation.",
      "Actively participated in agile development methodologies, attending weekly meetings generally.",
    ],
  },
  {
    position: "Trainee Frontend",
    company: "Genosha",
    date: "January 2022 - March 2022",
    description: [
      "Development of website using Next.js, React, Typescript, HTML, CSS, and Styled Components.",
    ],
  },
]
