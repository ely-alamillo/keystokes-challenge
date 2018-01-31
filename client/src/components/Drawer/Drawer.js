import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const DrawerLeft = props => {
  return (
    <div>
      {/* <RaisedButton label="Open Drawer" /> */}
      <Drawer
        docked={false}
        width={200}
        open={props.open}
        onClick={props.onToggleDrawer}
      >
        <AppBar
          title="Menu"
          onClick={props.onToggleDrawer}
          iconElementLeft={
            <IconButton>
              <NavigationClose />
            </IconButton>
          }
        />
        <MenuItem>All Users</MenuItem>
        <MenuItem>My Profile</MenuItem>
      </Drawer>
    </div>
  );
};

export default DrawerLeft;
