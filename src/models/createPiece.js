import Bishop, {BISHOP} from './Bishop';
import King, {KING} from './King';
import Knight, {KNIGHT} from './Knight';
import Pawn, {PAWN} from './Pawn';
import Queen, {QUEEN} from './Queen';
import Rook, {ROOK} from './Rook';

export default function createPiece({x, y, color, name}) {
  switch (name) {
    case ROOK:
      return new Rook(x, y, color);
    case KNIGHT:
      return new Knight(x, y, color);
    case BISHOP:
      return new Bishop(x, y, color);
    case KING:
      return new King(x, y, color);
    case QUEEN:
      return new Queen(x, y, color);
    case PAWN:
      return new Pawn(x, y, color);
  }
}

export function createPieces(data) {
  return data.map(createPiece);
}
