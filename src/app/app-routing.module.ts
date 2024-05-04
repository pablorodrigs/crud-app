import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/home/components/users/users.component';
import { WelcomeComponent } from './pages/home/components/welcome/welcome.component';
import { TodoListComponent } from './pages/home/pages/todo-list/todo-list.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddUserComponent } from './pages/home/components/add-user/add-user.component';


const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "add-user", component: AddUserComponent }, // Adicione a rota para a página de adicionar usuário
  {
    path: "app", component: HomeComponent,
    children: [
      { path: "", component: WelcomeComponent },
      { path: "users", component: UsersComponent },
      { path: "todo-list", component: TodoListComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
