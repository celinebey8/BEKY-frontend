import { Component, OnInit } from '@angular/core';
import { APIcallsService } from '../apicalls.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-patient-user-info',
  templateUrl: './patient-user-info.component.html',
  styleUrls: ['./patient-user-info.component.css']
})
export class PatientUserInfoComponent implements OnInit {
  info;
  data;
  latestData;
  healthData;
  constructor(private myAPIservice: APIcallsService, private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.showPersonalData();
  }

  async showPersonalData() {

    const value = await this.myAPIservice.getPersonalData().toPromise();
    console.log('data: ', value);
    console.log('type of data: ', typeof (value));
    let values = Object.keys(value).map(key => value[key]);
    console.log('type of values: ', typeof (value));
    console.log('values: ', values);

    this.info = {
      "fname": values[0],
      "lname": values[1],
      "gender": values[2],
      "birthdate": values[3],
    }
    console.log(this.info);
    this.healthData = values[4];
    console.log("health data: ",this.healthData);
    this.latestData = this.healthData[this.healthData.length-1];
    console.log("latest data: ",this.latestData);
  }

  navigateWithData(item) {

    const queryParams: any = {};

    queryParams.myArray = JSON.stringify(item);

    const navigationExtras: NavigationExtras = {
      queryParams
    };

    return navigationExtras;
  }

  goToItem(item) {
    if (item == "vitals") {
      var path: string = "patient-info/vitals";
      this.router.navigate([path], this.navigateWithData(this.latestData));
    }
    if (item == "graph") {
      var path: string = "patient-info/graph";
      this.router.navigate([path], this.navigateWithData(this.healthData));
    }
    if (item == "history") {
      var path: string = "patient-info/history";
      this.router.navigate([path], this.navigateWithData(this.healthData));
    }
    if (item == "info") {
      var path: string = "patient-info/info";
      this.router.navigate([path], this.navigateWithData(this.info));
    }
  }

}
