import React, {Component} from 'react';
import classNames from 'classnames';
import {Rook, Bishop, Knight, King, Queen, Pawn, getPiece} from './Piece';
import '../less/board.less';

const spaceSize = 12.5;

export default class Board extends Component {
  renderSpaces() {
    const spaces = [];
    for (let i=0; i<8; i++) {
      for (let j=0; j<8; j++) {
        spaces.push((
          <div
            key={`space${i}${j}`}
            className={classNames('space', {'space-black': (i+j)%2})}
            style={{
              width: `${spaceSize}%`,
              height: `${spaceSize}%`,
              left: `${i*spaceSize}%`,
              top: `${j*spaceSize}%`,
            }}
          />
        ));
      }
    }
    return spaces;
  }

  renderPieces() {
    return this.props.pieces.map(getPiece);
  }

  render() {
    return (
      <div className="board">
        {this.renderSpaces()}
        {this.renderPieces()}
      </div>
    );
  }
}
