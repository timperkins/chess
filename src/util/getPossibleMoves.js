import getPossiblePawnMoves from './getPossiblePawnMoves';
import getPossibleRookMoves from './getPossibleRookMoves';
import {
  PAWN,
  ROOK,
} from '../models/Piece';

export default function getPossibleMoves(piece, gamePieces) {
  switch (piece.name) {
    case PAWN:
      return getPossiblePawnMoves(piece, gamePieces);
    case ROOK:
      return getPossibleRookMoves(piece, gamePieces);
  }
  return [];
}
