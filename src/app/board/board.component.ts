import {
  Component,
  ElementRef,
  ViewChild,
  Renderer2,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { HelperService } from 'src/services/helper.service';
import { SquareComponent } from '../square/square.component';
import { faRotate, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent implements AfterViewInit {
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
  @ViewChild('set1') set1: ElementRef<SquareComponent>;
  @ViewChild('set2') set2: ElementRef<SquareComponent>;
  @ViewChild('set3') set3: ElementRef<SquareComponent>;
  @ViewChild('set4') set4: ElementRef<SquareComponent>;
  @ViewChild('set5') set5: ElementRef<SquareComponent>;
  @ViewChild('set6') set6: ElementRef<SquareComponent>;
  @ViewChild('set7') set7: ElementRef<SquareComponent>;
  @ViewChild('set8') set8: ElementRef<SquareComponent>;
  @ViewChild('set9') set9: ElementRef<SquareComponent>;
  @ViewChild('del') del: ElementRef<SquareComponent>;
  @ViewChild('toggleHints') toggleHints: ElementRef<SquareComponent>;

  myBoard: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  matchmaking: boolean = false;
  selectedBoardSquare: SquareComponent | null;
  selectedDigitSquare: SquareComponent | null;
  faRotate = faRotate;
  faPlusCircle = faPlusCircle;
  hintsOn: boolean = true;

  constructor(
    private helper: HelperService,
    private render: Renderer2,
    private changeRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.helper.generateBoard();
    this.mapGeneratedBoardToMyBoard();
    this.fillGameBoard();
    this.changeRef.detectChanges();
  }

  squareClick(square: SquareComponent) {
    let isClue = false;

    if (!square.id) {
      isClue =
        this.helper.generatedBoard[
          this.helper.translateStringToNumber(square.row)! - 1
        ][this.helper.translateStringToNumber(square.col)! - 1] !== 0;
    }

    if (!this.matchmaking && !isClue) {
      this.matchmaking = true;

      if (square.id) {
        this.selectedDigitSquare = square;

        let el = this.getElementRef(square.id);
        this.render.setProperty(el, 'selected', true);
      } else {
        this.selectedBoardSquare = square;

        let el = this.getElementRef(`${square.row}${square.col}`);
        this.render.setProperty(el, 'selected', true);

        if (this.hintsOn) {
          let availableValues = this.helper.getAvailableValues(
            this.helper.translateStringToNumber(square.row)! - 1,
            this.helper.translateStringToNumber(square.col)! - 1,
            square.value ? parseInt(square.value) : 0,
            this.myBoard
          );
          availableValues.forEach((value) => {
            let ref = this.getElementRef(`set${value}`);
            ref.available = true;
          });
        }
      }
    } else if (!isClue) {
      if (
        this.selectedBoardSquare &&
        !square.id &&
        this.selectedBoardSquare.row === square.row &&
        this.selectedBoardSquare.col === square.col
      ) {
        this.matchmaking = false;
        this.selectedBoardSquare = null;
        this.clearAvailableDigits();
        this.render.setProperty(
          this.getElementRef(`${square.row}${square.col}`),
          'selected',
          false
        );
      } else if (this.selectedBoardSquare && !square.id) {
        this.render.setProperty(
          this.getElementRef(
            `${this.selectedBoardSquare.row}${this.selectedBoardSquare.col}`
          ),
          'selected',
          false
        );
        this.render.setProperty(
          this.getElementRef(`${square.row}${square.col}`),
          'selected',
          true
        );

        this.selectedBoardSquare = square;
        this.clearAvailableDigits();

        if (this.hintsOn) {
          let availableValues = this.helper.getAvailableValues(
            this.helper.translateStringToNumber(square.row)! - 1,
            this.helper.translateStringToNumber(square.col)! - 1,
            square.value ? parseInt(square.value) : 0,
            this.myBoard
          );
          availableValues.forEach((value) => {
            let ref = this.getElementRef(`set${value}`);
            ref.available = true;
          });
        }
      } else if (
        this.selectedDigitSquare &&
        square.id &&
        this.selectedDigitSquare.id === square.id
      ) {
        this.matchmaking = false;
        this.selectedDigitSquare = null;
        this.render.setProperty(
          this.getElementRef(square.id),
          'selected',
          false
        );
      } else if (this.selectedDigitSquare && square.id) {
        this.render.setProperty(
          this.getElementRef(this.selectedDigitSquare.id),
          'selected',
          false
        );
        this.render.setProperty(
          this.getElementRef(square.id),
          'selected',
          true
        );
        this.selectedDigitSquare = square;
      } else {
        if (this.selectedBoardSquare) {
          this.selectedDigitSquare = square;
        } else {
          this.selectedBoardSquare = square;
        }

        let elBoard = this.getElementRef(
          `${this.selectedBoardSquare.row}${this.selectedBoardSquare.col}`
        );
        let elBoard_row = this.helper.translateStringToNumber(elBoard.row)!;
        let elBoard_col = this.helper.translateStringToNumber(elBoard.col)!;
        let elDigit = this.getElementRef(this.selectedDigitSquare!.id);

        if (
          this.helper.generatedBoard[elBoard_row - 1][elBoard_col - 1] === 0
        ) {
          this.render.setProperty(
            elBoard,
            'value',
            this.selectedDigitSquare?.value
          );
          this.myBoard[elBoard_row - 1][elBoard_col - 1] = this
            .selectedDigitSquare?.value
            ? parseInt(this.selectedDigitSquare?.value)
            : 0;
        }

        this.render.setProperty(elBoard, 'selected', false);
        this.render.setProperty(elDigit, 'selected', false);
        this.matchmaking = false;
        this.selectedBoardSquare = null;
        this.selectedDigitSquare = null;
        this.clearAvailableDigits();
      }
    }
  }

  clearAvailableDigits() {
    for (let i = 1; i < 10; i++) {
      this.getElementRef(`set${i}`).available = false;
    }
  }

  getElementRef(varName: string): SquareComponent {
    return this[varName as keyof BoardComponent] as SquareComponent;
  }

  fillGameBoard() {
    for (let i = 0; i < this.helper.generatedBoard.length; i++) {
      let row = this.helper.generatedBoard[i];

      for (let j = 0; j < row.length; j++) {
        let val = row[j] === 0 ? '' : row[j];
        let rowParam = this.helper.translateNumberToString(i + 1);
        let colParam = this.helper.translateNumberToString(j + 1);
        let square = this.getElementRef(`${rowParam}${colParam}`);

        this.render.setProperty(square, 'value', val);
      }
    }
  }

  mapGeneratedBoardToMyBoard() {
    for (let i = 0; i < this.helper.generatedBoard.length; i++) {
      const row = this.helper.generatedBoard[i];

      for (let j = 0; j < row.length; j++) {
        const value = row[j];

        this.myBoard[i][j] = value;
      }
    }
  }

  handleNewGameClick() {
    this.helper.generateBoard();
    this.mapGeneratedBoardToMyBoard();
    this.fillGameBoard();
  }

  handleHintsClick() {
    let ref = this.getElementRef('toggleHints');
    ref.available = !ref.available;
    this.hintsOn = ref.available;
  }

  handleRestartClick() {
    this.myBoard = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.fillGameBoard();
  }
}
