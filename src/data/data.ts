import dev from "../assets/developer.png"
import disk from "../assets/floppy-disk.png"
import projects from "../assets/layout.png"
import {Program} from "../types/types"

export const programs: Program[] = [
  {name: "User", img: `${dev}`, open: true, maximized: false},
  {name: "projects", img: `${projects}`, open: true, maximized: false},
  {name: "info", img: `${disk}`, open: false, maximized: false},
]
