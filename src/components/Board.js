import React, {Component, cloneElement} from 'react';
import classNames from 'classnames';
import {getPiece} from './Piece';
import '../less/board.less';

const spaceSize = 12.5;

export default class Board extends Component {
  renderSpaces() {
    const spaces = [];
    const {game} = this.props;
    const {activeX, activeY} = game;
    for (let x=0; x<8; x++) {
      for (let y=0; y<8; y++) {
        spaces.push((
          <Space
            key={`space${x}${y}`}
            x={x}
            y={y}
            onClick={this.props.onClick}
            isActive={x === activeX && y === activeY}
            isPossibleMove={game.isPossibleMove(x, y)}
          />
        ));
      }
    }
    return spaces;
  }

  renderPieces() {
    const {game, onClick} = this.props;
    return game.pieces.getAllInGame().map(piece => cloneElement(getPiece(piece), {
      onClick,
    }));
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

function Space({x, y, onClick, isActive, isPossibleMove}) {
  return (
    <div
      onClick={e => onClick(x, y)}
      className={classNames(
        'space',
        {'space-dark': (x+y)%2},
        {'space-active': isActive},
        {'space-possible-move': isPossibleMove}
      )}
      style={{
        width: `${spaceSize}%`,
        height: `${spaceSize}%`,
        left: `${x*spaceSize}%`,
        top: `${y*spaceSize}%`,
      }}
    />
  );
}
