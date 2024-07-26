import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './common-resources/components/home/home.component';
import { PageNotFoundComponent } from './common-resources/components/page-not-found/page-not-found.component';
import { appRoues } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    TodosModule,
    RouterModule.forRoot(appRoues)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
