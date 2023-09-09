import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'add-employee', component: AddUserComponent },
  { path: 'edit-employee/:userId', component: AddUserComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
