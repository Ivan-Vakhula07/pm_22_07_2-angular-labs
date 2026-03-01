import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css'  // <--- ДОДАЙ ЦЕЙ РЯДОК
})
export class AboutComponent {
  content = input<string>('');
  isOpen = signal(true);
  toggle() { this.isOpen.set(!this.isOpen()); }
}
