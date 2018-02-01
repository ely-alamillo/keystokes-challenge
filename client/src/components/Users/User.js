import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

const Users = props => {
  return (
    <Card>
      <CardHeader
        title={`${props.firstName} ${props.lastName}`}
        subtitle={props.email}
        avatar="https://srkheadshotday.com/wp-content/uploads/Paolo_Cerruti_Headshot_16H5589_Crop32-760x507.jpg"
      />
      <CardTitle title="About Me" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.
        Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui
        mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  );
};

export default Users;
