import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule
} from '@angular/material';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { NoteService } from './services/note.service';
import { LoginComponent } from './components/login/login.component';
import { NoteIndexComponent } from './components/note/note-index/note-index.component';
import { NoteCreateComponent } from './components/note/note-create/note-create.component';
import { NoteDetailComponent } from './components/note/note-detail/note-detail.component';
import { NoteEditComponent } from './components/note/note-edit/note-edit.component';
import { NoteDeleteComponent } from './components/note/note-delete/note-delete.component';
import { AuthGuard } from './guards/auth.guard';
import { CategoryIndexComponent } from './components/category/category-index/category-index.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryDetailComponent } from './components/category/category-detail/category-detail.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './components/category/category-delete/category-delete.component';
import { HomeComponent } from './components/home/home.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'note', canActivate: [AuthGuard], children: [
      { path: '', component: NoteIndexComponent },
      { path: 'create', component: NoteCreateComponent },
      { path: 'detail/:id', component: NoteDetailComponent },
      { path: 'edit/:id', component: NoteEditComponent },
      { path: 'delete/:id', component: NoteDeleteComponent }
    ]
  },
  {
    path: 'category', canActivate: [AuthGuard], children: [
      { path: '', component: CategoryIndexComponent },
      { path: 'create', component: CategoryCreateComponent },
      { path: 'detail/:id', component: CategoryDetailComponent },
      { path: 'edit/:id', component: CategoryEditComponent },
      { path: 'delete/:id', component: CategoryDeleteComponent }
    ]
  },
  { path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    NoteIndexComponent,
    NoteCreateComponent,
    NoteDetailComponent,
    NoteEditComponent,
    NoteDeleteComponent,
    CategoryIndexComponent,
    CategoryCreateComponent,
    CategoryDetailComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [
    AuthService,
    NoteService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
