import {WHITE, BLACK} from '../models/Piece';
import createPiece, {createPieces} from './createPiece';
import {PAWN} from './Pawn';
import {KNIGHT} from './Knight';
import GamePieces from '../models/GamePieces';

describe('getPossibleMoves KNIGHT', () => {
  test('Empty board.', () => {
    const piece = createPiece({x: 3, y: 3, name: KNIGHT, color: WHITE});
    let gamePieces = new GamePieces([piece]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 4, y: 5},
      {x: 5, y: 4},
      {x: 5, y: 2},
      {x: 4, y: 1},
      {x: 2, y: 1},
      {x: 1, y: 2},
      {x: 1, y: 4},
      {x: 2, y: 5},
    ]);
  });
  test('Close to the edge.', () => {
    const piece = createPiece({x: 1, y: 3, name: KNIGHT, color: WHITE});
    let gamePieces = new GamePieces([piece]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 2, y: 5},
      {x: 3, y: 4},
      {x: 3, y: 2},
      {x: 2, y: 1},
      {x: 0, y: 1},
      {x: 0, y: 5},
    ]);
  });
  test('With other pieces.', () => {
    const piece = createPiece({x: 3, y: 3, name: KNIGHT, color: WHITE});
    let otherPieces = createPieces([
      {x: 5, y: 4, name: PAWN, color: WHITE},
      {x: 1, y: 2, name: PAWN, color: WHITE},
      {x: 2, y: 5, name: PAWN, color: BLACK},
    ]);
    let gamePieces = new GamePieces([piece, ...otherPieces]);
    expect(piece.getPossibleMoves(gamePieces)).toEqual([
      {x: 4, y: 5},
      {x: 5, y: 2},
      {x: 4, y: 1},
      {x: 2, y: 1},
      {x: 1, y: 4},
      {x: 2, y: 5},
    ]);
  });
});
