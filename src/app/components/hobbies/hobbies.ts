import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css'
})
export class HobbiesComponent {
  hobbies = [
    { name: 'Подорожі', img: '/img/travel.jpg' },
    { name: 'Музика', img: '/img/music.jpg' },
    { name: 'Письмо', img: '/img/writing.jpg' },
    { name: 'Шахи', img: '/img/chess.jpg' }
  ];
}
