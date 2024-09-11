import { IPortfolio } from "../../app/models/IPortfolio.interface";
import { AwsCloudPractitioner } from "./content/certifications/aws-cloud-practitioner";
import { UniversityGalway } from "./content/education/university-galway";
import { UniversityLisbon } from "./content/education/university-lisbon";
import { EDP } from "./content/employment/edp";
import { Fidelity } from "./content/employment/fidelity";
import { ResumeBuilder } from "./content/projects/resume-builder";
import { ToDoApp } from "./content/projects/to-do-app";

const imagesFolderPath = "/assets/images/skills/";

export const portfolioData: IPortfolio = {
  profile: {
    name: "Tomás Ndlate",
    imagePath: "/assets/images/profile-image.jpeg",
    role: "Software Engineer",
    headline: "Exploring the world of AI, Cloud, and Software.",
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/tomasndlate/",
      githubUrl: "https://github.com/tomasndlate",
    }
  },
  about: {
    title: "About Me",
    description: [
      "I'm a Software Engineer with a degree in Computer Science and experience at \
      <a href='https://www.linkedin.com/company/fidelity-investments/' target='_blank'> \
      <b>Fidelity Investments</b></a>.",

      "Currently pursuing a Master's in Artificial Intelligence at the <a href='https://www.linkedin.com/school/universityofgalway/' target='_blank'> \
      <b>University of Galway</b></a>, I'm passionate about merging software development with AI to drive innovation.",
    ]
  },
  employment: {
    title: "Work Experience",
    topics: [ Fidelity, EDP ]
  },
  education: {
    title: "Education History",
    topics: [ UniversityGalway, UniversityLisbon ]
  },
  certifications: {
    title: "Certifications",
    topics: [ AwsCloudPractitioner ]
  },
  skills: {
    title: "Skills",
    elements: [
      { name: "Angular", imagePath: `${imagesFolderPath}angular.svg` },
      { name: "AWS", imagePath: `${imagesFolderPath}aws.svg` },
      { name: "CSS", imagePath: `${imagesFolderPath}css.svg` },
      { name: "Docker", imagePath: `${imagesFolderPath}docker.svg` },
      { name: "Figma", imagePath: `${imagesFolderPath}figma.svg` },
      { name: "GitHub", imagePath: `${imagesFolderPath}github.svg` },
      { name: "HTML", imagePath: `${imagesFolderPath}html.svg` },
      { name: "Insomnia", imagePath: `${imagesFolderPath}insomnia.svg` },
      { name: "Java", imagePath: `${imagesFolderPath}java.svg` },
      { name: "JavaScript", imagePath: `${imagesFolderPath}javascript.svg` },
      { name: "Jira", imagePath: `${imagesFolderPath}jira.svg` },
      { name: "Mongo DB", imagePath: `${imagesFolderPath}mongo-db.svg` },
      { name: "mongoose", imagePath: `${imagesFolderPath}mongoose.svg` },
      { name: "MySQL", imagePath: `${imagesFolderPath}mysql.svg` },
      { name: "NodeJS", imagePath: `${imagesFolderPath}node-js.svg` },
      { name: "npm", imagePath: `${imagesFolderPath}npm.svg` },
      { name: "Photoshop", imagePath: `${imagesFolderPath}photoshop.svg` },
      { name: "Postman", imagePath: `${imagesFolderPath}postman.svg` },
      { name: "Spring", imagePath: `${imagesFolderPath}spring.svg` },
      { name: "TypeScript", imagePath: `${imagesFolderPath}typescript.svg` },
      { name: "Visual Studio", imagePath: `${imagesFolderPath}vs-code.svg` },
    ]
  },
  projects: {
    title: "Projects",
    subtitle: "Discover what I did so far!",
    description: "Explore a collection of my work, showcasing various \
      projects and the skills and technologies I've used. \
      Click to see the details and impact of each project.",
    elements: [ ResumeBuilder, ToDoApp ]
  }
}

