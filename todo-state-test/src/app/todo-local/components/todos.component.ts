import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { ITodo } from "../types/todo.interface";
import { addTodoAct, loadTodosAct } from "../state/actions";
import { selectFeatureTodos, selectorError, selectorTodos } from './../state/selectors';
import { state } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { ITodoState } from "../types/todo.state.interface";

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class TodosComponent {
    todos$!: Observable<ITodo[]>;
    isLoading$!: Observable<boolean>;
    error$!: Observable<string | null>;
    haveAnyError$!: Observable<boolean>;

    constructor(private store: Store) {
        this.todos$ = this.store.pipe(map((state) => selectorTodos(state as any)));
        // this.isLoading$ = this.store.select((state) => state.todo.loading);
        this.error$ = this.store.pipe(map((state) => selectorError(state as { todoFeatureKey: ITodoState })));
        this.haveAnyError$ = this.error$.pipe(map((error) => !!error));
    }

    loadTodos() {
        this.store.dispatch(loadTodosAct());
    }

    addTodo() {
        const id = Math.floor(Math.random() * 100);
        const todo: ITodo = {
            id,
            description: `Todo ${id}`,
            completed: false,
        };
        this.store.dispatch(addTodoAct({ todo }));
    }
}