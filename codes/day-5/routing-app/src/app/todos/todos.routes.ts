import { Routes } from "@angular/router";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoDetailComponent } from "./components/todo-detail/todo-detail.component";

// export const todosRoutes: Routes = [
//     {
//         path: 'todos',
//         component: TodoListComponent
//     },
//     {
//         path: 'todos/:id',
//         component: TodoDetailComponent
//     }
// ]
export const todosRoutes: Routes = [
    {
        path: 'todos',
        children: [
            {
                path: '',
                component: TodoListComponent
            },
            {
                path: ':id',
                component: TodoDetailComponent
            }
        ]
    },
]