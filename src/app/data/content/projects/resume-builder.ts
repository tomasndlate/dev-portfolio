import { IProject } from "src/app/models/IPortfolio.interface";

export const ResumeBuilder: IProject = {
  title: "Resume Builder",
  subtitle: "Frontend project",
  imagePath: "/assets/images/projects/resume-builder-demo.png",
  description: "The Resume Builder App is a web application that allows users to \
    create professional resumes quickly and easily. Users can input their personal \
    information, work experience, education, and skills, and generate a \
    well-formatted resume that can be downloaded or shared.",
  skills: ["Angular", "pdfMake", "pdfjs-dist"],
  githubUrl: "https://github.com/tomasndlate/resume-builder",
  demoUrl: "https://tomasndlate.github.io/resume-builder/"
}
