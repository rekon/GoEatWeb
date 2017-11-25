import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import quotesFn from '../utils/quotes';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gender: 'male',
      height: 0,
      weight: 0,
      age: 0,
      showIncompleteWarning: false
    }
    this.onDetailChange = this.onDetailChange.bind(this)
  }

  onDetailChange(detail, value) {
    let newState = this.state
    newState[detail] = (detail === 'gender' ? value : (value === '' ? 0 : parseInt(value, 10)))
    this.setState(newState)
  }

  onCalculate() {
    let { gender, age, height, weight } = this.state,
      bmr = 0
    if (age && height && weight) {
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161
      }
      this.props.actions.initializeBmr( bmr )
    } else {
      this.setState({
        showIncompleteWarning: true
      })
    }
  }

  handleRequestClose = () => {
    this.setState({
      showIncompleteWarning: false
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 go-eat-quote'><br />Let us first calculate your <a href="https://en.wikipedia.org/wiki/Basal_metabolic_rate" title="Basal metabolic rate">basal metabolic rate</a> (BMR) and daily kilocalorie requirements.</div>
        </div>
        <div className='row' style={{ height: '100%' }}>
          <div className='col-sm-3 col-md-4'></div>
          <div className='col-xs-12 col-sm-6 col-md-4'>
            <Paper zDepth={2} style={{ margin: '20px', padding: '20px' }}>
              <TextField
                hintText="160"
                floatingLabelText="Height (cms)"
                type='number'
                onChange={(e, value) => { this.onDetailChange('height', value) }}
              />
              <br />
              <TextField
                hintText="70"
                floatingLabelText="Weight (kgs)"
                type='number'
                onChange={(e, value) => { this.onDetailChange('weight', value) }}
              />
              <br />
              <TextField
                hintText="18"
                floatingLabelText="Age"
                type='number'
                onChange={(e, value) => { this.onDetailChange('age', value) }}
              />
              <br />
              <br />
              <div>Select Gender: </div>
              <br />
              <RadioButtonGroup
                name="gender"
                defaultSelected="male"
                onChange={(e, value) => { this.onDetailChange('gender', value) }}>
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
              <div>
                <center>
                  <RaisedButton
                    label="Calculate"
                    primary={true}
                    onClick={this.onCalculate.bind(this)} />
                </center>
              </div>
            </Paper>
            <Snackbar
              open={this.state.showIncompleteWarning}
              message="Please fill all the details"
              autoHideDuration={2000}
              onRequestClose={this.handleRequestClose}
            />
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
