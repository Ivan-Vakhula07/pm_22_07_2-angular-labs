import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="container mt-5 text-center">
      <h2>Сторінка входу</h2>
      <button (click)="login()" class="btn btn-primary m-2">Увійти (Admin)</button>
      <button (click)="logout()" class="btn btn-danger m-2">Вийти</button>
    </div>
  `
})
export class LoginComponent {
  private router = inject(Router);

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    alert('Ви успішно увійшли як Адмін!');
    this.router.navigate(['/admin']);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    alert('Ви вийшли з системи');
  }
}
