import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import DrawerLeft from '../Drawer/Drawer';

const AppBarTop = props => {
  return (
    <div>
      <AppBar
        title="Keystoke Users"
        onTitleClick={props.toggleDrawer}
        onLeftIconButtonClick={props.toggleDrawer}
        onRightIconButtonClick={props.signout}
        iconElementRight={props.loggedIn ? <FlatButton label="Logout" /> : <FlatButton label="Login" />}
      />
      <DrawerLeft
        open={props.open}
        toggleDrawer={props.toggleDrawer}
        loggedIn={props.loggedIn}
        goHome={props.goHome}
        goUsers={props.goUsers}
        goProfile={props.goProfile}
      />
    </div>
  );
};

export default AppBarTop;
