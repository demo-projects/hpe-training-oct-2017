import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoggerService } from '../utils/logger.service';
import { Tudubom } from './core';
import { Component, Injectable } from '@angular/core';
import { Item } from './item';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

@Injectable()
export class TodolistService {

  private _items: Observable<Item[]>;
  private _logger: LoggerService;

  constructor(logger: LoggerService, http: HttpClient) {

    const params = new HttpParams().append('userId', '1');

    this._items = http.get<Item[]>(environment.baseUrl + '/todos',
      { params });
    this._logger = logger;
  }

  get items(): Observable<Item[]> {
    return this._items;
  }

  addItem(title: string) {
    // this._items.push(new Item(title));
    // this._logger.log('Item added!');
  }
}

