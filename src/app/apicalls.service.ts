import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';

@Injectable({
  providedIn: 'root'
})
export class APIcallsService {

  patients = [];

  constructor(private http: HttpClient) { }


  // sendDrEmail(email) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Credentials': 'true'
  //     })
  //   };
  //   const obj = { 'dr_email': email.toString() };
  //   return this.http.post('http://192.168.56.1:8081/getDrID', obj, httpOptions).pipe();
  // }


  getUserAccess(email) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    const obj = { 'email': email.toString() };
    return this.http.post('http://192.168.56.1:8081/getAccessType', obj, httpOptions).pipe();
  }

  getPatientData() {

    // this.sendDrEmail(dr_email).subscribe(() => { }, (error) => console.log(error), () => console.log('data insert'));
    console.log("getting patient data");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.get('http://192.168.56.1:8081/getPatientData', httpOptions);
  }

  getPersonalData() {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.get('http://192.168.56.1:8081/getPersonalData', httpOptions);

  }

}
