import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubDetailComponent } from './components/club-detail/club-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StadiumDetailComponent } from './components/stadium-detail/stadium-detail.component';

@NgModule({
  declarations: [AppComponent, ClubDetailComponent, StadiumDetailComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
