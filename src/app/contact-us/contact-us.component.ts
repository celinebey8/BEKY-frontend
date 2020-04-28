import { Component, OnInit } from '@angular/core';
import { APIcallsService } from '../apicalls.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private myAPIservice: APIcallsService) { }

  ngOnInit(): void {
  }

  post() {
    this.myAPIservice.sendDrID(0).subscribe(() => {}, (error) => console.log(error), () => console.log('data insert'));
  }
}
