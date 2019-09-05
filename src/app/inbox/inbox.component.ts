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

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

}
