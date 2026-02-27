import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Імпортуємо нові компоненти
import { AddressComponent } from '../address/address';
import { ContactsComponent } from '../contacts/contacts';
import { RecommendationsComponent } from '../recommendations/recommendations';
import { LanguagesComponent } from '../languages/languages';
import { HobbiesComponent } from '../hobbies/hobbies';

@Component({
  selector: 'app-left',
  standalone: true,
  // Додаємо нові компоненти в imports
  imports: [CommonModule, AddressComponent, ContactsComponent, RecommendationsComponent, LanguagesComponent, HobbiesComponent],
  templateUrl: './left.html',
  styleUrl: './left.css'
})
export class LeftComponent {
  // Логіку мов (signal) перенесено в LanguagesComponent
}
