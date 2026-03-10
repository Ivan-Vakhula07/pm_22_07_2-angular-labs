import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ПУНКТ 1: Додано для навігації до входу

// ПУНКТ 4: Компоненти, що завантажуються в межах цього модуля
import { HeaderComponent } from '../header/header';
import { AboutComponent } from '../about/about';
import { EducationComponent } from '../education/education';
import { ExperienceComponent } from '../experience/experience';
import { ExpertiseComponent } from '../expertise/expertise';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule, // Обов'язково для роботи кнопки [routerLink]
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ExpertiseComponent
  ],
  templateUrl: './right.html',
  styleUrl: './right.css'
})
export class RightComponent implements OnInit {
  private resumeService = inject(ResumeService);
  private fb = inject(FormBuilder);

  public resumeData = this.resumeService.resumeData;
  public errorMessage = this.resumeService.errorMessage;

  // Реактивна форма для зворотного зв'язку
  public contactForm = this.fb.group({
    userName: ['', Validators.required],
    userEmail: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  // Геттер для доступу до полів форми в HTML (f.userName.invalid)
  get f() { return this.contactForm.controls as any; }

  ngOnInit() {
    // ПУНКТ 4: Завантаження даних при ініціалізації компонента
    this.resumeService.getResume();
  }

  onContactSubmit() {
    if (this.contactForm.valid) {
      this.resumeService.saveResumeData(this.contactForm.value).subscribe({
        next: () => {
          alert('Дані успішно відправлено на сервер (POST)!');
          this.contactForm.reset();
        },
        error: () => alert('Помилка сервера!')
      });
    }
  }
}
