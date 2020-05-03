import { Component } from '@angular/core';


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
  
  constructor() {}

  ngOnInit() {
  }
 

}

