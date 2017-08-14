import { Component } from '@angular/core';

import { Film } from './models/film';
import { Person } from './models/person';
import { Planet } from './models/planet';
import { Species } from './models/species';
import { Starship } from './models/starship';
import { Vehicle } from './models/vehicle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public activeItem: Film | Person | Planet | Species | Starship | Vehicle;
  public categoryUrl: string;

  /**
   * Displays the category on the page.
   * @param apiUrl The url to fetch the data from.
   */
  displayCategory(apiUrl: string): void {
    this.categoryUrl = apiUrl;
    this.activeItem = null;
  }

  /**
   * Displays the item detail on the page.
   * @param item The item to display.
   */
  displayItem(item: Film | Person | Planet | Species | Starship | Vehicle): void {
    this.activeItem = item;
  }
}
