import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "../../../models/todo";

@Pipe({
    name: 'sorttodos'
})
export class TodoSortPipe implements PipeTransform {
    transform(value: Todo[], ...args: any[]): Todo[] {
        if (value.length > 0 && args && args[0] && args[0] > 0) {
            switch (args[0]) {
                case 1:
                    return value.sort((t1, t2) => t1.id - t2.id)

                case 2:
                    return value.sort((t1, t2) => t1.userId - t2.userId)

                case 3:
                    return value.sort((t1, t2) => t1.title.toLocaleLowerCase().localeCompare(t2.title.toLocaleLowerCase()))

                default:
                    return value.sort((t1, t2) => t1.id - t2.id)
            }
        } else
            return value;
    }
}