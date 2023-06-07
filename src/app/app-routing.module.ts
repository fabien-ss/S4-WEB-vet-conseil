import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { GestionRendezVousComponent } from "./gestion-rendez-vous/gestion-rendez-vous.component";
import { DetailsRendezVousComponent } from "./details-rendez-vous/details-rendez-vous.component";

const routes: Routes = [
    { path: '', component : GestionRendezVousComponent },
    { path :  'detail_rendez_vous/:id', component : DetailsRendezVousComponent,}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  