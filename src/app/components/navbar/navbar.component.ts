import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() navigateToResume = new EventEmitter<string>();
  @Output() navigateToProjects = new EventEmitter<string>();

  emitNavigateToResume() {
    this.navigateToResume.emit();
  }

  emitNavigateToProjects() {
    this.navigateToProjects.emit();
  }
}
