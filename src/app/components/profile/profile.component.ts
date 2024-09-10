import { Component, Input } from '@angular/core';
import { IPortfolio } from 'src/app/models/IPortfolio.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() profile!: IPortfolio['profile'];
}
