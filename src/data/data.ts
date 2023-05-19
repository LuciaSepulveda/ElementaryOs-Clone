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
]

export const projects: Project[] = [
  {
    name: "ABTM",
    github: "https://github.com/LuciaSepulveda/ABTM",
    demo: "https://abtm.vercel.app/",
    description: "Web para la Asociación Bahiense de Tenis de Mesa",
    img: "/ABTM.png",
    techs: ["NextJs", "Strapi", "Chakra-UI"],
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
    techs: ["NextJS", "Tailwind"],
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
]

export const techs: string[] = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Java",
  "POO",
  "Estructuras de datos",
  "Chakra UI",
]

export const info: string[] = [
  "Vivo en Bahía Blanca",
  "Estudiante de Ingeniería en Computación",
]

export const wallpapers: string[] = [
  "/fondo1.jpg",
  "/fondo2.jpg",
  "/fondo3.jpg",
  "/fondo4.jpg",
  "/fondo5.jpg",
  "/fondo6.jpg",
]
