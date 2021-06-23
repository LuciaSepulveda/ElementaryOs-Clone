import React from "react"

import UserContext, {Context} from "./context"

export function useStatus(): Context["state"]["status"] {
  const {
    state: {status},
  } = React.useContext(UserContext)

  return status
}

export function usePrograms(): Context["state"]["programs"] {
  const {
    state: {programs},
  } = React.useContext(UserContext)

  return programs
}

export function useNoProgramsOpen(): Context["state"]["noProgramsOpen"] {
  const {
    state: {noProgramsOpen},
  } = React.useContext(UserContext)

  return noProgramsOpen
}

export function useChangeStatus(): Context["actions"]["changeStatus"] {
  const {
    actions: {changeStatus},
  } = React.useContext(UserContext)

  return changeStatus
}

export function useOpenProgram(): Context["actions"]["openProgram"] {
  const {
    actions: {openProgram},
  } = React.useContext(UserContext)

  return openProgram
}

export function useCloseProgram(): Context["actions"]["closeProgram"] {
  const {
    actions: {closeProgram},
  } = React.useContext(UserContext)

  return closeProgram
}

export function useMaximizedProgram(): Context["actions"]["maximizedProgram"] {
  const {
    actions: {maximizedProgram},
  } = React.useContext(UserContext)

  return maximizedProgram
}

export function useMinimizedProgram(): Context["actions"]["minimizedProgram"] {
  const {
    actions: {minimizedProgram},
  } = React.useContext(UserContext)

  return minimizedProgram
}
