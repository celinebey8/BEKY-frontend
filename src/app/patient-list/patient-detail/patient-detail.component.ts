import { Component, OnInit } from '@angular/core';
import { APIcallsService } from 'src/app/apicalls.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  condition = false; 
  id: number;
  patients;
  patient;
  latestData;
  healthData; //pr le graphe

  constructor(private p_service: APIcallsService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];

        this.patients = this.location.getState()["0"];
        // console.log(this.patients);
        this.getPatientDetail(this.id);
      }
    );
    if(this.patients) {
      this.condition = true;
    }

    // console.log(this.patients);
    // this.patient = this.patients[this.id];
    // console.log(this.patient);
    // this.healthData = this.patient.health;
    // console.log(this.healthData);
    // this.latestData = this.healthData[this.healthData.length - 1];
    // console.log(this.latestData);
  }

  getPatientDetail(id) {

    // this.p_service.getPatientData(0).subscribe(val => {
    //   this.patients.push(val);
    //   this.patient = val[this.id];
    //   this.healthData = this.patient.health;
    //   this.latestData = this.healthData[this.healthData.length - 1];
    // });

    // console.log(this.patients);
    this.patient = this.patients[id];
    // console.log(this.patient);
    this.healthData = this.patient.health;
    console.log(this.healthData);
    this.latestData = this.healthData[this.healthData.length - 1];
    // console.log(this.latestData);
  }
}
