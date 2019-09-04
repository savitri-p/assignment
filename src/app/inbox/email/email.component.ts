import { Component, OnInit, Input } from '@angular/core';

import { Email } from '../models/Email.model';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input('message') email: Email;

  constructor() { }

  ngOnInit() {
  }


  // Set Dynamic Classes
  setClasses() {
    let classes = {

    }
    return classes;
  }

}
