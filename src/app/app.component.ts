import { Component } from '@angular/core';
import { MessagingService } from './messaging.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BEKY';
  message;
  // public books: Observable<any[]>;
  // constructor(db: AngularFireDatabase) {
  //     this.books = db.list('/mdp-beky').valueChanges();
  //     this.books.subscribe(val => console.log(val));


  //     db.database.ref('testdb').set({
  //       test: "pls work"
  //     })
  // }
  
  constructor(private messagingService: MessagingService) {}

  ngOnInit() {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;

  }
 

}

