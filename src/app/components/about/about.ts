import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  content = model<string>('');
  isOpen = signal(true);
  isEditMode = signal(false);

  toggle() { this.isOpen.set(!this.isOpen()); }
  toggleEdit() { this.isEditMode.set(!this.isEditMode()); }
}
