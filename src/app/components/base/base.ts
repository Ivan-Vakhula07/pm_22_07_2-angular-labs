// ПРАВИЛЬНО:
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from '../left/left';
import { RightComponent } from '../right/right';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule, LeftComponent, RightComponent],
  template: `
    <div class="container-fluid p-0">
      <div class="row g-0 vh-100">
        <div class="col-md-4 col-lg-3 bg-dark text-white overflow-auto h-100 border-end border-secondary">
          <app-left></app-left>
        </div>
        <div class="col-md-8 col-lg-9 bg-white overflow-auto h-100">
          <app-right></app-right>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .vh-100 { height: 100vh; }
    .overflow-auto { scrollbar-width: none; }
    .overflow-auto::-webkit-scrollbar { display: none; }
  `]
})
export class BaseComponent {}
