import { Component, OnInit } from '@angular/core';
import { APIcallsService } from '../apicalls.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers: [APIcallsService]
})
export class PatientListComponent implements OnInit {
  dr_email;
  data;
  constructor(private myAPIservice: APIcallsService, private router: Router, private route: ActivatedRoute, ) {

  }

  ngOnInit() {  
    const user = JSON.parse(localStorage.getItem('user'));
    this.dr_email = user.email;
    console.log(this.dr_email);
    this.showPatientData(this.dr_email);
  }

  showPatientData(email) {
    this.myAPIservice.getPatientData(email).subscribe(val => {
      console.log(val);
      this.data = val;
    });
  }

}
