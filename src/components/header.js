import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { bmrMultiplicationFactor } from '../constants'


const BmrOptions = (props) => (
  <DropDownMenu
    value={props.bmrDropdownValue}
    onChange={props.onBmrChange}
    labelStyle={{ fontSize: '20px', color: 'white' }}
  >
    <MenuItem value={0} label={props.bmrValueDisplay} primaryText="No Exercise" />
    <MenuItem value={1} label={props.bmrValueDisplay} primaryText="Very Light Exercise" />
    <MenuItem value={2} label={props.bmrValueDisplay} primaryText="Light Exercise" />
    <MenuItem value={3} label={props.bmrValueDisplay} primaryText="Moderate Exercise" />
    <MenuItem value={4} label={props.bmrValueDisplay} primaryText="Heavy Exercise" />
    <MenuItem value={5} label={props.bmrValueDisplay} primaryText="Very Heavy Exercise" />
  </DropDownMenu>

);
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      bmrDropdownValue: 0
    };
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.onBmrChange = this.onBmrChange.bind(this)
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  onBmrChange(event, index, value) {
    let factor = bmrMultiplicationFactor(value)
    this.setState({
      bmrDropdownValue: value
    })
    this.props.actions.modifyBmr(factor * this.props.BmrReducer.bmrValue)
  }

  render() {
    let { bmrValueModified, isInitialized } = this.props.BmrReducer,
      bmrValueRounded = Math.ceil(bmrValueModified)
    console.log(this.props.BmrReducer)
    return (
      <div>
        <AppBar
          title={'GoEat'}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={isInitialized ?
            <BmrOptions {...this.props}
              bmrDropdownValue={this.state.bmrDropdownValue}
              onBmrChange={this.onBmrChange}
              bmrValueDisplay={bmrValueRounded + ' kCal'} />
            : null}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}>
          <MenuItem onClick={this.handleClose}> <Link to='/' ><div className='left-side-drawer-link'> Calculate Calories</div> </Link> </MenuItem>
          <MenuItem onClick={this.handleClose}> <Link to='/bulking'><div className='left-side-drawer-link'> Checkout diet (Bulking)</div> </Link> </MenuItem>
          <MenuItem onClick={this.handleClose}> <Link to='/cutting'><div className='left-side-drawer-link'> Checkout diet (Cutting)</div> </Link> </MenuItem>
          <MenuItem onClick={this.handleClose}>Expert Opinion</MenuItem>
          <MenuItem onClick={this.handleClose}>Peer views</MenuItem>
        </Drawer>
        {this.props.children}
      </div>
    )
  }
}

export default Header
