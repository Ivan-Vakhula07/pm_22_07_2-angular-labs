import { Injectable, inject, signal } from '@angular/core'; // 1. Додали signal
import { HttpClient } from '@angular/common/http';
import { catchError, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';

  // 2. Додаємо сигнали для даних та помилок (усуває помилки в RightComponent)
  resumeData = signal<any>(null);
  errorMessage = signal<string>('');

  // 3. Метод для оновлення даних (POST-запит)
  saveResumeData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/resume`, data).pipe(
      catchError(err => {
        console.error('Помилка сервера:', err);
        this.errorMessage.set('Сервер не відповідає'); // Оновлюємо сигнал помилки
        return of(null);
      })
    );
  }

  // 4. Метод для отримання даних (GET-запит)
  getResume() {
    this.http.get<any>(`${this.apiUrl}/api/resume`).subscribe({
      next: (data) => this.resumeData.set(data), // Оновлюємо сигнал даних
      error: (err) => this.errorMessage.set('Не вдалося завантажити дані')
    });
  }
}
