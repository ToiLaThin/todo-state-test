import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects} from '@ngrx/effects';
import { todoReducer, todoFeatureKey } from './todo-local/state/reducers';
import { routes } from './app.routes';
import { TodoService } from './todo-local/services/todo.service';
import { TodoEffect } from './todo-local/state/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    //chính là key của feature state trong obj store, key trong IAppState cũng phai trùng với key này
    provideState( { name: todoFeatureKey, reducer: todoReducer}),
    provideStoreDevtools({ 
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      traceLimit: 75 
    }),
    provideEffects([TodoEffect]),
    TodoService
  ],
};
