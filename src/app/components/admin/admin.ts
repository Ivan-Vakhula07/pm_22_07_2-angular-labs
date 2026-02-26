import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true, // Переконайся, що цей рядок є, якщо ти використовуєш Angular 17+
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
// Зміни назву з "Admin" на "AdminComponent"
export class AdminComponent {

}
