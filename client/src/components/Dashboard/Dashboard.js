import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Dashboard extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="Ely Alamillo"
          subtitle="Software Engineer"
          avatar="https://srkheadshotday.com/wp-content/uploads/Paolo_Cerruti_Headshot_16H5589_Crop32-760x507.jpg"
        />
        <CardMedia
          overlay={
            <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
          }
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIuXbqryk8aqUjByEMbosKWSHdm_V-cj8RfRGVXrBc_ilepXb"
            alt=""
          />
        </CardMedia>
        <CardTitle title="About Me" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
          interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          <FlatButton label="Edit Info" />
          {/* <FlatButton label="Action2" /> */}
        </CardActions>
      </Card>
    );
  }
}

export default Dashboard;
