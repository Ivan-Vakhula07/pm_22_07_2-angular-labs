import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent {
  list = input<any[]>([]);
  isOpen = signal(true);
  toggle() { this.isOpen.set(!this.isOpen()); }
}
