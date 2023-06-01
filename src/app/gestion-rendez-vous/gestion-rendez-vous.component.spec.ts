import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRendezVousComponent } from './gestion-rendez-vous.component';

describe('GestionRendezVousComponent', () => {
  let component: GestionRendezVousComponent;
  let fixture: ComponentFixture<GestionRendezVousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionRendezVousComponent]
    });
    fixture = TestBed.createComponent(GestionRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
