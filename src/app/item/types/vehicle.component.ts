import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.html',
  styleUrls: ['./item.css']
})
export class VehicleComponent {
  @Input() vehicle: Vehicle;
  @Output() displayItem: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

  /**
   * Callback to display the item detail.
   * @param item The item to be displayed.
   */
  handleDisplayItem(item: Vehicle): void {
    this.displayItem.emit(item);
  }
}
