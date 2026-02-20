import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `<header class="bg-dark text-white p-3 text-center"><h1>{{ name() }} - Резюме</h1></header>`,
})
export class HeaderComponent {
  name = input<string>('Гість'); // Приймає дані від батька
}
