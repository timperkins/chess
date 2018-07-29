import {arePiecesOpponents} from '../models/Piece';

export default function getPossibleBishopMoves(piece, gamePieces) {
  const {x, y} = piece;
  const moves = [];
  // Top Left
  let curX = x;
  let curY = y;
  while (true) {
    curX -= 1;
    curY -= 1;
    if (curX >= 0 && curY >= 0) {
      const curPiece = gamePieces.getPieceAt(curX, curY);
      if (!curPiece || arePiecesOpponents(piece, curPiece)) {
        moves.push({x: curX, y: curY});
      }
      if (curPiece) {
        break;
      }
    } else {
      break;
    }
  }
  // Top Right
  curX = x;
  curY = y;
  while (true) {
    curX += 1;
    curY -= 1;
    if (curX <= 7 && curY >= 0) {
      const curPiece = gamePieces.getPieceAt(curX, curY);
      if (!curPiece || arePiecesOpponents(piece, curPiece)) {
        moves.push({x: curX, y: curY});
      }
      if (curPiece) {
        break;
      }
    } else {
      break;
    }
  }
  // Bottom Right
  curX = x;
  curY = y;
  while (true) {
    curX += 1;
    curY += 1;
    if (curX <= 7 && curY <= 7) {
      const curPiece = gamePieces.getPieceAt(curX, curY);
      if (!curPiece || arePiecesOpponents(piece, curPiece)) {
        moves.push({x: curX, y: curY});
      }
      if (curPiece) {
        break;
      }
    } else {
      break;
    }
  }
  // Bottom Left
  curX = x;
  curY = y;
  while (true) {
    curX -= 1;
    curY += 1;
    if (curX >= 0 && curY <= 7) {
      const curPiece = gamePieces.getPieceAt(curX, curY);
      if (!curPiece || arePiecesOpponents(piece, curPiece)) {
        moves.push({x: curX, y: curY});
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
