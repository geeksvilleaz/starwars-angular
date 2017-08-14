import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Film } from '../models/film';
import { Person } from '../models/person';
import { Planet } from '../models/planet';
import { Species } from '../models/species';
import { Starship } from '../models/starship';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-list-item',
  template: `
    <div class="item">
      <app-button
          (displayItem)="handleDisplayItem($event)"
          [item]="item">
      </app-button>
    </div>
  `,
  styles: [`
    .item {
      border: 1px solid #000;
      cursor: pointer;
      margin: 10px;
      padding: 10px;
    }
  `]
})
export class ListItemComponent {
  @Input() item: Person | Planet | Film | Species | Vehicle | Starship;
  @Output() displayItem: EventEmitter<Person | Planet | Film | Species | Vehicle | Starship> =
      new EventEmitter<Person | Planet | Film | Species | Vehicle | Starship>();

  /**
   * Callback to display the item detail.
   * @param item The item to be displayed.
   */
  handleDisplayItem(item) {
    this.displayItem.emit(item);
  }
}
