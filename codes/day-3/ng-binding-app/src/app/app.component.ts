import { Component, Inject } from '@angular/core';
import { CalculationService } from './services/calculation.service';
import { SERVICE_TOKEN } from './constants/tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //providers: [CalculationService]
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
  // people = ['sunil', 'anil', 'joydip']
  people = [
    { name: 'sunil', id: 2, salary: 3000 },
    { name: 'anil', id: 1, salary: 2000 },
    { name: 'joydip', id: 3, salary: 1000 }
  ]
  // people = []
  private calcSvc: CalculationService;

  //When @Inject() is not present, the injector uses the type annotation of the parameter as the provider.
  // constructor(svc: CalculationService) {
  //   this.calcSvc = svc;
  //   //this.calcSvc = new CalculationService()
  // }

  //When @Inject() is present, the injector uses the name provided as the provider. in this case type annotation of the parameter is only important to store the reference of the ame type service
  constructor(@Inject(SERVICE_TOKEN) svc: CalculationService) {
    this.calcSvc = svc;
    //this.calcSvc = new CalculationService()
  }

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
        this.resultValue = this.calcSvc.add(this.firstValue, this.secondValue)
        break;
      case 2:
        this.resultValue = this.calcSvc.subtract(this.firstValue, this.secondValue)
        break;
      case 3:
        this.resultValue = this.calcSvc.multiply(this.firstValue, this.secondValue)
        break;
      case 4:
        this.resultValue = this.calcSvc.divide(this.firstValue, this.secondValue)
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
