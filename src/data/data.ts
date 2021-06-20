import dev from "../assets/developer.png"
import disk from "../assets/floppy-disk.png"
import projects from "../assets/layout.png"
import {Program} from "../types/types"

export const programs: Program[] = [
  {
    name: "User",
    img: `${dev}`,
    open: true,
    maximized: false,
    minimized: false,
  },
  {name: "Projects", img: `${projects}`, open: false, maximized: false, minimized: false},
  {name: "Info", img: `${disk}`, open: false, maximized: false, minimized: false},
]
