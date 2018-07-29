import {
  createPiece,
  createPieces,
  PAWN,
  BISHOP,
  WHITE,
  BLACK,
} from '../models/Piece';
import GamePieces from '../models/GamePieces';
import getPossibleMoves from './getPossibleMoves';

describe('getPossibleMoves BISHOP', () => {
  // Top Left
  test('Move top left.', () => {
    const piece = createPiece({x: 2, y: 2, name: BISHOP, color: WHITE});
    let otherPieces = createPieces([
      {x: 3, y: 1, name: PAWN, color: WHITE},
      {x: 3, y: 3, name: PAWN, color: WHITE},
      {x: 1, y: 3, name: PAWN, color: WHITE},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(getPossibleMoves(piece, gamePieces)).toEqual([
      {x: 1, y: 1},
      {x: 0, y: 0},
    ]);
  });
  test('Move top left (stop at own piece).', () => {
    const piece = createPiece({x: 2, y: 2, name: BISHOP, color: WHITE});
    let otherPieces = createPieces([
      {x: 3, y: 1, name: PAWN, color: WHITE},
      {x: 3, y: 3, name: PAWN, color: WHITE},
      {x: 1, y: 3, name: PAWN, color: WHITE},
      {x: 0, y: 0, name: PAWN, color: WHITE},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(getPossibleMoves(piece, gamePieces)).toEqual([
      {x: 1, y: 1},
    ]);
  });
  test('Move top left (take opponent piece).', () => {
    const piece = createPiece({x: 2, y: 2, name: BISHOP, color: WHITE});
    let otherPieces = createPieces([
      {x: 3, y: 1, name: PAWN, color: WHITE},
      {x: 3, y: 3, name: PAWN, color: WHITE},
      {x: 1, y: 3, name: PAWN, color: WHITE},
      {x: 0, y: 0, name: PAWN, color: BLACK},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(getPossibleMoves(piece, gamePieces)).toEqual([
      {x: 1, y: 1},
      {x: 0, y: 0},
    ]);
  });
  // Top Right
  test('Move top right.', () => {
    const piece = createPiece({x: 5, y: 2, name: BISHOP, color: WHITE});
    let otherPieces = createPieces([
      {x: 4, y: 1, name: PAWN, color: WHITE},
      {x: 4, y: 3, name: PAWN, color: WHITE},
      {x: 6, y: 3, name: PAWN, color: WHITE},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(getPossibleMoves(piece, gamePieces)).toEqual([
      {x: 6, y: 1},
      {x: 7, y: 0},
    ]);
  });
  // Bottom Right
  test('Move bottom right.', () => {
    const piece = createPiece({x: 5, y: 5, name: BISHOP, color: WHITE});
    let otherPieces = createPieces([
      {x: 4, y: 4, name: PAWN, color: WHITE},
      {x: 4, y: 6, name: PAWN, color: WHITE},
      {x: 6, y: 4, name: PAWN, color: WHITE},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(getPossibleMoves(piece, gamePieces)).toEqual([
      {x: 6, y: 6},
      {x: 7, y: 7},
    ]);
  });
  // Bottom Left
  test('Move bottom left.', () => {
    const piece = createPiece({x: 2, y: 5, name: BISHOP, color: WHITE});
    let otherPieces = createPieces([
      {x: 1, y: 4, name: PAWN, color: WHITE},
      {x: 3, y: 6, name: PAWN, color: WHITE},
      {x: 3, y: 4, name: PAWN, color: WHITE},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(getPossibleMoves(piece, gamePieces)).toEqual([
      {x: 1, y: 6},
      {x: 0, y: 7},
    ]);
  });
});
