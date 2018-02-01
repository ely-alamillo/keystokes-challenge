import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      username: ''
    };
  }
  render() {
    return (
      <div className="register-container">
        <div>
          {/* <AppBar title="Register" /> */}
          <TextField
            hintText="Enter your First Name"
            floatingLabelText="First Name"
            value={this.state.firstName}
            onChange={(event, newValue) => this.setState({ firstName: newValue })}
          />
          <br />
          <TextField
            hintText="Enter your Last Name"
            floatingLabelText="Last Name"
            value={this.state.lastName}
            onChange={(event, newValue) => this.setState({ lastName: newValue })}
          />
          <br />
          <TextField
            hintText="Enter your Email"
            type="email"
            floatingLabelText="Email"
            value={this.state.email}
            onChange={(event, newValue) => this.setState({ email: newValue })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            value={this.state.password}
            onChange={(event, newValue) => this.setState({ password: newValue })}
          />
          <br />
          <div className="register-button">
            <RaisedButton label="Submit" primary={true} onClick={event => this.props.register(event, this.state)} />
          </div>
          <CardText>
            Already have an account? <Link to={'/'}>Log in</Link>
          </CardText>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
