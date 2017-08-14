import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Film } from '../../models/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.html',
  styleUrls: ['./item.css']
})
export class FilmComponent {
  @Input() film: Film;
  @Output() displayItem: EventEmitter<Film> = new EventEmitter<Film>();

  /**
   * Callback to display the item detail.
   * @param item The item to be displayed.
   */
  handleDisplayItem(item) {
    this.displayItem.emit(item);
  }
}
