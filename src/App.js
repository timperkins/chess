import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import Game from './models/Game';
import './less/app.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.game = new Game();
    this.game.init();
  }

  render() {
    return (
      <div className="app">
        <Board pieces={this.game.pieces.getAll()} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
