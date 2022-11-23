import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User, UserLoginViewModel } from 'src/app/interfaces/User';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthserviceService]
})
export class LoginComponent {
  public user = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private service:AuthserviceService) {

  }
  onSubmit(){
    const values=this.user.value
    const validObject:UserLoginViewModel={
      email:values.email || "",
      password:values.password || ""
    }
    this.service.login(validObject).subscribe((e:any)=>{
      if(e.hasOwnProperty('token')){
        localStorage.setItem("token",e.token);
      }
    });
  }
}
