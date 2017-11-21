import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
  constructor( props ) {
    super( props );
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind( this );
    this.handleClose = this.handleClose.bind( this )
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <AppBar
          title={'GoEat'}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={( open ) => this.setState({ open })}>
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
