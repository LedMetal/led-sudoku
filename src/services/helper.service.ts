import { Injectable } from '@angular/core';
import { ISquare } from 'src/models/square';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  generatedBoard: number[][] = [
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
  solution: ISquare[][];

  constructor() {}

  generateBoard() {
    const minNumOfClues = 24;
    let numOfClues;

    do {
      console.log('GENERATING at ', new Date().getTime());

      numOfClues = 0;

      do {
        let randomRow: number;
        let randomCol: number;
        let randomValue: number;

        do {
          randomRow = Math.floor(Math.random() * 9);
          randomCol = Math.floor(Math.random() * 9);
        } while (!this.validateEmptySquare(randomRow, randomCol));

        do {
          randomValue = Math.floor(Math.random() * 9) + 1;
        } while (!this.validateSquareValue(randomRow, randomCol, randomValue));

        this.generatedBoard[randomRow][randomCol] = randomValue;
        numOfClues++;

        if (randomRow !== randomCol) {
          let mirrorRow = randomCol;
          let mirrorCol = randomRow;
          let mirrorRandomValue;

          do {
            mirrorRandomValue = Math.floor(Math.random() * 9) + 1;
          } while (
            !this.validateSquareValue(mirrorRow, mirrorCol, mirrorRandomValue)
          );

          this.generatedBoard[mirrorRow][mirrorCol] = mirrorRandomValue;

          numOfClues++;
        }
      } while (numOfClues < minNumOfClues);
    } while (!this.isSolvable());
  }

  isSolvable(): boolean {
    let boardObj: ISquare[][] = this.mapBoardToBoardObj(this.generatedBoard);
    let rowIndex = 0;
    let colIndex = 0;
    let solved: boolean = false;
    let backtracking: boolean = false;

    do {
      let square = boardObj[rowIndex][colIndex];

      if (!square.clue) {
        if (!backtracking) {
          square.availableValues = this.getAvailableValues(
            rowIndex,
            colIndex,
            square.value,
            this.mapBoardObjToBoard(boardObj)
          );
        }

        let newValue = square.availableValues.pop();

        if (!newValue) {
          square.value = 0;
          backtracking = true;

          if (colIndex !== 0) {
            colIndex--;
          } else {
            if (rowIndex !== 0) {
              rowIndex--;
              colIndex = 8;
            } else {
              // If we're here, the board is unsolvable
              this.resetBoard();
              console.log('UNSOLVABLE at ', new Date().getTime());

              return false;
            }
          }
        } else {
          square.value = newValue;
          backtracking = false;

          if (colIndex !== 8) {
            colIndex++;
          } else {
            if (rowIndex !== 8) {
              rowIndex++;
              colIndex = 0;
            } else {
              // If we're here, the board is solved!
              solved = true;
              this.solution = boardObj;
              console.log('SOLVED at ', new Date().getTime());
            }
          }
        }
      } else {
        if (backtracking) {
          if (colIndex !== 0) {
            colIndex--;
          } else {
            if (rowIndex !== 0) {
              rowIndex--;
              colIndex = 8;
            } else {
              // If we're here, the board is unsolvable
              this.resetBoard();
              console.log('UNSOLVABLE at ', new Date().getTime());

              return false;
            }
          }
        } else {
          if (colIndex !== 8) {
            colIndex++;
          } else {
            if (rowIndex !== 8) {
              rowIndex++;
              colIndex = 0;
            } else {
              // If we're here, the board is solved!
              solved = true;
              this.solution = boardObj;
              console.log('SOLVED at ', new Date().getTime());
            }
          }
        }
      }
    } while (!solved);

    return true;
  }

  resetBoard(): void {
    this.generatedBoard = [
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
  }

  getAvailableValues(
    row: number,
    col: number,
    value: number,
    board?: number[][]
  ): number[] {
    let availableValues = [];
    let gameBoard: number[][] =
      typeof board !== 'undefined' ? board : this.generatedBoard;

    for (let option = 1; option < 10; option++) {
      if (option !== value) {
        if (this.validateSquareValue(row, col, option, gameBoard)) {
          availableValues.push(option);
        }
      }
    }

    return availableValues;
  }

  validateSquareValue(
    row: number,
    col: number,
    value: number,
    board?: any[][]
  ): boolean {
    let gameBoard: number[][] =
      typeof board !== 'undefined' ? board : this.generatedBoard;

    // Validate value in row
    if (!this.validateValueInRow(row, value, gameBoard)) {
      return false;
    }

    // Validate value in col
    if (!this.validateValueInCol(col, value, gameBoard)) {
      return false;
    }

    // Validate value in box
    if (!this.validateValueInBox(row, col, value, gameBoard)) {
      return false;
    }

    return true;
  }

  validateEmptySquare(row: number, col: number): boolean {
    return this.generatedBoard[row][col] === 0;
  }

  validateValueInRow(row: number, value: number, board: number[][]): boolean {
    return !board[row].includes(value);
  }

  validateValueInCol(col: number, value: number, board: number[][]): boolean {
    for (let i = 0; i < board.length; i++) {
      const boardRow = board[i];

      if (boardRow[col] === value) {
        return false;
      }
    }

    return true;
  }

  validateValueInBox(
    row: number,
    col: number,
    value: number,
    board: number[][]
  ) {
    let valuesInBox = [];

    if (row < 3 && col < 3) {
      valuesInBox.push(
        board[0][0],
        board[0][1],
        board[0][2],
        board[1][0],
        board[1][1],
        board[1][2],
        board[2][0],
        board[2][1],
        board[2][2]
      );
    } else if (row < 3 && col > 2 && col < 6) {
      valuesInBox.push(
        board[0][3],
        board[0][4],
        board[0][5],
        board[1][3],
        board[1][4],
        board[1][5],
        board[2][3],
        board[2][4],
        board[2][5]
      );
    } else if (row < 3 && col > 5) {
      valuesInBox.push(
        board[0][6],
        board[0][7],
        board[0][8],
        board[1][6],
        board[1][7],
        board[1][8],
        board[2][6],
        board[2][7],
        board[2][8]
      );
    } else if (row > 2 && row < 6 && col < 3) {
      valuesInBox.push(
        board[3][0],
        board[3][1],
        board[3][2],
        board[4][0],
        board[4][1],
        board[4][2],
        board[5][0],
        board[5][1],
        board[5][2]
      );
    } else if (row > 2 && row < 6 && col > 2 && col < 6) {
      valuesInBox.push(
        board[3][3],
        board[3][4],
        board[3][5],
        board[4][3],
        board[4][4],
        board[4][5],
        board[5][3],
        board[5][4],
        board[5][5]
      );
    } else if (row > 2 && row < 6 && col > 5) {
      valuesInBox.push(
        board[3][6],
        board[3][7],
        board[3][8],
        board[4][6],
        board[4][7],
        board[4][8],
        board[5][6],
        board[5][7],
        board[5][8]
      );
    } else if (row > 5 && col < 3) {
      valuesInBox.push(
        board[6][0],
        board[6][1],
        board[6][2],
        board[7][0],
        board[7][1],
        board[7][2],
        board[8][0],
        board[8][1],
        board[8][2]
      );
    } else if (row > 5 && col > 2 && col < 6) {
      valuesInBox.push(
        board[6][3],
        board[6][4],
        board[6][5],
        board[7][3],
        board[7][4],
        board[7][5],
        board[8][3],
        board[8][4],
        board[8][5]
      );
    } else if (row > 5 && col > 5) {
      valuesInBox.push(
        board[6][6],
        board[6][7],
        board[6][8],
        board[7][6],
        board[7][7],
        board[7][8],
        board[8][6],
        board[8][7],
        board[8][8]
      );
    }

    return !valuesInBox.includes(value);
  }

  mapBoardToBoardObj(board: number[][]): ISquare[][] {
    let boardObj: ISquare[][] = [];

    for (let i = 0; i < board.length; i++) {
      const row = board[i];

      boardObj.push([]);

      for (let j = 0; j < row.length; j++) {
        const square = row[j];

        boardObj[i].push({
          value: square,
          clue: square !== 0,
          availableValues: [],
        });
      }
    }

    return boardObj;
  }

  mapBoardObjToBoard(boardObj: ISquare[][]): number[][] {
    let board = [];

    for (let i = 0; i < 9; i++) {
      let row = [];

      for (let j = 0; j < 9; j++) {
        row.push(boardObj[i][j].value);
      }

      board.push(row);
    }

    return board;
  }

  translateStringToNumber(value: string): number | null {
    switch (value) {
      case 'one':
        return 1;
      case 'two':
        return 2;
      case 'three':
        return 3;
      case 'four':
        return 4;
      case 'five':
        return 5;
      case 'six':
        return 6;
      case 'seven':
        return 7;
      case 'eight':
        return 8;
      case 'nine':
        return 9;
      default:
        return null;
    }
  }

  translateNumberToString(value: number): string | null {
    switch (value) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'nine';
      default:
        return null;
    }
  }
}
