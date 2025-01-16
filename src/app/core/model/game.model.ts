import { BoardModel } from './board.model';
import { FigureModel, Position } from './figure.model';

export interface GameModel {
  getMoves(board: BoardModel, figure: FigureModel): Position[];
}
