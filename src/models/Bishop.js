import Piece, {arePiecesOpponents} from './Piece';

export const BISHOP = 'bishop';

export default class Bishop extends Piece {
  constructor(...params) {
    super(...params, BISHOP);
  }

  getPossibleMoves(gamePieces) {
    const {x, y} = this;
    const moves = [];
    // Top Left
    let curX = x;
    let curY = y;
    while (true) {
      curX -= 1;
      curY -= 1;
      if (curX >= 0 && curY >= 0) {
        const curPiece = gamePieces.getPieceAt(curX, curY);
        if (!curPiece || arePiecesOpponents(this, curPiece)) {
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
        if (!curPiece || arePiecesOpponents(this, curPiece)) {
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
        if (!curPiece || arePiecesOpponents(this, curPiece)) {
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
        if (!curPiece || arePiecesOpponents(this, curPiece)) {
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
}
