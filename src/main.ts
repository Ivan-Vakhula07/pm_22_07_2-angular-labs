import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// ВИПРАВЛЕНО: Імпортуємо AppComponent, а не App
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
