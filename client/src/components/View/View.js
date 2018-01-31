import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import './View.css';

class View extends Component {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}

export default View;
