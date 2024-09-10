import { Component } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { IPortfolio } from 'src/app/models/IPortfolio.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  portfolioData!: IPortfolio;

  constructor(private portfolioDataService: PortfolioDataService){}

  ngOnInit() {
    this.portfolioData = this.portfolioDataService.getPortfolioData();
  }
}
