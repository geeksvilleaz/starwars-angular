import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Starship } from '../../models/starship';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.html',
  styleUrls: ['./item.css']
})
export class StarshipComponent {
  @Input() starship: Starship;
  @Output() displayItem: EventEmitter<Starship> = new EventEmitter<Starship>();

  /**
   * Callback to display the item detail.
   * @param item The item to be displayed.
   */
  handleDisplayItem(item: Starship): void {
    this.displayItem.emit(item);
  }
}
