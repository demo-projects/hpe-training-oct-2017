import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'list', loadChildren: './todolist/todolist.module#TodolistModule' },
];
