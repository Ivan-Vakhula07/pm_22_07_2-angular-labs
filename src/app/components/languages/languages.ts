import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.html',
  styleUrl: './languages.css'
})
export class LanguagesComponent {
  languages = signal([
    { name: 'Українська', level: '100%' },
    { name: 'Англійська', level: '80%' },
    { name: 'Польська', level: '65%' }
  ]);
}
