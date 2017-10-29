import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist/todolist.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports     : [CommonModule],
  declarations: [TodolistComponent, HeaderComponent, MainComponent, FooterComponent, ListComponent, ItemComponent]
})
export class TodolistModule { }
