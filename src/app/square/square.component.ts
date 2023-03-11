import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() id: string;
  @Input() selected: boolean;
  @Input() box: string;
  @Input() col: string;
  @Input() row: string;
  @Input() value: string;

  @Output() handleClick = new EventEmitter<SquareComponent>();

  squareClick() {
    this.handleClick.emit(this);
  }
}
