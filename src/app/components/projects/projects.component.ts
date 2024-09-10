import { Component, Input } from '@angular/core';
import { IPortfolio } from 'src/app/models/IPortfolio.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() projects!: IPortfolio['projects'];
}
