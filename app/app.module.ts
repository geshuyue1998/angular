import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentsComponent } from './components/parents/parents.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentsComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
