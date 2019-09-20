import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Email } from '../models/Email.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit, OnDestroy{
  emails:Email[];
  error = null;
  subscription: Subscription;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.subscription = this.firebaseService.loadedEmailChanged
      .subscribe(
        (emails: Email[]) => {
          this.emails = emails;
        }
      )

    this.firebaseService.fetchEmails().subscribe(emails => {
      this.emails = emails;
    },
    error => {
      this.error = "Something went wrong, please try again later.";
    });      
  } 

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
