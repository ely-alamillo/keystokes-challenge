import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { getFullname } from '../../helpers';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      imageModalOpen: false
    };
  }
  componentDidMount() {
    const id = sessionStorage.getItem('id');
    const self = this;
    axios
      .post('https://keystokes-ely.herokuapp.com/api/find', { id })
      .then(element => {
        const { firstName, lastName, description } = element.data;
        const id = element.data._id;
        const fullname = getFullname(firstName, lastName);
        self.setState({
          firstName,
          lastName,
          fullname,
          id,
          description
        });
      })
      .catch(err => {
        console.log('error on update');
      });
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };
  imageOpenModal = () => {
    this.setState({ imageModalOpen: true });
  };
  imageCloseModal = () => {
    this.setState({ imageModalOpen: false });
  };
  alertUpdata = () => {
    this.closeModal();
    alert('Feature Coming soon');
  };
  updateUser = event => {
    event.preventDefault();
    let { newLastName, newFirstName, newDescription, id } = this.state;
    newFirstName = newFirstName ? newFirstName : this.state.firstName;
    newLastName = newLastName ? newLastName : this.state.lastName;
    newDescription = newDescription ? newDescription : this.state.description;
    const updates = { firstName: newFirstName, lastName: newLastName, description: newDescription, id };
    axios
      .post('https://keystokes-ely.herokuapp.com/api/update', updates)
      .then(element => {
        const { firstName, lastName, description } = element.data.updated;
        const fullname = getFullname(firstName, lastName);
        this.setState({ firstName, lastName, description, fullname }, () => {
          this.closeModal();
        });
      })
      .catch(err => {
        console.log('error on update');
      });
  };

  uploadFile = () => {};

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.closeModal} />,
      <FlatButton label="Submit" primary={true} disabled={false} onClick={this.updateUser} />
    ];
    const imageActions = [
      <FlatButton label="Cancel" primary={true} onClick={this.imageCloseModal} />,
      <FlatButton label="Submit" primary={true} disabled={true} onClick={this.updateUser} />
    ];

    return (
      <div className="dashboard-container">
        {this.props.loggedIn ? (
          <Card>
            <CardHeader
              title={this.state.fullname}
              subtitle="Professin"
              avatar="https://srkheadshotday.com/wp-content/uploads/Paolo_Cerruti_Headshot_16H5589_Crop32-760x507.jpg"
            />
            <CardMedia overlay={<CardTitle title="Some user selected Image" subtitle="Some subtitle" />}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIuXbqryk8aqUjByEMbosKWSHdm_V-cj8RfRGVXrBc_ilepXb"
                className="city-image"
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
              <RaisedButton label="Upload Image" onClick={this.imageOpenModal} />
              <Dialog title="Edit Profile" actions={actions} modal={true} open={this.state.modalOpen}>
                <div>
                  <TextField
                    className="input-form"
                    hintText="Enter your First Name"
                    floatingLabelText="First Name"
                    // value={this.state.firstName}
                    onChange={event => this.setState({ newFirstName: event.target.value })}
                  />
                  <br />
                  <TextField
                    className="input-form"
                    hintText="Enter your Last Name"
                    floatingLabelText="Last Name"
                    //value={this.state.lastName}
                    onChange={event => this.setState({ newLastName: event.target.value })}
                  />
                  <br />
                  <TextField
                    className="input-form"
                    hintText="Enter your Description"
                    floatingLabelText="Description"
                    //value={this.state.description}
                    onChange={event => this.setState({ newDescription: event.target.value })}
                  />
                  <br />
                </div>
              </Dialog>
              <Dialog title="Upload Image" actions={imageActions} modal={true} open={this.state.imageModalOpen}>
                <div>
                  <br />
                  <form encType="multipart/form-data" onSubmit={this.uploadFile}>
                    {/* <label>Upload Image</label> */}
                    Upload Profile Image:
                    <input type="file" name="imgUploader" style={{ marginLeft: 15 }} />
                    <button type="submit">Upload File</button>
                  </form>
                </div>
              </Dialog>
            </CardActions>
          </Card>
        ) : (
          <div>
            <h1>Please Login to access this page</h1>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Dashboard);
