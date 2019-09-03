import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { EmailsComponent } from './components/emails/emails.component';
import { EmailComponent } from './components/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    EmailsComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
