import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="login-container" style="max-width: 350px; margin: 50px auto; padding: 25px; border: 1px solid #ddd; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: sans-serif;">

      <h2 style="text-align: center;">{{ isRegisterMode ? 'Реєстрація' : 'Вхід' }}</h2>

      <div class="form-group" style="margin-bottom: 15px;">
        <label>Логін:</label>
        <input type="text" [(ngModel)]="username" name="username" class="form-control" style="width: 100%; padding: 8px; margin-top: 5px;">
      </div>

      <div class="form-group" style="margin-bottom: 15px;">
        <label>Пароль:</label>
        <input type="password" [(ngModel)]="password" name="password" class="form-control" style="width: 100%; padding: 8px; margin-top: 5px;">
      </div>

      <button (click)="submit()" style="width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
        {{ isRegisterMode ? 'Зареєструватися' : 'Увійти' }}
      </button>

      <p (click)="toggleMode()" style="text-align: center; color: #007bff; cursor: pointer; margin-top: 15px; font-size: 0.9em;">
        {{ isRegisterMode ? 'Вже є акаунт? Увійти' : 'Немає акаунту? Створити' }}
      </p>

      <p *ngIf="message" [style.color]="isError ? 'red' : 'green'" style="margin-top: 15px; text-align: center;">
        {{ message }}
      </p>
    </div>
  `
})
export class LoginComponent {
  // ПУНКТ 2: Реалізувати компонент для автентифікації користувача (вхід/реєстрація)

  private router = inject(Router);

  username = '';
  password = '';
  message = '';
  isError = false;
  isRegisterMode = false;

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
    this.message = '';
  }

  submit() {
    if (!this.username || !this.password) {
      this.isError = true;
      this.message = 'Заповніть усі поля!';
      return;
    }

    if (this.isRegisterMode) {
      // ПУНКТ 2: Реалізація логіки реєстрації
      const userData = { username: this.username, password: this.password };
      localStorage.setItem('registeredUser', JSON.stringify(userData));
      this.isError = false;
      this.message = 'Реєстрація успішна! Тепер увійдіть.';
      this.isRegisterMode = false;
    } else {
      // ПУНКТ 2: Реалізація логіки входу (автентифікація)

      // 1. Перевірка на "admin" (завжди пускає)
      if (this.username === 'admin' && this.password === '12345') {
        this.loginSuccess();
        return;
      }

      // 2. Перевірка зареєстрованого користувача
      const savedUser = localStorage.getItem('registeredUser');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        if (this.username === user.username && this.password === user.password) {
          this.loginSuccess();
          return;
        }
      }

      this.isError = true;
      this.message = 'Невірний логін або пароль!';
    }
  }

  private loginSuccess() {
    localStorage.setItem('isLoggedIn', 'true');
    this.isError = false;
    this.router.navigate(['/admin']);
  }
}
