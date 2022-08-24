export interface ProjectsType {
  projects: {
    data: ProjectsTypeAttributes[]
  }
}

export interface ProjectsTypeAttributes {
  attributes: {
    project: ProjectType
  }
}

export interface ProjectType {
  id: string
  title: string
  url: string
  description: string
  stacks: Stacks
  image: Image
}

export interface Stacks {
  icons: Icons
}

export interface Icons {
  data: Daum[]
}

export interface Daum {
  attributes: Attributes
}

export interface Attributes {
  url: string
  formats: any
}

export interface Image {
  data: Data
}

export interface Data {
  attributes: Attributes2
}

export interface Attributes2 {
  url: string
}
