import { Component, OnInit } from '@angular/core';
import { APIcallsService } from '../apicalls.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers: [APIcallsService]
})
export class PatientListComponent implements OnInit {
  condition: boolean;
  data;
  constructor(private myAPIservice: APIcallsService) { }

  ngOnInit() {
    this.showPatientData();
  }

  showPatientData() {
    // replace 0 by the dr's id taken by the auth service

    this.myAPIservice.getPatientData(0).subscribe(val => {
      this.data = val;
    });
  }

}
