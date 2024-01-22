import { of, Observable, delay } from "rxjs";
import { ITodo } from "../types/todo.interface";

export class TodoService {
    constructor() {}

    getAll(): Observable<ITodo[]> {
        return of([
            { id: 1, description: 'Todo 1', completed: false },
            { id: 2, description: 'Todo 2', completed: false },
            { id: 3, description: 'Todo 3', completed: false },
            { id: 4, description: 'Todo 4', completed: false },
            { id: 5, description: 'Todo 5', completed: false },
            { id: 6, description: 'Todo 6', completed: false },
            { id: 7, description: 'Todo 7', completed: false },
            { id: 8, description: 'Todo 8', completed: false },
            { id: 9, description: 'Todo 9', completed: false },
            { id: 10, description: 'Todo 10', completed: false },
        ]).pipe(
            delay(1000)
        )
    }
}