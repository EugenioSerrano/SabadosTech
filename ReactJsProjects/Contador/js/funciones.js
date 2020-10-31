class DivRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  render() {
        var contador = this.state.contador;
      //  var label = React.createElement("label",{key:"label"},contador);
        var label = <label>{contador}</label>
        var button = React.createElement("button",{key:"button", onClick: () => this.setState({contador:contador+1})},"Aumentar");
        var br = React.createElement("br",{key:"br"});
        var div = React.createElement("div",null,[label,br,button]);
        return div;
    }
}

const domContainer = document.querySelector('#rootDiv');
ReactDOM.render(React.createElement(DivRoot), domContainer);


