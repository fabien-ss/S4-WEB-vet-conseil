import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutsRendezVousComponent } from './ajouts-rendez-vous.component';

describe('AjoutsRendezVousComponent', () => {
  let component: AjoutsRendezVousComponent;
  let fixture: ComponentFixture<AjoutsRendezVousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutsRendezVousComponent]
    });
    fixture = TestBed.createComponent(AjoutsRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
