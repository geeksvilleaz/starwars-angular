import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.html',
  styleUrls: ['./item.css']
})
export class PersonComponent {
  @Input() person: Person;
  @Output() displayItem: EventEmitter<Person> = new EventEmitter<Person>();

  /**
   * Callback to display the item detail.
   * @param item The item to be displayed.
   */
  handleDisplayItem(item: Person): void {
    this.displayItem.emit(item);
  }
}
