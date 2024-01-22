import { Routes } from '@angular/router';
import { TodoLocalComponent } from './todo-local.component';

// must be standalone component to work
export const todoLocalRoutes: Routes = [
    {
        path: '',
        component: TodoLocalComponent
    }
];