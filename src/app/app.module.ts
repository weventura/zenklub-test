import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt)

// Components
import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "pt-BR"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
