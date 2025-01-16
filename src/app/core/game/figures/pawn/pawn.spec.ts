import { BoardModel } from '../../../model/board.model';
import { Position } from '../../../model/figure.model';
import { newBoard } from '../../board/board';
import { getPawnMoves } from './pawn';

describe('Pawn figure', () => {
  const board: BoardModel = newBoard();
  it('should get all possible white pawn moves', () => {
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

  // it('should check whether pawn is possible to attack opponent', () => {
  //   const board = newBoard();
  //   const position: Position = {
  //     x: 1,
  //     y: 7,
  //   };
  //   board[7][1].figure = {
  //     color: 'black',
  //     position,
  //     name: 'pawn',
  //     getMoves: () => getPawnMoves(board, position, 'black'),
  //   };
  //   const opponentPosition: Position = {
  //     x: 2,
  //     y: 6,
  //   };
  //   board[6][2].figure = {
  //     color: 'white',
  //     position: opponentPosition,
  //     name: 'pawn',
  //     getMoves: () => getPawnMoves(board, opponentPosition, 'white'),
  //   };
  //   expect(board[6][2].figure.getMoves).toEqual([
  //     { x: 1, y: 6 },
  //     { x: 1, y: 5 },
  //   ]);
  // });
});
