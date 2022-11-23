import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserLoginViewModel } from '../interfaces/User';
import { messageWarper } from '../interfaces/messageWarper';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private client:HttpClient) { }

  register(modal:User):Observable<messageWarper>{
    return this.client.post<messageWarper>("https://localhost:7275/user/signup",modal);
  }

  login(modal:UserLoginViewModel){
    return this.client.post("https://localhost:7275/user/signin",modal)
  }
}
