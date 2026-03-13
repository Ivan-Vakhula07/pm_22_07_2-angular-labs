import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expertise } from './expertise';

describe('Expertise', () => {
  let component: Expertise;
  let fixture: ComponentFixture<Expertise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expertise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expertise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
