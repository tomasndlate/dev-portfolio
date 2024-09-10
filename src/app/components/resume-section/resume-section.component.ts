import { Component, Input } from '@angular/core';
import { IPortfolio } from 'src/app/models/IPortfolio.interface';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.css']
})
export class ResumeSectionComponent {
  @Input() section!: IPortfolio['employment'] | IPortfolio['education'] | IPortfolio['certifications'];
}
