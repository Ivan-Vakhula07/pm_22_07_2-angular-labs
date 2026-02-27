import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';
import { AboutComponent } from '../about/about';
import { EducationComponent } from '../education/education';
import { ExperienceComponent } from '../experience/experience';
import { ExpertiseComponent } from '../expertise/expertise';
// ПУНКТ 3: Імпортуємо модулі для реактивних форм
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-right',
  standalone: true,
  // ПУНКТ 3: Додаємо ReactiveFormsModule в імпорти
  imports: [CommonModule, AboutComponent, EducationComponent, ExperienceComponent, ExpertiseComponent, ReactiveFormsModule],
  templateUrl: './right.html',
  styleUrl: './right.css'
})
export class RightComponent implements OnInit {
  private resumeService = inject(ResumeService);
  private fb = inject(FormBuilder);

  public resumeData = this.resumeService.resumeData;
  public errorMessage = this.resumeService.errorMessage;

  // ПУНКТ 3: Створюємо реактивну форму (FormGroup)
  public contactForm = this.fb.group({
    // ПУНКТ 2: Додаємо валідацію: обов'язкові поля, формат пошти
    userName: ['', Validators.required],
    userEmail: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  // Геттер для доступу до контролів у HTML
  get f() { return this.contactForm.controls; }

  ngOnInit() {
    this.resumeService.getResume();
  }

  // (Метод з попередніх робіт для відображення)
  saveData() {
    const currentData = this.resumeData() as any;
    if (currentData) {
      const updatedData = {
        ...currentData,
        personal: {
          ...currentData.personal,
          name: currentData.personal.name.includes('(ОНОВЛЕНО)') ? "ІВАН ВАХУЛА" : "ІВАН ВАХУЛА (ОНОВЛЕНО)"
        }
      };

      this.resumeService.saveResumeData(updatedData).subscribe({
        next: (res: any) => {
          if (res) {
            alert('Дані збережено на сервері!');
            this.resumeService.getResume();
          }
        },
        error: () => alert('Помилка збереження!')
      });
    }
  }

  // ПУНКТ 4: Логіка для відправки даних на сервер через POST-запит
  onContactSubmit() {
    // Перевірка валідності перед відправкою
    if (this.contactForm.valid) {
      // Використовуємо сервіс для POST-запиту
      this.resumeService.saveResumeData(this.contactForm.value).subscribe({
        next: (res) => {
          if (res) {
            alert('УРА! Дані відправлено в db.json!');
            this.contactForm.reset(); // Очищення форми
          }
        },
        error: () => alert('ПОМИЛКА: Сервер НЕ ЗАПУЩЕНИЙ!')
      });
    } else {
      alert('Будь ласка, заповніть усі поля!');
    }
  }
}
