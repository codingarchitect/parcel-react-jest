import * as React       from "react";
import { Component }    from 'react';

// Importing some assets
import './App.css';
import logo from './logo.svg';
import page1Plugins from './pages/page1/**/*.component.js';
import page2Plugins from './pages/page2/**/*.component.js';

class App extends Component {
    constructor() {
        super();
        this.loadComponentMeta = this.loadComponentMeta.bind(this);
        this.state = {
            componentMeta: {},
        };
    }
    loadComponentMeta(page) {
        console.info(`this is the loaded component meta for '${page}' components`);
        page === 'page1' ?
            this.setState({ componentMeta: page1Plugins }) :
            this.setState({ componentMeta: page2Plugins });
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
                <button onClick={() => { this.loadComponentMeta('page1') }}>Load Page 1 Component Metadata to TextArea</button>
                <button onClick={() => { this.loadComponentMeta('page2') }}>Load Page 2 Component Metadata to TextArea</button>
                <br />
                <textarea rows="10" cols="80" readOnly
                    value={ this.state && this.state.componentMeta ? JSON.stringify(this.state.componentMeta, undefined, 2) : '{}' } />
            </div>
        );
    }
}

export default App;