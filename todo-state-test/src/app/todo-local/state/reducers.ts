import {createReducer, on} from '@ngrx/store'
import {ITodoState} from '../types/todo.state.interface'
import {
  addTodoAct,
  deleteTodoAct,
  loadTodosAct,
  loadTodosFailureAct,
  loadTodosSuccessAct,
} from './actions'

export const initialState: ITodoState = {
  todos: [],
  loading: false,
  error: null,
}
export const todoFeatureKey = 'todoFeatureKey'
export const todoReducer = createReducer(
  initialState,
  on(loadTodosAct, state => ({...state, loading: true})),
  //these 2 action are dispatch by another action (or the effect caused by that action)
  on(loadTodosSuccessAct, (state, {todos}) => ({
    ...state,
    loading: false,
    todos: todos,
  })),
  on(loadTodosFailureAct, (state, {errorMessage}) => ({
    ...state,
    loading: false,
    error: errorMessage,
  })),
  on(addTodoAct, (state, {todo}) => {
    //side effect is error
    if (state.todos.find(td => td.id === todo.id)) {
      return {
        ...state,
        error: 'Todo already exists',
      }
    }
    return {
      ...state,
      error: null,
      todos: [...state.todos, todo],
    }
  }),
  on(deleteTodoAct, (state, {id}) => ({
    ...state,
    todos: state.todos.filter(td => td.id !== id),
  }))
)
