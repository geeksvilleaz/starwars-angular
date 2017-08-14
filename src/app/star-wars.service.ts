import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MenuItem } from './models/menuItem';

@Injectable()
export class StarWarsService {
  private API_URL = 'https://swapi.co/api/';
  private menuData: MenuItem[] = [];

  private urlData = {};

  constructor(private http: Http) {}

  getMenu(): Observable<any[]> {
    if (this.menuData.length) {
      return Observable.of(this.menuData);
    }

    return this.http.get(this.API_URL)
        .map((response: Response) => {
          const json = response.json();
          Object.keys(json).map(value => this.menuData.push(MenuItem.load({name: value, url: json[value]})));
          return this.menuData;
        })
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getFromUrl(url) {
    if (this.urlData[url]) {
      return Observable.of(this.urlData[url]);
    }

    return this.http.get(url)
        .map((response: Response) => {
          this.urlData[url] = response.json();
          return response.json();
        })
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}

