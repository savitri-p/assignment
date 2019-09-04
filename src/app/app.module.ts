import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';
//import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { EmailsComponent } from './inbox/emails/emails.component';
import { EmailComponent } from './inbox/email/email.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    EmailsComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MomentModule
    //AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
