import { Injectable } from '@angular/core';
import { portfolioData } from '../../assets/data/portfolio.data';
import { IPortfolio } from '../models/IPortfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  portfolioData = portfolioData

  getPortfolioData(): IPortfolio {
    return this.portfolioData;
  }
}
