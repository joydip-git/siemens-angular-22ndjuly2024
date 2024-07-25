import { Todo } from "../../../models/todo";

export interface ServiceContract {
    getTodos(): Todo[];
    getTodo(id: number): Todo | undefined;
}