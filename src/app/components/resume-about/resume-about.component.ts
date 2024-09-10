import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IPortfolio } from 'src/app/models/IPortfolio.interface';

@Component({
  selector: 'app-resume-about',
  templateUrl: './resume-about.component.html',
  styleUrls: ['./resume-about.component.css']
})
export class ResumeAboutComponent {
  @Input() about!: IPortfolio['about'];
}
