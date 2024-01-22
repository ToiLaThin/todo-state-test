import { ITodo } from './todo.interface';

export interface ITodoState {
    todos: ITodo[];
    loading: boolean;
    error: string | null;
}