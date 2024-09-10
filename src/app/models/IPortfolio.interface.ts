export interface IPortfolio {
  profile: IProfile,
  about: IAbout,
  employment: {
    title: string,
    topics: IResumeSectionTopic[]
  },
  education: {
    title: string,
    topics: IResumeSectionTopic[]
  },
  certifications: {
    title: string,
    topics: IResumeSectionTopic[]
  },
  skills: {
    title: string,
    elements: ISkill[]
  }
  projects: {
    title: string,
    subtitle: string,
    description: string,
    elements: IProject[]
  }
}

export interface IProfile {
  name: string,
  imagePath: string,
  role: string,
  headline: string,
  socialMedia: {
    githubUrl: string,
    linkedinUrl: string
  }
}

export interface IAbout {
  title: string,
  description: string[]
}

export interface IResumeSectionTopic {
  name: string,
  institution: { name: string, link: string},
  startDate: string,
  endDate: string,
  description: string,
  skills: string[]
}

export interface ISkill {
  name: string,
  imagePath: string
}

export interface IProject {
  title: string,
  subtitle: string,
  imagePath: string,
  description: string,
  skills: string[],
  githubUrl: string,
  demoUrl: string
}
