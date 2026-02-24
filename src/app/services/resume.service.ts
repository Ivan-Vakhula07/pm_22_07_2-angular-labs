import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private http = inject(HttpClient);
  // Адреса нашого локального сервера
  private apiUrl = 'http://localhost:3000';

  // Метод для Завдання 4 (POST-запит)
  sendContactMessage(messageData: any) {
    return this.http.post<any>(`${this.apiUrl}/messages`, messageData).pipe(
      catchError(err => {
        console.error('Помилка: сервер не відповідає!', err);
        return of(null);
      })
    );
  }

  getResume() {
    return this.http.get<any>(`${this.apiUrl}/resume`);
  }
}
