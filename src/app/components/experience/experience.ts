import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {
  list = input<any[]>([]);
  isOpen = signal(true);
  toggle() { this.isOpen.set(!this.isOpen()); }
}
