import { Component, OnInit } from '@angular/core';
import { faHeartbeat, faAmbulance, faCommentMedical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  faHeartbeat = faHeartbeat;
  faAmbulance = faAmbulance;
  faCommentMedical = faCommentMedical;

  constructor() { }

  ngOnInit(): void {
  }

}
