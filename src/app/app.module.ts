import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneNumInputComponent } from './components/phone-num/phone-num.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PhoneNumInputComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
