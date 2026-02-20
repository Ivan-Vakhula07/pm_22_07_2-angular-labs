import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';
import { LeftComponent } from '../left/left';
import { RightComponent } from '../right/right';

@Component({
  selector: 'app-base',
  standalone: true,
  // ВИПРАВ ТУТ: має бути слово imports без крапок
  imports: [HeaderComponent, FooterComponent, LeftComponent, RightComponent],
  templateUrl: './base.html',
  styleUrl: './base.css'
})
export class BaseComponent {
  userName = signal('Іван Вахула');
  lastUpdate = signal('');

  updateStatus(event: string) {
    this.lastUpdate.set(event);
  }
}
