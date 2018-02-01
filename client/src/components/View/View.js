import React from 'react';
import { withRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import './View.css';

const View = props => {
  return (
    <div>
      <Navigation
        loggedIn={props.loggedIn}
        toggle={props.toggle}
        signout={props.signout}
        toggleDrawer={props.toggleDrawer}
        open={props.open}
        goHome={props.goHome}
        goUsers={props.goUsers}
        goProfile={props.goProfile}
      />
    </div>
  );
};

export default withRouter(View);
