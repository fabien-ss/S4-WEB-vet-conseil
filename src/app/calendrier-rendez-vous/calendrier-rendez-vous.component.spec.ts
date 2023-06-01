import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierRendezVousComponent } from './calendrier-rendez-vous.component';

describe('CalendrierRendezVousComponent', () => {
  let component: CalendrierRendezVousComponent;
  let fixture: ComponentFixture<CalendrierRendezVousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendrierRendezVousComponent]
    });
    fixture = TestBed.createComponent(CalendrierRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
