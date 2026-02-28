import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard'; // Пункт 3: Захист

export const routes: Routes = [
  // Пункт 1: Редирект
  { path: '', redirectTo: 'resume', pathMatch: 'full' },

  {
    path: 'resume',
    // Пункт 4: Lazy Loading
    loadComponent: () => import('./components/right/right').then(m => m.RightComponent)
  },
  {
    path: 'login',
    // Пункт 2: Автентифікація
    loadComponent: () => import('./components/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'admin',
    // Пункт 4: Lazy Loading
    loadComponent: () => import('./components/admin/admin').then(m => m.AdminComponent),
    // Пункт 3: Захист маршруту
    canActivate: [authGuard]
  }
];
