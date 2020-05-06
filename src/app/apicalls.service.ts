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


  sendDrEmail(email) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    const obj = { 'dr_email': email.toString()};
    return this.http.post('http://192.168.56.1:8081/getDrID',obj,httpOptions).pipe();
  }

  getPatientData(dr_email) {

    console.log("sending dr email" + dr_email);
    // this.sendDrID(dr_id).subscribe(() => {}, (error) => console.log(error), () => console.log('data insert'));
    this.sendDrEmail(dr_email).subscribe(() => {}, (error) => console.log(error), () => console.log('data insert'));
    
    //get the data of all patients of the selected doctor
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      })
    };


    return this.http.get('http://192.168.56.1:8081/getPatientData', httpOptions);
  }


 
  // getPatients() {
  //   var arr;
  //   this.getPatientData().subscribe(val => {
  //     arr = val;
  //     console.log("the data being sent is: " + val);
  //   });
  //   return arr;
  // }

  // getPatientAt(index) {
  //   console.log("the data being sent is: " + this.getPatients()[index]);
  //   return this.getPatients()[index];
  // }

}
