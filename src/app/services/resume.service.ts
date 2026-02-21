import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/resume';

  // Вказуємо <any>, щоб прибрати помилку 'unknown'
  public resumeData = signal<any>(null);
  public errorMessage = signal<string>('');

  getResume() {
    this.errorMessage.set('');
    this.http.get<any>(this.apiUrl).pipe(
      catchError((err: any) => {
        this.errorMessage.set('Сервер не відповідає. Запустіть Node.js.');
        return of(null);
      })
    ).subscribe(data => {
      if (data) this.resumeData.set(data);
    });
  }

  updateResume(newData: any) {
    this.errorMessage.set('');
    return this.http.post<any>(this.apiUrl, newData).pipe(
      tap(() => this.resumeData.set(newData)),
      catchError((err: any) => {
        this.errorMessage.set('Помилка збереження');
        return of(null);
      })
    );
  }
}
