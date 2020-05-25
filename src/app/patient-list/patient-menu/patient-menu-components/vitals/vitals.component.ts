import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { faCalendarAlt, faAmbulance, faHeartbeat, faSyringe, faUserInjured, faTint, faMapMarkedAlt, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {
  new_date;
  vitals;

  faDate = faCalendarAlt;
  faCondition = faAmbulance;
  faHeart = faHeartbeat;
  faGlucose = faSyringe;
  faFall = faUserInjured;
  faBlood = faTint;
  faLocation = faMapMarkedAlt;
  faTemperature = faTemperatureHigh;

  constructor(private router: Router ,private route: ActivatedRoute,  private location: Location) { }

  ngOnInit(): void {

      

    const myArray = this.route.snapshot.queryParamMap.get('myArray');

    if (myArray === null) {
      console.log("array is null");
      console.log(this.vitals);
    } else {
      this.vitals = JSON.parse(myArray);
      this.new_date = this.vitals.date.substring(0,19);
      console.log(this.vitals);
      console.log(this.new_date);

    }

  }

}
