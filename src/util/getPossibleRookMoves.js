import {arePiecesOpponents} from '../models/Piece';

export default function getPossibleRookMoves(piece, gamePieces) {
  const {x, y} = piece;
  const moves = [];
  // Left
  let curX = x;
  while (true) {
    curX -= 1;
    if (curX >= 0) {
      const curPiece = gamePieces.getPieceAt(curX, y);
      if (!curPiece || arePiecesOpponents(piece, curPiece)) {
        moves.push({x: curX, y});
      }
      if (curPiece) {
        break;
      }
    } else {
      break;
    }
  }
  // Right
  curX = x;
  while (true) {
    curX += 1;
    if (curX <= 7) {
      const curPiece = gamePieces.getPieceAt(curX, y);
      if (!curPiece || arePiecesOpponents(piece, curPiece)) {
        moves.push({x: curX, y});
      }
      if (curPiece) {
        break;
      }
    } else {
      break;
    }
  }
  // Up
  let curY = y;
  while (true) {
    curY -= 1;
    if (curY >= 0) {
      const curPiece = gamePieces.getPieceAt(x, curY);
      if (!curPiece || arePiecesOpponents(piece, curPiece)) {
        moves.push({x, y: curY});
      }
      if (curPiece) {
        break;
      }
    } else {
      break;
    }
  }
  // Down
  curY = y;
  while (true) {
    curY += 1;
    if (curY <= 7) {
      const curPiece = gamePieces.getPieceAt(x, curY);
      if (!curPiece || arePiecesOpponents(piece, curPiece)) {
        moves.push({x, y: curY});
      }
      if (curPiece) {
        break;
      }
    } else {
      break;
    }
  }
  return moves;
}
