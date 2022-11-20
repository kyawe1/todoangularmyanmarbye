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
  public todo$!: Observable<Datawarper<Todo[]>>;
  public message$!: Observable<messageWarper>;
  public showMessage: boolean = false;
  public dialogRef: MatDialogRef<TodoDialogComponent> | null = null;
  public loading:boolean=true;
  public pageNumber:number=1;
  constructor(private service: TodoService, public dialog: MatDialog) {
    this.getTodoesFromApi();
  }
  ngOnInit(): void {

  }
  getTodoesFromApi(page_number:number=1): void {
    this.todo$ = this.service.getTodos(page_number).pipe(
      map((data) => {
        this.loading=false;
        return data;
      })
    );
    this.pageNumber=page_number;
  }
  deleteTodo(id: number): void {
    this.message$ = this.service.deleteTodos(id).pipe(
      map((data) => {
        this.getTodoesFromApi();
        this.showMessage = true;
        return data;
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
      if(result){
        console.log(result);
        this.createTodo(result);
        this.showMessage=true;
      }
    });
  }
  createTodo(task: string): void {
    this.message$ = this.service.saveTodo(task).pipe(
      map((data) => {
        this.getTodoesFromApi();
        this.showMessage = true;
        return data;
      })
    )
  }
  onclose() {
    console.log("closed");
    this.dialogRef?.close("ok")
  }
}
