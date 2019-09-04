import { Component, OnInit } from '@angular/core';
import { Email } from '../models/Email.model';

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
        "email_id": 1,
        "from": {
          "name": "Now TV",
          "email": "nowtv@test.com",
          "avatar": ""
        },
        "subject": "Grab another Pass, you need to be watching this...",
        "body": "Oscar winners Sir Anthony Hopkins and Ed Harris join and impressive cast boasting the likes of Thandle Newton, James Marsden and Jeffrey Wright.",
        "mailingdate": "2019-09-02T13:05:20-05:00",
        "attachment": "https://via.placeholder.com/150/771796",
        "flag": false,
        "read_status": false,
        "pin": false
      },
      {
        "email_id": 2,
        "from": {
          "name": "Investopedia Terms",
          "email": "investopedia@test.com",
          "avatar": ""
        },
        "subject": "What is 'Fibonanci Retracement'?",
        "body": "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher).",
        "mailingdate": "2019-09-02T13:05:20-05:00",
        "attachment": "",
        "flag": false,
        "read_status": false,
        "pin": false
      },
      {
        "email_id": 3,
        "from": {
          "name": "ASICS Greater Manchester Marathon",
          "email": "events@human-race.co.uk",
          "avatar": ""
        },
        "subject": "Your chance to take on the marathon",
        "body": "Do you fell inpired to take on one of Europe's most highly regarded and popular marathons?",
        "mailingdate": "2019-09-02T13:05:20-05:00",
        "attachment": "https://via.placeholder.com/150/771796",
        "flag": false,
        "read_status": false,
        "pin": false
      }, {
        "email_id": 4,
        "from": {
          "name": "GradTests",
          "email": "tim@gradtests.com.au",
          "avatar": ""
        },
        "subject": "Looks Like You Need Help",
        "body": "Regarding Your Recent Test Score Hi there We noticed you got a score of 24% on the Numerical Reasoning Test recently. Don't worry though! Improving your test score is not actually that difficult. Like most things in life, it's all about practice, ...",
        "mailingdate": "2019-08-27T13:05:20-05:00",
        "attachment": "",
        "flag": false,
        "read_status": false,
        "pin": false
      }, {
        "email_id": 5,
        "from": {
          "name": "Shopify",
          "email": "mailer@shopify.com",
          "avatar": "http://pluspng.com/img-png/shopify-logo-png--185.png"
        },
        "subject": "Pick a plan and go live with thaisouvenirs",
        "body": "Your store is password protected and can't accept orders yet. Pick a plan and start accepting orders and show the world what you have to offer. &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; Log in Let people find your store Your store is password protected",
        "mailingdate": "2019-07-31T13:05:20-05:00",
        "attachment": "",
        "flag": false,
        "read_status": false,
        "pin": false
      }, {
        "email_id": 6,
        "from": {
          "name": "Heroku",
          "email": "noreply@heroku.com",
          "avatar": "https://zulipchat.com/static/images/integrations/logos/heroku.svg"
        },
        "subject": "Heroku on NewsWatch TV",
        "body": "NewsWatch TV recently featured Heroku in a Biz Report that aired across the AMC and ION networks. Learn how Heroku helps companies deliver cutting-edge customer experiences in the cloud.",
        "mailingdate": "2019-07-23T13:05:20-05:00",
        "attachment": "",
        "flag": false,
        "read_status": false,
        "pin": false
      }, {
        "email_id": 7,
        "from": {
          "name": "Quincy Larson",
          "email": "quincy@freecodecamp.org",
          "avatar": ""
        },
        "subject": "Learn Back End Development with Node.js - a free 3-hour JavaScript course",
        "body": "Here are this week's five links that are worth your time: 1. Learn Back End Development in Node.js. This free JavaScript course will teach you the fundamentals (3 hour watch): https://www.freecodecamp.org/news/getting-started-with-node-js/ 2. How to...",
        "mailingdate": "2019-07-12T13:05:20-05:00",
        "attachment": "",
        "flag": false,
        "read_status": false,
        "pin": false
      }

    ]
  }

}
