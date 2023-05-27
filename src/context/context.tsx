import { Program, Status } from "../types/types"
import { programs as programsArray, wallpapers } from "../data/data"
import { createContext, useEffect, useState } from "react"

export interface Context {
  state: {
    status: Status
    programs: Program[]
    noProgramsOpen: boolean
    anyProgramMaximized: boolean
    sectionAbout: string
    wallpaper: string
    language: "EN" | "ES"
  }
  actions: {
    changeStatus: (status: Status) => void
    openProgram: (program: Program) => void
    closeProgram: (program: Program) => void
    maximizedProgram: (program: Program) => void
    minimizedProgram: (program: Program) => void
    changeSectionAbout: (section: string) => void
    closeAllPrograms: (program: Program) => void
    changeWallpaper: (wallpaper: string) => void
    changeLanguage: (l: "ES" | "EN") => void
  }
}

interface ChildrenProp {
  children: React.ReactNode
}

const UserContext = createContext({} as Context)

const UserProvider = ({ children }: ChildrenProp) => {
  const [status, setStatus] = useState<Status>(Status.loading)
  const [noProgramsOpen, setProgramsOpen] = useState<boolean>(false)
  const [anyProgramMaximized, setAnyProgramMaximized] = useState<boolean>(false)
  const [sectionAbout, setSectionAbout] = useState<string>("sobre mi")
  const [wallpaper, setWallpaper] = useState<string>(wallpapers[0])
  const [language, setLanguage] = useState<"EN" | "ES">("ES")
  const [programs, setPrograms] = useState<Program[]>(programsArray)

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof JSON.parse(localStorage.getItem("Wallpaper") || "{}") !== "object"
    )
      setWallpaper(JSON.parse(localStorage.getItem("Wallpaper") || "{}"))
  }, [])

  const handleChangeSectionAbout = (s: string) => {
    setSectionAbout(s)
  }

  const handleChangeWallpaper = (w: string) => {
    localStorage.setItem("Wallpaper", JSON.stringify(w))
    setWallpaper(w)
  }

  const handleCheckProgramsClose = () => {
    let allClose = true
    programs.map((program) => {
      if (program.open === true) allClose = false
    })

    setProgramsOpen(allClose)
  }

  const handleCheckProgramMaximized = () => {
    let anyMaximized = false

    programs.map((program) => {
      if (program.maximized === true) anyMaximized = false
    })

    setAnyProgramMaximized(anyMaximized)
  }

  function handleChangeStatus(s: Status) {
    setStatus(s)
  }

  function handleOpenProgram(p: Program) {
    const aux = programs.map((program) => {
      if (program.name === p.name) {
        return {
          ...program,
          open: true,
          minimized: false,
        }
      }
      return program
    })
    setPrograms(aux)
    setStatus(Status.update)
    handleCheckProgramsClose()
  }

  function handleCloseProgram(p: Program) {
    const aux = programs.map((program) => {
      if (program.name === p.name) {
        return {
          ...program,
          open: false,
          maximized: false,
        }
      }
      return program
    })
    setPrograms(aux)
    setStatus(Status.update)
    handleCheckProgramsClose()
    handleCheckProgramMaximized()
  }

  function handleMaximizedProgram(p: Program) {
    const aux = programs.map((program) => {
      if (program.name === p.name) {
        return {
          ...program,
          maximized: !p.maximized,
          minimized: false,
        }
      }
      return program
    })
    setPrograms(aux)
    setStatus(Status.update)
    handleCheckProgramsClose()
    handleCheckProgramMaximized()
  }

  function handleMinimizedProgram(p: Program) {
    const aux = programs.map((program) => {
      if (program.name === p.name) {
        return {
          ...program,
          maximized: false,
          minimized: true,
          open: false,
        }
      } else return program
    })
    setPrograms(aux)
    setStatus(Status.update)
    handleCheckProgramsClose()
  }

  function handleCloseAllPrograms(p: Program) {
    const aux = programs.map((program) => {
      if (program.name !== p.name) {
        return {
          ...program,
          open: false,
          maximized: false,
        }
      } else
        return {
          ...program,
          open: true,
          maximized: false,
          minimized: false,
        }
    })
    setPrograms(aux)
    setStatus(Status.update)
    handleCheckProgramsClose()
    handleCheckProgramMaximized()
  }

  function handleChangeLanguage(l: "ES" | "EN") {
    setLanguage(l)
  }

  const state: Context["state"] = {
    status,
    programs,
    noProgramsOpen,
    anyProgramMaximized,
    sectionAbout,
    wallpaper,
    language,
  }

  const actions = {
    changeStatus: handleChangeStatus,
    openProgram: handleOpenProgram,
    closeProgram: handleCloseProgram,
    maximizedProgram: handleMaximizedProgram,
    minimizedProgram: handleMinimizedProgram,
    changeSectionAbout: handleChangeSectionAbout,
    closeAllPrograms: handleCloseAllPrograms,
    changeWallpaper: handleChangeWallpaper,
    changeLanguage: handleChangeLanguage,
  }

  if (status === "update") {
    setStatus(Status.ready)
  }

  return (
    <UserContext.Provider value={{ state, actions }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext as default, UserProvider as Provider }
