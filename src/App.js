import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';
import Board from './components/Board';
import Game from './models/Game';
import {BLACK, WHITE} from './models/Piece';
import './less/app.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.game = new Game();
    this.game.init();
  }

  @autobind
  onClick(x, y) {
    this.game.selectCoordinates(x, y);
    this.forceUpdate();
  }

  render() {
    return (
      <div className="app">
        <Board
          game={this.game}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
