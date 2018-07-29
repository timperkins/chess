import getPossiblePawnMoves from './getPossiblePawnMoves';
import getPossibleRookMoves from './getPossibleRookMoves';
import getPossibleKnightMoves from './getPossibleKnightMoves';
import getPossibleBishopMoves from './getPossibleBishopMoves';
import {
  PAWN,
  ROOK,
  KNIGHT,
  BISHOP,
} from '../models/Piece';

export default function getPossibleMoves(piece, gamePieces) {
  switch (piece.name) {
    case PAWN:
      return getPossiblePawnMoves(piece, gamePieces);
    case ROOK:
      return getPossibleRookMoves(piece, gamePieces);
    case KNIGHT:
      return getPossibleKnightMoves(piece, gamePieces);
    case BISHOP:
      return getPossibleBishopMoves(piece, gamePieces);
  }
  return [];
}
