import getPossibleRookMoves from './getPossibleRookMoves';
import getPossibleBishopMoves from './getPossibleBishopMoves';

export default function getPossibleQueenMoves(piece, gamePieces) {
  return [
    ...getPossibleRookMoves(piece, gamePieces),
    ...getPossibleBishopMoves(piece, gamePieces),
  ];
}
