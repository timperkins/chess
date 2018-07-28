import {
  createPiece,
  createPieces,
  PAWN,
  WHITE,
  BLACK,
} from '../models/Piece';
import GamePieces from '../models/GamePieces';
import getPossibleMoves from './getPossibleMoves';

describe('getPossibleMoves PAWN', () => {
  test('Move one or two places from the starting line.', () => {
    const whitePiece = createPiece({x: 0, y: 1, name: PAWN, color: WHITE});
    const blackPiece = createPiece({x: 0, y: 6, name: PAWN, color: BLACK});
    const gamePieces = new GamePieces([whitePiece, blackPiece]);
    expect(getPossibleMoves(whitePiece, gamePieces)).toEqual([
      {x: 0, y: 2},
      {x: 0, y: 3},
    ]);
    expect(getPossibleMoves(blackPiece, gamePieces)).toEqual([
      {x: 0, y: 5},
      {x: 0, y: 4},
    ]);
  });

  test('Only move one place from the starting line if blocked.', () => {
    const whitePiece = createPiece({x: 0, y: 1, name: PAWN, color: WHITE});
    const whitePiece2 = createPiece({x: 0, y: 3, name: PAWN, color: WHITE});
    const blackPiece = createPiece({x: 0, y: 6, name: PAWN, color: BLACK});
    const blackPiece2 = createPiece({x: 0, y: 4, name: PAWN, color: BLACK});
    const gamePieces = new GamePieces([
      whitePiece,
      whitePiece2,
      blackPiece,
      blackPiece2,
    ]);
    expect(getPossibleMoves(whitePiece, gamePieces)).toEqual([
      {x: 0, y: 2},
    ]);
    expect(getPossibleMoves(blackPiece, gamePieces)).toEqual([
      {x: 0, y: 5},
    ]);
  });

  test('Don\'t move if blocked.', () => {
    const whitePiece = createPiece({x: 0, y: 1, name: PAWN, color: WHITE});
    const whitePiece2 = createPiece({x: 0, y: 2, name: PAWN, color: WHITE});
    const blackPiece = createPiece({x: 0, y: 6, name: PAWN, color: BLACK});
    const blackPiece2 = createPiece({x: 0, y: 5, name: PAWN, color: BLACK});
    const gamePieces = new GamePieces([
      whitePiece,
      whitePiece2,
      blackPiece,
      blackPiece2,
    ]);
    expect(getPossibleMoves(whitePiece, gamePieces)).toEqual([]);
    expect(getPossibleMoves(blackPiece, gamePieces)).toEqual([]);
  });

  test('Diagonal moves (white).', () => {
    const piece = createPiece({x: 1, y: 1, name: PAWN, color: WHITE});
    const otherPieces = createPieces([
      {x: 1, y: 2, name: PAWN, color: WHITE},
      {x: 2, y: 2, name: PAWN, color: BLACK},
    ]);
    const gamePieces = new GamePieces([
      piece,
      ...otherPieces,
    ]);
    expect(getPossibleMoves(piece, gamePieces)).toEqual([
      {x: 2, y: 2},
    ]);
  });

  test('Diagonal moves (black).', () => {
    const piece = createPiece({x: 1, y: 6, name: PAWN, color: BLACK});
    const otherPieces = createPieces([
      {x: 1, y: 5, name: PAWN, color: BLACK},
      {x: 2, y: 5, name: PAWN, color: WHITE},
    ]);
    const gamePieces = new GamePieces([
      piece,
      ...otherPieces,
    ]);
    expect(getPossibleMoves(piece, gamePieces)).toEqual([
      {x: 2, y: 5},
    ]);
  });
});
