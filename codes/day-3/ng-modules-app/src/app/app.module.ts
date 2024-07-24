import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnotherModule } from "./another/another.module";

import { AppComponent } from './app.component';
// import { AnotherComponent } from './another/another.component';

@NgModule({
  //registering - components, directives and pipes ONLY
  declarations: [
    AppComponent,
    //AnotherComponent
  ],
  //regsitering any built-in module or feature modules of your application
  imports: [
    BrowserModule,
    AnotherModule
  ],
  //regsitering services ONLY
  providers: [],
  //bootstrap: [AppComponent, AnotherComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
