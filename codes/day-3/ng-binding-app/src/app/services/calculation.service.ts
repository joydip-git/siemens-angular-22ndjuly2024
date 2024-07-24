import { Injectable } from "@angular/core"

import { CalculationServiceContract } from "./calculationservicecontract"
import { SampleService } from "./sample.service"

@Injectable()
export class CalculationService implements CalculationServiceContract {
    //private sampleSvc: SampleService;

    constructor(private svc: SampleService) {
        //this.sampleSvc = svc
    }

    add(a: number, b: number) {
        //console.log(this.sampleSvc.show());
        this.svc.show()
        return a + b
    }
    subtract(a: number, b: number) {
        return a - b
    }
    multiply(a: number, b: number) {
        return a * b
    }
    divide(a: number, b: number) {
        return a / b
    }
}