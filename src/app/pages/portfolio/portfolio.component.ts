import { Component, ElementRef, ViewChild } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { IPortfolio } from 'src/app/models/IPortfolio.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  @ViewChild('resumeSection') resumeSection!: ElementRef;
  @ViewChild('projectsSection') projectsScetion!: ElementRef;

  portfolioData!: IPortfolio;

  constructor(private portfolioDataService: PortfolioDataService){}

  ngOnInit() {
    this.portfolioData = this.portfolioDataService.getPortfolioData();
  }

  // scrollToResume(): void {
  //   this.resumeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  // }

  scrollToProjects(): void {
    this.projectsScetion.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
