import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Перевірка статусу входу
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return true; // Дозволяємо вхід
  } else {
    alert('Доступ заборонено! Спочатку увійдіть у систему.');
    router.navigate(['/login']); // Перенаправляємо на сторінку входу
    return false; // Блокуємо доступ
  }
};
