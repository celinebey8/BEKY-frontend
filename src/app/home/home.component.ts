import { Component } from '@angular/core';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { faCommentMedical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {
  
  faHeartbeat = faHeartbeat;
  faAmbulance = faAmbulance;
  faCommentMedical = faCommentMedical;


  constructor() { }

}
