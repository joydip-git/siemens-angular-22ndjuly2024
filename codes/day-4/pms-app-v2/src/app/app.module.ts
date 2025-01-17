import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CommonArtifactsModule } from './common-artifacts/common-artifacts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CommonArtifactsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
