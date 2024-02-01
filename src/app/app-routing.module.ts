import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes, UrlTree } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { AuthComponent } from './views/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"formulaire",canActivate: [() => inject(AuthService).isLogged || new UrlTree()], children: [
    {path:"", component:FormulaireComponent},
    {path:"control", component:FormControlComponent},
    {path:"group", children: [
      {path:":id", component:FormGroupComponent},
      {path: "" , redirectTo: "0", pathMatch:"prefix"}  
  ]}
  ]},
  {path:"auth", component:AuthComponent, children: [
    {path:"login", component:LoginComponent, outlet:"authOutlet"},
    {path:"register", component:RegisterComponent, outlet:"authOutlet"},
    {path:"**", redirectTo:"/auth/login", pathMatch:"full"}
  ]},
  {path:"**", redirectTo:"/", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
