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
  @Input() skills: any[] = [];
}
