import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Імпортуйте всі компоненти, які ви перенесли
import { AddressComponent } from '../address/address';
import { ContactsComponent } from '../contacts/contacts';
import { ExpertiseComponent } from '../expertise/expertise';
import { HobbiesComponent } from '../hobbies/hobbies';
import { LanguagesComponent } from '../languages/languages';
import { RecommendationsComponent } from '../recommendations/recommendations';

@Component({
  selector: 'app-left',
  standalone: true,
  // Додайте їх сюди:
  imports: [
    CommonModule,
    AddressComponent,
    ContactsComponent,
    ExpertiseComponent,
    HobbiesComponent,
    LanguagesComponent,
    RecommendationsComponent
  ],
  templateUrl: './left.html',
  styleUrl: './left.css'
})
export class LeftComponent { }
