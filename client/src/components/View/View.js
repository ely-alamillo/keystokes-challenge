import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import './View.css';

const View = props => {
  return (
    <div>
      <Navigation
        loggedIn={props.loggedIn}
        toggle={props.toggle}
        toggleDrawer={props.toggleDrawer}
        open={props.open}
      />
    </div>
  );
};

export default View;
