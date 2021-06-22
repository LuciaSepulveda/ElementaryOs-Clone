import React from "react"

import {Program, Status} from "../types/types"
import {programs} from "../data/data"

export interface Context {
  state: {
    status: Status
    programs: Program[]
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

  function handleChangeStatus(s: Status) {
    setStatus(s)
  }

  function handleOpenProgram(p: Program) {
    p.open = true
    p.minimized = false
    setStatus(Status.update)
  }

  function handleCloseProgram(p: Program) {
    p.open = false
    setStatus(Status.update)
  }

  function handleMaximizedProgram(p: Program) {
    p.maximized = !p.maximized
    p.minimized = false
    setStatus(Status.update)
  }

  function handleMinimizedProgram(p: Program) {
    p.minimized = true
    setStatus(Status.update)
  }

  const state: Context["state"] = {
    status,
    programs,
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
