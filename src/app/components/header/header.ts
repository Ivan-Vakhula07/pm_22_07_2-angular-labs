import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  // Додаємо подію (click) на заголовок
  template: `
    <header class="bg-dark text-white p-3 text-center" (click)="headerClicked()">
      <h1 style="cursor: pointer;">{{ name() }} - Резюме</h1>
    </header>
  `,
})
export class HeaderComponent {
  name = input<string>('Гість'); // Приймає дані (Input)

  // Створюємо вихідну подію (Output)
  onHeaderClick = output<string>();

  headerClicked() {
    // Відправляємо дані назад батькові при кліку
    this.onHeaderClick.emit(`Користувач клікнув по заголовку: ${this.name()}`);
  }
}
