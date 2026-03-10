import { Routes } from '@angular/router'; // Додай цей рядок
import { authGuard } from './guards/auth.guard'; // Додай цей рядок (перевір шлях до файлу)
import { BaseComponent } from './components/base/base';

export const routes: Routes = [
  { path: '', redirectTo: 'resume', pathMatch: 'full' },
  {
    path: 'resume',
    loadComponent: () => import('./components/base/base').then(m => m.BaseComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin/admin').then(m => m.AdminComponent),
    canActivate: [authGuard]
  }
];
