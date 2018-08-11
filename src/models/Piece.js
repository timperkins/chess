import generateId from '../util/generateId';

export const WHITE = 'white';
export const BLACK = 'black';

export default class Piece {
  constructor(x, y, color, name) {
    this.id = generateId();
    this.x = x;
    this.y = y;
    this.color = color;
    this.name = name;
    this.isRemoved = false;
  }

  get isWhite() {
    return this.color === WHITE;
  }

  get isBlack() {
    return this.color === BLACK;
  }

  remove() {
    this.isRemoved = true;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }

  getPossibleMoves(gamePieces) {
    return [];
  }
}

export function arePiecesOpponents(a, b) {
  return a.isWhite !== b.isWhite;
}
