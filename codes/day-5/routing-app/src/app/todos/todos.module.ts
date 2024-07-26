import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TODO_SERVICE_CLASS, TODO_SERVICE_TOKEN } from '../config/constants';
import { TodoSortPipe } from './pipes/todo-sort.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { todosRoutes } from './todos.routes';

@NgModule({
    // imports: [CommonModule, HttpClientModule, RouterModule.forRoot(todosRoutes)],
    imports: [CommonModule, HttpClientModule, RouterModule.forChild(todosRoutes)],
    exports: [TodoListComponent],
    declarations: [TodoListComponent, TodoSortPipe, FilterComponent, TodoDetailComponent],
    providers: [
        {
            provide: TODO_SERVICE_TOKEN,
            useClass: TODO_SERVICE_CLASS
        }
    ],
})
export class TodosModule { }
