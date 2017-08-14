import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Planet } from '../../models/planet';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.html',
  styleUrls: ['./item.css']
})

export class PlanetComponent {
  @Input() planet: Planet;
  @Output() displayItem: EventEmitter<Planet> = new EventEmitter<Planet>();

  /**
   * Callback to display the item detail.
   * @param item The item to be displayed.
   */
  handleDisplayItem(item: Planet): void {
    this.displayItem.emit(item);
  }
}
