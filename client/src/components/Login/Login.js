import React, { Component } from 'react';
import { CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <div className="login-container">
        <div>
          {/* <AppBar title="Register" /> */}
          <TextField
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={(event, newValue) => this.setState({ email: newValue })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) => this.setState({ password: newValue })}
          />
          <br />
          {this.props.authError ? <p>user or password do not match</p> : null}
          {this.props.customError ? <p>user or password do not match</p> : null}

          <br />
          <div className="login-button">
            <RaisedButton
              label="Submit"
              primary={true}
              className="raised-button"
              onClick={event => this.props.login(event, this.state)}
            />
          </div>
          <CardText>
            Don't have an account? <Link to={'/register'}>Register</Link>
          </CardText>
        </div>
      </div>
    );
  }
}

export default Login;
