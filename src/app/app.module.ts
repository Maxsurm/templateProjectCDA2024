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
    FormGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
