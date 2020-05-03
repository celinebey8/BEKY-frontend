import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  patient;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    const myArray = this.route.snapshot.queryParamMap.get('myArray');

    if (myArray === null) {
      console.log("array is null");
      console.log(this.patient);
    } else {
      this.patient = JSON.parse(myArray);
    }

    console.log(this.patient);
  }

}
