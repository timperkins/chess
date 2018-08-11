import Piece, {arePiecesOpponents} from './Piece';

export const KNIGHT = 'knight';

export default class Knight extends Piece {
  constructor(...params) {
    super(...params, KNIGHT);
  }

  getPossibleMoves(gamePieces) {
    const {x, y} = this;
    const moves = [
      {x: x+1, y: y+2},
      {x: x+2, y: y+1},
      {x: x+2, y: y-1},
      {x: x+1, y: y-2},
      {x: x-1, y: y-2},
      {x: x-2, y: y-1},
      {x: x-2, y: y+1},
      {x: x-1, y: y+2},
    ];
    return moves.filter(move => {
      const curPiece = gamePieces.getPieceAt(move.x, move.y);
      const isOwnPiece = curPiece && !arePiecesOpponents(curPiece, this);
      return this.isInBounds(move.x) && this.isInBounds(move.y) && !isOwnPiece;
    });
  }

  isInBounds(num) {
    return num >= 0 && num <= 7;
  }
}
