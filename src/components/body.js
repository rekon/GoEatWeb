import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './homepage'
import Bulking from './bulking'
import Cutting from './cutting'

class Body extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/bulking' component={Bulking}/>
        <Route exact path='/cutting' component={Cutting}/>
      </Switch>
    )
  }
}
export default Body
