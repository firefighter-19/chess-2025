export interface FigureModel {
  name: string;
  color: Color;
  position: Position;
}

export interface Position {
  x: number;
  y: number;
}

export type Color = 'black' | 'white';
