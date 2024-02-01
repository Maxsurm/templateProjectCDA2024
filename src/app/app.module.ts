import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MinipostComponent } from './components/minipost/minipost.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TruncatePipe } from './pipes/truncate.pipe';
import { ArticleComponent } from './components/article/article.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { AuthComponent } from './views/auth/auth.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';
import { AuthInterceptor } from './tools/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MinipostComponent,
    SearchComponent,
    TruncatePipe,
    ArticleComponent,
    FormulaireComponent,
    FormControlComponent,
    FormGroupComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HotToastModule.forRoot({
      theme: "snackbar"
    }),
    AppRoutingModule
  ],
  providers: [
    //Fournir manuellement des éléments au contexte
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
