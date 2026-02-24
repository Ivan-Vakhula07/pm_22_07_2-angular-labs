import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';
import { AboutComponent } from '../about/about';
import { EducationComponent } from '../education/education';
import { ExperienceComponent } from '../experience/experience';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [CommonModule, AboutComponent, EducationComponent, ExperienceComponent],
  templateUrl: './right.html',
  styleUrl: './right.css'
})
export class RightComponent implements OnInit {
  private resumeService = inject(ResumeService);
  public resumeData = this.resumeService.resumeData;
  public errorMessage = this.resumeService.errorMessage;

  ngOnInit() {
    this.resumeService.getResume();
  }

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
      this.resumeService.updateResume(updatedData).subscribe({
        next: (res) => res && alert('Дані збережено в db.json!'),
        error: () => alert('Помилка збереження!')
      });
    }
  }
}
