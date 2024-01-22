import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {addTodoAct, loadTodosAct, loadTodosFailureAct, loadTodosSuccessAct} from './actions'
import {catchError, map, merge, mergeMap, of} from 'rxjs'
import {TodoService} from '../services/todo.service'

@Injectable()
export class TodoEffect {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodosAct),
      mergeMap(_ =>
        this.todoService.getAll().pipe(
          map(
            todos => loadTodosSuccessAct({todos}),
            catchError((errorMessage: string) =>
              of(loadTodosFailureAct({errorMessage}))
            )
          )
        )
      )
    )
  )
}
