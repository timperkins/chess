import {WHITE, BLACK} from '../models/Piece';
import createPiece, {createPieces} from './createPiece';
import {PAWN} from './Pawn';
import GamePieces from '../models/GamePieces';

describe('PAWN getPossibleMoves', () => {
  test('Move one or two places from the starting line.', () => {
    const whitePiece = createPiece({x: 0, y: 1, name: PAWN, color: WHITE});
    const blackPiece = createPiece({x: 0, y: 6, name: PAWN, color: BLACK});
    const gamePieces = new GamePieces([whitePiece, blackPiece]);
    expect(whitePiece.getPossibleMoves(gamePieces)).toEqual([
      {x: 0, y: 2},
      {x: 0, y: 3},
    ]);
    expect(blackPiece.getPossibleMoves(gamePieces)).toEqual([
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
    expect(whitePiece.getPossibleMoves(gamePieces)).toEqual([
      {x: 0, y: 2},
    ]);
    expect(blackPiece.getPossibleMoves(gamePieces)).toEqual([
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
    expect(whitePiece.getPossibleMoves(gamePieces)).toEqual([]);
    expect(blackPiece.getPossibleMoves(gamePieces)).toEqual([]);
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
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
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
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 2, y: 5},
    ]);
  });
});
