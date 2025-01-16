import { BoardModel } from '../../../model/board.model';
import { Color, Position } from '../../../model/figure.model';
import { filterMoves } from '../figure';

export function getPawnMoves(
  board: BoardModel,
  position: Position,
  color: Color
): Position[] {
  const moves =
    color === 'white'
      ? getWhiteFigureModes(position)
      : getBlackFigureModes(position);
  return filterMoves(board, moves, color).filter((move) => {
    const isMoved = position.y !== 1 && position.y !== 7;
    const figure = board[position.y][position.x];
    const isBlack = figure.color === 'black';
    if (isMoved) {
      return isBlack ? move.y === position.y - 1 : move.y === position.y + 1;
    }
    if (move.x !== position.x && !board[move.y][move.x].figure) {
      return false;
    }
    return true;
  });
}

function getWhiteFigureModes(position: Position): Position[] {
  return [
    {
      y: position.y + 1,
      x: position.x,
    },
    {
      y: position.y + 2,
      x: position.x,
    },
    {
      y: position.y + 1,
      x: position.x + 1,
    },
    {
      y: position.y + 1,
      x: position.x - 1,
    },
  ];
}

function getBlackFigureModes(position: Position): Position[] {
  return [
    {
      y: position.y - 1,
      x: position.x,
    },
    {
      y: position.y - 2,
      x: position.x,
    },
    {
      y: position.y - 1,
      x: position.x + 1,
    },
    {
      y: position.y - 1,
      x: position.x - 1,
    },
  ];
}
