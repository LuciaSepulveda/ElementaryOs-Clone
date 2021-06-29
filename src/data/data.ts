import dev from "../assets/developer.png"
import project from "../assets/layout1.png"
import blackbox from "../assets/blackbox-vision.png"
import aerolab from "../assets/aerolab.png"
import realtrends from "../assets/realtrends.png"
import sambuche from "../assets/sambuche.png"
import random from "../assets/randomQuote.png"
import mail from "../assets/mailbox.png"
import smart from "../assets/smartphone1.png"
import github from "../assets/github.png"
import {Program, Project, Social} from "../types/types"
import fondo1 from "../assets/fondo1.jpg"
import fondo2 from "../assets/fondo2.jpg"
import fondo3 from "../assets/fondo3.jpg"
import fondo4 from "../assets/fondo4.jpg"
import display from "../assets/display1.png"

export const programs: Program[] = [
  {
    name: "User",
    img: `${dev}`,
    open: true,
    maximized: false,
    minimized: false,
  },
  {name: "Projects", img: `${project}`, open: false, maximized: false, minimized: false},
  {name: "Contact", img: `${smart}`, open: false, maximized: false, minimized: false},
  {name: "Wallpapers", img: `${display}`, open: false, maximized: false, minimized: false},
]

export const projects: Project[] = [
  {
    name: "Sambuche App",
    github: "https://github.com/LuciaSepulveda/Sambuche-App",
    demo: "https://sambuche.netlify.app/",
    description: "Aplicación que simula el armado de un pedido de sandwich",
    img: `${sambuche}`,
  },
  {
    name: "Aerolab Challenge",
    github: "https://github.com/LuciaSepulveda/Challenge-Aerolab",
    demo: "https://aerolabchallenge.web.app/",
    description: "Tienda de productos basada en puntos.",
    img: `${aerolab}`,
  },
  {
    name: "BlackBox Vision Challenge",
    img: `${blackbox}`,
    github: "https://github.com/LuciaSepulveda/BlackBox-Vision-challenge",
    demo: "https://quizbox-vision.web.app/",
    description: "Juego de preguntas y respuestas",
  },
  {
    name: "RealTrends Challenge",
    github: "https://github.com/LuciaSepulveda/RealTrends-Challenge",
    demo: "https://realtrends-challenge.netlify.app/",
    description: "Aplicación de votación realtime",
    img: `${realtrends}`,
  },
  {
    name: "Random Quote Generator",
    github: "https://github.com/LuciaSepulveda/Random-quote-generator",
    demo: "https://random-quote-luciasepulveda.netlify.app/",
    description: "Aplicación que muestra una frase random",
    img: `${random}`,
  },
]

export const social: Social[] = [
  {name: "Github", link: "https://github.com/LuciaSepulveda", logo: `${github}`},
  {name: "Email", link: "mailto:luciabsep18@gmail.com", logo: `${mail}`},
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

export const info: string[] = ["Vivo en Bahía Blanca", "Estudiante de Ingeniería en Computación"]

export const wallpapers: string[] = [`${fondo1}`, `${fondo2}`, `${fondo3}`, `${fondo4}`]
