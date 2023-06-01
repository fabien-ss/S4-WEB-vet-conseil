import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestionRendezVousComponent } from './gestion-rendez-vous/gestion-rendez-vous.component';
import { DetailsRendezVousComponent } from './details-rendez-vous/details-rendez-vous.component';
import { AjoutsRendezVousComponent } from './ajouts-rendez-vous/ajouts-rendez-vous.component';
import { CalendrierRendezVousComponent } from './calendrier-rendez-vous/calendrier-rendez-vous.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionRendezVousComponent,
    DetailsRendezVousComponent,
    AjoutsRendezVousComponent,
    CalendrierRendezVousComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
