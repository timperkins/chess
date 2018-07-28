import generateId from '../util/generateId';

export const ROOK = 'rook';
export const KNIGHT = 'knight';
export const BISHOP = 'bishop';
export const KING = 'king';
export const QUEEN = 'queen';
export const PAWN = 'pawn';
export const WHITE = 'white';
export const BLACK = 'black';

export default class Piece {
  constructor(x, y, color, name) {
    this.id = generateId();
    this.x = x;
    this.y = y;
    this.color = color;
    this.name = name;
  }  
}

export class Rook extends Piece {
  constructor(...params) {
    super(...params, ROOK);
  }
}

export class Knight extends Piece {
  constructor(...params) {
    super(...params, KNIGHT);
  }
}

export class Bishop extends Piece {
  constructor(...params) {
    super(...params, BISHOP);
  }
}

export class King extends Piece {
  constructor(...params) {
    super(...params, KING);
  }
}

export class Queen extends Piece {
  constructor(...params) {
    super(...params, QUEEN);
  }
}

export class Pawn extends Piece {
  constructor(...params) {
    super(...params, PAWN);
  }
}

export function createPiece({x, y, color, name}) {
  switch (name) {
    case ROOK:
      return new Rook(x, y, color);
    case KNIGHT:
      return new Knight(x, y, color);
    case BISHOP:
      return new Bishop(x, y, color);
    case KING:
      return new King(x, y, color);
    case QUEEN:
      return new Queen(x, y, color);
    case PAWN:
      return new Pawn(x, y, color);
  }
}

export function createPieces(data) {
  return data.map(createPiece);
}
