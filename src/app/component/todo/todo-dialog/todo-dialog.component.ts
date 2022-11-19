import { Component,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.css']
})
export class TodoDialogComponent {
  constructor(public dialogRef: MatDialogRef<TodoDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any){

  } 
}
