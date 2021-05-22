import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss'],
})
export class BoardItemComponent implements OnInit {
  @Input() item;
  @Output() emitText: EventEmitter<{ id: number; text: string }> = new EventEmitter();
  @Output() emitCardItem: EventEmitter<{ card: any; increase: boolean }> = new EventEmitter();
  @Output() emitDeleteCard: EventEmitter<number> = new EventEmitter();
  
  commentInput = ''
  open = false;
  constructor() { }

  ngOnInit(): void {}

  onOpenComment() {
    this.open = !this.open
  }

  onCommentTextEmit(id: number) {
    this.emitText.emit({ id, text: this.commentInput });
    this.commentInput = ''
  }

  onCardItemEmit(card: any, increase: boolean) {
    this.emitCardItem.emit({ card, increase });
  }

  onCardDelete(id: number) {
    this.emitDeleteCard.emit(id)
  }
}
