import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './right.html',
  styleUrl: './right.css'
})
export class RightComponent implements OnInit {
  private resumeService = inject(ResumeService);
  private fb = inject(FormBuilder);

  // ПУНКТ 3: РЕАЛІЗАЦІЯ РЕАКТИВНОЇ ФОРМИ ТА ДОДАТКОВА ЛОГІКА ВАЛІДАЦІЇ
  // Створюємо групу полів через FormBuilder
  public contactForm = this.fb.group({
    // ПУНКТ 2: ВАЛІДАЦІЯ ОБОВ'ЯЗКОВИХ ПОЛІВ ТА ФОРМАТУ
    userName: ['', Validators.required], // Обов'язкове поле
    userEmail: ['', [Validators.required, Validators.email]], // Обов'язкове + перевірка формату email
    message: ['', Validators.required] // Обов'язкове поле
  });

  // Геттер для швидкого доступу до контролів форми у HTML-шаблоні
  get f() { return this.contactForm.controls; }

  ngOnInit() {
    this.resumeService.getResume();
  }

  onContactSubmit() {
    console.log('Кнопка натиснута!');

    // Перевірка валідності всієї форми перед відправкою
    if (this.contactForm.valid) {

      // ПУНКТ 4: ВІДПРАВКА ВВЕДЕНИХ ДАНИХ НА СЕРВЕР ЧЕРЕЗ POST-ЗАПИТ
      // Використовуємо сервіс для передачі об'єкта contactForm.value
      this.resumeService.sendContactMessage(this.contactForm.value).subscribe({
        next: (res) => {
          alert('УРА! Дані відправлено в db.json!');
          this.contactForm.reset(); // Очищення форми після успішного запиту
        },
        error: (err) => {
          alert('ПОМИЛКА: Кнопка працює, але сервер НЕ ЗАПУЩЕНИЙ у терміналі!');
        }
      });
    } else {
      alert('Будь ласка, заповніть усі поля!');
    }
  }
}
