import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import View from './components/View/View';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Users from './components/Users/User';
import UsersView from './components/UsersView/UsersView';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      open: false,
      userExpanded: false
    };
  }

  componentWillMount() {
    console.log('app will mount');
    if (sessionStorage.getItem('id')) {
      this.setState({ loggedIn: true });
    }
  }
  /**
   * View methods
   */
  toggle = () => {
    console.log('clicked');
    this.setState({ loggedIn: !this.state.loggedIn });
  };
  /**
   * Register Methods
   */
  register = (event, state) => {
    event.preventDefault();
    console.log('register', state);
    const { firstName, lastName, email, password } = state;
    const user = {
      firstName,
      lastName,
      email,
      password,
      profileImg: '/images/default.jpg'
    };
    axios
      .post('http://localhost:8081/api/register', user)
      .then(element => {
        const user = element.data.savedUser;
        console.log('register user:', user);
        this.setState({ loggedIn: true, currUser: user._id }, () => this.props.history.push('/dashboard'));
        sessionStorage.setItem('id', user._id);
      })
      .catch(err => {
        if (err.errorCode) {
          this.setState({ firebaseError: err.message });
        } else {
          this.setState({ customError: err.message });
        }
      });
  };
  /**
   * Login Methods
   */
  login = (event, { email, password }) => {
    console.log(email);
    console.log(password);
    event.preventDefault();
    axios
      .post('http://localhost:8081/api/login', { email, password })
      .then(element => {
        const user = element.data;
        if (user.errorCode) {
          return this.setState({ authError: user.message });
        }
        this.setState({ loggedIn: true, currUser: user._id }, () => {
          sessionStorage.setItem('id', user._id);
          this.props.history.push('/dashboard');
        });
      })
      .catch(err => {
        if (err.errorCode) {
          this.setState({ authError: err.message });
        } else {
          this.setState({ customError: err.message });
        }
      });
  };

  /**
   * Singout Method
   */

  signout = () => {
    axios
      .get('http://localhost:8081/api/signout')
      .then(() => {
        this.setState({ loggedIn: false, currUser: null }, this.props.history.push('/'));
        sessionStorage.removeItem('id');
      })
      .catch(err => {
        if (err.errorCode) {
          this.setState({ firebaseError: err.message });
        } else {
          this.setState({ customError: err.message });
        }
      });
  };
  /**
   * Drawer Actions
   */
  toggleDrawer = () => {
    console.log('clicked');
    this.setState({
      open: !this.state.open
    });
  };

  goHome = () => {
    this.props.history.push('/');
    setTimeout(this.toggleDrawer, 500);
  };
  goUsers = () => {
    this.props.history.push('/users');
    setTimeout(this.toggleDrawer, 500);
  };
  goProfile = () => {
    console.log('clicked');
    this.props.history.push('/dashboard');
    setTimeout(this.toggleDrawer, 500);
  };

  render() {
    console.log(this.context);
    return (
      <div>
        <View
          loggedIn={this.state.loggedIn}
          signout={this.signout}
          open={this.state.open}
          toggle={this.toggle}
          toggleDrawer={this.toggleDrawer}
          goHome={this.goHome}
          goUsers={this.goUsers}
          goProfile={this.goProfile}
        />
        <Route
          path="/"
          exact
          component={() => (
            <Login login={this.login} authError={this.state.authError} customError={this.state.customError} />
          )}
        />
        <Route path="/register" exact component={() => <Register register={this.register} />} />
        <Route
          path="/dashboard"
          exact
          component={() => <Dashboard id={this.state.currUser} loggedIn={this.state.loggedIn} />}
        />
        <Route path="/users" exact component={() => <UsersView />} />
      </div>
    );
  }
}

export default withRouter(App);
