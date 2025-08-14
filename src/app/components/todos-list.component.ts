import {Component, effect, input} from '@angular/core';
import { TodoComponent } from './todo.component';
import {Todo} from '../shared/interfaces';

@Component({
  selector: 'app-todos-list',
  imports: [ TodoComponent],
  template: `
    <ul class="flex flex-col gap-12">

      @for ( todo of todosList() ; track todo.id) {
        <app-todo [todo]="todo" />
      } @empty {
        <li>Il n'y a pas de todo pour l'instant</li>
      }
    </ul>
  `,
  styles: `
    ul {
      margin-top: 12px;
    }
  `,
})
export class TodosListComponent {
    todosList = input<Todo[]>([])

  //debug
  constructor() {
    effect(() => {
      console.log(this.todosList)
    });
  }
}
