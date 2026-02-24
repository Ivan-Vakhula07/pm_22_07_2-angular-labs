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

  // Спрощуємо валідацію, щоб кнопка точно працювала
  public contactForm = this.fb.group({
    userName: ['', Validators.required],
    userEmail: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  // ЦЕ ВИПРАВЛЯЄ ПОМИЛКУ "Property f does not exist"
  get f() { return this.contactForm.controls; }

  ngOnInit() {
    this.resumeService.getResume();
  }

  onContactSubmit() {
    console.log('Кнопка натиснута!');
    if (this.contactForm.valid) {
      // ПУНКТ 4: РЕАЛЬНА ВІДПРАВКА
      this.resumeService.sendContactMessage(this.contactForm.value).subscribe({
        next: (res) => {
          alert('УРА! Дані відправлено в db.json!');
          this.contactForm.reset();
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
