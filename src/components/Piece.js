import React, {Component} from 'react';
import classNames from 'classnames';
import {
  ROOK,
  KNIGHT,
  BISHOP,
  KING,
  QUEEN,
  PAWN,
} from '../models/Piece';
import '../less/piece.less';

export default class Piece extends Component {
  render() {
    const {x, y, color} = this.props.piece;
    return (
      <div
        className={classNames(
          'piece',
          `piece-${color}`,
          this.props.className
        )}
        style={{
          left: `${6.25+(x*12.5)}%`,
          top: `${6.25+(y*12.5)}%`,
        }}
      />
    );
  }
}

export class Rook extends Component {
  render() {
    return (
      <Piece className="piece-rook" {...this.props} />
    );
  }
}

export class Knight extends Component {
  render() {
    return (
      <Piece className="piece-knight" {...this.props} />
    );
  }
}

export class Bishop extends Component {
  render() {
    return (
      <Piece className="piece-bishop" {...this.props} />
    );
  }
}

export class King extends Component {
  render() {
    return (
      <Piece className="piece-king" {...this.props} />
    );
  }
}

export class Queen extends Component {
  render() {
    return (
      <Piece className="piece-queen" {...this.props} />
    );
  }
}

export class Pawn extends Component {
  render() {
    return (
      <Piece className="piece-pawn" {...this.props} />
    );
  }
}

export function getPiece(piece) {
  switch (piece.name) {
    case ROOK:
      return <Rook piece={piece} key={piece.id} />
    case KNIGHT:
      return <Knight piece={piece} key={piece.id} />
    case BISHOP:
      return <Bishop piece={piece} key={piece.id} />
    case KING:
      return <King piece={piece} key={piece.id} />
    case QUEEN:
      return <Queen piece={piece} key={piece.id} />
    case PAWN:
      return <Pawn piece={piece} key={piece.id} />
  }
}
