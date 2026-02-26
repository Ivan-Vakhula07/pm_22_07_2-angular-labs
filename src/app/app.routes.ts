import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'resume', pathMatch: 'full' },
  {
    path: 'resume',
    // Спробуй прибрати .component, якщо файл називається right.ts
    loadComponent: () => import('./components/right/right').then(m => m.RightComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'admin',
    // Переконайся, що шлях веде до папки admin і файлу admin
    loadComponent: () => import('./components/admin/admin').then(m => m.AdminComponent),
    canActivate: [authGuard]
  }
];
