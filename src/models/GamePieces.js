export default class GamePieces {
  constructor(pieces) {
    this._pieces = pieces;
  }

  getAll() {
    return this._pieces;
  }

  getAllInGame() {
    return this._pieces.filter(piece => !piece.isRemoved);
  }

  getBlackPieces() {
    return this.getAllInGame().filter(piece => piece.isBlack);
  }

  getWhitePieces() {
    return this.getAllInGame().filter(piece => piece.isWhite);
  }

  getPieceAt(x, y) {
    return this.getAllInGame().find(piece => piece.x === x && piece.y === y);
  }
}
