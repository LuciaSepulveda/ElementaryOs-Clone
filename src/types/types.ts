export interface Program {
  name: string
  img: string
  open: boolean
  maximized: boolean
  minimized: boolean
}

export enum Status {
  loading = "loading",
  ready = "ready",
  update = "update",
}
