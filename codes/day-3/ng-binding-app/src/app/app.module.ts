import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SERVICE_TOKEN, SERVICE_TYPE } from './constants/tokens';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers: [CalculationService],
  // providers: [
  //   {
  //     provide:  CalculationService,
  //     useClass: CalculationService
  //   }
  // ]
  providers: [
    {
      provide: SERVICE_TOKEN,
      useClass: SERVICE_TYPE
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
