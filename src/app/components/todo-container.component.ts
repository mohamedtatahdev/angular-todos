import { Component, signal } from '@angular/core';
import { TodoFormComponent } from './todo-form.component';
import { TodosListComponent } from './todos-list.component';
import {Todo} from '../shared/interfaces';

@Component({
  selector: 'app-todo-container',
  imports: [TodoFormComponent, TodosListComponent],
  template: `
    <app-todo-form />
    <app-todos-list [todosList]="todosList()" />
  `,
  styles: `
    :host { padding: 32px; }
  `,
})
export class TodoContainerComponent {
  todosList = signal<Todo[]>([
    {
      id: 1,
      name:'Ranger ma chambre',
      done: false,
    },
    {
      id: 2,
      name:'Apprendre Angular',
      done: true,
    },
    {
      id: 3,
      name:'Lire crime et chatiment',
      done: false,
    },
  ])
}
