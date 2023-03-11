import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  board: number[][] = [
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

  constructor() {}

  generateBoard(): number[][] {
    const minNumOfClues = 20;
    let numOfClues = 0;

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

      this.board[randomRow][randomCol] = randomValue;
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

        this.board[mirrorRow][mirrorCol] = mirrorRandomValue;

        numOfClues++;
      }
    } while (numOfClues < minNumOfClues);

    return this.board;
  }

  validateEmptySquare(row: number, col: number): boolean {
    return this.board[row][col] === 0;
  }

  validateValueInRow(row: number, value: number): boolean {
    return !this.board[row].includes(value);
  }

  validateValueInCol(col: number, value: number): boolean {
    for (let i = 0; i < this.board.length; i++) {
      const boardRow = this.board[i];

      if (boardRow[col] === value) {
        return false;
      }
    }

    return true;
  }

  validateValueInBox(row: number, col: number, value: number) {
    let valuesInBox = [];

    if (row < 3 && col < 3) {
      valuesInBox.push(
        this.board[0][0],
        this.board[0][1],
        this.board[0][2],
        this.board[1][0],
        this.board[1][1],
        this.board[1][2],
        this.board[2][0],
        this.board[2][1],
        this.board[2][2]
      );
    } else if (row < 3 && col > 2 && col < 6) {
      valuesInBox.push(
        this.board[0][3],
        this.board[0][4],
        this.board[0][5],
        this.board[1][3],
        this.board[1][4],
        this.board[1][5],
        this.board[2][3],
        this.board[2][4],
        this.board[2][5]
      );
    } else if (row < 3 && col > 5) {
      valuesInBox.push(
        this.board[0][6],
        this.board[0][7],
        this.board[0][8],
        this.board[1][6],
        this.board[1][7],
        this.board[1][8],
        this.board[2][6],
        this.board[2][7],
        this.board[2][8]
      );
    } else if (row > 2 && row < 6 && col < 3) {
      valuesInBox.push(
        this.board[3][0],
        this.board[3][1],
        this.board[3][2],
        this.board[4][0],
        this.board[4][1],
        this.board[4][2],
        this.board[5][0],
        this.board[5][1],
        this.board[5][2]
      );
    } else if (row > 2 && row < 6 && col > 2 && col < 6) {
      valuesInBox.push(
        this.board[3][3],
        this.board[3][4],
        this.board[3][5],
        this.board[4][3],
        this.board[4][4],
        this.board[4][5],
        this.board[5][3],
        this.board[5][4],
        this.board[5][5]
      );
    } else if (row > 2 && row < 6 && col > 5) {
      valuesInBox.push(
        this.board[3][6],
        this.board[3][7],
        this.board[3][8],
        this.board[4][6],
        this.board[4][7],
        this.board[4][8],
        this.board[5][6],
        this.board[5][7],
        this.board[5][8]
      );
    } else if (row > 5 && col < 3) {
      valuesInBox.push(
        this.board[6][0],
        this.board[6][1],
        this.board[6][2],
        this.board[7][0],
        this.board[7][1],
        this.board[7][2],
        this.board[8][0],
        this.board[8][1],
        this.board[8][2]
      );
    } else if (row > 5 && col > 2 && col < 6) {
      valuesInBox.push(
        this.board[6][3],
        this.board[6][4],
        this.board[6][5],
        this.board[7][3],
        this.board[7][4],
        this.board[7][5],
        this.board[8][3],
        this.board[8][4],
        this.board[8][5]
      );
    } else if (row > 5 && col > 5) {
      valuesInBox.push(
        this.board[6][6],
        this.board[6][7],
        this.board[6][8],
        this.board[7][6],
        this.board[7][7],
        this.board[7][8],
        this.board[8][6],
        this.board[8][7],
        this.board[8][8]
      );
    }

    return !valuesInBox.includes(value);
  }

  validateSquareValue(row: number, col: number, value: number): boolean {
    // Validate value in row
    if (!this.validateValueInRow(row, value)) {
      return false;
    }

    // Validate value in col
    if (!this.validateValueInCol(col, value)) {
      return false;
    }

    // Validate value in box
    if (!this.validateValueInBox(row, col, value)) {
      return false;
    }

    return true;
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
