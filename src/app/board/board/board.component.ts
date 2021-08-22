import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BoardService } from 'src/app/services/board.service';
import { fromEvent, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor(public boardService: BoardService) {}
  sub: Subscription;
  focusedElement: any;

  ngOnInit(): void {}

  // onClick() {
  //   console.log('click happened when pressed CTRL');
  // }

  onColorChange(color: string, columnId: number) {
    this.boardService.changeColumnColor(color, columnId);
  }

  onAddCard(text: string, columnId: number) {
    if (text) {
      this.boardService.addCard(text, columnId);
    }
  }

  onDeleteColumn(columnId: number) {
    this.boardService.deleteColumn(columnId);
  }

  onDeleteCard(cardId: number, columnId: number) {
    this.boardService.deleteCard(cardId, columnId);
  }

  onChangeLike(event: { card: any; increase: boolean }, columnId: number) {
    const {
      card: { id },
      increase,
    } = event;
    this.boardService.changeLike(id, columnId, increase);
  }

  onAddComment(event: { id: number; text: string }, columnId: number) {
    this.boardService.addComment(columnId, event.id, event.text);
  }

  onDeleteComment(comment, columnId, item) {
    this.boardService.deleteComment(columnId, item.id, comment.id);
  }

  onFocus(e) {
    // this.focusedElement = e.target;
    // this.sub = fromEvent(this.focusedElement, 'keydown')
    //   .pipe(
    //     filter((event: any) => {
    //       return !event.repeat && event.key === 'Control';
    //     }),
    //     tap((e) => {
    //       const event = new MouseEvent('mousedown');
    //       e.target.dispatchEvent(event)
    //     })
        
    //   )
    //   .subscribe();
  }

  onClick(e) {
    this.focusedElement = e.currentTarget;
    console.log(e.currentTarget.getBoundingClientRect())
    this.sub = fromEvent(this.focusedElement, 'keydown')
      .pipe(
        filter((event: any) => {
          return !event.repeat && event.key === 'Control';
        }),
        tap((e) => {
          const event = new MouseEvent('mousedown');
          e.currentTarget.dispatchEvent(event)
          e.screenX = 0
          e.screenY = 0
        })
        
      )
      .subscribe();
  }
  onMouseDown() {
    // console.log('DOWN')
  }
  onFocusOut() {
    // this.sub?.unsubscribe();
  }

  // onMouseDown() {
  //   console.log('onMouseDOWN')
  // }
  drop(event: CdkDragDrop<string[]>) {
    // console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
