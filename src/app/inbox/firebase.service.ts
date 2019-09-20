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

  pinEmails: Email[] = [];
  //pinEmailChanged = new Subject<Email[]>();

  allEmails: Email[] = [];
  emailUrl:string = "https://programming-challenge-30fe8.firebaseio.com/emails.json";

  selectedEmails: Email[] = [];
  isAllChecked = false;

  showCheckbox = false;
  private _showCheckboxsSubject = new BehaviorSubject<boolean>(this.showCheckbox);
  public showCheckboxs: Observable<boolean> = this._showCheckboxsSubject.asObservable();


  constructor(private http:HttpClient) { }
 
  fetchEmails():Observable<Email[]> { 
    return this.http.get<Email[]>(this.emailUrl)
      .pipe(
        map(responseData => {
          this.allEmails = responseData;
          this.reArrangeFilterEmails();
          return this.loadedEmails;
        })
      );      
  }

  toggleSelectedEmail(email:Email){
    this.showCheckbox = !this.showCheckbox;  
    if (this.selectedEmails.length === 0) {
      this._showCheckboxsSubject.next(this.showCheckbox);
    } 
    
    email.selected = !email.selected;
    if (email.selected) {
      this.selectedEmails.push(email);  
    } else {
      this.selectedEmails =  this.removeEmailFromArray(email, this.selectedEmails);
      if (this.selectedEmails.length === 0) {
        this._showCheckboxsSubject.next(this.showCheckbox);
      }
    }    
  }

  toggleSelectedAllEmails() {
    this.isAllChecked = !this.isAllChecked;
    this.loadedEmails = this.loadedEmails.filter(t => {      
      t.selected = this.isAllChecked
      return t;
    });
  }

  deleteEmail(email: Email) {
   // delete Email from UI [write is not allowed]   
    this.loadedEmails = this.loadedEmails.filter(e => e.email_id !== email.email_id);  
    this.allEmails = this.loadedEmails;   
    this.loadedEmailChanged.next(this.loadedEmails);
  }

  pinEmail(email:Email) {
    email.pin = !email.pin; 
    this.reArrangeFilterEmails();
    this.loadedEmailChanged.next(this.loadedEmails);
  }

  removeEmailFromArray(email: Email, emails: Email[]) {
    return emails.filter(e => e.email_id !== email.email_id);
  }

  showAllEmails(){
    this.loadedEmails = this.allEmails;
    this.loadedEmailChanged.next(this.loadedEmails);
  }

  showUnreadEmails() {
    this.loadedEmails = this.allEmails.filter(e => e.read_status === false); 
    this.loadedEmailChanged.next(this.loadedEmails);
  }

  showFlaggedEmails() {
    this.loadedEmails = this.allEmails.filter(e => e.flag === true);
    this.loadedEmailChanged.next(this.loadedEmails);
  } 

  reArrangeFilterEmails(){
    this.pinEmails = this.allEmails.filter(e => e.pin === true);
    const unpinEmails = this.allEmails.filter(e => e.pin === false);
    this.loadedEmails = this.pinEmails.concat(unpinEmails);    
  }
  
}
