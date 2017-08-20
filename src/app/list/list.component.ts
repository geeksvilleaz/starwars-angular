import { Component, EventEmitter, Input, OnInit, OnChanges, Output } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

import { Film } from '../models/film';
import { Person } from '../models/person';
import { Planet } from '../models/planet';
import { Species } from '../models/species';
import { Starship } from '../models/starship';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-list',
  template: `
    <h2>{{title}}</h2>

    <div class="list">
      <app-list-item
          *ngFor="let result of results;"
          [item]="result"
          (displayItem)="handleDisplayItem($event)">
      </app-list-item>
    </div>

    <app-pagination
        (goTo)="goTo($event)"
        [next]="nextUrl"
        [previous]="previousUrl"
        [count]="count"
        [url]="url">
    </app-pagination>
  `,
  styles: [`
    .list {
      display: flex;
      flex-wrap: wrap;
    }
  `]
})
export class ListComponent implements OnChanges {
  @Input() categoryUrl: string;
  @Output() displayItem: EventEmitter<Person | Planet | Film | Species | Vehicle | Starship> =
      new EventEmitter<Person | Planet | Film | Species | Vehicle | Starship>();

  title: string;
  results: Array<Person | Planet | Film | Species | Vehicle | Starship>;
  nextUrl: string;
  previousUrl: string;
  count: number;
  url: string;

  constructor(
    private swSvc: StarWarsService
  ) {}

  ngOnChanges(changes) {
    if (changes.categoryUrl &&
        changes.categoryUrl.currentValue !== changes.categoryUrl.previousValue) {
      this.setTitle();
      this.loadCategory();
    }
  }

  /**
   * Loads the previous or next page of results.
   * @param url The API URL.
   */
  goTo(url: string): void {
    console.log('goto', url);
    this.categoryUrl = url;
    this.loadCategory();
  }

  /**
   * Sets the title of the page based on the category.
   */
  setTitle(): void {
    const parts = this.categoryUrl.split('/');
    this.title = parts[parts.length - 2];
  }

  /**
   * Loads the category information from the API.
   */
  loadCategory(): void {
    this.swSvc.getFromUrl(this.categoryUrl)
        .subscribe(response => {
          console.log(response);
          this.url = response.results[0].url;
          this.count = response.count;
          this.results = response.results;
          this.nextUrl = response.next;
          this.previousUrl = response.previous;
        });
  }


  /**
   * Callback to display the item detail.
   * @param item The item to be displayed.
   */
  handleDisplayItem(item: Person | Planet | Film | Species | Vehicle | Starship): void {
    this.displayItem.emit(item);
  }
}
