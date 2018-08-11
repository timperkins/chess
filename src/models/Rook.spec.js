import {WHITE, BLACK} from '../models/Piece';
import createPiece, {createPieces} from './createPiece';
import {PAWN} from './Pawn';
import {ROOK} from './Rook';
import GamePieces from '../models/GamePieces';

describe('ROOK getPossibleMoves', () => {
  // Left
  test('Move left.', () => {
    const piece = createPiece({x: 3, y: 0, name: ROOK, color: WHITE});
    let otherPieces = createPieces([
      {x: 4, y: 0, name: PAWN, color: WHITE},
      {x: 3, y: 1, name: PAWN, color: WHITE},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 2, y: 0},
      {x: 1, y: 0},
      {x: 0, y: 0},
    ]);
  });
  test('Move left (stop at own piece).', () => {
    const piece = createPiece({x: 3, y: 0, name: ROOK, color: WHITE});
    const otherPieces = createPieces([
      {x: 4, y: 0, name: PAWN, color: WHITE},
      {x: 3, y: 1, name: PAWN, color: WHITE},
      {x: 0, y: 0, name: PAWN, color: WHITE},
    ]);
    const gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 2, y: 0},
      {x: 1, y: 0},
    ]);
  });
  test('Move left (take opponent piece).', () => {
    const piece = createPiece({x: 3, y: 0, name: ROOK, color: WHITE});
    const otherPieces = createPieces([
      {x: 4, y: 0, name: PAWN, color: WHITE},
      {x: 3, y: 1, name: PAWN, color: WHITE},
      {x: 0, y: 0, name: PAWN, color: BLACK},
    ]);
    const gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 2, y: 0},
      {x: 1, y: 0},
      {x: 0, y: 0},
    ]);
  });
  // Right
  test('Move right.', () => {
    const piece = createPiece({x: 4, y: 0, name: ROOK, color: WHITE});
    let otherPieces = createPieces([
      {x: 3, y: 0, name: PAWN, color: WHITE},
      {x: 4, y: 1, name: PAWN, color: WHITE},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 5, y: 0},
      {x: 6, y: 0},
      {x: 7, y: 0},
    ]);
  });
  test('Move right (stop at own piece).', () => {
    const piece = createPiece({x: 4, y: 0, name: ROOK, color: WHITE});
    const otherPieces = createPieces([
      {x: 3, y: 0, name: PAWN, color: WHITE},
      {x: 4, y: 1, name: PAWN, color: WHITE},
      {x: 7, y: 0, name: PAWN, color: WHITE},
    ]);
    const gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 5, y: 0},
      {x: 6, y: 0},
    ]);
  });
  test('Move right (take opponent piece).', () => {
    const piece = createPiece({x: 4, y: 0, name: ROOK, color: WHITE});
    const otherPieces = createPieces([
      {x: 3, y: 0, name: PAWN, color: WHITE},
      {x: 4, y: 1, name: PAWN, color: WHITE},
      {x: 7, y: 0, name: PAWN, color: BLACK},
    ]);
    const gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 5, y: 0},
      {x: 6, y: 0},
      {x: 7, y: 0},
    ]);
  });
  // Up
  test('Move up.', () => {
    const piece = createPiece({x: 0, y: 3, name: ROOK, color: WHITE});
    let otherPieces = createPieces([
      {x: 0, y: 4, name: PAWN, color: WHITE},
      {x: 1, y: 3, name: PAWN, color: WHITE},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 0, y: 2},
      {x: 0, y: 1},
      {x: 0, y: 0},
    ]);
  });
  test('Move up (stop at own piece).', () => {
    const piece = createPiece({x: 0, y: 3, name: ROOK, color: WHITE});
    let otherPieces = createPieces([
      {x: 0, y: 4, name: PAWN, color: WHITE},
      {x: 1, y: 3, name: PAWN, color: WHITE},
      {x: 0, y: 0, name: PAWN, color: WHITE},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 0, y: 2},
      {x: 0, y: 1},
    ]);
  });
  test('Move up (take opponent piece).', () => {
    const piece = createPiece({x: 0, y: 3, name: ROOK, color: WHITE});
    let otherPieces = createPieces([
      {x: 0, y: 4, name: PAWN, color: WHITE},
      {x: 1, y: 3, name: PAWN, color: WHITE},
      {x: 0, y: 0, name: PAWN, color: BLACK},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 0, y: 2},
      {x: 0, y: 1},
      {x: 0, y: 0},
    ]);
  });
  // Down
  test('Move down.', () => {
    const piece = createPiece({x: 0, y: 4, name: ROOK, color: WHITE});
    let otherPieces = createPieces([
      {x: 0, y: 3, name: PAWN, color: WHITE},
      {x: 1, y: 4, name: PAWN, color: WHITE},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 0, y: 5},
      {x: 0, y: 6},
      {x: 0, y: 7},
    ]);
  });
  test('Move down (stop at own piece).', () => {
    const piece = createPiece({x: 0, y: 4, name: ROOK, color: WHITE});
    let otherPieces = createPieces([
      {x: 0, y: 3, name: PAWN, color: WHITE},
      {x: 1, y: 4, name: PAWN, color: WHITE},
      {x: 0, y: 7, name: PAWN, color: WHITE},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 0, y: 5},
      {x: 0, y: 6},
    ]);
  });
  test('Move down (take opponent piece).', () => {
    const piece = createPiece({x: 0, y: 4, name: ROOK, color: WHITE});
    let otherPieces = createPieces([
      {x: 0, y: 3, name: PAWN, color: WHITE},
      {x: 1, y: 4, name: PAWN, color: WHITE},
      {x: 0, y: 7, name: PAWN, color: BLACK},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 0, y: 5},
      {x: 0, y: 6},
      {x: 0, y: 7},
    ]);
  });
});
