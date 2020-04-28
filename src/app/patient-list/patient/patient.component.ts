import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  
  @Input() patients;
  @Input() patient;
  @Input() index: number; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
