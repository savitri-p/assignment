import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Email } from '../models/Email.model';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  emails:Email[];
  error = null;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.fetchEmails().subscribe(emails => {
      this.emails = emails;
    },
    error => {
      this.error = "Something went wrong, please try again later.";
    });      
  } 

}
