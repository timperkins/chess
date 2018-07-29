import {WhitePlayer, BlackPlayer} from './Player';
import GamePieces from './GamePieces';
import getPossibleMoves from '../util/getPossibleMoves';

export default class Game {
  init() {
    this.whitePlayer = new WhitePlayer();
    this.blackPlayer = new BlackPlayer();
    this.whitePlayer.init();
    this.blackPlayer.init();
    this.activePlayer = this.whitePlayer;
    this.activePiece = null;
    this.pieces = new GamePieces([
      ...this.whitePlayer.pieces,
      ...this.blackPlayer.pieces,
    ]);
  }

  get activeX() {
    if (!this.activePiece) { return -1; }
    return this.activePiece.x;
  }

  get activeY() {
    if (!this.activePiece) { return -1; }
    return this.activePiece.y;
  }

  getPossibleMoves() {
    if (!this.activePiece) { return []; }
    return getPossibleMoves(this.activePiece, this.pieces);
  }

  isPossibleMove(x, y) {
    return this.getPossibleMoves().some(move => {
      return move.x === x && move.y === y;
    });
  }

  toggleActivePlayer() {
    if (this.activePlayer === this.whitePlayer) {
      this.activePlayer = this.blackPlayer;
    } else {
      this.activePlayer = this.whitePlayer;
    }
  }

  moveActivePiece(x, y) {
    this.activePiece.moveTo(x, y);
    this.activePiece = null;
    this.toggleActivePlayer();
  }

  selectCoordinates(x, y) {
    const piece = this.pieces.getPieceAt(x, y);
    if (piece) {
      if (this.activePlayer.doesOwnPiece(piece)) {
        this.activePiece = piece;
      } else if (this.isPossibleMove(x, y)) {
        piece.remove();
        this.moveActivePiece(x, y);
      }
    } else {
      if (this.isPossibleMove(x, y)) {
        this.moveActivePiece(x, y);
      } else {
        this.activePiece = null;
      }
    }
  }
}
