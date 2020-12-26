class MensajeComponente extends React.Component {
    render() {
        return (
            <div>
                <hr />
                <h1>POLO</h1>
                <hr />
                <span>
                    <div>
                        HOLA
                        <div>
                            MUNDO
                        </div>
                    </div>
                </span>
            </div>
        );
    }
}

function MensajeFuncion() {
    return (
        <div>
            <hr />
            <h1>POLO</h1>
            <hr />
            <span>
                <div>
                    HOLA
                        <div>
                        MUNDO
                        </div>
                </div>
            </span>
        </div>
    );
}

ReactDOM.render(<MensajeFuncion />, document.getElementById('root'));