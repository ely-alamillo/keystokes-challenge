import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  componentDidMount() {
    console.log('didMount');
    const id = this.props.id;
    axios
      .post('http://localhost:8081/api/find', { id })
      .then(element => {
        const user = element.data;
        const firstName = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1);
        const lastName = user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);
        const fullname = `${firstName} ${lastName}`;
        this.setState({
          firstName,
          lastName,
          fullname,
          id: user._id,
          description: user.description
        });
      })
      .catch(err => {});
  }

  openModal = () => {
    console.log('open!');
    this.setState({ modalOpen: true });
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };
  alertUpdata = () => {
    this.closeModal();
    alert('Feature Coming soon');
  };
  updateUser = () => {
    let { newLastName, newFirstName, newDescription } = this.state;
    newFirstName = newFirstName ? newFirstName : this.state.firstName;
    newLastName = newLastName ? newLastName : this.state.lastName;
    newDescription = newDescription ? newDescription : this.state.description;
    const updates = { firstName: newFirstName, lastName: newLastName, description: newDescription };
    axios
      .post('http://localhost:8081/api/update', updates)
      .then(element => {
        console.log(element.data);
        this.setState({ updated: true });
      })
      .catch(err => {});
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.closeModal} />,
      <FlatButton label="Submit" primary={true} disabled={false} onClick={this.alertUpdata} />
    ];

    return (
      <Card>
        <CardHeader
          title={this.state.fullname}
          subtitle="Software Engineer"
          avatar="https://srkheadshotday.com/wp-content/uploads/Paolo_Cerruti_Headshot_16H5589_Crop32-760x507.jpg"
        />
        <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIuXbqryk8aqUjByEMbosKWSHdm_V-cj8RfRGVXrBc_ilepXb"
            alt=""
          />
        </CardMedia>
        <CardTitle title="About Me" />
        <CardText>{this.state.description ? this.state.description : 'Please edit your description'}</CardText>
        <CardActions
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          {/* <FlatButton label="Edit Info" /> */}
          {/* <FlatButton label="Action2" /> */}
          <RaisedButton label="Edit Profile" onClick={this.openModal} />
          <Dialog title="Edit Profile" actions={actions} modal={true} open={this.state.modalOpen}>
            <div>
              <TextField
                hintText="Enter your First Name"
                floatingLabelText="First Name"
                // value={this.state.firstName}
                onChange={event => this.setState({ newFirstName: event.target.value })}
              />
              <br />
              <TextField
                hintText="Enter your Last Name"
                floatingLabelText="Last Name"
                //value={this.state.lastName}
                onChange={event => this.setState({ newLastName: event.target.value })}
              />
              <br />
              <TextField
                hintText="Enter your Description"
                floatingLabelText="Description"
                //value={this.state.description}
                onChange={event => this.setState({ newDescription: event.target.value })}
              />
              <br />
            </div>
          </Dialog>
        </CardActions>
      </Card>
    );
  }
}

export default withRouter(Dashboard);
