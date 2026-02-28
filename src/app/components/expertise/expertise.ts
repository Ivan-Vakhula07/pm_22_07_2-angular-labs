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
  // ВИПРАВЛЕНО: змінено назву на data для синхронізації з батьківським компонентом
  @Input() data: any[] = [];
}
