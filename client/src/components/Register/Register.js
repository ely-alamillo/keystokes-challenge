import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <div style={styles.container}>
        <div>
          {/* <AppBar title="Register" /> */}
          <TextField
            hintText="Enter your First Name"
            floatingLabelText="First Name"
            onChange={(event, newValue) =>
              this.setState({ firstName: newValue })
            }
          />
          <br />
          <TextField
            hintText="Enter your Last Name"
            floatingLabelText="Last Name"
            onChange={(event, newValue) =>
              this.setState({ lastName: newValue })
            }
          />
          <br />
          <TextField
            hintText="Enter your Email"
            type="email"
            floatingLabelText="Email"
            onChange={(event, newValue) => this.setState({ email: newValue })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) =>
              this.setState({ password: newValue })
            }
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={styles}
            onClick={event => this.handleClick(event)}
          />
          <CardText>
            Already have an account? <Link to={'/'}>Log in</Link>
          </CardText>
        </div>
      </div>
    );
  }
}
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: { margin: 15 }
};
export default Register;
