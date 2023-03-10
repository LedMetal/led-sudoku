import { Component } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  squareClick(square: SquareComponent) {
    console.log('square: ', square);
  }
}
