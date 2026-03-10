import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  template: `
    <div style="padding: 20px; text-align: center;">
      <h1>Панель адміністратора</h1>
      <p style="color: green; font-weight: bold;">Ви успішно пройшли перевірку Guard!</p>
      <div style="margin: 20px; padding: 15px; border: 1px solid #ccc;">
        <p>admin works!</p>
      </div>

      <button (click)="logout()" style="padding: 10px 20px; background-color: #ff4444; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Вийти з системи
      </button>
    </div>
  `
})
export class AdminComponent {
  private router = inject(Router);

  logout() {
    // Видаляємо прапорець входу
    localStorage.removeItem('isLoggedIn');
    // Повертаємо користувача на сторінку логіна
    this.router.navigate(['/login']);
  }
}
