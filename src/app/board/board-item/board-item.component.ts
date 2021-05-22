import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss'],
})
export class BoardItemComponent implements OnInit {
  @Input() item;
  commentInput = ''
  open = false;
  constructor() { }

  ngOnInit(): void {
    console.log('Board Item Init')
  }

  onOpenComment() {
    this.open = !this.open
  }
}
