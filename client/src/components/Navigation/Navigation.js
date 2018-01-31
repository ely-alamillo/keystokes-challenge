import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DrawerLeft from '../Drawer/Drawer';

export default class AppBarTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  //Toggle function (open/close Drawer)
  toggleDrawer() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          onClick={this.toggleDrawer.bind(this)}
          iconElementRight={<FlatButton label="Login" />}
        />
        <DrawerLeft
          open={this.state.open}
          onToggleDrawer={this.toggleDrawer.bind(this)}
        />
      </div>
    );
  }
}
