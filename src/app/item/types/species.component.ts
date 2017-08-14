import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Species } from '../../models/species';

@Component({
  selector: 'app-species',
  templateUrl: './species.html',
  styleUrls: ['./item.css']
})
export class SpeciesComponent {
  @Input() species: Species;
  @Output() displayItem: EventEmitter<Species> = new EventEmitter<Species>();

  /**
   * Callback to display the item detail.
   * @param item The item to be displayed.
   */
  handleDisplayItem(item: Species): void {
    this.displayItem.emit(item);
  }
}
