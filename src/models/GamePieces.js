export default class GamePieces {
  constructor(pieces) {
    this._pieces = pieces;
  }

  getAll() {
    return this._pieces;
  }

  getBlackPieces() {
    return this._pieces.filter(piece => piece.isBlack);
  }

  getWhitePieces() {
    return this._pieces.filter(piece => piece.isWhite);
  }

  getPieceAt(x, y) {
    return this._pieces.find(piece => piece.x === x && piece.y === y);
  }
}
