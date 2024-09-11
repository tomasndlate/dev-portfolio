import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResumeSectionComponent } from './components/resume-section/resume-section.component';
import { ResumeAboutComponent } from './components/resume-about/resume-about.component';
import { ResumeSectionTopicComponent } from './components/resume-section/resume-section-topic/resume-section-topic.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    ResumeSectionComponent,
    ResumeAboutComponent,
    ResumeSectionTopicComponent,
    SkillsComponent,
    PortfolioComponent,
    ProjectsComponent,
    ProjectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
