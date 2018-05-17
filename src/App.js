import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Body from './components/body';
import Header from './components/header'
// eslint-disable-next-line
import BootstrapCSS from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import * as actionCreators from './actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

function mapStateToProps(state) {
  return { BmrReducer: state.BmrReducer }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <Header
            {...this.props}>
            <Body
              {...this.props} />
          </Header>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
