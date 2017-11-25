import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './homepage'
import Bulking from './bulking'
import Cutting from './cutting'

class Body extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'><Homepage {...this.props} /></Route>
        <Route exact path='/bulking'><Bulking {...this.props} /></Route>
        <Route exact path='/cutting'><Cutting {...this.props} /></Route>
      </Switch>
    )
  }
}
export default Body
