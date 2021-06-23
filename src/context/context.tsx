import React from "react"

import {Program, Status} from "../types/types"
import {programs} from "../data/data"

export interface Context {
  state: {
    status: Status
    programs: Program[]
    noProgramsOpen: boolean
  }
  actions: {
    changeStatus: (status: Status) => void
    openProgram: (program: Program) => void
    closeProgram: (program: Program) => void
    maximizedProgram: (program: Program) => void
    minimizedProgram: (program: Program) => void
  }
}

const UserContext = React.createContext({} as Context)

const UserProvider: React.FC = ({children}) => {
  const [status, setStatus] = React.useState<Status>(Status.loading)
  const [programs_, setPrograms] = React.useState<Program[]>(programs)
  const [noProgramsOpen, setProgramsOpen] = React.useState<boolean>(false)

  const handleCheckProgramsClose = () => {
    let allClose = true

    for (let i = 0; i < programs.length; i++) {
      if (programs[i].open === true) allClose = false
    }

    setProgramsOpen(allClose)
  }

  function handleChangeStatus(s: Status) {
    setStatus(s)
  }

  function handleOpenProgram(p: Program) {
    p.open = true
    p.minimized = false
    setStatus(Status.update)
    handleCheckProgramsClose()
  }

  function handleCloseProgram(p: Program) {
    p.open = false
    p.minimized = false
    setStatus(Status.update)
    handleCheckProgramsClose()
  }

  function handleMaximizedProgram(p: Program) {
    p.maximized = !p.maximized
    p.minimized = false
    setStatus(Status.update)
  }

  function handleMinimizedProgram(p: Program) {
    p.minimized = true
    setStatus(Status.update)
    handleCheckProgramsClose()
  }

  const state: Context["state"] = {
    status,
    programs,
    noProgramsOpen,
  }

  const actions = {
    changeStatus: handleChangeStatus,
    openProgram: handleOpenProgram,
    closeProgram: handleCloseProgram,
    maximizedProgram: handleMaximizedProgram,
    minimizedProgram: handleMinimizedProgram,
  }

  if (status === "update") {
    setStatus(Status.ready)
  }

  return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>
}

export {UserContext as default, UserProvider as Provider}
