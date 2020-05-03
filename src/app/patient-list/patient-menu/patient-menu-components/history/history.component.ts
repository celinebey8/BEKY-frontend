import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  healthData;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    const myArray = this.route.snapshot.queryParamMap.get('myArray');

    if (myArray === null) {
      console.log("array is null");
      console.log(this.healthData);
    } else {
      this.healthData = JSON.parse(myArray);
    }

    console.log(this.healthData);
  }

}
