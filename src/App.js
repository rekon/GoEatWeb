import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Body from './components/body';
import Header from './components/header'
// eslint-disable-next-line
import BootstrapCSS from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header>
            <Body />
          </Header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
