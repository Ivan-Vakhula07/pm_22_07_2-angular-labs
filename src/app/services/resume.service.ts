import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';

  // 1. Додайте ці сигнали (вони викликають помилки у right.ts)
  resumeData = signal<any>(null);
  errorMessage = signal<string>('');

  // 2. Додайте цей метод (він викликає помилки у about.ts та right.ts)
  saveResumeData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/resume`, data).pipe(
      catchError(err => {
        console.error('Помилка сервера:', err);
        this.errorMessage.set('Сервер не відповідає');
        return of(null);
      })
    );
  }

  // Метод для отримання даних
  getResume() {
    this.http.get<any>(`${this.apiUrl}/api/resume`).subscribe({
      next: (data) => this.resumeData.set(data),
      error: (err) => this.errorMessage.set('Не вдалося завантажити дані')
    });
  }
}
