import {arePiecesOpponents} from '../models/Piece';

export default function getPossibleKingMoves(piece, gamePieces) {
  const {x, y} = piece;
  const moves = [
    {x: x-1, y: y-1},
    {x, y: y-1},
    {x: x+1, y: y-1},
    {x: x+1, y},
    {x: x+1, y: y+1},
    {x, y: y+1},
    {x: x-1, y: y+1},
    {x: x-1, y},
  ];
  return moves.filter(move => {
    const curPiece = gamePieces.getPieceAt(move.x, move.y);
    const isOwnPiece = curPiece && !arePiecesOpponents(curPiece, piece);
    return isInBounds(move.x) && isInBounds(move.y) && !isOwnPiece;
  });
}

function isInBounds(num) {
  return num >= 0 && num <= 7;
}
