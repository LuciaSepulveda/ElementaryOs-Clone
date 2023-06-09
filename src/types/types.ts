export interface Program {
  name: string
  img: string
  open: boolean
  maximized: boolean
  minimized: boolean
}

export interface Project {
  name: string
  img: string
  description: string
  github?: string
  demo: string
  techs: string[]
  genosha?: boolean
}

export enum Status {
  loading = "loading",
  ready = "ready",
  update = "update",
}

export interface Social {
  name: string
  link: string
  logo: string
}
