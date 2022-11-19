import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { Datawarper } from 'src/app/interfaces/datawarper';
import { messageWarper } from 'src/app/interfaces/messageWarper';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo';
import { TodoDialogComponent } from './todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  public todo!: Observable<Todo[]>;
  public successMessage!: Observable<string|null>;
  public message!: messageWarper;
  public showMessage: boolean = false;
  public dialogRef: MatDialogRef<TodoDialogComponent> | null = null;
  constructor(private service: TodoService, public dialog: MatDialog) {
    this.getTodoesFromApi();
  }
  ngOnInit(): void {

  }
  getTodoesFromApi(): void {
    this.todo = this.service.getTodos().pipe(
      map((data) => {
        return data.data;
      })
    );
    console.log(this.todo);
  }
  deleteTodo(id: number): void {
    this.successMessage = this.service.deleteTodos(id).pipe(
      map((data) => {
        this.getTodoesFromApi();
        return data.message;
      })
    )
    this.showMessage = true;
  }
  opendialog() {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      data: {
        task: ""
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.service.saveTodo(result).subscribe((data) => {
        this.message=data;
        this.showMessage=true;
        this.getTodoesFromApi();
      }
      );
    });
  }
  onclose() {
    console.log("closed");
    this.dialogRef?.close("ok")
  }
}
