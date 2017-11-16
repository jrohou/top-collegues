import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { CollegueService } from './shared/service/collegue.service';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
