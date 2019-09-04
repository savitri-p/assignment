import { Component, OnInit } from '@angular/core';
import { EmailsService } from '../email.service';
import { Email } from '../models/Email.model';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss'],
  providers: [EmailsService]
})
export class EmailsComponent implements OnInit {
  emails:Email[];

  constructor(private emailsService: EmailsService) { }

  ngOnInit() {
    this.emails = this.emailsService.emails;
    
  }

}
