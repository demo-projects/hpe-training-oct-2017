import { Item } from '../item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public appTitle: string;
  public items: Item[];

  constructor() { }

  ngOnInit() {
    this.appTitle = 'TOLOZ';
    this.items = [new Item('js'), new Item('ts')];
  }

}
