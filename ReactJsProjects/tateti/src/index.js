import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      SigueX: true
    };
  }

  crearCuadrado(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.cambiarEstado(i)} />;
  }
  
  cambiarEstado(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.SigueX ? 'X' : 'O';
    this.setState({squares: squares,SigueX: !this.state.SigueX});
  }

  render() {
    const siguienteJugador = 'Siguiente: ' + (this.state.SigueX ? 'X' : 'O');
    return (
      <div>
        <div className="status">{siguienteJugador}</div>
        <div className="board-row">
          {this.crearCuadrado(0)}
          {this.crearCuadrado(1)}
          {this.crearCuadrado(2)}
        </div>
        <div className="board-row">
          {this.crearCuadrado(3)}
          {this.crearCuadrado(4)}
          {this.crearCuadrado(5)}
        </div>
        <div className="board-row">
          {this.crearCuadrado(6)}
          {this.crearCuadrado(7)}
          {this.crearCuadrado(8)}
        </div>
      </div>
    );
  }
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

ReactDOM.render(
  <div>
    <Board/>
  </div>,
  document.getElementById('root')
);

