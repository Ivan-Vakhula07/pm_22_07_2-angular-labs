import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-right',
  standalone: true,
  templateUrl: './right.html',
  styleUrl: './right.css'
})
export class RightComponent {
  // Керування згортанням
  isAboutOpen = signal(true);
  isEducationOpen = signal(true);
  isExperienceOpen = signal(true);

  // Дані для кружечків експертизи
  skills = signal([
    { name: 'Adobe Photoshop', percent: 85 },
    { name: 'Adobe Illustrator', percent: 75 },
    { name: 'Adobe Indesign', percent: 60 },
    { name: 'Power Point', percent: 90 }
  ]);

  toggleAbout() { this.isAboutOpen.set(!this.isAboutOpen()); }
  toggleEducation() { this.isEducationOpen.set(!this.isEducationOpen()); }
  toggleExperience() { this.isExperienceOpen.set(!this.isExperienceOpen()); }
}
