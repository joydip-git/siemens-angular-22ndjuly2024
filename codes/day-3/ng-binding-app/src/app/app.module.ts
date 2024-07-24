import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SERVICE_TOKEN, SERVICE_TYPE } from './constants/tokens';
import { SampleService } from './services/sample.service';


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
    SampleService,
    {
      provide: SERVICE_TOKEN,
      useClass: SERVICE_TYPE
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
