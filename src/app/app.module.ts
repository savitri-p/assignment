import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { EmailsComponent } from './inbox/emails/emails.component';
import { EmailComponent } from './inbox/email/email.component';
import { HoverClassDirective } from './directive/hover-class/hover-class.directive';


@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    EmailsComponent,
    EmailComponent,
    HoverClassDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MomentModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
