import { BoardModel } from '../../model/board.model';
import { Color, FigureModel, Position } from '../../model/figure.model';

export const FIGURES = ['pawn', 'bishop', 'king', 'queen', 'rook', 'knight'];

// export function createFigures(): FigureModel[] {
// const pawns = new Array(16).fill(null).map((figure, index) => {
//   if (index <= 8) {
//   }
// });
// return new Array(16).fill(null).map((row: null[], rowIndex) => {
//  return {

//  }
// });
// }

export function filterMoves(
  board: BoardModel,
  moves: Position[],
  color: Color
): Position[] {
  return moves.filter((option) => {
    const coordinate = board[option.y][option.x];
    if (!coordinate?.figure) {
      return true;
    } else if (coordinate?.figure.color !== color) {
      return true;
    }
    return false;
  });
}
