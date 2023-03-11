import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HelperService } from 'src/services/helper.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  @Input() id: string;
  @Input() selected: boolean;
  @Input() box: string;
  @Input() col: string;
  @Input() row: string;
  @Input() value: string;
  @Output() handleClick = new EventEmitter<SquareComponent>();

  isEvenBox: boolean;

  constructor(private helper: HelperService) {}

  ngOnInit() {
    let num = this.helper.translateStringToNumber(this.box);

    if (this.box && num) {
      this.isEvenBox = num % 2 === 0;
    }
  }

  squareClick() {
    this.handleClick.emit(this);
  }
}
