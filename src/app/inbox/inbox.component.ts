import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [FirebaseService]
})
export class InboxComponent implements OnInit {
  isAllChecked: boolean;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  selectAllEmails() {
    this.firebaseService.toggleSelectedAllEmails();
    this.isAllChecked = this.firebaseService.isAllChecked;
  }

  showAllEmails() {
    this.firebaseService.showAllEmails();
  }

  showUnreadEmails() {
    this.firebaseService.showUnreadEmails();
  }

  showFlaggedEmails() {
    this.firebaseService.showFlaggedEmails();
  }

}
