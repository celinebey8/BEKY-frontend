import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patient-menu',
  templateUrl: './patient-menu.component.html',
  styleUrls: ['./patient-menu.component.css']
})
export class PatientMenuComponent implements OnInit {

  index;
  patient;
  healthData;
  latestVitals;

  arrayOfValues: Array<string>;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.paramMap.get('id');

    //if i send it through query params

    // this.patient = this.route.snapshot.queryParamMap.get('patient');
    // console.log(this.patient.fname);

    // // var tmp2 = JSON.stringify(tmp);
    // // this.patient = JSON.parse(tmp);

    // this.healthData = this.patient.health;
    // console.log(this.healthData);
    // this.latestVitals = this.healthData[this.healthData.length - 1];


    // console.log(this.index);
    // console.log(this.patient.fname);
    const myArray = this.route.snapshot.queryParamMap.get('myArray');

    if (myArray === null) {
      console.log("array is null");
      console.log(this.patient);
    } else {
      this.patient = JSON.parse(myArray);

      this.healthData = this.patient.health;
      console.log(this.healthData);
      
      this.latestVitals = this.healthData[this.healthData.length - 1];
    }
  }

  navigateWithData(item) {
   
    const queryParams: any = {};
 
    queryParams.myArray = JSON.stringify(item);

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

  goToItem(item) {
    if(item == "vitals"){
       var path: string = "patient/"+this.index+"/vitals";
      this.router.navigate([path], this.navigateWithData(this.latestVitals));
     
      // this.location.go(path, '', this.latestVitals);
    }
    if(item == "graph"){
      var path: string = "patient/"+this.index+"/graph";
      this.router.navigate([path], this.navigateWithData(this.healthData));
      
      // this.router.navigate(['graph'], this.navigateWithData(this.healthData));
    }
    if(item == "history"){
      var path: string = "patient/"+this.index+"/history";
      this.router.navigate([path], this.navigateWithData(this.healthData));
      
      // this.router.navigate(['graph'], this.navigateWithData(this.healthData));
    }
    if(item == "notes"){
      var path: string = "patient/"+this.index+"/notes";
      this.router.navigate([path], this.navigateWithData(this.patient));

      // this.router.navigate(['notes'], this.navigateWithData(this.patient));
    }

  }

}
