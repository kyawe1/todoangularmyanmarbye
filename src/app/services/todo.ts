import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Datawarper } from "../interfaces/datawarper";
import { messageWarper } from "../interfaces/messageWarper";
import { Todo } from "../interfaces/todo";

@Injectable()
export class TodoService {
    private client:HttpClient;
    constructor(client:HttpClient){
        this.client=client;
    }
    getTodos(page_number:number):Observable<Datawarper<Todo[]>>{
        return this.client.get<Datawarper<Todo[]>>("https://localhost:7275/todo?page="+page_number);
    }
    deleteTodos(i :number):Observable<messageWarper>{
        console.log("https://localhost:7275/todo/"+i)
        return this.client.delete<messageWarper>("https://localhost:7275/todo/"+i);
    }
    saveTodo(i:string):Observable<messageWarper>{
        return this.client.post<messageWarper>("https://localhost:7275/todo/",{task:i});
    }
}
