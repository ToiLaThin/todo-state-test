import { createAction, props } from '@ngrx/store';
import { ITodo } from '../types/todo.interface';
export const addTodoAct = createAction(
    '[TodoLocal] Add Todo',
    props<{ todo: ITodo }>()
)


export const loadTodosAct = createAction(
    '[TodoLocal] Load Todos'
)
export const loadTodosSuccessAct = createAction(
    '[TodoLocal] Load Todos Success',
    props<{ todos: ITodo[] }>()
)
export const loadTodosFailureAct = createAction(
    '[TodoLocal] Load Todos Failure',
    props<{ errorMessage: string }>()
)

export const updateTodoAct = createAction(
    '[TodoLocal] Update Todo',
    props<{ todo: ITodo}>()
)

export const deleteTodoAct = createAction(
    '[TodoLocal] Delete Todo',
    props<{ id: number}>()
)