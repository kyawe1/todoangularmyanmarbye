import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { TodoComponent } from './component/todo/todo.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"todo",
    component:TodoComponent
  },
  {
    path:"**",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
