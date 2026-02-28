import { Component, model, signal, inject, ViewChild, Input, OnChanges } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements OnChanges {
  private resumeService = inject(ResumeService);
  @ViewChild('aboutForm') aboutForm!: NgForm;

  // ВИПРАВЛЕНО: Додано вхідний параметр для отримання даних
  @Input() data: string = '';

  content = model<string>('');
  isOpen = signal(true);
  isEditMode = signal(false);

  // Оновлюємо модель, коли приходять дані з сервера
  ngOnChanges() {
    if (this.data) this.content.set(this.data);
  }

  toggle() { this.isOpen.set(!this.isOpen()); }

  toggleEdit() {
    if (this.isEditMode()) {
      if (this.aboutForm.valid) {
        this.saveData();
        this.isEditMode.set(false);
      }
    } else {
      this.isEditMode.set(true);
    }
  }

  saveData() {
    this.resumeService.saveResumeData({ about: this.content() }).subscribe();
  }
}
