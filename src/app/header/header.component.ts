import { Component } from '@angular/core';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from "./../shared/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public loggedIn = false;
  constructor(public authService: AuthService) { 
    this.loggedIn = this.authService.isLoggedIn;
  }
  faStarOfLife = faStarOfLife;

  logged(bool: Boolean){
    if (bool == true){
      this.authService.SignOut();
      this.loggedIn = false;
    }
    else{
      this.loggedIn = true;
    }
  }
}
