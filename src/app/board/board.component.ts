import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @ViewChild('oneone') oneone: ElementRef<SquareComponent>;
  @ViewChild('onetwo') onetwo: ElementRef<SquareComponent>;
  @ViewChild('onethree') onethree: ElementRef<SquareComponent>;
  @ViewChild('onefour') onefour: ElementRef<SquareComponent>;
  @ViewChild('onefive') onefive: ElementRef<SquareComponent>;
  @ViewChild('onesix') onesix: ElementRef<SquareComponent>;
  @ViewChild('oneseven') oneseven: ElementRef<SquareComponent>;
  @ViewChild('oneeight') oneeight: ElementRef<SquareComponent>;
  @ViewChild('onenine') onenine: ElementRef<SquareComponent>;
  @ViewChild('twoone') twoone: ElementRef<SquareComponent>;
  @ViewChild('twotwo') twotwo: ElementRef<SquareComponent>;
  @ViewChild('twothree') twothree: ElementRef<SquareComponent>;
  @ViewChild('twofour') twofour: ElementRef<SquareComponent>;
  @ViewChild('twofive') twofive: ElementRef<SquareComponent>;
  @ViewChild('twosix') twosix: ElementRef<SquareComponent>;
  @ViewChild('twoseven') twoseven: ElementRef<SquareComponent>;
  @ViewChild('twoeight') twoeight: ElementRef<SquareComponent>;
  @ViewChild('twonine') twonine: ElementRef<SquareComponent>;
  @ViewChild('threeone') threeone: ElementRef<SquareComponent>;
  @ViewChild('threetwo') threetwo: ElementRef<SquareComponent>;
  @ViewChild('threethree') threethree: ElementRef<SquareComponent>;
  @ViewChild('threefour') threefour: ElementRef<SquareComponent>;
  @ViewChild('threefive') threefive: ElementRef<SquareComponent>;
  @ViewChild('threesix') threesix: ElementRef<SquareComponent>;
  @ViewChild('threeseven') threeseven: ElementRef<SquareComponent>;
  @ViewChild('threeeight') threeeight: ElementRef<SquareComponent>;
  @ViewChild('threenine') threenine: ElementRef<SquareComponent>;
  @ViewChild('fourone') fourone: ElementRef<SquareComponent>;
  @ViewChild('fourtwo') fourtwo: ElementRef<SquareComponent>;
  @ViewChild('fourthree') fourthree: ElementRef<SquareComponent>;
  @ViewChild('fourfour') fourfour: ElementRef<SquareComponent>;
  @ViewChild('fourfive') fourfive: ElementRef<SquareComponent>;
  @ViewChild('foursix') foursix: ElementRef<SquareComponent>;
  @ViewChild('fourseven') fourseven: ElementRef<SquareComponent>;
  @ViewChild('foureight') foureight: ElementRef<SquareComponent>;
  @ViewChild('fournine') fournine: ElementRef<SquareComponent>;
  @ViewChild('fiveone') fiveone: ElementRef<SquareComponent>;
  @ViewChild('fivetwo') fivetwo: ElementRef<SquareComponent>;
  @ViewChild('fivethree') fivethree: ElementRef<SquareComponent>;
  @ViewChild('fivefour') fivefour: ElementRef<SquareComponent>;
  @ViewChild('fivefive') fivefive: ElementRef<SquareComponent>;
  @ViewChild('fivesix') fivesix: ElementRef<SquareComponent>;
  @ViewChild('fiveseven') fiveseven: ElementRef<SquareComponent>;
  @ViewChild('fiveeight') fiveeight: ElementRef<SquareComponent>;
  @ViewChild('fivenine') fivenine: ElementRef<SquareComponent>;
  @ViewChild('sixone') sixone: ElementRef<SquareComponent>;
  @ViewChild('sixtwo') sixtwo: ElementRef<SquareComponent>;
  @ViewChild('sixthree') sixthree: ElementRef<SquareComponent>;
  @ViewChild('sixfour') sixfour: ElementRef<SquareComponent>;
  @ViewChild('sixfive') sixfive: ElementRef<SquareComponent>;
  @ViewChild('sixsix') sixsix: ElementRef<SquareComponent>;
  @ViewChild('sixseven') sixseven: ElementRef<SquareComponent>;
  @ViewChild('sixeight') sixeight: ElementRef<SquareComponent>;
  @ViewChild('sixnine') sixnine: ElementRef<SquareComponent>;
  @ViewChild('sevenone') sevenone: ElementRef<SquareComponent>;
  @ViewChild('seventwo') seventwo: ElementRef<SquareComponent>;
  @ViewChild('seventhree') seventhree: ElementRef<SquareComponent>;
  @ViewChild('sevenfour') sevenfour: ElementRef<SquareComponent>;
  @ViewChild('sevenfive') sevenfive: ElementRef<SquareComponent>;
  @ViewChild('sevensix') sevensix: ElementRef<SquareComponent>;
  @ViewChild('sevenseven') sevenseven: ElementRef<SquareComponent>;
  @ViewChild('seveneight') seveneight: ElementRef<SquareComponent>;
  @ViewChild('sevennine') sevennine: ElementRef<SquareComponent>;
  @ViewChild('eightone') eightone: ElementRef<SquareComponent>;
  @ViewChild('eighttwo') eighttwo: ElementRef<SquareComponent>;
  @ViewChild('eightthree') eightthree: ElementRef<SquareComponent>;
  @ViewChild('eightfour') eightfour: ElementRef<SquareComponent>;
  @ViewChild('eightfive') eightfive: ElementRef<SquareComponent>;
  @ViewChild('eightsix') eightsix: ElementRef<SquareComponent>;
  @ViewChild('eightseven') eightseven: ElementRef<SquareComponent>;
  @ViewChild('eighteight') eighteight: ElementRef<SquareComponent>;
  @ViewChild('eightnine') eightnine: ElementRef<SquareComponent>;
  @ViewChild('nineone') nineone: ElementRef<SquareComponent>;
  @ViewChild('ninetwo') ninetwo: ElementRef<SquareComponent>;
  @ViewChild('ninethree') ninethree: ElementRef<SquareComponent>;
  @ViewChild('ninefour') ninefour: ElementRef<SquareComponent>;
  @ViewChild('ninefive') ninefive: ElementRef<SquareComponent>;
  @ViewChild('ninesix') ninesix: ElementRef<SquareComponent>;
  @ViewChild('nineseven') nineseven: ElementRef<SquareComponent>;
  @ViewChild('nineeight') nineeight: ElementRef<SquareComponent>;
  @ViewChild('ninenine') ninenine: ElementRef<SquareComponent>;

  matchmaking: boolean = false;
  selectedBoardSquare: SquareComponent | null;
  selectedDigitSquare: SquareComponent | null;

  constructor(private render: Renderer2) {}

  squareClick(square: SquareComponent) {
    if (!this.matchmaking) {
      this.matchmaking = true;

      if (square.id) {
        this.selectedDigitSquare = square;
      } else {
        this.selectedBoardSquare = square;
      }
    } else {
      if (this.selectedBoardSquare) {
        this.selectedDigitSquare = square;
      } else {
        this.selectedBoardSquare = square;
      }

      this.render.setProperty(
        this.getElementRef(
          `${this.selectedBoardSquare.row}${this.selectedBoardSquare.col}`
        ),
        'value',
        this.selectedDigitSquare?.value
      );

      this.matchmaking = false;
      this.selectedBoardSquare = null;
      this.selectedDigitSquare = null;
    }
  }

  getElementRef(varName: string): SquareComponent {
    return this[varName as keyof BoardComponent] as SquareComponent;
  }
}
