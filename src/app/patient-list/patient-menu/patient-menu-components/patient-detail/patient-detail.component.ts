import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  info;
  faInfo = faUser;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const myArray = this.route.snapshot.queryParamMap.get('myArray');

    if (myArray === null) {
      console.log("array is null");
      console.log(this.info);
    } else {
      this.info = JSON.parse(myArray);
    }

    console.log(this.info);
  }


}
