import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service'; // ПЕРЕВІРЕНО: 2 крапки вистачить

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right.html',
  styleUrl: './right.css'
})
export class RightComponent implements OnInit {
  // Використовуємо ін'єкцію через inject
  private resumeService = inject(ResumeService);

  isAboutOpen = signal(true);
  isEducationOpen = signal(true);
  isExperienceOpen = signal(true);

  // Отримуємо сигнали з сервісу
  public resumeData = this.resumeService.resumeData;
  public errorMessage = this.resumeService.errorMessage;

  ngOnInit() {
    this.resumeService.getResume();
  }

  toggleAbout() { this.isAboutOpen.set(!this.isAboutOpen()); }
  toggleEducation() { this.isEducationOpen.set(!this.isEducationOpen()); }
  toggleExperience() { this.isExperienceOpen.set(!this.isExperienceOpen()); }

  saveData() {
    // Кастуємо до any, щоб прибрати помилку TS2571
    const currentData = this.resumeData() as any;

    if (currentData) {
      const updatedData = {
        ...currentData,
        personal: {
          ...currentData.personal,
          name: currentData.personal.name.includes('(ОНОВЛЕНО)')
            ? "ІВАН ВАХУЛА"
            : "ІВАН ВАХУЛА (ОНОВЛЕНО)"
        }
      };

      this.resumeService.updateResume(updatedData).subscribe({
        next: (response: any) => {
          if (response) alert('Дані збережено в db.json!');
        },
        error: (err: any) => alert('Помилка збереження!')
      });
    }
  }
}
