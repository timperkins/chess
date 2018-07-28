import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board'; 
import {
  Rook,
  Bishop,
  Knight,
  King,
  Queen,
  Pawn,
  ROOK,
  KNIGHT,
  BISHOP,
  KING,
  QUEEN,
  PAWN,
  BLACK,
  WHITE,
  createPieces,
} from './models/Piece';
import './less/app.less';

const pieces = createPieces([
  {x: 0, y: 0, name: ROOK, color: WHITE},
  {x: 1, y: 0, name: KNIGHT, color: WHITE},
  {x: 2, y: 0, name: BISHOP, color: WHITE},
  {x: 3, y: 0, name: KING, color: WHITE},
  {x: 4, y: 0, name: QUEEN, color: WHITE},
  {x: 5, y: 0, name: BISHOP, color: WHITE},
  {x: 6, y: 0, name: KNIGHT, color: WHITE},
  {x: 7, y: 0, name: ROOK, color: WHITE},
  {x: 0, y: 1, name: PAWN, color: WHITE},
  {x: 1, y: 1, name: PAWN, color: WHITE},
  {x: 2, y: 1, name: PAWN, color: WHITE},
  {x: 3, y: 1, name: PAWN, color: WHITE},
  {x: 4, y: 1, name: PAWN, color: WHITE},
  {x: 5, y: 1, name: PAWN, color: WHITE},
  {x: 6, y: 1, name: PAWN, color: WHITE},
  {x: 7, y: 1, name: PAWN, color: WHITE},
  {x: 0, y: 6, name: PAWN, color: BLACK},
  {x: 1, y: 6, name: PAWN, color: BLACK},
  {x: 2, y: 6, name: PAWN, color: BLACK},
  {x: 3, y: 6, name: PAWN, color: BLACK},
  {x: 4, y: 6, name: PAWN, color: BLACK},
  {x: 5, y: 6, name: PAWN, color: BLACK},
  {x: 6, y: 6, name: PAWN, color: BLACK},
  {x: 7, y: 6, name: PAWN, color: BLACK},
  {x: 0, y: 7, name: ROOK, color: BLACK},
  {x: 1, y: 7, name: KNIGHT, color: BLACK},
  {x: 2, y: 7, name: BISHOP, color: BLACK},
  {x: 3, y: 7, name: KING, color: BLACK},
  {x: 4, y: 7, name: QUEEN, color: BLACK},
  {x: 5, y: 7, name: BISHOP, color: BLACK},
  {x: 6, y: 7, name: KNIGHT, color: BLACK},
  {x: 7, y: 7, name: ROOK, color: BLACK},
]);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Board pieces={pieces} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
