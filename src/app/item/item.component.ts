import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Person } from '../models/person';
import { Planet } from '../models/planet';
import { Film } from '../models/film';
import { Species } from '../models/species';
import { Vehicle } from '../models/vehicle';
import { Starship } from '../models/starship';

@Component({
  selector: 'app-item',
  templateUrl: './item.html'
})
export class ItemComponent implements OnChanges, OnInit {
  @Input() item: Person | Planet | Film | Species | Vehicle | Starship;
  @Output() displayItem: EventEmitter<Person | Planet | Film | Species | Vehicle | Starship> =
      new EventEmitter<Person | Planet | Film | Species | Vehicle | Starship>();

  data: Person | Planet | Film | Species | Vehicle | Starship;
  category: string;

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges(changes) {
    this.loadData();
  }

  /**
   * Loads the data onto the page.
   */
  loadData(): void {
    this.category = this.getCategoryFromUrl(this.item.url);

    switch (this.category) {
      case 'people':
        this.data = Person.load(this.item);
        break;

      case 'planets':
        this.data = Planet.load(this.item);
        break;

      case 'films':
        this.data = Film.load(this.item);
        break;

      case 'species':
        this.data = Species.load(this.item);
        break;

      case 'vehicles':
        this.data = Vehicle.load(this.item);
        break;

      case 'starships':
        this.data = Starship.load(this.item);
        break;
    }
  }

  /**
   * Callback to display the item detail.
   * @param item The item to be displayed.
   */
  handleDisplayItem(item: any): void {
    this.displayItem.emit(item);
  }

  /**
   * Gets the category from the API URL.
   * @param url the API URL.
   */
  getCategoryFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 3];
  }
}
