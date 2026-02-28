import { Component } from '@angular/core';
// 1. МАРШРУТИЗАЦІЯ: Імпорти для роботи посилань
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // 1. МАРШРУТИЗАЦІЯ: Підключення компонентів маршрутизації
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'my-cv-app';
}
