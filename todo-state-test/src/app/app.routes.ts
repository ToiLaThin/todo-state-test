import { Routes } from '@angular/router';
import { todoLocalRoutes } from './todo-local/todo-local.routes';

export const routes: Routes = [
    {
        path: 'todo-local',
        loadChildren: () => import('./todo-local/todo-local.routes').then(m => m.todoLocalRoutes) // must be standalone component to work
    }
];

