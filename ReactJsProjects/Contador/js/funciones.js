class DivRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  render() {

        var contador = this.state.contador;
        return(
          <div>
          <label>{contador}</label>
          <br/>
          <button onClick={()=>this.setState({contador:contador+1})}>Aumentar</button>
        </div>
        );
    }
}

const domContainer = document.querySelector('#rootDiv');
ReactDOM.render(React.createElement(DivRoot), domContainer);


