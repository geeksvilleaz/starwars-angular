import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div class="button-wrapper">
      <button class="sw-button" (click)="handleDisplayItem(item)">
        {{item.name || item.title}}
      </button>
    </div>
  `,
  styleUrls: ['./button.scss']
})
export class ButtonComponent {
  @Input() item;
  @Output() displayItem = new EventEmitter();

  handleDisplayItem(item) {
    this.displayItem.emit(item);
  }
}
