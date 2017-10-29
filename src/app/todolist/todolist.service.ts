import { Component } from '@angular/core';
import { Logger } from '../utils/logger';
import { Item } from './item';

export class TodolistService {

  private _items: Item[];
  private _logger: Logger;

  constructor(logger: Logger) {
    this._items = [];
    this._logger = logger;
  }

  get items(): Item[]{
    return this._items;
  }

  addItem(title: string) {
    this._items.push(new Item(title));
    this._logger.log('Item added!');
  }
}

