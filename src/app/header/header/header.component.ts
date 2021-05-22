import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    public boardService: BoardService
  ) { }

  ngOnInit(): void {
  }

  addColumn(event: string) {
    if (event) {
      this.boardService.addColumn(event)
    }
  }

}
