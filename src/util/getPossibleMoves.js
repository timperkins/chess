import getPossiblePawnMoves from './getPossiblePawnMoves';
import {
  PAWN,
} from '../models/Piece';

export default function getPossibleMoves(piece, gamePieces) {
  switch (piece.name) {
    case PAWN:
      return getPossiblePawnMoves(piece, gamePieces);
  }
  return [];
}
