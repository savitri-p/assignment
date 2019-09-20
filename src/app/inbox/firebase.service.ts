import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Email } from './models/Email.model';

@Injectable({ // [metadata] expect to get sth injected.
  providedIn: 'root'
})

export class FirebaseService {
  loadedEmails: Email[] = [];
  loadedEmailChanged = new Subject<Email[]>();

  allEmails: Email[] = [];
  emailUrl: string = "https://programming-challenge-30fe8.firebaseio.com/emails.json";

  selectedEmails: Email[] = [];
  isAllChecked = false;

  showCheckbox = false;
  private _showCheckboxsSubject = new BehaviorSubject<boolean>(this.showCheckbox);
  public showCheckboxs: Observable<boolean> = this._showCheckboxsSubject.asObservable();

  constructor(private http: HttpClient) { }

  fetchEmails(): Observable<Email[]> {
    return this.http.get<Email[]>(this.emailUrl)
      .pipe(
        map(responseData => {
          this.loadedEmails = responseData;
          this.allEmails = this.loadedEmails;
          return this.loadedEmails;
        })
      );
  }

  toggleSelectedAllEmails() {
    this.isAllChecked = !this.isAllChecked;
    this.loadedEmails = this.loadedEmails.filter(t => {
      t.selected = this.isAllChecked
      return t;
    });
  }

  showAllEmails() {
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

}
