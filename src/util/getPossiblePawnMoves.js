export default function getPossiblePawnMoves(piece, gamePieces) {
  return [
    ...getPossiblePawnForwardMoves(piece, gamePieces),
    ...getPossiblePawnDiagonalMoves(piece, gamePieces),
  ];
}

function getPossiblePawnForwardMoves(piece, gamePieces) {
  const {x, y} = piece;
  const moves = [];
  if (piece.isWhite && !gamePieces.getPieceAt(x, y+1)) {
    moves.push({x, y: y+1});
    if (y === 1 && !gamePieces.getPieceAt(x, y+2)) {
      moves.push({x, y: y+2});
    }
  } else if (piece.isBlack && !gamePieces.getPieceAt(x, y-1)) {
    moves.push({x: x, y: y-1});
    if (y === 6 && !gamePieces.getPieceAt(x, y-2)) {
      moves.push({x: x, y: y-2});
    }   
  }
  return moves;
}

function getPossiblePawnDiagonalMoves(piece, gamePieces) {
  const {x, y} = piece;
  const moves = [];
  if (piece.isWhite) {
    const leftPiece = gamePieces.getPieceAt(x-1, y+1);
    if (leftPiece && leftPiece.isBlack) {
      moves.push({x: x-1, y: y+1});
    }
    const rightPiece = gamePieces.getPieceAt(x+1, y+1);
    if (rightPiece && rightPiece.isBlack) {
      moves.push({x: x+1, y: y+1});
    }
  } else {
    const leftPiece = gamePieces.getPieceAt(x-1, y-1);
    if (leftPiece && leftPiece.isWhite) {
      moves.push({x: x-1, y: y-1});
    }
    const rightPiece = gamePieces.getPieceAt(x+1, y-1);
    if (rightPiece && rightPiece.isWhite) {
      moves.push({x: x+1, y: y-1});
    }
  }
  return moves;
}
