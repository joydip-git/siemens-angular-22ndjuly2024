import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message = "Welcome to Binding in Angular";
  headerWidth = 300;
  defaultButtonClsName = "button-style"
  alternateButtonClsName = "button-alternate-style"
  showAlternate = false
  showMessage = false

  increaseWidth(newWidth: number) {
    this.headerWidth = newWidth
  }
  changeShowAlternate() {
    this.showAlternate = !this.showAlternate
  }
  changeShowMessage() {
    this.showMessage = !this.showMessage
  }
}
