import { Component, Input, EventEmitter, Output, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <div class="container">
      <div class="pagination">
        <a (click)="goDown(previous)">previous</a>

        <a
            *ngFor="let page of pages;"
            (click)="goToPage(page)"
            [ngClass]="{'active': active === page}">
          {{page}}
        </a>

        <a (click)="goUp(next)">Next</a>
      </div>
    </div>
  `,
  styleUrls: ['./pagination.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() next: string;
  @Input() previous: string;
  @Input() count: number;
  @Input() url: string;
  @Output() goTo = new EventEmitter();

  public active: number;
  public pages: number[] = [];

  constructor() {}

  ngOnInit() {
    this.active = 1;
    const numPages = Math.ceil(this.count / 10);
    for (let x = 0; x < numPages; x++) {
      this.pages.push(x + 1);
    }
  }

  ngOnChanges() {
    if (this.pages.length) {
      return;
    }

    const numPages = Math.ceil(this.count / 10);
    for (let x = 0; x < numPages; x++) {
      this.pages.push(x + 1);
    }
    console.log('pages', this.pages);
  }

  goToPage(page) {
    this.active = page;
    const url = this.url.split('/');
    url.pop();
    url[url.length - 1] = `?page=${page}`;
    this.goTo.emit(url.join('/'));
  }

  goUp(url: string) {
    if (this.active < this.pages.length && url) {
      this.active++;
      this.goTo.emit(url);
    }
  }

  goDown(url: string): void {
    if (this.active > 1 && url) {
      this.active--;
      this.goTo.emit(url);
    }
  }
}
