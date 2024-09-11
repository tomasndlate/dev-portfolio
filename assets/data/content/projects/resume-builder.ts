import { IProject } from "src/app/models/IPortfolio.interface";

export const ResumeBuilder: IProject = {
  title: "Resume Builder",
  subtitle: "Frontend project",
  imagePath: "assets/images/projects/resume-builder-demo.png",
  description: "The Resume Builder App is a web tool for creating professional \
    resumes easily. Users input personal details, work experience, education, \
    and skills to generate a formatted, downloadable resume.",
  skills: ["Angular", "pdfMake", "pdfjs-dist"],
  githubUrl: "https://github.com/tomasndlate/resume-builder",
  demoUrl: "https://tomasndlate.github.io/resume-builder/"
}
