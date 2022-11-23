import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input()
  public todo!:Todo;
  @Output()
  public deleteTodo=new EventEmitter();
}
