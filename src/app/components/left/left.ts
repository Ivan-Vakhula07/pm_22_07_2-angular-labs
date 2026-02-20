import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [],
  // ВИПРАВЛЕНО: Шлях має вести до файлу, який у тебе реально існує
  templateUrl: './left.html',
  // ВИПРАВЛЕНО: Якщо у тебе файл стилів просто left.css або ти використовуєш styles.css
  styleUrl: './left.css'
})
export class LeftComponent {
  // Дані для блоку "Мови" — тепер вони автоматично підтягнуться в твій @for цикл
  languages = signal([
    { name: 'Українська', level: '100%' },
    { name: 'Англійська', level: '80%' },
    { name: 'Польська', level: '65%' }
  ]);
}
