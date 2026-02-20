import { Component } from '@angular/core';
import { BaseComponent } from './components/base/base';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BaseComponent], // Імпортуємо Base, бо він тримає все інше
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
