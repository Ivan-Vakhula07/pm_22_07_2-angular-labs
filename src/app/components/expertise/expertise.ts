import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expertise.html',
  styleUrl: './expertise.css'
})
export class ExpertiseComponent {
  // Залишаємо декоратор @Input, щоб батьківський компонент міг передавати дані
  // Але одразу присвоюємо йому твій масив як значення за замовчуванням
  @Input() skills: any[] = [
    { name: 'Adobe Photoshop', percent: 90 },
    { name: 'Adobe Illustrator', percent: 80 },
    { name: 'Adobe Indesign', percent: 75 },
    { name: 'Power Point', percent: 95 }
  ];
}
