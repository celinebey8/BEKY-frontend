import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SecureInnerPagesGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.authService.isLoggedIn) {
      window.alert("You are not allowed to access this URL!");
      // this.router.navigate(['patients'], this.navigateWithData(this.authService.getEmail()))
      this.router.navigate(['patients']);
    }
    return true;
  }

  navigateWithData(item) {
   
    const queryParams: any = {};
 
    queryParams.myArray = JSON.stringify(item);

    const navigationExtras: NavigationExtras = {
      queryParams
    };

    return navigationExtras;
  }


}