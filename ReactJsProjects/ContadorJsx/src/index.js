import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class DivRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }
  onClickAumentar(){
    this.setState({
      contador : this.state.contador +1
    });
  }
  render() {
    return(
      <div>
        <h1>{this.state.contador}</h1>
        <br/><br/>
        <button onClick={()=>this.onClickAumentar()}>Aumentar</button>
      </div>
    )
    }
}

const domContainer = document.querySelector('#root22');
ReactDOM.render(React.createElement(DivRoot), domContainer);