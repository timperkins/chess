import getPossiblePawnMoves from './getPossiblePawnMoves';
import getPossibleRookMoves from './getPossibleRookMoves';
import getPossibleKnightMoves from './getPossibleKnightMoves';
import {
  PAWN,
  ROOK,
  KNIGHT,
} from '../models/Piece';

export default function getPossibleMoves(piece, gamePieces) {
  switch (piece.name) {
    case PAWN:
      return getPossiblePawnMoves(piece, gamePieces);
    case ROOK:
      return getPossibleRookMoves(piece, gamePieces);
    case KNIGHT:
      return getPossibleKnightMoves(piece, gamePieces);
  }
  return [];
}
