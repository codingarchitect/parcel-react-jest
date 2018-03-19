import * as React       from "react";
import { Component }    from 'react';

// Importing some assets
import './App.css';
import logo from './logo.svg';

class App extends Component {
    constructor() {
        super();
        this.loadComponentMeta = this.loadComponentMeta.bind(this);
        this.state = {
            componentMeta: {},
        };
    }
    loadComponentMeta(page) {
        console.info(`loading component meta for ${page}`)
        this.setState({ componentMeta: require(`./pages/${page}/**/*.component.js`) });
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React + Jest - Powered by parcel!</h2>
                </div>

                <p className="App-intro">
                   Hello World!
                </p>
                <button onClick={() => { this.loadComponentMeta('page1') }}>Load Page 1 Plugins</button>
                <button onClick={() => { this.loadComponentMeta('page2') }}>Load Page 2 Plugins</button>
                <br />
                <textarea rows="10" cols="80" readOnly
                    value={ this.state && this.state.componentMeta ? JSON.stringify(this.state.componentMeta, undefined, 2) : '{}' } />
            </div>
        );
    }
}

export default App;