import { Component, model, signal, inject, ViewChild } from '@angular/core'; // 1. Додали ViewChild
import { FormsModule, NgForm } from '@angular/forms'; // 2. Додали NgForm
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  private resumeService = inject(ResumeService);

  // 3. Оголошуємо посилання на форму, яке використовується в HTML
  @ViewChild('aboutForm') aboutForm!: NgForm;

  content = model<string>('');
  isOpen = signal(true);
  isEditMode = signal(false);

  toggle() { this.isOpen.set(!this.isOpen()); }

  toggleEdit() {
    if (this.isEditMode()) {
      // 4. Перевіряємо валідність форми перед збереженням
      if (this.aboutForm.valid) {
        this.saveData();
        this.isEditMode.set(false);
      }
    } else {
      this.isEditMode.set(true);
    }
  }

  saveData() {
    const dataToSave = { about: this.content() };
    this.resumeService.saveResumeData(dataToSave).subscribe({
      next: (response) => console.log('Дані збережено:', response),
      error: (err) => console.error('Помилка збереження:', err)
    });
  }
}
