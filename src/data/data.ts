import dev from "../assets/developer.png"
import disk from "../assets/floppy-disk.png"
import project from "../assets/layout.png"
import blackbox from "../assets/blackbox-vision.png"
import aerolab from "../assets/aerolab.png"
import realtrends from "../assets/realtrends.png"
import {Program, Project} from "../types/types"

export const programs: Program[] = [
  {
    name: "User",
    img: `${dev}`,
    open: true,
    maximized: false,
    minimized: false,
  },
  {name: "Projects", img: `${project}`, open: false, maximized: false, minimized: false},
  {name: "Info", img: `${disk}`, open: false, maximized: false, minimized: false},
]

export const projects: Project[] = [
  {
    name: "BlackBox Vision Challenge",
    img: `${blackbox}`,
    github: "https://github.com/LuciaSepulveda/BlackBox-Vision-challenge",
    demo: "https://quizbox-vision.web.app/",
    description: "Juego de preguntas y respuestas",
  },
  {
    name: "Aerolab Challenge",
    github: "https://github.com/LuciaSepulveda/Challenge-Aerolab",
    demo: "https://aerolabchallenge.web.app/",
    description: "Tienda de productos basada en puntos.",
    img: `${aerolab}`,
  },
  {
    name: "RealTrends Challenge",
    github: "https://github.com/LuciaSepulveda/RealTrends-Challenge",
    demo: "https://realtrends-challenge.netlify.app/",
    description: "Aplicación de votación realtime",
    img: `${realtrends}`,
  },
]
