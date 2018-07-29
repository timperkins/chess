import {
  createPiece,
  createPieces,
  PAWN,
  QUEEN,
  WHITE,
  BLACK,
} from '../models/Piece';
import GamePieces from '../models/GamePieces';
import getPossibleMoves from './getPossibleMoves';

describe('getPossibleMoves QUEEN', () => {
  test('All types', () => {
    const piece = createPiece({x: 2, y: 2, name: QUEEN, color: WHITE});
    let otherPieces = createPieces([
      {x: 2, y: 3, name: PAWN, color: WHITE},
      {x: 3, y: 2, name: PAWN, color: WHITE},
      {x: 3, y: 1, name: PAWN, color: WHITE},
      {x: 3, y: 3, name: PAWN, color: WHITE},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(getPossibleMoves(piece, gamePieces)).toEqual([
      {x: 1, y: 2},
      {x: 0, y: 2},
      {x: 2, y: 1},
      {x: 2, y: 0},
      {x: 1, y: 1},
      {x: 0, y: 0},
      {x: 1, y: 3},
      {x: 0, y: 4},
    ]);
  });
});
