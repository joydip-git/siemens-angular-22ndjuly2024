import { Routes } from "@angular/router";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoDetailComponent } from "./components/todo-detail/todo-detail.component";
import { UpdateTodoComponent } from "./components/update-todo/update-todo.component";

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
        //pathMatch: 'prefix',
        children: [
            {
                path: '',
                component: TodoListComponent
            },
            {
                path: 'view/:id',
                component: TodoDetailComponent,

            },
            {
                path: 'edit',
                component: UpdateTodoComponent
            }
        ]
    },
]