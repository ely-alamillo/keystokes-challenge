import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import View from './components/View/View';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <View />
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </MuiThemeProvider>
    );
  }
}

export default App;
