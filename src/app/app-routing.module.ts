import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { UsersComponent } from './modules/users/users.component';


const routes: Routes = [
  {
    path: 'dash',
    component: DefaultComponent,
    children: [{
      path: 'dash',
      component: DashboardComponent
    },
    {
      path: 'user',
      component: UsersComponent
    }
  ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: RegisterComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
