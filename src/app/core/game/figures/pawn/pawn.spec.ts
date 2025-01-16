import { BoardModel } from '../../../model/board.model';
import { Position } from '../../../model/figure.model';
import { newBoard } from '../../board/board';
import { getPawnMoves } from './pawn';

describe('Pawn figure', () => {
  it('should get all possible white pawn moves', () => {
    const board: BoardModel = newBoard();

    const position: Position = {
      x: 1,
      y: 1,
    };

    board[position.y][position.x].figure = {
      color: 'white',
      position,
      name: 'pawn',
    };

    expect(getPawnMoves(board, position, 'white')).toEqual([
      { x: 1, y: 2 },
      { x: 1, y: 3 },
    ]);
  });

  it('should get all possible black pawn moves', () => {
    const board: BoardModel = newBoard();

    const position: Position = {
      x: 1,
      y: 7,
    };
    board[position.y][position.x].figure = {
      color: 'black',
      position,
      name: 'pawn',
    };

    expect(getPawnMoves(board, position, 'black')).toEqual([
      { x: 1, y: 6 },
      { x: 1, y: 5 },
    ]);
  });

  it('should check whether pawn is possible to attack opponent', () => {
    const board: BoardModel = newBoard();

    const position: Position = {
      x: 1,
      y: 7,
    };
    board[position.y][position.x].figure = {
      color: 'black',
      position,
      name: 'pawn',
    };
    const opponentPosition: Position = {
      x: 2,
      y: 6,
    };
    board[opponentPosition.y][opponentPosition.x].figure = {
      color: 'white',
      position: opponentPosition,
      name: 'pawn',
    };
    const opponentPositionSecond: Position = {
      x: 0,
      y: 6,
    };
    board[opponentPositionSecond.y][opponentPositionSecond.x].figure = {
      color: 'white',
      position: opponentPositionSecond,
      name: 'pawn',
    };
    const moves = getPawnMoves(board, position, 'black');
    expect(moves).toEqual([
      { x: 1, y: 6 },
      { x: 1, y: 5 },
      { x: 2, y: 6 },
      { x: 0, y: 6 },
    ]);
  });
});
