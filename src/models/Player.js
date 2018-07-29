import {
  Rook,
  Bishop,
  Knight,
  King,
  Queen,
  Pawn,
  ROOK,
  KNIGHT,
  BISHOP,
  KING,
  QUEEN,
  PAWN,
  BLACK,
  WHITE,
  createPieces,
} from './Piece';

export default class Player {
  constructor(color) {
    this.color = color;
  }

  doesOwnPiece(piece) {
    return this.color === piece.color;
  }
}

export class WhitePlayer extends Player {
  constructor() {
    super(WHITE);
    this.pieces = [];
  }

  init() {
    const {color} = this;
    this.pieces = createPieces([
      {x: 0, y: 0, name: ROOK, color},
      {x: 1, y: 0, name: KNIGHT, color},
      {x: 2, y: 0, name: BISHOP, color},
      {x: 3, y: 0, name: KING, color},
      {x: 4, y: 0, name: QUEEN, color},
      {x: 5, y: 0, name: BISHOP, color},
      {x: 6, y: 0, name: KNIGHT, color},
      {x: 7, y: 0, name: ROOK, color},
      {x: 0, y: 1, name: PAWN, color},
      {x: 1, y: 1, name: PAWN, color},
      {x: 2, y: 1, name: PAWN, color},
      {x: 3, y: 1, name: PAWN, color},
      {x: 4, y: 1, name: PAWN, color},
      {x: 5, y: 1, name: PAWN, color},
      {x: 6, y: 1, name: PAWN, color},
      {x: 7, y: 1, name: PAWN, color},
    ]);
  }
}

export class BlackPlayer extends Player {
  constructor() {
    super(BLACK);
    this.pieces = [];
  }

  init() {
    const {color} = this;
    this.pieces = createPieces([
      {x: 0, y: 6, name: PAWN, color},
      {x: 1, y: 6, name: PAWN, color},
      {x: 2, y: 6, name: PAWN, color},
      {x: 3, y: 6, name: PAWN, color},
      {x: 4, y: 6, name: PAWN, color},
      {x: 5, y: 6, name: PAWN, color},
      {x: 6, y: 6, name: PAWN, color},
      {x: 7, y: 6, name: PAWN, color},
      {x: 0, y: 7, name: ROOK, color},
      {x: 1, y: 7, name: KNIGHT, color},
      {x: 2, y: 7, name: BISHOP, color},
      {x: 3, y: 7, name: KING, color},
      {x: 4, y: 7, name: QUEEN, color},
      {x: 5, y: 7, name: BISHOP, color},
      {x: 6, y: 7, name: KNIGHT, color},
      {x: 7, y: 7, name: ROOK, color},
    ]);
  }
}
