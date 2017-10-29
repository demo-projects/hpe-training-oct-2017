import { Logger } from '../../utils/logger';
import { TodolistService } from '../todolist.service';
import { Item } from '../item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})

export class TodolistComponent  {

  public appTitle: string;
  public list: TodolistService;

  constructor(list: TodolistService) {
    this.list = list;
    this.appTitle = 'TOLOZ';
  }
}
