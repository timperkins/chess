import {BLACK, WHITE} from './Piece';
import Bishop from './Bishop';
import King from './King';
import Knight from './Knight';
import Pawn from './Pawn';
import Queen from './Queen';
import Rook from './Rook';

const ACCEPTED_SYMBOLS = 'rnbkqpRNBKQP.';

export default class GamePieces {
  static setup(str) {
    // Lower case === white
    // Upper case === black
    /** BLANK TEMPLATE
      setup(`
        ........
        ........
        ........
        ........
        ........
        ........
        ........
        ........
      `);
    */
    if (!str) {
      str = `
        rnbkqbnr
        pppppppp
        ........
        ........
        ........
        ........
        PPPPPPPP
        RNBKQBNR`;
    }
    const rows = str.split(/\s+/)
      .filter(row => row)
      .map(row => row.split(''));
    if (rows.length !== 8 || rows.some(row => row.length !== 8)) {
      throw 'Provided setup string is not 8x8.';
    }
    const gamePieces = new GamePieces();
    for (let y=0; y<8; y++) {
      for (let x=0; x<8; x++) {
        const piece = getPieceFromSymbol(rows[y][x], x, y);
        if (piece) {
          gamePieces.add(piece);
        }
      }
    }
    return gamePieces;
  }

  constructor(pieces) {
    this._pieces = pieces || [];
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

  add(piece) {
    this._pieces.push(piece);
  }
}


function getPieceFromSymbol(symbol, x, y) {
  if (!ACCEPTED_SYMBOLS.includes(symbol)) {
    throw `Bad symbol provided: "${symbol}". Expected one of: "${ACCEPTED_SYMBOLS}".`;
  }
  switch (symbol) {
    case 'p':
      return new Pawn(x, y, WHITE);
    case 'r':
      return new Rook(x, y, WHITE);
    case 'n':
      return new Knight(x, y, WHITE);
    case 'b':
      return new Bishop(x, y, WHITE);
    case 'k':
      return new King(x, y, WHITE);
    case 'k':
      return new King(x, y, WHITE);
    case 'q':
      return new Queen(x, y, WHITE);
    case 'P':
      return new Pawn(x, y, BLACK);
    case 'R':
      return new Rook(x, y, BLACK);
    case 'N':
      return new Knight(x, y, BLACK);
    case 'B':
      return new Bishop(x, y, BLACK);
    case 'K':
      return new King(x, y, BLACK);
    case 'Q':
      return new Queen(x, y, BLACK);
    case '.':
    default:
      return null;
  }
}
