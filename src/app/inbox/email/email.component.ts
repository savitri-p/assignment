import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment/moment';

import { Email } from '../models/Email.model';
import { faFlag, faTrashAlt, faThumbtack, faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input('message') email: Email;
  initName = '';
  today = moment();
  mailingDate: Date;
  iscurrentDate:boolean;
  date: number;
  faFlag = faFlag;
  faTrashAlt = faTrashAlt;
  faThumbtack = faThumbtack; 
  faEnvelope = faEnvelope;
  faEnvelopeOpen = faEnvelopeOpen;

  constructor() { }
  
  ngOnInit() {
    // handler empty name => display Email instead
    if (this.email.from.name.trim() === '') this.email.from.name = this.email.from.email;
    // Set character to display as avatar when avatar is empty
    if (this.email.from.avatar === '' ) this.initName = this.setShortName(this.email); 
    // Handle when email has no subject
    if (this.email.subject.trim() === '' ) this.email.subject = "(no subject)";
    // Handle Date Display
    this.iscurrentDate = moment(this.email.mailingdate).isSame(moment(), 'day');
  }

  
  setShortName(email:Email) {
    const nameArray = this.email.from.name.trim().split(' ');
    let name = nameArray[0].charAt(0).toUpperCase();

    const isAllCap = nameArray[0].split('').every(el => {
      return el === el.toUpperCase();
    });

    if (!isAllCap && nameArray.length > 1) {
      name = name.concat(nameArray[1].charAt(0)).toUpperCase();
    }  
    return name;
  }

  // Set Dynamic Classes for Avatar Background color
  setBgcolor() {
    let bgColorId = 'avatar-' + this.email.email_id;
    return bgColorId;
  }

  // Mark as read
  onClickEmailItem() {
    this.email.read_status = true;
  }

  // Delete Email
  onDeleteEmail(email:Email) {
  
  }

  // Togggle Read Status
  toggleReadStatus(email) {
    email.read_status = !email.read_status;
  }

  // Flag this email
  onFlagEmail(email) {
    email.flag = !email.flag;
  }

  // Pin email to the top
  onPinEmail(email) {
    email.pin = !email.pin;
  }

  // Select Email
  onSelectedEmailItem(email) {

  }

}
