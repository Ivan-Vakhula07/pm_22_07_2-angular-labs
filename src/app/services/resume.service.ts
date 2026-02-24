import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  // ПУНКТ 2: Створення Angular-сервісу та ін'єкція HttpClient для HTTP-запитів
  private http = inject(HttpClient);

  // ПУНКТ 1: Адреса нашого Node.js бекенд-сервера (папка /server)
  private apiUrl = 'http://localhost:3000/api/resume';

  // ПУНКТ 3: Signal для реактивного відображення отриманих даних у компонентах
  public resumeData = signal<any>(null);

  // ПУНКТ 5: Signal для збереження повідомлень про помилки
  public errorMessage = signal<string>('');

  // ПУНКТ 3: Реалізація GET-запиту для отримання даних з API
  getResume() {
    this.errorMessage.set(''); // Скидання помилки перед новим запитом
    this.http.get<any>(this.apiUrl).pipe(
      // ПУНКТ 5: Обробка помилок (Error Handling) через RxJS оператор catchError
      catchError((err: any) => {
        this.errorMessage.set('Сервер не відповідає. Запустіть Node.js.');
        return of(null);
      })
    ).subscribe(data => {
      if (data) this.resumeData.set(data); // Запис отриманих даних у Signal
    });
  }

  // ПУНКТ 4: Реалізація POST-запиту для надсилання (запису) даних на сервер
  updateResume(newData: any) {
    this.errorMessage.set('');
    return this.http.post<any>(this.apiUrl, newData).pipe(
      // Оновлюємо локальний стан (Signal), якщо запит успішний
      tap(() => this.resumeData.set(newData)),
      // ПУНКТ 5: Обробка помилок при спробі запису
      catchError((err: any) => {
        this.errorMessage.set('Помилка збереження');
        return of(null);
      })
    );
  }
}
