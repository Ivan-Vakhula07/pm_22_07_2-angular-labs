import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="login-container">
      <h2>Вхід</h2>
      <button (click)="onLogin()">Увійти як Адмін</button>
    </div>
  `
})
export class LoginComponent {
  private router = inject(Router);

  onLogin() {
    localStorage.setItem('isLoggedIn', 'true'); // Імітація входу
    this.router.navigate(['/admin']);
  }
}
