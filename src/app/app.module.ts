import { TodolistModule } from './todolist/todolist.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  imports     : [BrowserModule, TodolistModule],
  declarations: [AppComponent],
  bootstrap   : [AppComponent]
})

export class AppModule {}
