import { Component } from "@angular/core";

@Component({
    //template: `<h2>Welcome to Angular</h2>`,
    templateUrl: './app.component.html',
    //styleUrl:'./app.component.css'
    styleUrls: ['./app.component.css'],
    selector: 'app-root'
})
export class AppComponent {
    message = 'Welcome to Angular';
    show = true;
    constructor() {
        console.log('App component created');
    }
}