import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import View from './components/View/View';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      open: false
    };
  }

  toggle = () => {
    console.log('clicked');
    this.setState({ loggedIn: !this.state.loggedIn });
  };

  toggleDrawer = () => {
    console.log('clicked');
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <View
            loggedIn={this.state.loggedIn}
            open={this.state.open}
            toggle={this.toggle}
            toggleDrawer={this.toggleDrawer}
          />
          <Route
            path="/"
            exact
            component={() => <Dashboard test="thisIsATest" />}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
