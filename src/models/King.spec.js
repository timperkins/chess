import {WHITE, BLACK} from '../models/Piece';
import createPiece, {createPieces} from './createPiece';
import {PAWN} from './Pawn';
import {KING} from './King';
import GamePieces from '../models/GamePieces';

describe('getPossibleMoves KING', () => {
  test('Empty board.', () => {
    const piece = createPiece({x: 3, y: 3, name: KING, color: WHITE});
    let gamePieces = new GamePieces([piece]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 2, y: 2},
      {x: 3, y: 2},
      {x: 4, y: 2},
      {x: 4, y: 3},
      {x: 4, y: 4},
      {x: 3, y: 4},
      {x: 2, y: 4},
      {x: 2, y: 3},
    ]);
  });
  test('Close to the edge.', () => {
    const piece = createPiece({x: 0, y: 0, name: KING, color: WHITE});
    let gamePieces = new GamePieces([piece]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 0, y: 1},
    ]);
  });
  test('With other pieces.', () => {
    const piece = createPiece({x: 0, y: 0, name: KING, color: WHITE});
    let otherPieces = createPieces([
      {x: 1, y: 0, name: PAWN, color: WHITE},
      {x: 1, y: 1, name: PAWN, color: BLACK},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 1, y: 1},
      {x: 0, y: 1},
    ]);
  });
});
