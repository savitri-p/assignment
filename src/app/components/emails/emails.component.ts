import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/Email.model';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  emails:Email[];

  constructor() { }

  ngOnInit() {
    this.emails = [
      {
        email_id: 1,
        from: {
          name: "Now TV",
          email: "nowtv@test.com"
        },
        subject: "Grab another Pass, you need to be watching this...",
        body: "Oscar winners Sir Anthony Hopkins and Ed Harris join and impressive cast boasting the likes of Thandle Newton, James Marsden and Jeffrey Wright.",
        mailingdate: '2019-09-02T13:05:20-05:00',
        attachment: "https://via.placeholder.com/150/771796",
        flag: false, 
        read_status: false,
        pin: false,
      },
      {
        email_id: 2,
        from: {
          name: "Investopedia Terms",
          email: "investopedia@test.com"
        },
        subject: "What is 'Fibonanci Retracement'?",
        body: "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher).",
        mailingdate: '2019-09-02T13:05:20-05:00',
        attachment: "",
        flag: false, 
        read_status: false,
        pin: false,
      },
      {
        email_id: 3,
        from: {
          name: "ASICS Greater Manchester Marathon",
          email: "events@human-race.co.uk"
        },
        subject: "Your chance to take on the marathon",
        body: "Do you fell inpired to take on one of Europe's most highly regarded and popular marathons?",
        mailingdate: '2019-09-02T13:05:20-05:00',
        attachment: "https://via.placeholder.com/150/771796",
        flag: false, 
        read_status: false,
        pin: false,
      }

    ]
  }

}
