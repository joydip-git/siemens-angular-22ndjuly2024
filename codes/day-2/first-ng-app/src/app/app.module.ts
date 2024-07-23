import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
//import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [AppComponent],
    providers: [],
    // imports: [CommonModule],
    //since BrowserModule re-exports its child module CommonModule, you do not need import the CommonModule, if you have already imported the BrowserModule
    imports: [BrowserModule],
    exports: [],
    //the default component(s) whose design will be rendered in index.html file when the application is loade in the browser
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log('App Module created');
    }
}