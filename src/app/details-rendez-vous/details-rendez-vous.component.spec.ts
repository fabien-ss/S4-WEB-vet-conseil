import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRendezVousComponent } from './details-rendez-vous.component';

describe('DetailsRendezVousComponent', () => {
  let component: DetailsRendezVousComponent;
  let fixture: ComponentFixture<DetailsRendezVousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsRendezVousComponent]
    });
    fixture = TestBed.createComponent(DetailsRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
