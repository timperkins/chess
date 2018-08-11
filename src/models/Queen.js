import Piece from './Piece';
import Rook from './Rook';
import Bishop from './Bishop';

export const QUEEN = 'queen';

export default class Queen extends Piece {
  constructor(...params) {
    super(...params, QUEEN);
  }

  getPossibleMoves(gamePieces) {
    return [
      ...Rook.prototype.getPossibleMoves.call(this, gamePieces),
      ...Bishop.prototype.getPossibleMoves.call(this, gamePieces),
    ];
  }
}
