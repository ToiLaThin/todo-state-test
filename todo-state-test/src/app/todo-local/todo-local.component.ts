import { Component } from "@angular/core";
import { TodosComponent } from "./components/todos.component";

@Component({
    selector: 'app-todo-local',
    template: `<app-todos></app-todos>`,
    styles: ``,
    standalone: true,
    imports: [TodosComponent]
})
export class TodoLocalComponent  {
  constructor() {}
}