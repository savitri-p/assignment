import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Email } from './models/Email.model';

@Injectable({ // [metadata] expect to get sth injected.
  providedIn: 'root'
})

export class FirebaseService  {
  loadedEmails: Email[] = [];
  loadedEmailChanged = new Subject<Email[]>();

  emailUrl:string = "https://programming-challenge-30fe8.firebaseio.com/emails.json";

  constructor(private http:HttpClient) { }
 
  fetchEmails():Observable<Email[]> { 
    return this.http.get<Email[]>(this.emailUrl)
      .pipe(
        map(responseData => this.loadedEmails = responseData)
      );      
  }
  
}
