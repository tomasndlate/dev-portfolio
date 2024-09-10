import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IPortfolio } from 'src/app/models/IPortfolio.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() skills!: IPortfolio['skills'];
}
