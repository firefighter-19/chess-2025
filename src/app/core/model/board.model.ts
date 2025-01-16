import { Color, FigureModel } from './figure.model';

export interface Cell {
  color: Color;
  figure: FigureModel | null;
}

export type BoardModel = Cell[][];
