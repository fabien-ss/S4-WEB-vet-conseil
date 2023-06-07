import { Component } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-gestion-rendez-vous',
  templateUrl: './gestion-rendez-vous.component.html',
  styleUrls: ['./gestion-rendez-vous.component.css']
})
export class GestionRendezVousComponent {
  rendez_vouss =[
    {
      "id": "1",
      "name": "Rakoto",
      "debut": "2023-06-01T14:30:00Z",
      "fin": "2023-06-01T14:50:00Z"
    },
    {
      "id": "1",
      "name": "Rakoto",
      "debut": "2023-06-01T16:11:00Z",
      "fin": "2023-06-01T14:50:00Z"
    },
    {
      "id": "2",
      "name": "Rajiv",
      "debut": "2023-06-02T09:00:00Z",
      "fin": "2023-06-02T17:00:00Z"
    },
    {
      "id": "3",
      "name": "Sarah",
      "debut": "2023-06-03T13:45:00Z",
      "fin": "2023-06-03T16:30:00Z"
    }
  ];
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: [] ,
   
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
    var all= this.get_All_Rendez_vous();
    console.log(all);
    this.calendarOptions.events = this.rendez_vouss.map(rendez_vous => ({
      title: rendez_vous.name,
      start: rendez_vous.debut,
      end: rendez_vous.fin
    }));
  }
  get_All_Rendez_vous() {
    return this.http.get('http:192.168.20.95:8000/vet/tous_les_rendez_vous');
  }



}
