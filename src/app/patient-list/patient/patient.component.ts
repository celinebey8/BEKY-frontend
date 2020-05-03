import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {


  @Input() patients;
  @Input() patient;
  @Input() index: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateWithArray() {
   
    const queryParams: any = {};
 
    queryParams.myArray = JSON.stringify(this.patient);

    const navigationExtras: NavigationExtras = {
      queryParams
    };
   
    // const arrayOfValues = ['a', 'b', 'c', 'd'];
 
    // queryParams.myArray = JSON.stringify(arrayOfValues);

    // const navigationExtras: NavigationExtras = {
    //   queryParams
    // };

    return navigationExtras;
  }

  goToPatient() {
    // this.router.navigate(['patient/', this.index], { queryParams: { patient: this.patients[this.index] } });
    this.router.navigate(['patient/', this.index], this.navigateWithArray());
  }

}
