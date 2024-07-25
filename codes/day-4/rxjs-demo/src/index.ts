// import { Observable, Observer, Subscription } from "rxjs";
import { filter, map } from "rxjs";
import { DataStorageService } from "./supplier";
//import { getNumbers } from "./supplier";

// const numberObserver: Observer<number[]> = {
//     next: (numbers: number[]) => {
//         numbers.forEach(n => console.log(n))
//     },
//     error: (e) => {
//         console.log(e.message);
//     },
//     complete: () => {
//         console.log('next operation');
//     }
// }
// const response: Observable<number[]> = getNumbers();
// const sub: Subscription = response.subscribe(numberObserver)

//sub.unsubscribe();

const storage = new DataStorageService()

storage
    .storeObservable
    .pipe(
        map(
            (val) => val * 2
        )
    )
    .subscribe({
        next: (val) => console.log(val),
        //fetch data from array
        error: (e) => console.log(e)
    })

let value = 100
setInterval(
    () => {
        storage.publish(value++)
    },
    2000
)