import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { AuthComponent } from './views/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "formulaire", children: [
    {path: "", component: FormulaireComponent},
    {path: "control", component: FormControlComponent},
    {path: "group", children: [
      {path:":id", component: FormGroupComponent},
      {path: "", redirectTo: "0", pathMatch: "prefix"}
    ]},
  ]},
  {path: "auth", component:AuthComponent, children: [
    {path:"login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: '**', redirectTo:"/auth/login", pathMatch: 'full'}
  ]},
  {path: "**", redirectTo:"/", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
