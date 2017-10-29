import { LoggerService } from '../utils/logger.service';
import { Tudubom } from './core';
import { Component, Injectable } from '@angular/core';
import { Item } from './item';


@Injectable()
export class TodolistService {

  private _items: Item[];
  private _logger: LoggerService;

  constructor(logger: LoggerService) {
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

