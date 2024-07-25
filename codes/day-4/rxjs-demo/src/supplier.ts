import { BehaviorSubject, Observable, of } from "rxjs"


// const numbers: number[] = []

// export const getNumbers = (): Observable<number[]> => {
//     if (numbers.length > 0) {
//         const obsNumbers: Observable<number[]> = of(numbers)
//         return obsNumbers
//     } else
//         throw new Error('no records...')
// }

//@Inject({providedIn:'root'})
export class DataStorageService {
    private store = new BehaviorSubject<number>(0)
    storeObservable = this.store.asObservable()

    publish(data: number) {
        this.store.next(data)
    }
}