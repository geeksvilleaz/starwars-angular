import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

import { Film } from '../models/film';
import { Person } from '../models/person';
import { Starship } from '../models/starship';
import { Vehicle } from '../models/vehicle';
import { Species } from '../models/species';
import { Planet } from '../models/planet';

@Component({
  selector: 'app-item-collection',
  template: `
    <div class="collection" *ngFor="let item of items">
      <app-button
          (displayItem)="handleDisplayItem($event)"
          [item]="item">
      </app-button>
    </div>
  `
})
export class ItemCollectionComponent implements OnInit {
  @Input() list: string[];
  @Input() category: string;
  @Output() displayItem: EventEmitter<Person | Planet | Film | Species | Vehicle | Starship> =
      new EventEmitter<Person | Planet | Film | Species | Vehicle | Starship>();

  items: Array<Person | Planet | Film | Species | Vehicle | Starship> = [];

  constructor(private swSvc: StarWarsService) {}

  ngOnInit() {
    if (!this.list) {
      return;
    }

    this.list.forEach(item => {
      this.swSvc.getFromUrl(item)
          .subscribe(data => this.loadType(data));
    });
  }

  loadType(data) {
    switch (this.category) {
      case 'films':
        this.items.push(Film.load(data));
        break;

      case 'people':
        this.items.push(Person.load(data));
        break;

      case 'starships':
        this.items.push(Starship.load(data));
        break;

      case 'vehicles':
        this.items.push(Vehicle.load(data));
        break;

      case 'species':
        this.items.push(Species.load(data));
        break;

      case 'planets':
        this.items.push(Planet.load(data));
        break;
    }
  }

  /**
   * Callback to display the item detail.
   * @param item The item to be displayed.
   */
  handleDisplayItem(item: Person | Planet | Film | Species | Vehicle | Starship): void {
    this.displayItem.emit(item);
  }
}
