import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Email } from './models/Email.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  emailUrl:string = "https://programming-challenge-30fe8.firebaseio.com/emails.json";

  constructor(private http:HttpClient) { }

  fetchEmails() {
    return this.http
      .get<{ [key: string]: Email }>(this.emailUrl)
      .pipe(
        map(responseData => {
          const emailsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              emailsArray.push( responseData[key] );
            }
          }

          return emailsArray;
        })
      );
  }
}
