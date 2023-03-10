import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() id: string;
  @Input() value: string;

  @Output() handleClick = new EventEmitter<SquareComponent>();

  squareClick() {
    this.handleClick.emit(this);
  }
}
