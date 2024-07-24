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
  selectionChoice = 0
  firstValue = 0
  secondValue = 0
  resultValue = 0
  //people = ['sunil', 'anil', 'joydip']
  // people = [
  //   { name: 'sunil', id: 2, salary: 3000 },
  //   { name: 'anil', id: 1, salary: 2000 },
  //   { name: 'joydip', id: 3, salary: 1000 }
  // ]
  people = []

  increaseWidth(newWidth: number) {
    this.headerWidth = newWidth
  }
  changeShowAlternate() {
    this.showAlternate = !this.showAlternate
  }
  changeShowMessage() {
    this.showMessage = !this.showMessage
  }

  calculate() {
    switch (this.selectionChoice) {
      case 1:
        this.resultValue = this.firstValue + this.secondValue
        break;
      case 2:
        this.resultValue = this.firstValue - this.secondValue
        break;
      case 3:
        this.resultValue = this.firstValue * this.secondValue
        break;
      case 4:
        this.resultValue = this.firstValue / this.secondValue
        break;

      default:
        break;
    }
  }
  updateChoice(choice: number) {
    this.selectionChoice = choice
  }
  updateFirst(val: number) {
    this.firstValue = val
  }
  updateSecond(val: number) {
    this.secondValue = val
  }
  // updateSecond(e: any) {
  //   console.log(e.data);
  //   const inputElement = e.target as HTMLInputElement
  //   console.log(+inputElement.value);
  // }
}
