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

  botonReset(){
    if(obtenerGanador(this.state.squares)){
      return <BotonReset onClick={() => this.reiniciarJuego()} />;
    }
  }
  
  reiniciarJuego(){
    this.setState({
      squares: Array(9).fill(null),
      SigueX: true
    })
  }

  cambiarEstado(i) {
    const squares = this.state.squares.slice();    
    if (obtenerGanador(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.SigueX ? 'X' : 'O';
    this.setState({squares: squares,SigueX: !this.state.SigueX});
  }

  render() {
    const winner = obtenerGanador(this.state.squares);

    let siguienteJugador;

    if (winner) {
      siguienteJugador = 'Ganador: ' + winner;
    } else {
      siguienteJugador = 'Siguiente: ' + (this.state.SigueX ? 'X' : 'O');
    }

    return (
      <div className="container">
        <div className="status display-4">{siguienteJugador}</div>
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
        <br/>
        {this.botonReset()}
      </div>
    );
  }
}

function Square(props) {
  
  let clases = 'square';

  if(props.value==="X"){
   clases += ' btn-danger';
  }
  if(props.value==="O"){
   clases += ' btn-primary';
  }

  return (
    <button className={clases} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function BotonReset(props) {
  return (
    <button className="btn btn-primary w-100" onClick={props.onClick}>
      Reiniciar
    </button>
  );
}

ReactDOM.render(
  <div>
    <Board/>
  </div>,
  document.getElementById('root')
);

function obtenerGanador(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}










/*
  verificarResultado(squares){
    var ganador = this.state.SigueX ? 'X' : 'O';

    for(var x = 0; x<9 ; x=x+3){
      var sumaPuntos = 0;
      for(var y = 0; y<3; y++){

        if(this.state.SigueX){
          if(squares[x+y] === 'X'){
            sumaPuntos++;
          }
        }else{
          if(squares[x+y] === 'O'){
            sumaPuntos++;
          }
        }
      }
      if(sumaPuntos===3){
        alert('GANO ' + ganador);
        return;
      }
    }

    for(var x2 = 0; x2<3 ; x2++){
      var sumaPuntos2 = 0;
      for(var y2 = 0; y2<9; y2=y2+3){
        if(this.state.SigueX){
          if(squares[x2+y2] === 'X'){
            sumaPuntos2++;
          }
        }else{
          if(squares[x2+y2] === 'O'){
            sumaPuntos2++;
          }
        }
      }
      if(sumaPuntos2===3){
        alert('GANO ' + ganador);
        return;
      }
    }

    if(this.state.SigueX){
      if(squares[0]==='X' && squares[4] === 'X' && squares[8] === 'X'){
        alert('GANO ' + ganador);
        return;
      }
      
      if(squares[2]==='X' && squares[4] === 'X' && squares[6] === 'X'){
        alert('GANO ' + ganador);
        return;
      }
    }else{
      if(squares[0]==='O' && squares[4] === 'O' && squares[8] === 'O'){
        alert('GANO ' + ganador);
        return;
      }
      
      if(squares[2]==='O' && squares[4] === 'O' && squares[6] === 'O'){
        alert('GANO ' + ganador);
        return;
      }
    }

  }
*/