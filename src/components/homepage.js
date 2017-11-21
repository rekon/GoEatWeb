import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import quotesFn from '../utils/quotes';

class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 go-eat-quote'><br/>Let us first calculate your <a href="https://en.wikipedia.org/wiki/Basal_metabolic_rate" title="Basal metabolic rate">basal metabolic rate</a> (BMR) and daily kilocalorie requirements.</div>
        </div>
        <div className='row' style={{ height: '100%' }}>
          <div className='col-sm-3 col-md-4'></div>
          <div className='col-xs-12 col-sm-6 col-md-4'>
            <Paper zDepth={2} style={{ margin: '20px', padding: '20px' }}>
              <TextField
                hintText="160"
                floatingLabelText="Height (cms)"
                type='number'
              />
              <br />
              <TextField
                hintText="70"
                floatingLabelText="Weight (kgs)"
                type='number'
              />
              <br />
              <TextField
                hintText="18"
                floatingLabelText="Age"
                type='number'
              />
              <br />

              <div>Select Gender: </div>
              <br />
              <RadioButtonGroup name="gender" defaultSelected="male">
                <RadioButton
                  value="male"
                  label="Male"
                  style={{ color: '#C62828', padding: '5px' }}
                />
                <RadioButton
                  value="female"
                  label="Female"
                  style={{ color: '#C62828', padding: '5px' }}
                />
              </RadioButtonGroup>
              <div><center><RaisedButton label="Calculate" primary={true} /></center></div>
            </Paper>
          </div>
          <div className='col-sm-3 col-md-4'></div>
        </div>
        <div className='row'>
          <div className='col-xs-12 go-eat-quote'>
            <br />
            <br />
            {quotesFn()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
