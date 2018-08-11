import Piece, {arePiecesOpponents} from './Piece';

export const KING = 'king';

export default class King extends Piece {
  constructor(...params) {
    super(...params, KING);
  }

  getPossibleMoves(gamePieces) {
    const {x, y} = this;
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
      const isOwnPiece = curPiece && !arePiecesOpponents(curPiece, this);
      return this.isInBounds(move.x) && this.isInBounds(move.y) && !isOwnPiece;
    });    
  }

  isInBounds(num) {
    return num >= 0 && num <= 7;
  }
}
