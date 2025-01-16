import { BoardModel } from '../../model/board.model';

export function newBoard(): BoardModel {
  const row = new Array(8).fill(null);
  return new Array(8).fill(row).map((row: null[], rowIndex) => {
    return row.map((_, cellIndex) => {
      return {
        color: getCellColor(rowIndex, cellIndex),
        figure: null,
        getMoves: () => {},
      };
    });
  });
}

function getCellColor(rowIndex: number, cellIndex: number): 'black' | 'white' {
  if (
    (rowIndex % 2 === 0 && cellIndex % 2 === 0) ||
    (rowIndex % 2 && cellIndex % 2)
  ) {
    return 'black';
  }
  return 'white';
}
