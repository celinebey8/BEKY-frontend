import { Component, OnInit } from '@angular/core';
import { APIcallsService } from '../apicalls.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [APIcallsService]
})
export class ServicesComponent implements OnInit {

  constructor(private myService: APIcallsService) { }

  ngOnInit() {
    
  }



}
