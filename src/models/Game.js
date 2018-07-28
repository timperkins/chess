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
    this.pieces = new GamePieces([
      ...this.whitePlayer.pieces,
      ...this.blackPlayer.pieces,
    ]);
  }
}
