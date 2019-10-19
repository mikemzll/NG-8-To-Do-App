import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  MatToolbarModule,
          MatTooltipModule,
          MatCheckboxModule,
          MatButtonModule,
          MatIconModule,
          MatCardModule,
          MatListModule,
          MatInputModule,
          MatDialogModule,
          MatBadgeModule,  } from '@angular/material';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { LoginComponent } from './components/login/login.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { todoReducer } from './reducers/todo.reducers';


const material = [
  MatDialogModule,
  MatInputModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatBadgeModule,
]

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DialogComponent,
    LoginComponent
  ],
  entryComponents: [ DialogComponent ],
  imports: [
    FormsModule,

    material,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ state: todoReducer }),
    /*StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
