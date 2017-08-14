import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

import { MenuItem } from '../models/menuItem';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.html',
  styleUrls: ['./browse.scss']
})
export class BrowseComponent implements OnInit {
  @Output() displayCategory: EventEmitter<string> = new EventEmitter<string>();

  public menu: MenuItem[] = [];
  public activeUrl: string;

  constructor(
    private swSvc: StarWarsService
  ) {}

  ngOnInit() {
    this.swSvc.getMenu()
        .subscribe(
          response => response.forEach(item => this.menu.push(MenuItem.load(item))),
          error => console.error(error)
        );
  }

  /**
   * Shows the List from the given url.
   * @param apiUrl The API URL.
   */
  showList(apiUrl: string): void {
    this.activeUrl = apiUrl;
    this.displayCategory.emit(apiUrl);
  }
}
